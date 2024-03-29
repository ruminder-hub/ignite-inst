import { useEffect } from "react";
import { HomeNavbar } from "../navbar_component/navbar";
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
      <HomeNavbar isMainPage={true}/>
      
  
    <main id="main" data-aos-easing="ease-in-out">
  
        <MainPage/>
        <AboutUs/>
        <Team/>
        <ContactUs/>
  
    </main>
  
    <Footer/>
  
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  
    </>
    );
  }