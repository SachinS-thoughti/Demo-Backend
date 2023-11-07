import { Request, Response } from "express";
const bcrypt = require("bcrypt");
const User = require("../models").User;
import {
  send400ValidationErrors,
  send200SuccessResponse,
  send404NotFoundResponse,
  send500ErrorResponse,
  send400BadRequestResponse,
} from "../helper/response.helper";

const createUser = async (req: Request, res: Response) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const userData = req.body;
    const user = await User.create(userData);
    send200SuccessResponse("Successfully Saved", user, res);
  } catch (error: any) {
    if (error.name === "SequelizeValidationError") {
      send400ValidationErrors(error, res);
    } else {
      send500ErrorResponse(res);
    }
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const data = await User.findAll({});
    if (data.length === 0) {
      send404NotFoundResponse(res);
    }
    send200SuccessResponse("Users found", data, res);
  } catch (error) {
    send500ErrorResponse(res);
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
      send404NotFoundResponse(res);
    }
    send200SuccessResponse("User data found", data, res);
  } catch (error) {
    send500ErrorResponse(res);
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
      send200SuccessResponse("User updated successfully", "", res);
    } else {
      console.log("No rows were updated.");
      send400BadRequestResponse(`No rows were updated.`, res);
    }
  } catch (error: any) {
    if (error.name === "SequelizeValidationError") {
      send400ValidationErrors(error, res);
    } else {
      send500ErrorResponse(res);
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
      send200SuccessResponse("User deleted successfully", "", res);
    } else {
      console.log("No rows were deleted.");
      send400BadRequestResponse(`No rows were deleted.`, res);
    }
  } catch (error) {
    console.error("Error deleting rows:", error);
    send400BadRequestResponse(`Error while deleting rows.`, res);
  }
};

export { createUser, getAllUsers, getUserById, updateUser, deleteUser };
