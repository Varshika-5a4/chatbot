var admin = require("firebase-admin");
const express = require('express');
const serviceAccount = require("./key.json");
const app = express();
app.use('/public', express.static('public'));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
app.use(express.static(__dirname));
app.use(express.json());  
const path = require('path');
app.get("/signup", function (req, res) {
  res.sendFile(__dirname + "/public/" + "signup.html");
});

app.get("/login", function (req, res) {
  res.sendFile(__dirname + "/public/" + "login.html");
});

app.get("/main", function (req, res) {
  res.sendFile(__dirname + "/public/" + "main.html");
});


app.post("/signupsubmit", function (req, res) {
  const data = {
      UserName: req.body.Username,
      Email: req.body.Email,
      Date: new Date()
  };
  console.log("Received a request for /signupsubmit with data:", data);
  db.collection('SignupData').add(data)
  .then((docRef) => {
      console.log("Input data added successfully with ID: ", docRef.id);
      res.status(200).send(data);
  })
  .catch(error => {
      console.error('Error adding input data to Firestore:', error);
      res.status(500).send('Error adding input data to Firestore');
  });
});

app.post("/loginsubmit", function (req, res) {
  
  const data = {
    Email: req.body.Email,
    Date: new Date()
  };
  console.log("Received a request for /loginsubmit with data:", data);

  db.collection('LoginData').add(data)
    .then((docRef) => {
      console.log("Login data added successfully with ID: ", docRef.id);
      
      res.status(200).send("Login data stored successfully");
    })
    .catch(error => {
      console.error('Error adding login data to Firestore:', error);
      res.status(500).send('Error adding login data to Firestore');
    });
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');  
});
