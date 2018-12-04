var GitHubStrategy = require('passport-github2').Strategy;
const db = require("../models/index")
module.exports = function(passport){
2
console.log("lol Passport")
passport.serializeUser(function(user, done) {
  console.log("SERIALIZE", user)
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  console.log("DESERIALIZE", obj)
  done(null, obj);
});
// Uses applications Client ID and secret and then retrievs user data
passport.use(new GitHubStrategy({
  clientID: '1a1f0cecfeaf0ff089f0',
  clientSecret: 'b5ae0df8259da3144a74fc4d78e0f61a22a08533',
  callbackURL: "http://localhost:8080/auth/github/callback"
},
function(accessToken, refreshToken, profile, cb) {
  console.log("kewl", profile)
  db.User.create({ email: profile.username, password:"test", username:profile.username }).then(function (user) {
    console.log("User", user)
    return cb(null, user);
  }).catch(function(err){
    return cb(err, null);
  })
}
));

}



