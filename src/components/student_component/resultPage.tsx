import { useState } from "react"
import { Header, HomeHeader } from "../header"
import { ResultForm } from "./resultForm"
import { StudentResult } from "./studentResult";

import "./student_style.css";
import { Navbar } from "../navbar_component/navbar";

export const VerifyResults = () => {

    return (
        <div >
            <Navbar isMainPage={false}/>
            <section id="verifyResult" className="d-flex align-items-center" style={{background: "#ee7742"}}>

            <div className="container" style={{background: "#ee7742"}}>
                
                <StudentResult setShowResults/>
            </div>
            
            </section>
            
        </div>
    )
}