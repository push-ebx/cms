import { RequestWithUser } from "../types";
import { NextFunction, Response } from "express";

const ApiError = require("../exceptions/api-error");

export = function(err: any, req: RequestWithUser, res: Response, next: NextFunction) {
  console.log(err);
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: "Непредвиденная ошибка" });
};