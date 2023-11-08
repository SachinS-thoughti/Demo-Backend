import { Request, Response } from "express";
const bcrypt = require("bcrypt");
const User = require("../models").User;
import {
  sendValidationErrors,
  sendResponse,
  sendErrorMessage,
  sendNotFoundMessage,
} from "../helper/response.helper";

const createUser = async (req: Request, res: Response) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const userData = req.body;
    const user = await User.create(userData);
    sendResponse(200, "User created successfully", "", user, res);
  } catch (error: any) {
    if (error.name === "SequelizeValidationError") {
      sendValidationErrors(error, res);
    } else {
      console.log("Error :", error);
      sendResponse(500, sendErrorMessage, sendErrorMessage, null, res);
    }
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const data = await User.findAll({});
    if (data.length === 0) {
      sendResponse(404, sendNotFoundMessage, sendNotFoundMessage, null, res);
    }
    sendResponse(200, "Users found", "", data, res);
  } catch (error) {
    sendResponse(500, sendErrorMessage, sendErrorMessage, null, res);
  }
};

const getUserById = async (req: Request, res: Response) => {
  try {
    const data = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!data) {
      sendResponse(404, sendNotFoundMessage, sendNotFoundMessage, null, res);
    }
    sendResponse(200, "User data found", "", data, res);
  } catch (error) {
    sendResponse(500, sendErrorMessage, sendErrorMessage, null, res);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const updatedData = req.body;

    const [rowsUpdated] = await User.update(updatedData, {
      where: {
        id: req.params.id,
      },
    });

    if (rowsUpdated > 0) {
      console.log(`Updated ${rowsUpdated} row(s) successfully.`);
      sendResponse(200, "User updated successfully", "", null, res);
    } else {
      const msg = `No rows were updated.`;
      sendResponse(400, msg, msg, null, res);
    }
  } catch (error: any) {
    if (error.name === "SequelizeValidationError") {
      sendValidationErrors(error, res);
    } else {
      sendResponse(500, sendErrorMessage, sendErrorMessage, null, res);
    }
  }
};

const deleteUser = async (req: any, res: any) => {
  try {
    const rowsDeleted = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (rowsDeleted > 0) {
      console.log(`Deleted ${rowsDeleted} row(s) successfully.`);
      sendResponse(200, "User deleted successfully", "", null, res);
    } else {
      const msg = `No rows were deleted.`;
      sendResponse(400, msg, msg, null, res);
    }
  } catch (error) {
    const msg = `Error while deleting rows.`;
    sendResponse(500, msg, msg, null, res);
  }
};

export { createUser, getAllUsers, getUserById, updateUser, deleteUser };
