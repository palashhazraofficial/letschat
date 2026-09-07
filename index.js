const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const hashcodeGenerator = require("./modules/hashcodeGenerator.js");
const hashcodeGenerator_login = require("./modules/hashcodeGenerator_login.js");
const hashcode = require("./modules/hashcode.js");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded());

app.post('/', (req, res, next) => {
  let inputData = req.body;
  hashcodeGenerator(inputData);
  res.redirect('/');
})

app.post('/chatroom', (req, res, next) => {
  let inputData = req.body;
  async function loginRequest() {
    const status = await hashcodeGenerator_login(inputData);
    console.log("Status: ", status);
    if (status === false) {
      res.redirect('/');
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

const PORT = 3000;
app.listen(PORT,'0.0.0.0', () => {
  console.log("server is running at http://localhost:3000/");
})