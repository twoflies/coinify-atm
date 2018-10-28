import 'reflect-metadata';
import { MicroframeworkSettings } from 'microframework';
import { createExpressServer } from 'routing-controllers';
import * as bodyParser from 'body-parser';
import { TransactionController } from '../controllers/transaction';
import { env } from '../env';
import { ErrorMiddleware } from '../middleware/error';
import * as express from 'express';
import * as path from 'path';
 
export function expressLoader(settings: MicroframeworkSettings) {
    const app = createExpressServer({
        routePrefix: env.app.routePrefix,
        defaultErrorHandler: false,
        middlewares: [
            ErrorMiddleware
        ],
        controllers: [
            TransactionController
        ]
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.resolve(__dirname, '..', 'public')));

    app.listen(env.app.port);

    return app;
}