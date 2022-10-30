// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, child} from "firebase/database";
//import { firestore } from "firebase/firebase-firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC29BobzEnLrwa4eO_W-xbnw2qRoOiuOJE",
  authDomain: "awesome-highway-264200.firebaseapp.com",
  databaseURL: "https://awesome-highway-264200-default-rtdb.firebaseio.com/",
  projectId: "awesome-highway-264200",
  storageBucket: "awesome-highway-264200.appspot.com",
  messagingSenderId: "897482776445",
  appId: "1:897482776445:web:1eec32d59ac67b4aaff614",
  measurementId: "G-7BPCHQ87JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
//export const db = firebase.firestore();

//reference database
// var contactFormDB = firebase.database().ref("contactForm");

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  set(ref(db, 'contactForm/' + Math.random().toString(36).slice(2, 7)), {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
  });

  alert('Your form is submitted');
  document.getElementById('contact-form').reset();
});