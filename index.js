const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const hashcodeGenerator = require("./modules/hashcodeGenerator.js");
const checkPin = require("./modules/checkPin.js")
const hashcodeGenerator_login = require("./modules/hashcodeGenerator_login.js");
const hashcode = require("./modules/hashcode.js");

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded());

app.post('/signin-status', (req, res, next) => {
  console.log(req.url, req.method);
  let inputData = req.body;

  // Only For Render Log View
  console.log(inputData);
  
  let userPinStr = hashcodeGenerator(inputData);
  let status = checkPin(userPinStr);
  if (status) {
    let msg = [];
    let msg1 = `Welcome ${inputData.userName}`;
    let msg2 = "Thanks For Signin! Now Please Login With Your Account";
    let msg3 = "Signin";
    msg.push(msg1);
    msg.push(msg2);
    res.render('status', {msg : msg});
  } else {
    let msg = [];
    let msg1 = `Sorry ${inputData.userName}! Admin Pin Not Matched`;
    let msg2 = "Please Enter The Right Admin Pin For Signup";
    let msg3 = "Signin";
    msg.push(msg1);
    msg.push(msg2);
    res.render('status', {msg : msg});
  }
})

app.post('/chatroom', (req, res, next) => {
  console.log(req.url, req.method);
  let inputData = req.body;
  async function loginRequest() {
    const status = await hashcodeGenerator_login(inputData);
    if (!status) {
      let msg = [];
      let msg1 = `Sorry ${inputData.userName}! Password Not Matched!`;
      let msg2 = "Please Enter The Appropriate Password To Login";
      let msg3 = "Login";
      msg.push(msg1);
      msg.push(msg2);
      msg.push(msg3);
      res.render('status', {msg : msg});
    } else {
      res.redirect('/chatroom');
    }
  }
  loginRequest();
})

app.get('/login', (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(__dirname, "./views/login.html"));
})

app.get('/signin', (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(__dirname, "./views/signin.html"));
})

app.get('/', (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(__dirname, "./views/home.html"));
})

app.get((req, res, next) => {
  console.log(req.url, req.method);
  res.status(404).sendFile(path.join(__dirname, "./views/404.html"));
})

const PORT = 3000;
app.listen(PORT,'0.0.0.0', () => {
  console.log("server is running at http://localhost:3000/");
})
