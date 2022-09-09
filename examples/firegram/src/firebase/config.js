// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/storage';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl_i4oJxGvOYnyzLn1_6OLGWkskdwncsw",
  authDomain: "ninja-firegram-dfea2.firebaseapp.com",
  projectId: "ninja-firegram-dfea2",
  storageBucket: "ninja-firegram-dfea2.appspot.com",
  messagingSenderId: "370236287265",
  appId: "1:370236287265:web:1b8dd372fa6a1b933df660",
  measurementId: "G-13XMEF5BJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};