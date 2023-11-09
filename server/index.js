const express = require('express')
const cookieParser = require("cookie-parser")
const path = require("path")
// const cors = require('cors');

const connectMongoDB = require("./db-connection.js");
const userRouter = require("./routes/user.js")
const courseRouter = require('./routes/course.js')

require('dotenv').config()

const PORT = process.env.PORT || 5000 ;
const app = express();

// connect mongobd
connectMongoDB(process.env.MONGO_ATLAS_URI)

// middlewares
// app.use(cors({
//     origin:'http://localhost:5000',
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
//     credentials:true}));
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.json());

// routes
app.use("/api/user/",userRouter)
app.use("/api/course/",courseRouter)

app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"../",'client','build')))
    res.sendFile(path.resolve(__dirname,"../",'client','build','index.html'))
})

app.get("/sign-in",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"../",'client','build')))
    res.sendFile(path.resolve(__dirname,"../",'client','build','index.html'))
})

app.get("/user-dashboard",(req,res)=>{
    const id = req.cookies?.uuid;
    if(id){
    app.use(express.static(path.resolve(__dirname,"../",'client','build')))
    res.sendFile(path.resolve(__dirname,"../",'client','build','index.html'))
    }else{
        res.redirect('/sign-in')
    }
})

app.listen(PORT,()=>{
    console.log(`my server starts at port ${PORT}`)
})