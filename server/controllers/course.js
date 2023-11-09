const Course = require('../models/course')

const handleGetAllCourses = async (req, res) => {
    
      const course = await Course.find();
  
      return res.status(201).json({course});
  };

const handleGetCourseById = async (req, res) => {
    const id = req.params.id;
    
      const course = await Course.findById({
        _id:id
      });
  
      return res.status(201).send(course);
};

module.exports = {
    handleGetAllCourses,
    handleGetCourseById
  };