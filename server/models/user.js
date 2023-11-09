const mongoose = require("mongoose");
const {createHmac, randomBytes} = require("crypto")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    salt:{
        type:String
    },
    password:{
        type: String,
        required: true,
    },
    enrolledcourses:[{
          course:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            unique:true
          },
          duedate:{
            type:String,
          },
          progress:{
            type:String,
          }
    }]
    
},{timestamps:true});

userSchema.pre("save", function(next){
    const user = this;

    if(!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256", salt).update(user.password).digest("hex");

    this.salt = salt;
    this.password = hashedPassword;

    next();
})

userSchema.static("matchPassword", async function(email,password){
    const user = await this.findOne({email})
    
    if(!user) return null;

    const salt = user.salt;
    const hashedPassword = user.password;
    
    const userProvidedHash = createHmac("sha256", salt).update(password).digest("hex");

    if(hashedPassword !== userProvidedHash)
     return null;
    return user;
})

const User = mongoose.model("user",userSchema);

module.exports = User;