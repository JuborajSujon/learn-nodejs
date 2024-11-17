// const express = require('express')
import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

const getHomeController = (req: Request, res: Response) => {
  res.send('Home Router');
};

app.get('/', getHomeController);

export default app;
