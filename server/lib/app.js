/* eslint-disable no-console */
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import apiRoutes from './routes';

config();

const app = express();

app.use(cors());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api', apiRoutes);

app.use('/api/v1/docs', express.static('server/docs'));

app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'Page Not found'});
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

export default app;
