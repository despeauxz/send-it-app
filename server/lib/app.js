/* eslint-disable no-console */
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import apiRoutes from './routes';

config();

const app = express();

app.use(cors());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use('/api', apiRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

export default app;
