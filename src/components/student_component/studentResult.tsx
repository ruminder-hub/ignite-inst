import { useEffect, useState } from "react";
import { HomeHeader } from "../header";
import { Header } from "../header";
import { useLocation, useSearchParams } from "react-router-dom";
import { HomeNavbar } from "../navbar_component/navbar";
import { course } from "../../config/constants";

export const StudentResult = (input: any) => {
    const [data, setData] = useState(
        {
            item1:"Juice",
            studentName: "",
            fatherName: "",
            motherName: "",
            courseName: "",
            courseDurationMonths: 0,
            courseDurationHours: 0,
            regId: "",
            rollNo: "",
            status: "",
            subjects: [ 
            ]
        }
    );
    const location = useLocation();
    const state = location.state;

    useEffect(() => {
        const json = state.input
        setData(prevState => ({
            ...prevState,
            studentName: json.studentName,
            fatherName: json.fatherName,
            motherName: json.motherName,
            courseName: json.courseName,
            courseDurationMonths: json.courseDurationMonths,
            courseDurationHours: json.courseDurationHours,
            subjects: json.subjects,
            regId: json.regId,
            rollNo: json.rollNo,
            status: json.status,

        }));
    }, []);

    let totalMarksObtained = 0;
    let totalMarks = 0;
    data.subjects.map((data: any, index: any)=>{
        totalMarksObtained += data.extMarksObtained + data.intMarksObtained;
        totalMarks += data.maximumMarks;
    });

    return (
        <>
        <HomeNavbar isMainPage={false}/>
        <section id="hero" className="d-flex align-items-center" style={{background: "#ee7742"}}>

        <div className="container" style={{background: "#ee7742"}}>
        <div className="pt-md-4">Regd. No.: {data.regId}</div>
        <div>Roll No.: {data.rollNo}</div>
        <div className="align-items-center" style={{textAlign: "center"}}> Course: {data.courseName}</div>
        <div style={{textAlign: "center"}}> Duration: {data.courseDurationMonths} Months {data.courseDurationHours !== 0 && `- ${data.courseDurationHours} Hours`}</div>
        <div>Student Name: {data.studentName}</div>
        <div>Father Name: {data.fatherName}</div>
        <div>Mother Name: {data.motherName}</div>
        <div>Training Centre: IGNITE INSTITUTE BARETA (MANSA) </div>
        <div></div>
        <table className="table table-bordered justify-content-center">
            <thead>
                <tr>
                    <th className="text-center" rowSpan={2}>S.No</th>
                    <th className="text-center" rowSpan={2}>Subject</th>
                    <th className="text-center" colSpan={2}>Marks Obtained</th>
                    <th className="text-center" rowSpan={2}>Maximum Marks</th>
                </tr>
                <tr>
                    <th className="text-center">External Marks</th>
                    <th className="text-center">Internal Marks</th>
                </tr>
                
            </thead>
            <tbody>
            
            {
                data.subjects.map((data: any, index: any)=>{
                    let externalMarks = data.extMarksObtained;
                    let internalMarks = data.intMarksObtained
                    if (data.extMarksObtained == 0) {
                       externalMarks = "-";
                    }
                    if (data.intMarksObtained == 0) {
                        internalMarks = "-";
                    }
                    return(
                        <tr key={index}>
                            <td className="text-center">{index+1}</td>
                            <td className="text-center">{data.subjectName}</td>
                            <td className="text-center" >{externalMarks}</td><td className="text-center">{internalMarks}</td>
                            <td className="text-center" >{data.maximumMarks}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            <tbody>
                <tr>
                    <td className="text-center" colSpan={2}>Total Marks</td>
                    <td className="text-center" colSpan={2}>{totalMarksObtained}</td>
                    <td className="text-center" >{totalMarks}</td>
                </tr>
            </tbody>
        </table>

        <div>Result: {data.status}</div>
    
        </div>
        </section>
        </>
    )
}