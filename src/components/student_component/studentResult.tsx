import { useEffect, useState } from "react";
import { HomeHeader } from "../header";
import { Header } from "../header";
import { useLocation, useSearchParams } from "react-router-dom";

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
            staus: "",
            subjects: [ 
            ]
        }
    );
    const location = useLocation();
    const state = location.state;
    const [searchParams] = useSearchParams();

    useEffect(() => {
        console.log("Ruby input us")
        
        const json = state.input

        console.log(json);
        // const fetchData = async () => {
        //     const requestOptions = {
        //         method: 'GET',
        //         'Access-Control-Allow-Origin': '*'
        //         // headers: { 'Content-Type': 'application/json' },
        //         // body: JSON.stringify({ title: 'React POST Request Example' })
        //     };
        //     const response = await fetch('/student/1234?regId=4', requestOptions);
        //     const json = await response.json();
        //     console.log(json);
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
        //   }

        //   fetchData().catch(console.error);
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <>
        <Header/>
        <section id="hero" className="d-flex align-items-center" style={{background: "#ee7742"}}>

            <div className="container" style={{background: "#ee7742"}}>
        <div>Regd. No.: {data.regId}</div>
        <div>Roll No.: {data.rollNo}</div>
        <div className="align-items-center" style={{textAlign: "center"}}> Course: {data.courseName}</div>
        <div style={{textAlign: "center"}}> Duration: {data.courseDurationMonths} Months - {data.courseDurationHours} Hours</div>
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
                    return(
                        <tr key={index}>
                            <td className="text-center">{index+1}</td>
                            <td className="text-center">{data.subjectName}</td>
                            <td className="text-center" >{data.extMarksObtained}</td><td className="text-center">{data.intMarksObtained}</td>
                            <td className="text-center" >{data.maximumMarks}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>

        <div>Result: {data.staus}</div>
        </div>
        </section>
        </>
    )
}