import { useState } from "react"
import { Header, HomeHeader } from "../header"
import { ResultForm } from "./resultForm"
import { Navbar } from "../navbar_component/navbar";

export const VerifyResults = () => {
    const [showResults, setShowResults] = useState(false);

    return (
        <div >
            <Navbar isMainPage={false}/>
            <section id="hero" className="d-flex align-items-center" style={{background: "#ee7742"}}>

            <div className="container" style={{background: "#ee7742"}}>
                <ResultForm setShowResults/>
            </div>
            
            </section>
            
        </div>
    )
}