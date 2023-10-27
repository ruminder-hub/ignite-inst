import React, {useEffect} from 'react';
import './App.css';
import 'aos/dist/aos.css';
import { Route, Routes } from 'react-router-dom';
import { VerifyResults } from './components/student_component/verifyResults';
import { StudentResult } from './components/student_component/studentResult';
import { HomeNavbar } from './components/navbar_component/navbar';
import { HomePage } from './components/home_component/home_page';
import { StudentCreationForm } from './components/student_component/studentCreationForm';
import Login from './components/login_component/login';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/verify-results" element={<VerifyResults />} />
          <Route path="/result" element={<StudentResult />} />
          <Route path="/nav" element={<HomeNavbar isMainPage={false}/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/student/createsecret" element={<StudentCreationForm/>} />
          <Route path="/login" element={<Login/>} />
       </Routes>
    </>
 );
}

export default App;
