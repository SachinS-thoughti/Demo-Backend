const Users = require("../models").User;
import { Request, Response } from "express";
const { generateToken } = require("../middlewares/auth");
const bcrypt = require("bcrypt");
import {
  send200SuccessResponse,
  send400BadRequestResponse,
  send500ErrorResponse,
} from "../helper/response.helper";

const loginUser = async (req: Request, res: Response) => {
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
    console.log("Error :", error);
    send500ErrorResponse(res);
  }
};

const logout = async (req: Request, res: Response) => {
  send200SuccessResponse("Logged out successfully", null, res);
};

module.exports = {
  loginUser,
  logout,
};
