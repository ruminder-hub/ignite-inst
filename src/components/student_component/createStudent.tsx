export const CreateStudent = (input: any) => {
    return (
        <div>
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Registration Number"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Roll Number"/>
                    </div>
                </div>
                <div className="form-row">
                    <input type="text" className="form-control" id="inputAddress" placeholder="Student Name"/>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Father Name"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Mother Name"/>
                    </div>
                </div>
                <div className="form-row">
                    <input type="text" className="form-control" id="inputAddress" placeholder="Course Name"/>
                </div>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Course Duration in Months"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="CourseDuration in Hours"/>
                    </div>
                </div>
                
            </form>
        </div>
    )
}