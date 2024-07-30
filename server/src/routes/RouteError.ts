import HttpStatusCodes from '../common/HttpStatusCodes';


/**
 * Error with status code and message
 */
class RouteError extends Error {

  public code: HttpStatusCodes;

  public constructor(status: HttpStatusCodes, message: string) {
    super(message);
    this.code = status;
  }
}


// **** Export default **** //

export default RouteError;
