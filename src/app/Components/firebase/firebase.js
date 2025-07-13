// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvlXBYkQ8L3BzRqjv4unP220bpbSUlfOU",
  authDomain: "frist-firebase-project-ff30c.firebaseapp.com",
  projectId: "frist-firebase-project-ff30c",
  storageBucket: "frist-firebase-project-ff30c.firebasestorage.app",
  messagingSenderId: "612100133735",
  appId: "1:612100133735:web:83a99c536da64c18dbd5c2",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
