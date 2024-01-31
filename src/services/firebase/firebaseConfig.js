// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCgchkUUeUuTq6qosfURneJPZS-vDadw8",
  authDomain: "react-js-ch.firebaseapp.com",
  projectId: "react-js-ch",
  storageBucket: "react-js-ch.appspot.com",
  messagingSenderId: "576867319210",
  appId: "1:576867319210:web:929059150df637c2313fd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
