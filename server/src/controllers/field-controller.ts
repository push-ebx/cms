import {NextFunction, Request, Response} from "express";
import {Entity, Field, RequestWithUser} from "../types";
import FieldService from "../service/field-service";
import EntityService from "../service/entity-service";

class FieldController {
  async createField(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    if (!req.query.user.id) return res.send({status: 400, error: "the user is not logged in"});

    const field: Field = {
      entity_id: req.body.entity_id,
      type: req.body.entity_id
    };

    try {
      const new_field: Field | Error = await FieldService.createField(field);

      return res.status(201).json({data: new_field, message: 'the field has been successfully created'});
    } catch (e) {
      return e instanceof Error ? res.status(400).json({error: e.message}) : next(e);
    }
  }

  async getField(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {

      return res.send({status: 401, data: null, message: 'an error occurred when creating a user'});
    } catch (e) {
      return next(e);
    }
  }

  async getFields(req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> {
    if (!req.query.user.id) return res.send({status: 400, error: "the user is not logged in"});

    try {
      const fields: Field[] | Error = await FieldService.getFields();
      return res.status(200).json({data: fields, message: ''});
    } catch (e) {
      return e instanceof Error ? res.status(400).json({error: e.message}) : next(e);
    }
  }

  async editField(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {

      return res.send({status: 401, data: null, message: 'не готово'});
    } catch (e) {
      return next(e);
    }
  }

  async deleteField(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {

      return res.send({status: 401, data: null, message: 'не готово'});
    } catch (e) {
      return next(e);
    }
  }
}

export = new FieldController();