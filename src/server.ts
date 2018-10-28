import { bootstrapMicroframework } from 'microframework';
import { expressLoader } from './loaders/express';
import { env } from './env';
import { iocLoader } from './loaders/ioc';
 
bootstrapMicroframework({
    loaders: [
        iocLoader,
        expressLoader
    ]
})
.then(() => console.log(`Server is running on ${env.app.routePrefix}:${env.app.port}...`))
.catch(error => console.log(`Application has crashed: ${error}`));