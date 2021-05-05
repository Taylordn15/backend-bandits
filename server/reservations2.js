const express = require("express");
const app = express();



app.post("/reservations", (req,res) => {
    console.log("post request");
})