
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

//Variables

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const msg: string = "Hello World!"

app.get('/', (req: Request, res: Response) => {
  res.send(msg);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

