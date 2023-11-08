const Users = require("../models").User;
const Token = require("../models").Token;
import { Request, Response } from "express";
import { generateToken } from "../middlewares/auth";
const bcrypt = require("bcrypt");
import { sendResponse, sendErrorMessage } from "../helper/response.helper";

const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({
      where: {
        email: username,
      },
    });

    if (!user) {
      const msg = "Enter Registered Email.";
      sendResponse(400, msg, msg, null, res);
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = generateToken(user);
      const tokenDetails = {
        token: token,
        expired: false,
      };

      await Token.create(tokenDetails);
      const tokenId = await findToken(token);
      const data = {
        token_Id: tokenId,
      };
      await Users.update(data, {
        where: {
          id: user.id,
        },
      });

      sendResponse(200, "Login successfully", "", token, res);
    } else {
      const msg = "Enter Valid Password.";
      sendResponse(400, msg, msg, null, res);
    }
  } catch (error) {
    console.log("Error :", error);
    sendResponse(500, sendErrorMessage, sendErrorMessage, null, res);
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    const authToken: any = req.header("Authorization");
    let token = authToken.split(" ");
    token = token[1];
    if (!authToken) {
      const msg = "No token provided";
      sendResponse(401, msg, msg, null, res);
    }
    const tokenId = await findToken(token);
    if (!tokenId) {
      sendResponse(400, "Invalid token", "Invalid token", null, res);
    }
    const tokeData = {
      expired: true,
    };

    await Token.update(tokeData, {
      where: {
        id: tokenId,
      },
    });

    sendResponse(200, "Logout successfully", "", null, res);
  } catch (error) {
    console.error("Error:", error);
    sendResponse(500, sendErrorMessage, sendErrorMessage, null, res);
  }
};

const findToken = async (token: any) => {
  try {
    const tokenDetails = await Token.findOne({
      where: {
        token: token,
      },
    });
    return tokenDetails.dataValues.id;
  } catch (error) {
    console.error("Error while finding token:", error);
  }
};

module.exports = {
  loginUser,
  logout,
  findToken,
};
