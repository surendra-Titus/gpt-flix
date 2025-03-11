// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHn9CPLh57GC2TKXDopuhft3wa6hznCIM",
  authDomain: "gpt-flix-ea425.firebaseapp.com",
  projectId: "gpt-flix-ea425",
  storageBucket: "gpt-flix-ea425.firebasestorage.app",
  messagingSenderId: "69848230172",
  appId: "1:69848230172:web:ad60bdff100f33ccccb2d9",
  measurementId: "G-SYDHPNH029",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
