import {NextFunction, Request, Response} from "express";
import UserService from "../service/user-service";
import {Entity, RequestWithUser, Structure, User} from "../types";
import EntityService from "../service/entity-service";
import StructureService from "../service/structure-service";

class EntityController {
  async createEntity(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    if (!req.query.user.id) return res.send({status: 400, error: "the user is not logged in"});

    const entity: Entity = {
      struct_id: req.body.struct_id
    };

    try {
      const new_entity: Entity | Error = await EntityService.createEntity(entity);

      return res.status(201).json({data: new_entity, message: 'the entity has been successfully created'});
    } catch (e) {
      return e instanceof Error ? res.status(400).json({error: e.message}) : next(e);
    }
  }

  async getEntities(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    if (!req.query.user.id) return res.send({status: 400, error: "the user is not logged in"});

    try {
      const entities: Entity[] | Error = await EntityService.getEntities();
      return res.status(200).json({data: entities, message: ''});
    } catch (e) {
      return e instanceof Error ? res.status(400).json({error: e.message}) : next(e);
    }
  }

  async getEntity(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    if (!req.query.user.id) return res.send({status: 400, error: "the user is not logged in"});

    const {struct_id, id} = req.query;

    try {
      const entity: Entity | Error = await EntityService.getEntity(+struct_id, +id);
      return res.send({status: 200, data: entity, message: ''});
    } catch (e) {
      return e instanceof Error ? res.status(400).json({error: e.message}) : next(e);
    }
  }

  async deleteEntity(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    try {

      return res.send({status: 401, data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }
}

export = new EntityController();