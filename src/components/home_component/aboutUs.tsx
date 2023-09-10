export const AboutUs = () => {
    return (
        <section id="about" className="about">
            <div className="container">

                <div className="row justify-content-between">
                <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                    <img src="assets/img/about-img.svg" className="img-fluid" alt="" data-aos="zoom-in"/>
                </div>
                <div className="col-lg-6 pt-5 pt-lg-0">
                    <h3 data-aos="fade-up">WELCOME TO IGNITE INSTITUTE</h3>
                    <p data-aos="fade-up" data-aos-delay="100">
                    Ignite Institute is a Academy of Excellence in Management / Information Technology / Certificate Courses
                    </p>
                    <div className="row">
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <i className="bx bx-receipt"></i>
                        <h4>Training</h4>
                        <p>We provide students a thorough training that will allow them to build up a professional career in their field of interest.</p>
                    </div>
                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <i className="bx bx-cube-alt"></i>
                        <h4>Our Mission</h4>
                        <p>We will enable all individuals to gain access to decent employment and ensure India's competitiveness in the job market by improving your skills and knowledge.</p>
                    </div>
                    </div>
                </div>
                </div>

            </div>
        </section>
    )
}