import {NextFunction, Request, Response} from "express";

export const isNumeric = (num: any) => (typeof(num) === 'number' || typeof(num) === "string" && num.trim() !== '') && !isNaN(num as number);
export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} url:: ${req.url}`);
  next();
};

export const requestError = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
}