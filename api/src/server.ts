import { bootstrapMicroframework } from 'microframework';
import { expressLoader } from './loaders/express';
import { env } from './env';
 
bootstrapMicroframework({
    loaders: [
        expressLoader
    ]
})
.then(() => console.log(`Server is running on ${env.app.routePrefix}:${env.app.port}...`))
.catch(error => console.log(`Application has crashed: ${error}`));