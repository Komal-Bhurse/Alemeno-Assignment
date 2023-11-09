const { getUser } = require("../service/auth");

async function restrictToLogedInUserOnly(req, res, next) {
  const userUid = req.cookies?.uuid;
  if (!userUid) {
    
    //  res.json({
    //   url: "/sign-in",
    // });
    // res.setHeader('Location', '/sign-in');
   return res.redirect(301,'/sign-in')
  }

  const user = getUser(userUid);
  if (!user) {
    //  res.json({
    //   url: "/sign-in",
    // });
    // res.setHeader('Location', '/sign-in');
   return res.redirect(301,'/sign-in')
  }

    req.user = user;
    next();
  
}

module.exports = {
  restrictToLogedInUserOnly,
};