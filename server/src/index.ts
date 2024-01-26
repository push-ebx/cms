import express, {Express, NextFunction, Request, Response} from "express";
import * as bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./router";
import cors from "cors";
import {requestError, requestLogger} from "./utils";
import {RequestWithUser} from "./types";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app
  .use((req: RequestWithUser, _: Response, next: NextFunction) => {
    req.query.user = {username: "admin", id: 1};
    next();
  })
  .use(requestLogger)
  .use(express.json())
  .use(bodyParser.json())
  .use('/api', router)
  .use(cors())
  .use(requestError);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});