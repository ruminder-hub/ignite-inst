import { address, city, email, mobileNoList, pinCode } from "../../config/constants"

export const ContactUs = () =>{
    return (
        <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Contact us the get started</p>
        </div>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{address} {city} {pinCode}</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{email}</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <div className="row">
                {
                  mobileNoList.map((val, index) => {
                      return (<><p className="col-md-6" style={{display:"block"}}>{val}</p></>)
                  })
                }
                </div>
                
                
              </div>

              <iframe title="locatioin" style={{border:0, width: "100%", height: "290px"}} allowFullScreen={true} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ignite%20Institute,%20opposite%20to%20Shri%20Aggarwal%20Peerkhana,%20Bareta,%20Punjab%20151501,%20India+(Ignite%20Institute)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">distance maps</a></iframe>
              
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  
                  <label>Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label>Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <label>Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <label>Message</label>
                <textarea className="form-control" name="message" rows={10} required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    )
}