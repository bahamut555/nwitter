// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app"*/
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv78u01kuhYKfeBqMOZXX66XnGW3z2Bt8",
  authDomain: "nwitter-8285b.firebaseapp.com",
  projectId: "nwitter-8285b",
  storageBucket: "nwitter-8285b.firebasestorage.app",
  messagingSenderId: "796255069442",
  appId: "1:796255069442:web:97eeb0f37711a4da838e1b"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
