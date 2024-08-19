import "dotenv/config";
import jwt from "jsonwebtoken";
const { sign, verify } = jwt;

function createToken(user) {
  return sign(
    {
      emailAdd: UserActivation.emailAdd,
      pwd: UserActivation.userPass,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
}
function verifyAToken(req, res, next) {
  const token = req?.headers["authorization"];
  if (token) {
    if (verify(token, process.env.SECRET_KEY)) {
      next();
    } else {
      res?.json({
        status: res.statusCode,
        msg: "Please provide the correct credentials",
      });
    }
  } else {
    res?.json({
      status: res.statusCode,
      msg: "please login",
    });
  }
}
export { 
  createToken,
  verifyAToken 
};