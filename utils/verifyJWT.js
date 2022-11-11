const jsonwebtoken = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({
      message: "Authorization Denied",
    });
  }

  try {
    const decodedToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken.user;
    next(); //callback, important , o.w. we'll get stuck here only
  } catch (error) {
    res.status(401).json({
      message: "Authorization Denied",
    });
  }
};

module.exports = verifyJWT;
