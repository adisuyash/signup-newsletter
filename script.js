const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like CSS, images) from the "public" directory
app.use(express.static("public"));

// Route to serve the form (GET request)
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html"); // Serve the index.html file
});

// Route to handle form submission (POST request)
app.post("/", function (req, res) {
    const fullName = req.body.name;
    const emailAddress = req.body.email;

    // Send a response with the user input
    res.send(`${fullName} has email address = ${emailAddress}`);
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port: 3000");
});
