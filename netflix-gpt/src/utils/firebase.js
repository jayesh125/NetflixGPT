// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7sSKBLm7hHRLU6g3q6aOG5Gw0n6I4TjE",
  authDomain: "netflix-gpt-5d384.firebaseapp.com",
  projectId: "netflix-gpt-5d384",
  storageBucket: "netflix-gpt-5d384.firebasestorage.app",
  messagingSenderId: "425125932546",
  appId: "1:425125932546:web:f4bb3a9a35fef55f95c11b",
  measurementId: "G-ZFSFPTR3C8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();