// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:"AIzaSyAR2mjZJiyt-lyQQPqIkqf6Otwlz1V0pJM",
  // authDomain:"reactlogin-31c39.firebaseapp.com",
  // projectId:"reactlogin-31c39",
  // storageBucket:"reactlogin-31c39.firebasestorage.app",
  // messagingSenderId:"832972061005",
  // appId:"1:832972061005:web:87aded28c90a04070adf04",
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBUcket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)