if (process.env.NODE_ENV !== "production") {
<<<<<<< HEAD
  require("dotenv").config();
=======
	require("dotenv").config();
>>>>>>> 66fcddbdd38c3d11380cbcc05c1e42a207f0e249
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

async function getUser(email) {
    const { users, error } = await supabase
    .from("User")
    .select()
    console.log(users)
    // const validUser = users.find(user => user.Email === email)
    // return validUser
}

initializedPassport(
    passport,
    getUser
);
//PORT
const PORT = 5321;

//middleware
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
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.engine("html", es6Renderer);
app.set("views", "../views");
app.set("view engine", "html");



function checkAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect("/login");
}

function checkIfUserIsLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return res.redirect("/");
	}
	next();
}

//welcome page
app.get("/", checkAuthenticated, (req, res) => {
	res.render("welcome", { locals: { name: req.user.name } });
});

//login page
app.get("/login", checkIfUserIsLoggedIn, (req, res) => {
	res.render("login");
});

app.post(
	"/login",
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/login",
		failureFlash: true,
	})
);

//register page
app.get("/register", checkIfUserIsLoggedIn, (req, res) => {
	res.render("register");
});

app.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.bodpassword, salt);
        const { data, error } = await supabase
        .from("User")
        .insert([
            {
                Name: req.body.name,
                Email: req.body.email,
                Password: hashedPassword,
            }
        ]);
        console.log(data);
        res.status(200).redirect("/login");
    } catch (err) {
        res.status(401).redirect("/register");
    }
  });

app.post("/logout", (req, res) => {
	req.logOut();
	res.redirect("/login");
});

//homepage
app.get("/home", async (req, res) => {
	res.render("home.html");
});

//reservations page
app.post("/reservation", async (req, res) => {
	const { data, error } = await supabase.from("Reservation").insert([
		{
			Name: "Joey",
			Date: "2021-02-04",
			Restaurant: "Pappadeuxs",
			Party_Size: 22,
		},
	]);
	console.log(data);
});

app.get("/reservation", async (req, res) => {
	const { data, error } = await supabase.from("Restaurant").select();
	console.log(data);
});

//profile page
app.get("/home", async (req, res) => {
	res.render("profile");
});

app.listen(PORT, () => {
	console.log(`Your server is being hosted on localhost:${PORT}`);
});
