const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
// By using urlencoded we can get access to form data inside our html file


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {

  console.log(req.body); // This will console everything that was inside our form
  // in the body of our html, specified with name = ""

  var num1 = Number(req.body.height); // By default req.body.num1 is in text form
  var num2 = Number(req.body.weight);
  var result = num2/(num1*num1);

  res.send("Your BMI = " + result);
})

app.listen(3000, function() {
  console.log("Port 3000 called");
});
