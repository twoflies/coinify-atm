import 'reflect-metadata';
import { MicroframeworkSettings } from 'microframework';
import { createExpressServer } from 'routing-controllers';
import * as bodyParser from 'body-parser';
import { TransactionController } from '../controllers/transaction';
import { env } from '../env';
import { ErrorMiddleware } from '../middleware/error';
 
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

    if (!env.isTest) {
        app.listen(env.app.port);
    }

    return app;
}