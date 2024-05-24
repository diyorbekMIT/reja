console.log("Web serverni boshlash");
const exp = require('constants');
const express = require('express');
const app = express();

const db = require("./server").db("Reja");

// 1: Kirish code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// 2: Session code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", (req, res) => {
  console.log(req.body);
  
})

// 4: Running code
app.get("/author", (req,res) => {
  res.render("author");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
    if (err) {
      console.log(err);
      res.end("Something went wrong");
    } else {
        console.log("Success");
        res.end("Success");
    };
  });
});

app.get("/", (req,res) => {
    res.render("reja", function(req, res) {
        db.collection("plans").
        find()
        .toArray((err,data) => {
          if (err) {
            console.log(err);
            res.end("Something went wrong");
          } else {
            console.log(data);
            res.render("reja", {items: data});
          }
        })
    });
  });
  
module.exports = app;