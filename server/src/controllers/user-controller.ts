import { NextFunction, Request, Response } from "express";
import UserService from "../service/user-service";
import { RequestWithUser, User } from "../types";

class UserController {
  async createUser(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    const {username, password} = req.body;

    const user: User = {
      username,
      password,
      created_on: new Date()
    };

    try {
      const new_user: User | Error = await UserService.createUser(user);

      return res.status(201).json({data: new_user, message: 'the user has been successfully created'});
    } catch (e) {
      return e instanceof Error ? res.status(400).json({error: e.message}) : next(e);
    }
  }

  async login(req: RequestWithUser, res: Response, next: NextFunction) {
    try {
      const {username, password} = req.body;
      const user: User | Error = await UserService.login({ username, password });

      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async getUser(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    const {username, id} = req.query;

    try {
      const user: User | Error = await UserService.getUser(username, +id);
      return res.send({status: 200, data: user, message: ''});
    } catch (e) {
      return e instanceof Error ? res.status(400).json({error: e.message}) : next(e);
    }
  }

  async getUsers(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const users: User[] | Error = await UserService.getUsers();
      return res.status(200).json({data: users, message: ''});
    } catch (e) {
      return e instanceof Error ? res.status(400).json({error: e.message}) : next(e);
    }
  }

  async editUser(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const {new_username, new_password} = req.body;
      const {username, id} = req.query;

      const user: User = {
        username: username,
        id: id
      };

      const new_user: User = {
        username: new_username,
        password: new_password
      };

      const edit_user: User | Error = await UserService.editUser(user, new_user);
      return res.status(200).json({data: edit_user, message: ''});
    } catch (e) {
      console.log(e)
      return e instanceof Error ? res.status(400).json({error: e.message}) : next(e);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      // query: {id, username};
      //todo
      return res.status(401).json({data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }
}

export = new UserController();