import { NextFunction, Request, Response } from "express";
import TypeService from "../service/type-service";
import { RequestWithUser, Structure, Type } from "../types";

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
}

export = new TypesController();