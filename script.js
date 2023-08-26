const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); // used to show other files

// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html");
// });

app.post("/", function (req, res) {
    const fullName = req.body.name;
    const emailAddress = req.body.email;
    res.send(`${fullName} has email address = ${emailAddress}`);
});

app.listen(3000, () => {
    console.log("Server is running on port: 3000");
});

// const apiKey = "6f8deb7d1eb8af47be094cbb746e9ed0-us12"; // mailchimp API key 
// const listId = "db125b4cf4"; // mailchimp list id here