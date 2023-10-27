import axios from 'axios';
import {useRef, useState} from 'react';
import { APP_URL_CONFIG } from '../../App.Urls';
import {useInput} from '../../custom_hooks/form_hooks';
import { useNavigate } from 'react-router-dom';
import { HomeNavbar } from '../navbar_component/navbar';
import { Col, Form, Row } from 'react-bootstrap';
import DynamicInputGenerator from './dynamicInput';
import { SubjectEntry } from '../../interfaces/subject_input_interface';

interface subjectForm {
    type: "text",
    id: 1,
    value: ""
}

export const StudentCreationForm = (setResultState: any) => {
    const [showLoading, setShowLoading] = useState(false);

    const subjectInputField: any[] = [
        
    ];
    const [subjectValues, setSubjectValues] = useState(subjectInputField);
    const [fetchedData, setFetchedData] = useState<SubjectEntry[]>([]);

    const { value:regId, bind:bindRegId, reset:resetRegId } = useInput('');
    const { value:rollNo, bind:bindRollNo, reset:resetRollNo } = useInput('');
    const { value:studentName, bind:bindStudentName, reset:resetStudentName } = useInput('');
    const { value:motherName, bind:bindMotherName, reset:resetMotherName } = useInput('');
    const { value:fatherName, bind:bindFatherName, reset:resetFatherName } = useInput('');
    const { value:courseName, bind:bindCourseName, reset:resetCourseName } = useInput('');
    const { value:courseDurationMonths, bind:bindCourseDurationMonths, reset:resetCourseDurationMonths } = useInput('');
    const { value:courseDurationHours, bind:bindCourseDurationHours, reset:resetCourseDurationHours } = useInput('');
    const { value:status, bind:bindStatus, reset:resetStatus } = useInput('');
    const { value:dateOfIssue, bind:bindDateOfIssue, reset:resetDateOfIssue } = useInput('');
    const { value:noOfSubjects, bind:bindNoOfSubjects, reset:resetNoOfSubjects } = useInput('');
    let navigate = useNavigate();

    const resetForm = () => {
        setShowLoading(false);
        
    }

    const handleAddField = (e: any) => {
        e.preventDefault();
        const subjectCount = noOfSubjects;
        for (let i = 1; i <= subjectCount; i++) {
            setSubjectValues(s => {
                return [
                  ...s,
                  {
                    type: "text",
                    value: "",
                    id: i
                  }
                ];
              });
        }
        
      };

    const handleDataFetch = (data: SubjectEntry[]) => {
        setFetchedData(data);
    };
    
    const onSubmit = async (e: any) => {
        e.preventDefault();
        setShowLoading(true)
        console.log(fetchedData)
    
        // await axios
        // .post(APP_URL_CONFIG.BASE_URL + APP_URL_CONFIG.BACKEND_SAVE_STUDENT_RECORD,
        // {
        //     // headers: {
        //     //     'Access-Control-Allow-Origin': '*'
        //     // },
        //     regId: regId,
        //     rollNo: rollNo,
        //     studentName: studentName,
        //     motherName: motherName,
        //     fatherName: fatherName,
        //     courseName: courseName,
        //     courseDurationMonths: courseDurationMonths,
        //     courseDurationHours: courseDurationHours,
        //     status: status,
        //     dateOfIssue: dateOfIssue,
        //     subjects: fetchedData
        // })
        // .then((res) => {
        //     console.log(res)
        //     if (res.status === 200) {
        //         console.log(res);
        //         console.log(res.data);
        //         navigate("/result", {state: {input: res.data}})
        //     } else { 
        //         alert("Data not found")
        //         resetForm();
        //     }
        // })
        // .catch(err => {
        //     let message = "Internal server error occurred, Please try again";
        //     if (err.response.status == 404) {
        //         message = "Student with provided details not found, Please try again";
        //     }
        //     alert(message);
        //     resetForm();
        // });
        
    };
    
    return (
        <div>
            <HomeNavbar isMainPage={false}/>
            <section id="studentCreation" className="d-flex align-items-center" style={{background: "#ee7742"}}>

                {/* <div className="form-body" >
                    
                    <div className="row">
                        <div className="form-holder" >
                            <div className="form-content">
                                <div className="form-items">
                                    <h3>Verify results</h3>
                                    <p>Fill the student details.</p>
                                    <form className="requires-validation" onSubmit={onSubmit}>

                                        <div className="col-md-12">
                                        <input className="form-control" type="number" name="rollNo" {...bindRegId} placeholder="RedId" required/>
                                        <div className="valid-feedback">Username field is valid!</div>
                                        <div className="invalid-feedback">Username field cannot be blank!</div>
                                        </div>

                                        <div className="col-md-12">
                                            <input className="form-control" type="number" name="password" {...bindRollNo} placeholder="RollNo" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>

                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="studentName" {...bindStudentName} placeholder="Student Name" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>
                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="fatherName" {...bindFatherName} placeholder="Father Name" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>
                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="motherName" {...bindMotherName} placeholder="Mother Name" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>

                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="courseName" {...bindCourseName} placeholder="Course Name" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>
                                        <div className="col-md-12">
                                            <input className="form-control" type="number" name="courseDurationHours" {...bindCourseDurationHours} placeholder="Course Duration In Hours" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>
                                        <div className="col-md-12">
                                            <input className="form-control" type="number" name="courseDurationMonths" {...bindCourseDurationMonths} placeholder="Course Duration In Months" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>

                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="status" {...bindStatus} placeholder="Course Status" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>

                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="dateOfIssue" {...bindDateOfIssue} placeholder="Date of Issue" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>

                                        <div className="col-md-6">
                                            <input className="form-control" type="number" name="noOfSubjects" {...bindNoOfSubjectsword} placeholder="Number of Subjects" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>

                                        <div className="col-md-6">
                                                <button className="btn btn-primary" onClick={handleAddField}>
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    Create Subject inputs
                                                </button>
                                        </div>
                            
                                        {subjectValues.map((item, i) => {
                                            return (
                                                <Row>
                                                    <Col>
                                                    <Form.Control placeholder="Subject Name" />
                                                    </Col>
                                                    <Col>
                                                    <Form.Control placeholder="Numbers Obtained" />
                                                    </Col>
                                                </Row>
                                            );
                                        })}
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
                </div> */}

                <div className="form-body" >
                    
                    <div className="row">
                        <div className="form-holder" >
                            <div className="form-content">
                                <div className="form-items">
                                    <h3>Verify results</h3>
                                    <p>Fill the student details.</p>
                                    <form className="requires-validation" onSubmit={onSubmit}>

                                        <div className="col-md-12">
                                        <input className="form-control" type="number" name="rollNo" {...bindRegId} placeholder="RegId" required/>
                                        <div className="valid-feedback">Username field is valid!</div>
                                        <div className="invalid-feedback">Username field cannot be blank!</div>
                                        </div>

                                        <div className="col-md-12">
                                            <input className="form-control" type="number" name="password" {...bindRollNo} placeholder="RollNo" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>

                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="studentName" {...bindStudentName} placeholder="Student Name" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>
                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="fatherName" {...bindFatherName} placeholder="Father Name" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>
                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="motherName" {...bindMotherName} placeholder="Mother Name" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>

                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="courseName" {...bindCourseName} placeholder="Course Name" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>
                                        <div className="col-md-12">
                                            <input className="form-control" type="number" name="courseDurationHours" {...bindCourseDurationHours} placeholder="Course Duration In Hours" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>
                                        <div className="col-md-12">
                                            <input className="form-control" type="number" name="courseDurationMonths" {...bindCourseDurationMonths} placeholder="Course Duration In Months" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>

                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="status" {...bindStatus} placeholder="Course Status" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>

                                        <div className="col-md-12">
                                            <input className="form-control" type="text" name="dateOfIssue" {...bindDateOfIssue} placeholder="Date of Issue" required/>
                                            <div className="invalid-feedback">Password field cannot be blank!</div>
                                        </div>

                                        <div className="col-md-6">
                                            <input className="form-control" type="number" name="noOfSubjects" {...bindNoOfSubjects} placeholder="Number of Subjects" required/>
                                        </div>

                                        <div className="col-md-6">
                                                <button className="btn btn-primary" onClick={handleAddField}>
                                                    <span className="spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    Create Subject inputs
                                                </button>
                                        </div>
                                        <DynamicInputGenerator onDataFetch={handleDataFetch}/>
                                        {subjectValues.map((item, i) => {
                                            return (
                                                <div className="form-row">
                                                    <div className="col">
                                                    <input type="text" className="form-control" placeholder="Subject Name"></input>
                                                    </div>
                                                    <div className="col">
                                                    <input type="text" className="form-control" placeholder="Internal Marks"></input>
                                                    </div>
                                                    <div className="col">
                                                    <input type="text" className="form-control" placeholder="External Marks"></input>
                                                    </div>
                                                </div>
                                            );
                                        })}
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
            </section>
            
        </div>
    )
}