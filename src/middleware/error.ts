import { Request, Response, NextFunction } from 'express';
import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'after' })
export class ErrorMiddleware implements ExpressErrorMiddlewareInterface {
    public error(error: any, req: Request, res: Response, next?: NextFunction): void {
        if (!res.headersSent) {
            const status = error.httpCode || error.status || 500;
            res.status(status);
            res.json({
                name: error.name,
                message: error.message
            });
        }

        res.end();
    }
}