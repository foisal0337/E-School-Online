// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDc2asaiVHa5-VF1hSOz3pZ2pw7PcL3y1g",
    authDomain: "school-89293.firebaseapp.com",
    databaseURL: "https://school-89293.firebaseio.com",
    projectId: "school-89293",
    storageBucket: "school-89293.appspot.com",
    messagingSenderId: "101382303609",
    appId: "1:101382303609:web:c66b5bcbdbe396a2b549a8",
    measurementId: "G-PP2DS6PJQL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    var name = getInputVal('name');
    var company = getInputVal('lastname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');


    saveMessage(name, lastname, email, phone, message);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('contactForm').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, lastname, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        Last Name: lastname,
        email: email,
        phone: phone,
        message: message
    });
}