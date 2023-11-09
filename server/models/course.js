const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    instructor:{
        type: String,
        required: true,
    },
    description:{
        type:String
    },
    enrollmentStatus:{
        type: String,
        required: true,
        default:"open"
    },
    thumbnail:{
        type: String,
    },
    duration:{
        type: String,
        required: true,
    },
    schedule:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
        default:"Online"
    },
    prerequisites:{
        type: String
    },
    syllabus:[
        {
            week:{type:String},
            topic:{type:String},
            content:{type:String}
        }
    ]
    
},{timestamps:true});

const Course = mongoose.model("course",courseSchema);

module.exports = Course;