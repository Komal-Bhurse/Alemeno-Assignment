const express = require("express");
const {restrictToLogedInUserOnly} = require("../middlewares/auth")

const {handleSignIn,handleSignUp,handleLogout, handleStudentEnrollment} = require("../controllers/user");

const router = express.Router();

router.post("/signup",handleSignUp)

router.post("/signin",handleSignIn)

router.post("/logout",restrictToLogedInUserOnly,handleLogout)

router.post('/enroll/:id',restrictToLogedInUserOnly,handleStudentEnrollment)

module.exports = router;