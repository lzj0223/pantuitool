import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import express, { Request, Response } from 'express';
import logger from 'jet-logger';
import 'express-async-errors';

import BaseRouter from './routes';
import Paths from './common/Paths';
import EnvVars from './common/EnvVars';
import HttpStatusCodes from './common/HttpStatusCodes';
import RouteError from './common/RouteError';
import { NodeEnvs } from './common/misc';

const app = express();
const viewsDir = path.join(__dirname, 'views');
const staticDir = path.join(__dirname, 'public');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(EnvVars.CookieProps.Secret));
app.use(express.static(staticDir));

if (EnvVars.NodeEnv === NodeEnvs.Dev.valueOf()) {
  app.use(morgan('dev'));
}

if (EnvVars.NodeEnv === NodeEnvs.Production.valueOf()) {
  app.use(helmet());
}

// Routes
app.use(Paths.Base, BaseRouter);

app.get('/', (_: Request, res: Response) => res.redirect('/users'));
app.get('/users', (_: Request, res: Response) => res.sendFile('users.html', { root: viewsDir }));

// Error handler
app.use((err: Error, req: Request, res: Response) => {
  if (EnvVars.NodeEnv !== NodeEnvs.Test.valueOf()) {
    logger.err(err, true);
  }

  const status = err instanceof RouteError ? err.status : HttpStatusCodes.BAD_REQUEST;
  res.status(status).json({ error: err.message });
});

// Views setup
app.set('views', viewsDir);

export default app;