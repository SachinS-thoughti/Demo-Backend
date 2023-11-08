const jwt = require("jsonwebtoken");
const Token = require("../models").Token;
const { findToken } = require("../controller/accountController");

export const generateToken = (user: any) => {
  const payload = {
    username: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
  };
  const secretKey = process.env.SECRET_KEY;
  const options = { expiresIn: process.env.EXPIRES_IN };
  const token = jwt.sign(payload, secretKey, options);
  return token;
};

export const roleCheck = (allowedRoles: any) => {
  return async (req: any, res: any, next: any) => {
    const authToken = req.header("Authorization");

    if (!authToken) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      let token = authToken.split(" ");
      token = token[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const userRole = decoded.role;
      if (decoded.exp < Date.now() / 1000) {
        return res.status(400).json({ error: "Token has expired" });
      }
      const tokenID = await findToken(token);
      const tokenData = await Token.findOne({
        where: {
          id: tokenID,
        },
      });
      if (!tokenData) {
        return res.status(400).json({ error: "Invalid Token" });
      }
      if (tokenData.dataValues.expired) {
        return res.status(400).json({ error: "Token has expired" });
      }
      if (allowedRoles.includes(userRole)) {
        next();
      } else {
        res.status(401).json({ error: "Unauthorized" });
      }
    } catch (error) {
      res.status(400).json({ error: "Invalid token" });
    }
  };
};
