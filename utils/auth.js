const jsonwebtoken = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({
      message: "Authorization Denied",
    });
  }

  try {
    const decodedToken = jsonwebtoken.verify(token, process.env.jsonwebtoken_SECRET);
    req.user = decodedToken.user;
  } catch (error) {
    res.status(401).json({
      message: "Authorization Denied",
    });
  }
};

module.exports = auth;
