const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const hashcodeGenerator = require("./modules/hashcodeGenerator.js");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded());

app.post('/', (req, res, next) => {
  console.log(req.body);
  let inputData = req.body;
  let inputDataStr = hashcodeGenerator(inputData);
  console.log(inputDataStr);
  res.redirect('/');
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