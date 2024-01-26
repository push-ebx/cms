import { NextFunction, Request, Response } from "express";
import UserService from "../service/user-service";
import { User } from "../types";

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const {username, password} = req.body;

    const user: User = {
      username,
      password,
      created_on: new Date()
    };

    try {
      const new_user: User | Error = await UserService.createUser(user);
      return res.send({status: 200, data: new_user, message: 'the user has been successfully created'});
    } catch (e) {
      return e instanceof Error ? res.send({status: 400, error: e.message}) : next(e);
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const {username} = req.params;

    try {
      const user: User | Error = await UserService.getUser(username);
      return res.send({status: 200, data: user, message: ''});
    } catch (e) {
      return e instanceof Error ? res.send({status: 400, error: e.message}) : next(e);
    }
  }

  async getUsers(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const users: User[] | Error = await UserService.getUsers();
      return res.send({status: 200, data: users, message: ''});
    } catch (e) {
      return e instanceof Error ? res.send({status: 400, error: e.message}) : next(e);
    }
  }

  async editUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const {username, password} = req.body;
      console.log(req.params.username, username, password)

      const user: User = {
        username,
        password,
        created_on: new Date()
      };

      const edit_user: User | Error = await UserService.editUser(req.params.username, user);
      return res.send({status: 200, data: edit_user, message: ''});
    } catch (e) {
      console.log(e)
      return e instanceof Error ? res.send({status: 400, error: e.message}) : next(e);
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