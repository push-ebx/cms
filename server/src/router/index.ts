import express, { Request, Response } from "express";
import {UserController, StructuresController, EntityController, FieldController} from "../controllers";

const router = express.Router();

router.get('/users', UserController.getUsers);
router.post('/user', UserController.createUser);
router.get('/user', UserController.getUser);
router.put('/user', UserController.editUser);
router.delete('/user', UserController.deleteUser);

router.get('/structures', StructuresController.getStructures);
router.post('/structures', StructuresController.createStructure);
router.get('/structure', StructuresController.getStructure);
router.put('/structures/:id', StructuresController.editStructure);
router.delete('/structures/:id', StructuresController.deleteStructure);

router.get('/entities', EntityController.getEntities);
router.post('/entities', EntityController.createEntity);
router.get('/entity', EntityController.getEntity);
// router.put('/entities/:id', EntityController.editEntity);
router.delete('/entities/:id', EntityController.deleteEntity);

router.get('/fields', FieldController.getFields);
router.post('/fields', FieldController.createField);
router.get('/fields/:id', FieldController.getField);
router.put('/fields/:id', FieldController.editField);
router.delete('/fields/:id', FieldController.deleteField);

router.get('/', (req: Request, res: Response) => res.send({status: 'ok'}));

export = router;