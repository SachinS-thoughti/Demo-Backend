const Users = require("../db/models/users");
const { generateToken } = require("../middlewares/auth");
const bcrypt = require("bcrypt");
import {
  send200SuccessResponse,
  send400BadRequestResponse,
  send500ErrorResponse,
} from "../helper/response.helper";

var loginUser = async (req:any, res:any) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({
      where: {
        email: username,
      },
    });

    if (!user) {
      send400BadRequestResponse("Enter Registered Email.", res);
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = generateToken(user);
      const data = { token: token };
      send200SuccessResponse("Login successfully", data, res);
    } else {
      send400BadRequestResponse("Enter Valid Password.", res);
    }
  } catch (error) {
    send500ErrorResponse(res);
  }
};

module.exports = {
  loginUser,
};
