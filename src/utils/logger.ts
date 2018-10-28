import * as winston from 'winston';
import { env } from '../env';

export const logger = winston.createLogger({
    level: env.logging.level,
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
  });