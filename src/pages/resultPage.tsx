import { useState } from "react"
import { Header, HomeHeader } from "../components/header"
import { ResultForm } from "../components/resultForm"
import { StudentResult } from "../components/student_component/studentResult";

export const VerifyResults = () => {
    const [showResults, setShowResults] = useState(false);

    return (
        <div >
            <Header/>
            <section id="hero" className="d-flex align-items-center" style={{background: "#ee7742"}}>

            <div className="container" style={{background: "#ee7742"}}>
                
                <StudentResult setShowResults/>
            </div>
            
            </section>
            
        </div>
    )
}