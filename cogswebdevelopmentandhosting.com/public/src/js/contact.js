

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC29BobzEnLrwa4eO_W-xbnw2qRoOiuOJE",
    authDomain: "awesome-highway-264200.firebaseapp.com",
    databaseURL: "https://awesome-highway-264200-default-rtdb.firebaseio.com",
    projectId: "awesome-highway-264200",
    storageBucket: "awesome-highway-264200.appspot.com",
    messagingSenderId: "897482776445",
    appId: "1:897482776445:web:1eec32d59ac67b4aaff614",
    measurementId: "G-0SL6E723ER"
  };
firebase.initializeApp(firebaseConfig);

//Reference messages collection
let messagesRef = firebase.database().ref('ContactForm');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get Values
    let name = getInputVal('name');
    let company = getInputVal('company');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    //save message

    saveMessage(name, company, email, phone, message);

    //show alert
    document.querySelector('.alert').style.display='block';

    //Hide alert after 3 s
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    }, 3000)
    //clear form
    document.getElementById('contactForm').reset();
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, company, email, phone, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}