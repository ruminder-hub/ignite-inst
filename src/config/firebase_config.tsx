// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY78DOxTGUGA6caiSuJ67HLd5elXV4sOk",
  authDomain: "ignite-institute.firebaseapp.com",
  projectId: "ignite-institute",
  storageBucket: "ignite-institute.appspot.com",
  messagingSenderId: "1027003073457",
  appId: "1:1027003073457:web:0ed109239bb81ce48bf390",
  measurementId: "G-CDRZGZV098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);