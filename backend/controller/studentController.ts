import { Request, Response } from 'express';
import fs from 'fs';
const Student = require('../db/models/student');
import {
  send400ValidationErrors,
  send200SuccessResponse,
  send404NotFoundResponse,
  send500ErrorResponse,
  send400BadRequestResponse,
} from '../helper/response.helper';

const addStudent = async (req: Request, res: Response) => {
  try {
    if (!req) {
      return send400BadRequestResponse('Please select files', res);
    }
    const studentData = req.body;
    //const files = req.files;
    const filePaths: { [key: string]: string } = {};
    const destinationFolder = 'Documents/';

    // for (const file of files as Express.Multer.File[]) {
    //   const filePath = `${destinationFolder}${file.originalname}`;
    //   fs.writeFileSync(filePath, file.buffer);
    //   const fieldPath = file.fieldname;
    //   filePaths[fieldPath] = filePath;
    // }

    const completeData = { ...studentData, ...filePaths };
    const student = await Student.create(completeData);
    send200SuccessResponse('Successfully Saved', student, res);
  } catch (error:any) {
    if (error.name === 'SequelizeValidationError') {
      send400ValidationErrors(error, res);
    } else {
      send500ErrorResponse(res);
    }
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const data = await Student.findAll({});
    if (data.length === 0) {
      send404NotFoundResponse(res);
    }
    send200SuccessResponse('Students found', data, res);
  } catch (error:any) {
    send500ErrorResponse(res);
  }
};

export {
  addStudent,
  getStudents,
};
