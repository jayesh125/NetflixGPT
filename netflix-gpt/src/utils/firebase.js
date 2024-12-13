// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtVNfseSdziY6o4rzxCRhVjjkVYcboq0o",
  authDomain: "netflixgpt-e3d8c.firebaseapp.com",
  projectId: "netflixgpt-e3d8c",
  storageBucket: "netflixgpt-e3d8c.firebasestorage.app",
  messagingSenderId: "371468410268",
  appId: "1:371468410268:web:2c626267a8948746913c59",
  measurementId: "G-2151E69TKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);