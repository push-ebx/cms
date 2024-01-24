import express, {Express, NextFunction, Request, Response} from "express";
import * as bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./router";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json())
   .use(bodyParser.json())
   .use('/api', router)
   .use(cors())
   .use((err: Error, req: Request, res: Response, next: NextFunction) => {
     console.error(err.stack);
     res.status(500).send('Something went wrong');
   });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});