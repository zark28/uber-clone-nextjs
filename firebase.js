// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTPVC37aGaIVY4SX6FxGqMPutu_Svkaw8",
  authDomain: "uber-clone-nextjs-9f3de.firebaseapp.com",
  projectId: "uber-clone-nextjs-9f3de",
  storageBucket: "uber-clone-nextjs-9f3de.appspot.com",
  messagingSenderId: "822900705426",
  appId: "1:822900705426:web:8fd655f3e0a80dc4f63e4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}