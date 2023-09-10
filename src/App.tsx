import React, {useEffect} from 'react';
import './App.css';
import 'aos/dist/aos.css';
import { Footer } from './pages/footer';
import { Team } from './pages/team';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { VerifyResults } from './components/student_component/verifyResults';
import { StudentResult } from './components/student_component/studentResult';
import { Navbar } from './components/navbar_component/navbar';
import { HomePage } from './components/home_component/home_page';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/verify-results" element={<VerifyResults />} />
          <Route path="/result" element={<StudentResult />} />
          <Route path="/nav" element={<Navbar isMainPage={false}/>} />
          <Route path="/home" element={<HomePage/>} />
       </Routes>
    </>
 );
}

export default App;
