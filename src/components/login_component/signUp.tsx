import axios from 'axios';
import React, {useState} from 'react';
import { APP_URL_CONFIG } from '../../App.Urls';
import {useInput} from '../../custom_hooks/form_hooks';
import { useNavigate } from 'react-router-dom';

export const LoginForm = (setResultState: any) => {
    const [showLoading, setShowLoading] = useState(false);

    const { value:username, bind:bindUserName, reset:resetUsername } = useInput('');
    const { value:password, bind:bindPassword, reset:resetPassword } = useInput('');
    let navigate = useNavigate();

    const resetForm = () => {
        setShowLoading(false);
        resetUsername();
        resetPassword();
    }
    
    const onSubmit = async (e: any) => {
        e.preventDefault();
        setShowLoading(true)
    
        await axios
        .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.BACKEND_REGISTER_USER,
        {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            username: username,
            password: password
        })
        .then((res) => {
            console.log(res)
            if (res.status === 200) {
                navigate("/result", {state: {input: res.data}})
            } else { 
                alert("Data not found")
                resetForm();
            }
        })
        .catch(err => {
            let message = "Internal server error occurred, Please try again";
            if (err.response.status == 404) {
                message = "Student with provided details not found, Please try again";
            }
            alert(message);
            resetForm();
        });
        
    };
    
    return (
        <>
        <div className="form-body" >
            
        <div className="row">
            <div className="form-holder" >
                <div className="form-content">
                    <div className="form-items">
                        <h3>Verify results</h3>
                        <p>Fill the student details.</p>
                        <form className="requires-validation" onSubmit={onSubmit}>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="username" {...bindUserName} placeholder="UserName" required/>
                               <div className="valid-feedback">Username field is valid!</div>
                               <div className="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="text" name="password" {...bindPassword} placeholder="Password" required/>
                                 <div className="invalid-feedback">Password field cannot be blank!</div>
                            </div>
                  

                            {!showLoading && <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            }
                            { showLoading && 
                                <div className="form-button mt-3">
                                    <button className="btn btn-primary">
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}