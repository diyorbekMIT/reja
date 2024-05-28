const express = require('express');
const fs = require('fs');
const mongoDB = require("mongodb");

const app = express();
const db = require("./server").db(); // Assuming server.js correctly exports the database connection

let user;
fs.readFile("./database/user.json", "utf-8", (err, data) => {
    if (err) {
        console.error("Error reading user data:", err);
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

// Route to render author view
app.get("/author", (req, res) => {
    res.render("author", { user: user });
});

// Route to render main view and fetch data from database
app.get("/", (req, res) => {
    console.log("Users entered /");
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).send("Something went wrong");
            }
            res.render('reja', { items: data });
        });
});

// POST request to create item
app.post("/create-item", (req, res) => {
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json(data.ops[0]);
    });
});

// POST request to delete item
app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne(
        { _id: new mongoDB.ObjectID(id) },
        (err, data) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ error: "Database error" });
            }
            res.json({ success: true });
        }
    );
});

// POST request to edit item
app.post("/edit-item", (req, res) => {
    const id = req.body.id;
    const newInput = req.body.new_input;
    console.log("Editing item with ID:", id, "New input:", newInput);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongoDB.ObjectID(id) },
        { $set: { reja: newInput } },
        (err, data) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ error: "Database error" });
            }
            res.json({ success: true });
        }
    );
});

// POST request to delete all items
app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany({}, (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ error: "Database error" });
            }
            res.json({ state: "Hamma rejalar ochirildi" });
        });
    } else {
        res.status(400).json({ error: "Invalid request" });
    }
});

// Export the app
module.exports = app;
