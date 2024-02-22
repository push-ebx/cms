import { NextFunction, Request, Response } from "express";
import TypeService from "../service/type-service";
import { RequestWithUser, Type } from "../types";

class TypesController {
  async createType(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    const { title, type, struct_id } = req.body;
    // todo: валидация типа (integer, text...)

    try {
      const new_type: Type | Error = await TypeService.createType({ title, type, struct_id });
      return res.status(201).json({ data: new_type, message: "the type has been successfully created" });
    } catch (e) {
      return e instanceof Error ? res.status(400).json({ error: e.message }) : next(e);
    }
  }

  async getTypes(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    // if (!req.query.user.id) return res.send({ status: 400, error: "the user is not logged in" });

    try {
      const types: Type[] | Error = await TypeService.getTypes();
      return res.status(200).json({ data: types, message: "" });
    } catch (e) {
      return e instanceof Error ? res.status(400).json({ error: e.message }) : next(e);
    }
  }
}

export = new TypesController();