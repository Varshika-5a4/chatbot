import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


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


var Email12 = document.getElementById("email");
var Pass = document.getElementById("password");

window.login=function(e){
    e.preventDefault();
    var obj = {
        email:email.value,
        password:password.value
    };
    signInWithEmailAndPassword(auth,obj.email,obj.password)
    .then(function(success){
        alert("Loggined Succesfully")
        window.location.href = "/main";
        
    })
    .catch(function(err){
        alert("Login error:"+err)
    })
    
}
