import HttpStatusCodes from "../common/HttpStatusCodes";
import { Request, Router, Response } from 'express';


export interface ResponseJson<T> {
    code?: HttpStatusCodes,
    data?: T,
    msg?: string
}


export type ControllerMethod<T> = (req: Request) => Promise<ResponseJson<T>> | ResponseJson<T>;
export type RouterMethod = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'options' | 'head';


export class AppRouter {
    private router: Router

    private basePatsh = '';

    constructor(basePath: string) {
        this.router = Router()
        this.basePatsh = basePath
    }

    add(path: string, routerMethod: RouterMethod, controllerMethod: ControllerMethod<unknown>) {
        this.router[routerMethod](path, async (req: Request, res: Response) => {
            const result = await Promise.resolve(controllerMethod(req))
            if (!result.code) {
                result.code = HttpStatusCodes.OK
            }
            res.status(HttpStatusCodes.OK).json(result);
        });
        return this;
    }

    getRouter(): Router {
        return this.router
    }

    getBasePath(): string {
        return this.basePatsh
    }
}
