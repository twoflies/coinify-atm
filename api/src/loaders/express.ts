import 'reflect-metadata';
import { MicroframeworkSettings } from 'microframework';
import { createExpressServer } from 'routing-controllers';
import { AccountController } from '../controllers/account';
import { HealthController } from '../controllers/health';
import { env } from '../env';
 
export function expressLoader(settings: MicroframeworkSettings) {
    const app = createExpressServer({
        routePrefix: env.app.routePrefix,
        controllers: [
            HealthController,
            AccountController
        ]
    });
    app.listen(env.app.port);
}