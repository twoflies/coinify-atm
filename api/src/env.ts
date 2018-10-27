export const env = {
    app: {
        name: process.env['APP_NAME'] || 'api',
        routePrefix: process.env['APP_ROUTE_PREFIX'] || '',
        port: process.env['APP_PORT'] || '3000'
    },
    logging: {
        level: process.env['LOGGIN_LEVEL'] || 'debug'
    }
};