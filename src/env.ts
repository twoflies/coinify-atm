import dotenv from 'dotenv'

dotenv.config();

export const env = {
    isTest: process.env['NODE_ENV'] === 'test',
    app: {
        name: process.env['APP_NAME'] || 'app',
        routePrefix: process.env['APP_ROUTE_PREFIX'] || '',
        port: process.env['APP_PORT'] || 80,
        funds: JSON.parse(process.env['APP_FUNDS'])
    },
    logging: {
        level: process.env['LOGGING_LEVEL'] || 'debug'
    }
};