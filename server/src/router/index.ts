import express, { Request, Response } from "express";
import {UserController, StructuresController, EntityController, FieldController} from "../controllers";
import authMiddleware from "../middlewares/auth-middleware";

const router = express.Router();

router.get('/users', authMiddleware, UserController.getUsers);
router.post('/user', UserController.createUser);
router.post('/user/login', UserController.login);
router.get('/user', authMiddleware, UserController.getUser);
router.put('/user', authMiddleware, UserController.editUser);
router.delete('/user', authMiddleware, UserController.deleteUser);

router.get('/structures', authMiddleware, StructuresController.getStructures);
router.post('/structures', authMiddleware, StructuresController.createStructure);
router.get('/structure', authMiddleware, StructuresController.getStructure);
router.put('/structures/:id', authMiddleware, StructuresController.editStructure);
router.delete('/structures/:id', authMiddleware, StructuresController.deleteStructure);

router.get('/entities', authMiddleware, EntityController.getEntities);
router.post('/entities', authMiddleware, EntityController.createEntity);
router.get('/entity', authMiddleware, EntityController.getEntity);
// router.put('/entities/:id', EntityController.editEntity);
router.delete('/entities/:id', authMiddleware, EntityController.deleteEntity);

router.get('/fields', authMiddleware, FieldController.getFields);
router.post('/fields', authMiddleware, FieldController.createField);
router.get('/fields/:id', authMiddleware, FieldController.getField);
router.put('/fields/:id', authMiddleware, FieldController.editField);
router.delete('/fields/:id', authMiddleware, FieldController.deleteField);

router.get('/', (req: Request, res: Response) => res.send({status: 'ok'}));

export = router;