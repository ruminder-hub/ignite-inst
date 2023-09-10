import axios from 'axios';
import React, {useState} from 'react';
import { APP_URL_CONFIG } from '../../App.Urls';
import {useInput} from '../../custom_hooks/form_hooks';
import { Navigate, createSearchParams, redirect, useNavigate } from 'react-router-dom';

export const ResultForm = (setResultState: any) => {
    const [showLoading, setShowLoading] = useState(false);
    let navigate = useNavigate();

    const resetForm = () => {
        setShowLoading(false);
        resetRegistrationNumber();
        resetRollNumber();
    }
    
    const onSubmit = async (e: any) => {
        e.preventDefault();
        setShowLoading(true)
    
        await axios
        .get(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.BACKEND_VERIFY_RESULTS + registrationNumber + "?rollNo=" + rollNumber,
        {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
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

    const { value:registrationNumber, bind:bindRegistrationNumber, reset:resetRegistrationNumber } = useInput('');
    const { value:rollNumber, bind:bindRollNumber, reset:resetRollNumber } = useInput('');
    
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
                               <input className="form-control" type="number" name="registrationNumber" {...bindRegistrationNumber} placeholder="Registration Number" required/>
                               <div className="valid-feedback">Username field is valid!</div>
                               <div className="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="number" name="rollNumber" {...bindRollNumber} placeholder="Roll Number" required/>
                                 <div className="valid-feedback">Email field is valid!</div>
                                 <div className="invalid-feedback">Email field cannot be blank!</div>
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