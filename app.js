console.log("Web serverni boshlash");
const express = require('express');
const fs = require('fs');

const app = express();
const db = require("./server").db(); // Assuming server.js correctly exports the database connection

let user;
fs.readFile("./database/user.json", "utf-8", (err, data) => {
    if (err) {
        console.log("Error: ", err);
    } else {
        user = JSON.parse(data);
    }
});

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engine
app.set("views", "views");
app.set("view engine", "ejs");

// Routes
app.post("/create-item", (req, res) => {
    console.log("user entered create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log("Database error:", err);
            return res.status(500).send("Database error");
        }
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

app.get("/", (req, res) => {
    console.log("users entered /");
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Something went wrong");
            }
            res.render('reja', { items: data });
        });
});

// Export the app
module.exports = app;
