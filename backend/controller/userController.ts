import { Request, Response } from 'express';
const bcrypt = require('bcrypt');
const User = require('../db/models/users');
import {
  send400ValidationErrors,
  send200SuccessResponse,
  send404NotFoundResponse,
  send500ErrorResponse,
} from '../helper/response.helper';

const addUser = async (req: Request, res: Response) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const userData = req.body;
    const user = await User.create(userData);
    send200SuccessResponse('Successfully Saved', user, res);
  } catch (error:any) {
    if (error.name === 'SequelizeValidationError') {
      send400ValidationErrors(error, res);
    } else {
      send500ErrorResponse(res);
    }
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const data = await User.findAll({});
    if (data.length === 0) {
      send404NotFoundResponse(res);
    }
    send200SuccessResponse('Users found', data, res);
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
    send200SuccessResponse('User data found', data, res);
  } catch (error) {
    send500ErrorResponse(res);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const updatedData = req.body;
   const updatedUser =  await User.update(updatedData, {
      where: {
        uid: req.params.id,
      },
    });

    send200SuccessResponse('User updated successfully', '', res);
  } catch (error:any) {
    console.log("Error :", error)
    if (error.name === 'SequelizeValidationError') {
      
      send400ValidationErrors(error, res);
    } else {
      send500ErrorResponse(res);
    }
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    send200SuccessResponse('User deleted successfully', '', res);
  } catch (error) {
    send500ErrorResponse(res);
  }
};

export {
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
