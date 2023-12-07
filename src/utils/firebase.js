// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAlymAV2VCvXDeFPTmsj8lP3FsQhqJWqM",
  authDomain: "netflix-gpt-fd746.firebaseapp.com",
  projectId: "netflix-gpt-fd746",
  storageBucket: "netflix-gpt-fd746.appspot.com",
  messagingSenderId: "928819848713",
  appId: "1:928819848713:web:b55822bd9ca9b1b7913ad8",
  measurementId: "G-KX1RK41967",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();
