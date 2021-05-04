if(process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}

const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const es6Renderer = require("express-es6-template-engine");
//PORT
const PORT = 5321;
//this is mimicing a database
const user = [];

//middleware
app.use(express.static("../public"));
app.use(express.json());
app.use(cors());
// app.use(flash());

app.engine("html", es6Renderer);
app.set("views", "../views");
app.set("view engine", "html");

// access our form information inside of our req
app.use(express.urlencoded({ extended: false }));

app.get("/", (req,res) => {
    res.render("home");
});


app.get("/login", (req,res) => {
    res.render("login");
});

app.get("/register", (req,res) => {
    res.render("register");
});

app.listen(PORT, () => {
    console.log(`Your server is being hosted on localhost:${PORT}`)
});