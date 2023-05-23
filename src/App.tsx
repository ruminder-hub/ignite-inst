import React, {useEffect} from 'react';
import './App.css';
import { HomeHeader } from './components/header';
import { ContactUs } from './pages/contactUs';
import { AboutUs } from './pages/aboutUs';
import { MainPage } from './pages/mainPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer } from './pages/footer';
import { Team } from './pages/team';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { VerifyResults } from './pages/verifyResults';
import { StudentResult } from './components/student_component/studentResult';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify-results" element={<VerifyResults />} />
          <Route path="/result" element={<StudentResult />} />
       </Routes>
    </>
 );
}

export default App;
