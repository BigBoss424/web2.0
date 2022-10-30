// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC29BobzEnLrwa4eO_W-xbnw2qRoOiuOJE",
  authDomain: "awesome-highway-264200.firebaseapp.com",
  databaseURL: "https://awesome-highway-264200-default-rtdb.firebaseio.com/:contactForm",
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
//reference database

document.getElementById('contactForm').addEventListener("send", sendForm);

function sendForm(e){
  e.preventDefault();

  var firstName = getInputVal('first-name');
  var lastName = getInputVal('last-name');
  var email = getInputVal('email');
  var textfield = getInputVal('textfield');

  console.log(firstName);
  console.log

}

// function to get the form values
function getInputVal(id){
  return document.getElementById(id).value;
}
//gets the firstname
var firstName = getInputVal('first-name');
//gets the lastname
var lastName = getInputVal()
//gets the email
//gets the message


}