import { Response } from "express";
import { ValidationErrorItem } from "sequelize";

export const sendValidationErrors = (
  error: { errors: ValidationErrorItem[] },
  res: Response
) => {
  const errorObj: { [key: string]: string } = {};
  error.errors.forEach((e: any) => {
    errorObj[e.path] = e.message;
  });
  return res.status(400).json({
    code: 400,
    message: "Validation Errors.",
    error: "Validation Errors.",
    data: errorObj,
  });
};

export const sendErrorMessage = "An unexpected error occurred.";
export const sendNotFoundMessage = "Data not found.";

export const sendResponse = (
  status: any,
  msg: string,
  err: string,
  data: any,
  res: Response
) => {
  return res.status(status).json({
    code: status,
    message: msg,
    error: err,
    data: data,
  });
};
