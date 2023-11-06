import { Response } from 'express';
import { ValidationErrorItem } from 'sequelize';

export const send400ValidationErrors = (error: { errors: ValidationErrorItem[] }, res: Response) => {
  const errorObj: { [key: string]: string } = {};
  error.errors.forEach((e:any) => {
    errorObj[e.path] = e.message;
  });
  return res.status(400).json({
    code: 400,
    message: 'Validation Errors.',
    error: 'Validation Errors.',
    data: errorObj,
  });
};

export const send200SuccessResponse = (message: string, data: any, res: Response) => {
  return res.status(200).json({ code: 200, message, error: null, data });
};

export const send400BadRequestResponse = (message: string, res: Response) => {
  return res
    .status(400)
    .json({ code: 400, message, error: message, data: null });
};

export const send404NotFoundResponse = (res: Response) => {
  return res.status(404).json({
    code: 404,
    message: 'No data found.',
    error: 'No data found.',
    data: null,
  });
};

export const send500ErrorResponse = (res: Response) => {
  return res.status(500).json({
    code: 500,
    message: 'An unexpected error occurred.',
    error: 'An unexpected error occurred.',
    data: null,
  });
};
