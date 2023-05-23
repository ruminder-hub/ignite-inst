export var APP_URL_CONFIG = {
    BASE_URL: getConfigs()["BASE_URL"],
    VERIFYRESULTS: "/verify-results",
    BACKEND_VERIFY_RESULTS: "/student/"
   
  };
  
  /**
   * This function was created to avoid changing the URLs while development.
   */
  
  export function getConfigs() {
    let protocol = window.location.protocol + "//" + window.location.host;
    // if (protocol === "http://localhost:3001") {
    //   return {
    //     BASE_URL: "http://localhost:5000",
    //   };
    // } else {
    //   return {
    //     BASE_URL: "https://igniteinstitute.co.in",
    //   };
    // }
    return {
      BASE_URL: "http://34.87.59.190:8080"
    }
  }