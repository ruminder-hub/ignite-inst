import { CourseInterface } from "../interfaces/course_interface";

export const websiteName = "Ignite Institute"
export const email = "igniteinstituteedu@gmail.com";
export const mobileNo = "+91 9501216655";
export const address = "Opposite to Shri Aggarwal Peerkhana,";
export const city = "Bareta, Punjab ";
export const pinCode = "151501, India";

export const courses = ["Class 9", "Class 10", "Class 11", "Class 12", "Competitive Exams", "Vocational Courses"];
export const course: CourseInterface[] = [
    {courseName: "Class 9"},
    {courseName: "Class 10"},
    {courseName: "Class 11"},
    {courseName: "Class 12"},
    {courseName: "Vocational Courses"},
    {courseName: "Competitive Exams", childCourses: [{courseName: "SSC Railway"}]}
] 