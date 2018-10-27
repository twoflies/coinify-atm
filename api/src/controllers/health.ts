import { Controller, Get, Post, OnUndefined } from "routing-controllers";
import { logger } from '../utils/logger';

@Controller()
export class HealthController {

    @Get('/health')
    @OnUndefined(200)
    public health(): any {
        return undefined;
    }
}