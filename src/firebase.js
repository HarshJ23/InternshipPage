// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDakoKA_uP4fiPClJTV7VuFEq2cYJZe8p4",
  authDomain: "internportal-c3efb.firebaseapp.com",
  projectId: "internportal-c3efb",
  storageBucket: "internportal-c3efb.appspot.com",
  messagingSenderId: "195180042730",
  appId: "1:195180042730:web:2ed10e43a4d466e856ba93"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db  = getFirestore()