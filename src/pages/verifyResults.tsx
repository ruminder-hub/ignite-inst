import { useState } from "react"
import { Header, HomeHeader } from "../components/header"
import { ResultForm } from "../components/resultForm"

export const VerifyResults = () => {
    const [showResults, setShowResults] = useState(false);

    return (
        <div >
            <Header/>
            <section id="hero" className="d-flex align-items-center" style={{background: "#ee7742"}}>

            <div className="container" style={{background: "#ee7742"}}>
                {/* <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
                </div>
                <div className="form-group">

                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                </div>
                </form> */}
                <ResultForm setShowResults/>
            </div>
            
            </section>
            
        </div>
    )
}