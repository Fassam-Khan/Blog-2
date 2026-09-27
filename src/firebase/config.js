// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdxR5NI-OnhBRhvhnPQViBa7-KiCK4_8E",
  authDomain: "blog-app-1f957.firebaseapp.com",
  projectId: "blog-app-1f957",
  storageBucket: "blog-app-1f957.firebasestorage.app",
  messagingSenderId: "1020628772779",
  appId: "1:1020628772779:web:034cd7e6fa4054dac914ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);