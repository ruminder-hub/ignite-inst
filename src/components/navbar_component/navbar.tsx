import { Link } from "react-router-dom"
import "./navbar_style.css";
import { useState } from "react";
import { course, courses } from "../../config/constants"
import { CourseInterface } from "../../interfaces/course_interface";
import { Container, Nav, NavDropdown, Navbar, NavbarBrand } from "react-bootstrap";

interface NavBarProps{
    isMainPage: boolean;
 }

export const HomeNavbar = ({isMainPage}: NavBarProps): JSX.Element => {
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

    function BasicExample() {
      return (
        <Navbar bg="white" expand="lg" className="justify-content-between pt-sm-1 text-openserif">
            <NavbarBrand href="#home" className="ml-lg-4">
              <img src="../assets/img/ignite.png" width="140" height="50" className="d-inline-block align-top" alt="Ignite Institute">
              </img>
            </NavbarBrand>
            <Nav className="mr-md-2 text-danger">
                <Nav.Item>
                  <Nav.Link href="#intro">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#about">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#team">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav.Item>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                </NavDropdown>
            <Nav.Link href="/verify-results">Verify Results</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
        </Navbar>
      );
    }
    

    return (
      <div className="navigation" id="navigation">
        <nav id="navbar" className="navbar">
            <div className="brand-title">
                    <Link to="/"><img src="../assets/img/ignite.png" alt=""></img></Link>
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