export var APP_URL_CONFIG = {
    BASE_URL: getConfigs()["BASE_URL"],
    VERIFYRESULTS: "/student/create",
    BACKEND_VERIFY_RESULTS: "/student/result/",
    BACKEND_SAVE_STUDENT_RECORD: "/student/record/create",
    BACKEND_REGISTER_USER: "/user/register",
    BACKEND_LOGIN_USER: "/user/login"
   
  };
  
  /**
   * This function was created to avoid changing the URLs while development.
   */
  
  export function getConfigs() {
    let protocol = window.location.protocol + "//" + window.location.host;
    // if (protocol === "http://localhost:3001") {
    //   return {
    //     BASE_URL: "http://localhost:3005",
    //   };
    // } else {
    //   return {
    //     BASE_URL: "https://igniteinstitute.co.in",
    //   };
    // }
    return {
      BASE_URL: "https://ignite-express-backend.vercel.app"
    }
  }