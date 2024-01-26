import {NextFunction, Request, Response} from "express";
import UserService from "../service/user-service";
import {Structure, User} from "../types";

class StructureController {
  async createStructure(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const {title, } = req.body;

    // const user: Structure = {

      // created_on: new Date()
    // };

    try {
      // const new_user: User | Error = await UserService.createUser(user);
      // return res.send({status: 200, data: new_user, message: 'the user has been successfully created'});
    } catch (e) {
      return e instanceof Error ? res.send({status: 400, error: e.message}) : next(e);
    }
  }

  async getStructure(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {

      return res.send({status: 401, data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }

  async getStructures(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {

      return res.send({status: 401, data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }

  async editStructure(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {

      return res.send({status: 401, data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }

  async deleteStructure(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {

      return res.send({status: 401, data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }
}

export = new StructureController();