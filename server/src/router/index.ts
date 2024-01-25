import express, { Request, Response } from "express";
import {UserController, StructuresController, EntityController, FieldController} from "../controllers";

const router = express.Router();

router.get('/users', UserController.getUser);
router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUsers);
router.put('/users/:id', UserController.editUser);
router.delete('/users/:id', UserController.deleteUser);

router.get('/structures', StructuresController.getStructures);
router.post('/structures', StructuresController.createStructure);
router.get('/structures/:id', StructuresController.getStructure);
router.put('/structures/:id', StructuresController.editStructure);
router.delete('/structures/:id', StructuresController.deleteStructure);

router.get('/entities', EntityController.getEntity);
router.post('/entities', EntityController.createEntity);
router.get('/entities/:id', EntityController.getEntities);
router.put('/entities/:id', EntityController.editEntity);
router.delete('/entities/:id', EntityController.deleteEntity);

router.get('/fields', FieldController.getField);
router.post('/fields', FieldController.createField);
router.get('/fields/:id', FieldController.getFields);
router.put('/fields/:id', FieldController.editField);
router.delete('/fields/:id', FieldController.deleteField);

router.get('/', (req: Request, res: Response) => res.send({status: 'ok'}));

export = router;