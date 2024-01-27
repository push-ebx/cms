import { NextFunction, Request, Response } from "express";
import StructureService from "../service/structure-service";
import { RequestWithUser, Structure } from "../types";

class StructureController {
  async createStructure(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    if (!req.query.user.id) return res.send({status: 400, error: "the user is not logged in"});

    const {title} = req.body;

    const structure: Structure = {
      title,
      user_id: req.query.user.id
    };

    try {
      const new_structure: Structure | Error = await StructureService.createStructure(structure);

      return res.status(201).json({data: new_structure, message: 'the structure has been successfully created'});
    } catch (e) {
      return e instanceof Error ? res.status(400).json({error: e.message}) : next(e);
    }
  }

  async getStructure(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    if (!req.query.user.id) return res.send({status: 400, error: "the user is not logged in"});
    const {title, id} = req.query;

    try {
      const struct: Structure | Error = await StructureService.getStructure(title, +id);
      return res.send({status: 200, data: struct, message: ''});
    } catch (e) {
      return e instanceof Error ? res.status(400).json({error: e.message}) : next(e);
    }
  }

  async getStructures(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    if (!req.query.user.id) return res.send({status: 400, error: "the user is not logged in"});

    try {
      const structures: Structure[] | Error = await StructureService.getStructures();
      return res.status(200).json({data: structures, message: ''});
    } catch (e) {
      return e instanceof Error ? res.status(400).json({error: e.message}) : next(e);
    }
  }

  async editStructure(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      // todo
      return res.send({status: 401, data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }

  async deleteStructure(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      // todo
      return res.send({status: 401, data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }
}

export = new StructureController();