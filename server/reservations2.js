const express = require("express");
const app = express();
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
	"https://qaozkethcihyhwxqwyyb.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDA2NTU3NSwiZXhwIjoxOTM1NjQxNTc1fQ.HIBZbZyYMY7Jc1d4kxYVkESzL55qG7RqMPMzoWA1oFI"
);



app.post("/reservations", (req,res) => {
	const {Name, date, restaurant, partysize} = res.body;
    console.log("post request");
})