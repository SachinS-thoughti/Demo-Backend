import { Request, Response } from "express";
const Student = require("../models").Student;
import {
  send400ValidationErrors,
  send200SuccessResponse,
  send404NotFoundResponse,
  send500ErrorResponse,
  send400BadRequestResponse,
} from "../helper/response.helper";

const createStudent = async (req: Request, res: Response) => {
  try {
    if (!req) {
      return send400BadRequestResponse("Please select files", res);
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
    send200SuccessResponse("Successfully Saved", student, res);
  } catch (error: any) {
    if (error.name === "SequelizeValidationError") {
      send400ValidationErrors(error, res);
    } else {
      send500ErrorResponse(res);
    }
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const data = await Student.findAll({});
    if (data.length === 0) {
      send404NotFoundResponse(res);
    }
    send200SuccessResponse("Students found", data, res);
  } catch (error: any) {
    console.log("Error :", error);
    send500ErrorResponse(res);
  }
};

export { createStudent, getAllStudents };
