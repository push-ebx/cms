import { RequestWithUser } from "../types";
import { NextFunction, Response } from "express";

import ApiError from "../exceptions/api-error";
import tokenService from "../service/token-service";

export = function(req: RequestWithUser, res: Response, next: NextFunction) {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError());
    }

    const accessToken = authorizationHeader.split(" ")[1];

    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }

    const userData = tokenService.validateAccessToken(accessToken);

    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }

    req.query.user = userData;

    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError());
  }
};