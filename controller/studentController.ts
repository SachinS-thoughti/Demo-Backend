import { Request, Response } from "express";
const Student = require("../models").Student;
import {
  sendValidationErrors,
  sendResponse,
  sendErrorMessage,
  sendNotFoundMessage,
} from "../helper/response.helper";

const createStudent = async (req: Request, res: Response) => {
  try {
    if (!req) {
      const msg = "Please select files";
      return sendResponse(400, msg, msg, null, res);
    }
    const studentData = req.body;
    //const files = req.files;
    const filePaths: { [key: string]: string } = {};
    const destinationFolder = "Documents/";

    // for (const file of files as Express.Multer.File[]) {
    //   const filePath = `${destinationFolder}${file.originalname}`;
    //   fs.writeFileSync(filePath, file.buffer);
    //   const fieldPath = file.fieldname;
    //   filePaths[fieldPath] = filePath;
    // }

    const completeData = { ...studentData, ...filePaths };
    const student = await Student.create(completeData);
    sendResponse(200, "Student created successfully", "", student, res);
  } catch (error: any) {
    if (error.name === "SequelizeValidationError") {
      sendValidationErrors(error, res);
    } else {
      sendResponse(500, sendErrorMessage, sendErrorMessage, null, res);
    }
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const data = await Student.findAll({});
    if (data.length === 0) {
      sendResponse(404, sendNotFoundMessage, sendNotFoundMessage, null, res);
    }
    sendResponse(200, "Students found", "", data, res);
  } catch (error: any) {
    console.log("Error :", error);
    sendResponse(500, sendErrorMessage, sendErrorMessage, null, res);
  }
};

export { createStudent, getAllStudents };
