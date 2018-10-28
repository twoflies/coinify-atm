import * as winston from 'winston';
import { env } from '../env';

export const logger = winston.createLogger({
    level: !env.isTest ? env.logging.level : 'silent',
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
  });