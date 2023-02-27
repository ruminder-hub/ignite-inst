import { course, courses } from "../config/constants"
import { CourseInterface } from "../interfaces/course_interface"

function Item({courseName, childCourses}: {courseName: string, childCourses?: CourseInterface[]}) {
  console.log(childCourses);
  if (childCourses) {
    return <li className="dropdown">
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
      <li className="dropdown"><a href="#"><span>{courseName}</span> <i className="bi bi-chevron-down"></i></a>
        <ul>
          {course.map((course, index) => {
            return <Item courseName={course.courseName} childCourses={course.childCourses} />
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

export const NavBar = () => {
    return (
        <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About Us</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          {/* <li className="dropdown"><a href="#"><span>Courses</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              createDropDown(course);
              {course.map((course, index) => {
                if (course.childCourses) {
                  return <li className="dropdown">
                    <a href="#"><span>{course.courseName}</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      {course.childCourses.map}
                    </ul>
                  </li>
                } else {
                  return <li>
                    <a href="#">{course.courseName}</a>
                  </li>

                }
              })}
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              {courses.map((name, index) => {
                  if (typeof name )
                  return <li>
                        <a href="index">{name}</a>
                      </li>;
              })}
            </ul>
          </li> */}
          {createDropDown(course, "Courses")}
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    )
}