/**
 * Environments variables declared here.
 */

/* eslint-disable node/no-process-env */



const EnvVars = {
  NodeEnv: (process.env.NODE_ENV ?? ''),
  Port: (process.env.PORT ?? 0),
  CookieProps: {
    Key: 'ExpressGeneratorTs',
    Secret: (process.env.COOKIE_SECRET ?? ''),
    // Casing to match express cookie options
    Options: {
      httpOnly: true,
      signed: true,
      path: (process.env.COOKIE_PATH ?? ''),
      maxAge: Number(process.env.COOKIE_EXP ?? 0),
      domain: (process.env.COOKIE_DOMAIN ?? ''),
      secure: (process.env.SECURE_COOKIE === 'true'),
    },
  },
  Jwt: {
    Secret: (process.env.JWT_SECRET ?? ''),
    Exp: (process.env.COOKIE_EXP ?? ''), // exp at the same time as the cookie
  },
  Mysql: {
    Host: (process.env.DB_HOST ?? '127.0.0.1'),
    User: (process.env.DB_USER ?? ''),
    Password: (process.env.DB_PASS ?? ''),
    Database: (process.env.DB_NAME ?? ''),
    Port: (Number(process.env.DB_PORT) ?? 3306),
  },
  Zinsearch: {
    Host: (process.env.ZINSEARCH_HOST ?? ''),
    User: (process.env.ZINSEARCH_USER ?? ''),
    Password: (process.env.ZINSEARCH_PASS ?? ''),
    Index: (process.env.ZINSEARCH_INDEX ?? ''),
  }
}


export default EnvVars