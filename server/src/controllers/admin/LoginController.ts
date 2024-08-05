
import RouteError from '../../core/router/RouteError';
import HttpStatusCodes from '../../core/common/HttpStatusCodes';
import { ControllerMethod } from '../../core/router/AppRouter';
import { Request } from 'express';



interface AdminInfo {
    username: string
}

export const login: ControllerMethod<AdminInfo> = (req: Request) => {
    throw new RouteError(HttpStatusCodes.NOT_IMPLEMENTED, "Not Implemented");
    return { code: HttpStatusCodes.OK, data: { username: req.body as string }, msg: 'success' }
}
