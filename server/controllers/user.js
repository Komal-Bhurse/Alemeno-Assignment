const User = require("../models/user");
const { setUser } = require("../service/auth");

const handleSignUp = async (req, res) => {
  const data = req.body;
  
    const result = await User.create({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    return res.status(201).json({ msg: "sucsess" });
};

const handleSignIn = async (req, res) => {
  
  const { email, password } = req.body;
  
    const user = await User.matchPassword(email, password);
    if (!user) {
      return res.json({ massage: "plese enter valid email or password" });
    }

    const token = setUser(user);
  
    res.cookie("uuid",token);
    return res.json({user});
};

const handleLogout = (req, res) => {
  res.clearCookie("uuid");
  res.send({ massage: "logout successfull" });
};

const handleStudentEnrollment = async (req, res) => {
  
  const courseId = req.params.id;
  const userId = req.user?._id;

   const enroll = await User.findOne({
    _id:userId,
    "enrolledcourses.course": courseId,
   })
  
if(!enroll){
  const user = await User.findOneAndUpdate(
    {_id:userId},
    {
      $push: {
        enrolledcourses: {
          course: courseId
        },
      },
    },
    { new: true, runValidators: true }
  );

  return res.status(201).json({msg:"enrolled successfull"});
}

    return res.status(201).json({msg:"You Are Allready enrolled"});
};

module.exports = {
  handleSignUp,
  handleSignIn,
  handleLogout,
  handleStudentEnrollment
};



