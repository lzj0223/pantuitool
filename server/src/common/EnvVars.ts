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
  DB: {
    mysql: {
      Host: (process.env.DB_HOST ?? ''),
      User: (process.env.DB_USER ?? ''),
      Password: (process.env.DB_PASS ?? ''),
      Database: (process.env.DB_NAME ?? ''),
      Port: (Number(process.env.DB_PORT) ?? 0),
    }
  }
}


export default EnvVars