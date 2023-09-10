import { useEffect } from "react";
import { Navbar } from "../navbar_component/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

import "./home_page.css";
import { MainPage } from "./mainPage";
import { AboutUs } from "./aboutUs";
import { Team } from "../../pages/team";
import { ContactUs } from "./contactUs";
import { Footer } from "./footer";

export const HomePage = () => {
    useEffect(() => {
      AOS.init();
    }, [])
    return (
      <>
      <Navbar isMainPage={true}/>
      
  
    <main id="main" data-aos-easing="ease-in-out">
  
        <MainPage/>
        <AboutUs/>
        <Team/>
        <ContactUs/>
  
    </main>
  
    <Footer/>
  
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  
    {/* <!-- Vendor JS Files --> */}
    <script src="assets/vendor/aos/aos.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>
  
    {/* <!-- Template Main JS File --> */}
    <script src="assets/js/main.js"></script>
    </>
    );
  }