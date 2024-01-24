import postgres from 'postgres';
import dotenv from "dotenv";
import {isNumeric} from "../utils";

dotenv.config();

const options: postgres.Options<{}> | undefined = {
  host: process.env.HOST_DB,
  port: undefined,
  database: process.env.NAME_DB,
  username: process.env.USER_DB,
  password: process.env.PASSWORD_DB
};


if (process.env.PORT_DB && isNumeric(process.env.PORT_DB)) {
  options.port = +process.env.PORT_DB;
}

const sql = postgres(options);

export default sql;