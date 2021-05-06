const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getUser, getUserID) {
	const authenticateUser = async (email, password, done) => {
		const user = await getUser(email);
		console.log(user);

		if (user == null) {
			return done(null, false, { message: "No user with that email" });
		}
		try {
			if (await bcrypt.compare(password, user.Password)) {
				return done(null, user);
			} else {
				return done(null, false, { message: "Password does not match" });
			}
		} catch (error) {
			return done(error);
		}
	};
	passport.use(new LocalStrategy(authenticateUser));
	passport.serializeUser((user, done) => done(null, user.id));
	passport.deserializeUser(async (id, done) => {
		return done(null, await getUserID(id));
	});
}

module.exports = initialize;
