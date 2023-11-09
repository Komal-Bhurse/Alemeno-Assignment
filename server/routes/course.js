const express = require("express");
const {handleGetAllCourses, handleGetCourseById} = require('../controllers/course')

const router = express.Router();

router.get("/getallcourses",handleGetAllCourses)

router.get("/:id",handleGetCourseById)

module.exports = router;