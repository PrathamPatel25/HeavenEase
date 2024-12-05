const express = require("express");
const { route } = require("./listing");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

router.post(
  "/signup",
  wrapAsync((req, res) => {
    try {
      let { username, email, password } = req.body;
      const newUser = new User({ email, username });
      const registeredUser = User.register(newUser, password);
      console.log(registeredUser);
      req.flash("success", "welcome to HeavenEase");
      res.redirect("/listings");
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/listings");
    }
  })
);

router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  wrapAsync((req, res) => {
    req.flash("success", "welcome back to HeavenEase!");
    let redirectUrl = "/listings";
    res.redirect(redirectUrl);
  })
);

module.exports = router;
