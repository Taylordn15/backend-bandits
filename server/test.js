// -- Get Tools && Set PORT -- //

if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const yelpinfo = require("reservations.js");
const es6Renderer = require("express-es6-template-engine");
const initializedPassport = require("./passport-config");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
	"https://qaozkethcihyhwxqwyyb.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDA2NTU3NSwiZXhwIjoxOTM1NjQxNTc1fQ.HIBZbZyYMY7Jc1d4kxYVkESzL55qG7RqMPMzoWA1oFI"
);
initializedPassport(
	passport,
	(email) => users.find((user) => user.email === email),
	(id) => users.find((user) => user.id === id)
);

// -- Set Port -- //

const PORT = 5321;

// -- Middleware -- //

app.use(express.static("../public"));
app.use(express.json());
app.use(cors());
app.use(flash());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.engine("html", es6Renderer);
app.set("views", "../views");
app.set("view engine", "html");

// - Reservation(s) Page - //

app.post("/reservation", async (req, res) => {
	const { yelpinfo } = await supabase.from("Restaurant").insert(yelpinfo);
});

app.get("/reservation", async (req, res) => {
	const { data, error } = await supabase.from("Restaurant").select();
	console.log(data);
});

// - Listening Post - //

app.listen(PORT, () => {
	console.log(`Your server is being hosted on localhost:${PORT}`);
});
