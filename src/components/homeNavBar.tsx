import { Link } from "react-router-dom";
import { course, courses } from "../config/constants"
import { CourseInterface } from "../interfaces/course_interface"

function Item({courseName, childCourses}: {courseName: string, childCourses?: CourseInterface[]}) {
  if (childCourses) {
    return <li className="dropdown" key={courseName}>
      <a href="#"><span>{courseName}</span> <i className="bi bi-chevron-right"></i></a>
      {createDropDown(childCourses, undefined)}
    </li>
  } else {
    return <li>
      <a href="#">{courseName}</a>
    </li>
  }
}

const createDropDown = (course: CourseInterface[], courseName?: string) => {
  if (courseName) {
    return (
      <li className="dropdown" key={courseName}><a href="#"><span>{courseName}</span> <i className="bi bi-chevron-down"></i></a>
        <ul>
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

export const HomeNavBar = () => {
    return (
        <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About Us</a></li>
          <li><Link to="/verify-results">Verify Results</Link></li>
          {/* <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li> */}
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          {createDropDown(course, "Courses")}
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#about">Login</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    )
}

export const NavBar = () => {
  return (
      <nav id="navbar" className="navbar">
      <ul>
        <li key="Home"><Link to="/">Home</Link></li>
        <li key="Results"><Link to="/verify-results" className="active">Verify Results</Link></li>
        {createDropDown(course, "Courses")}
        <li><a className="getstarted scrollto" href="#about">Login</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  )
}