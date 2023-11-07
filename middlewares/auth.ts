const jwt = require("jsonwebtoken");

export const generateToken = (user:any) => {
  const payload = {
    username: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
  };
  const secretKey = process.env.SECRET_KEY;
  const options = { expiresIn: process.env.EXPIRES_IN };
  return jwt.sign(payload, secretKey, options);
};

export const roleCheck = (allowedRoles:any) => {
  return (req:any, res:any, next:any) => {
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
