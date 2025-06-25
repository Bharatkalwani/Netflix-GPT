// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCza3dUmlzBJGukhp9FDeObhK6PunJKnSs",
  authDomain: "netflexbackend-4fafc.firebaseapp.com",
  projectId: "netflexbackend-4fafc",
  storageBucket: "netflexbackend-4fafc.firebasestorage.app",
  messagingSenderId: "767153339313",
  appId: "1:767153339313:web:ac8cc15bfd44600d4c5b90",
  measurementId: "G-6LKTR2EJX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);