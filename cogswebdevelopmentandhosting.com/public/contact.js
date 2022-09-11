// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC29BobzEnLrwa4eO_W-xbnw2qRoOiuOJE",
  authDomain: "awesome-highway-264200.firebaseapp.com",
  databaseURL: "https://awesome-highway-264200-default-rtdb.firebaseio.com",
  projectId: "awesome-highway-264200",
  storageBucket: "awesome-highway-264200.appspot.com",
  messagingSenderId: "897482776445",
  appId: "1:897482776445:web:1eec32d59ac67b4aaff614",
  measurementId: "G-7BPCHQ87JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//reference database
var contactFormDB = firebase.database().ref("contactForm");
document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    
    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var msgContent = getElementVal('msgContent');
    
    saveMessages(name, emailid, msgContent);
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
}
const getElementVal = (id) => {
    return document.getElementById(id).value;
};