import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import express, { NextFunction, Request, Response } from 'express';
import logger from 'jet-logger';
import 'express-async-errors';

import routers from './routes';
import EnvVars from './core/common/EnvVars';
import HttpStatusCodes from './core/common/HttpStatusCodes';
import RouteError from './core/router/RouteError';
import { NodeEnvs } from './core/common/misc';
import Mysql from './core/db/Mysql';

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
routers.forEach((item) => {
  app.use(item.getBasePath(), item.getRouter());
});


// 404 处理器
app.use((req: Request, res: Response) => {
  res.status(404).json({ code: 404, msg: 'Not Found' });
});

// Error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (EnvVars.NodeEnv !== NodeEnvs.Test.valueOf()) {
    logger.err(err, true);
  }
  const code = err instanceof RouteError ? err.code : HttpStatusCodes.BAD_REQUEST;
  res.status(code).json({ code, msg: err.message });
});

// Views setup
app.set('views', viewsDir);

const server = async () => {
  await Mysql.initialize()

  const SERVER_START_MSG = ('Express server started on port: ' +
    EnvVars.Port.toString());

  app.listen(EnvVars.Port, () => logger.info(SERVER_START_MSG));
}
export default server;