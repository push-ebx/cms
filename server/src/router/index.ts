import express, {NextFunction, Request, Response} from "express";
import UserController from "../controllers/user-controller";

const router = express.Router();

router.get('/create-user', UserController.createUser)

router.get('/', (req: Request, res: Response, next: NextFunction): Response | void => {
  try {
    return res.send({status: 'ok'});
  } catch (e) {
    return next(e);
  }
});

export = router;