
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAdo_uH3c2U0u0oOIwz9CjsVkO6lY6sw5M",
    authDomain: "chat-bot-2cbd4.firebaseapp.com",
    projectId: "chat-bot-2cbd4",
    storageBucket: "chat-bot-2cbd4.appspot.com",
    messagingSenderId: "657320861097",
    appId: "1:657320861097:web:356dd44b73a4a8afa278b8",
    measurementId: "G-TQ8G5KHH4E"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();

var UserName = document.getElementById("username");
var Email12 = document.getElementById("email1");
var Pass = document.getElementById("password1");

window.signup = function (e) {
  e.preventDefault();
  var obj = {
    Username: UserName.value,
    Email: Email12.value,
    Password: Pass.value
  }
  const options = {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json', 
    },
    body: JSON.stringify(obj), 
};
fetch('http://localhost:3000/signupsubmit', options)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    
    console.log('Response from server:', data);
})
.catch(error => {
   
    console.error('Fetch error:', error);
});

  createUserWithEmailAndPassword(auth, obj.Email, obj.Password)
    .then(function (userCredential) {
      
      alert("Signup Successfull");
      window.location.href="/login.html";
      console.log(userCredential);
    })
    .catch(function (error) {
     
      alert("Error: " + error.message);
      console.error(error);
    });
};
