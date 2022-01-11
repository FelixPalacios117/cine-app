const jwt = require("jsonwebtoken")
const { decrypt } = require("./rsa")

const createJwtToken = (data) => {
  return jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}

const authenticate = async (req, res, next) => {
  try {
    //console.log(req.headers)
    if (!(req.headers.operation == 'login' || req.headers.operation == 'register')) {
      const token = req.headers.authorization || ""
      var verified = jwt.verify(token, process.env.JWT_SECRET)
      //req.verifiedUser = {_id: (decrypt(verified.user._id))};
      req.verifiedUser = { _id: '(decrypt(verified.user._id))' };
      console.log("Verification success!", req.headers.operation)
      next()
    } else {
      next();
    }
  } catch (err) {
    console.log("Verification failed!.", req.headers.operation)
    next()
  }
}

module.exports = { authenticate, createJwtToken }
