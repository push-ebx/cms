import {NextFunction, Request, Response} from "express";
import UserService from "../service/user-service";
import {User} from "../models";

class UserController {
  async getUser(req: Request, res: Response, next: NextFunction) {

  }

  async createUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const user: User = {
        id: 1,
        username: 'admin',
        password: '2h973fbuo',
        email: 'admin@admin.com',
        created_on: new Date()
      };

      const new_user: User | null = await UserService.createUser(user);

      if (new_user) {
        return res.send({status: 200, data: new_user, message: 'the user has been successfully created'});
      }

      return res.send({status: 401, data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {

      return res.send({status: 401, data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }

  async getUsers(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {

      return res.send({status: 401, data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }

  async editUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {

      return res.send({status: 401, data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {

      return res.send({status: 401, data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }
}

export = new UserController();