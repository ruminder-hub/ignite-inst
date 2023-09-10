import { Link } from "react-router-dom"

import "./navbar_style.css";
import { useState } from "react";
import { course, courses } from "../../config/constants"
import { CourseInterface } from "../../interfaces/course_interface";

interface NavBarProps{
    isMainPage: boolean;
 }

export const Navbar = ({isMainPage}: NavBarProps): JSX.Element => {
    const [showNav, setShowNav] = useState(false)

    const toggleNavItems = () => {
        setShowNav(!showNav)
    }

    const hideToggle = () => {
      setShowNav(false)
  }

    const Item = ({courseName, childCourses}: {courseName: string, childCourses?: CourseInterface[]}) => {
        if (childCourses) {
          return <li key={courseName}>
            <a href="#"  className="nav-link" ><span>{courseName}</span> <i className="bi bi-chevron-right"></i></a>
            {createDropDown(childCourses, undefined)}
          </li>
        } else {
          return <li key={courseName}>
            <a href="#" className="nav-link">{courseName}</a>
          </li>
        }
      }

    const createDropDown = (course: CourseInterface[], courseName?: string) => {
        if (courseName) {
          return (
            <li className="dropdown" key={courseName}><a href="#" className="nav-link"><span>{courseName}</span> <i className="bi bi-chevron-down"></i></a>
              <ul className="dropdown-content">
                {course.map((course, index) => {
                  return <Item courseName={course.courseName} childCourses={course.childCourses} key={course.courseName}/>
                })}
              </ul>
            </li>);
        } else {
          return <ul>
            {course.map((course, index) => {
               return <Item courseName={course.courseName} childCourses={course.childCourses} />
            })}
          </ul>
        }
      
        
      }

    const getHomeNavBar = () => {
        return <ul>
            <li><a className="nav-link scrollto active" href="#intro" onClick={hideToggle}>Home</a></li>
          <li><a className="nav-link scrollto" href="#about" onClick={hideToggle}>About Us</a></li>
          <li><a className="nav-link scrollto" href="#team" onClick={hideToggle}>Team</a></li>
          <li><a className="nav-link scrollto" href="#contact" onClick={hideToggle}>Contact</a></li>
          {createDropDown(course, "Courses")}
          <li><Link to="/verify-results" className="nav-link">Verify Results</Link></li>
          <li><Link to="/login" className="nav-link login">Login</Link></li>
        </ul>
    }

    return (
      <div className="navigation" id="navigation">
        <nav id="navbar" className="navbar">
            <div className="brand-title">
                    <Link to="/"><img src="assets/img/ignite.png" alt=""></img></Link>
            </div>
            <a href="#" className="toggle-button" onClick={toggleNavItems}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={`navbar-links ${showNav && 'active'}`}>

                {isMainPage ? (
                    getHomeNavBar()
                    ) : (
                    <ul>
                        <li><a className="nav-link scrollto" href="/">Home</a></li>
                        <li><Link to="/verify-results" className="nav-link active">Verify Results</Link></li>
                        {createDropDown(course, "Courses")}
                    </ul>
                )}
                
            </div>
        </nav>
        </div>
    )
}