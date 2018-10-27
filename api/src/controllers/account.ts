import { Controller, Get, Post, Body } from "routing-controllers";
import { logger } from '../utils/logger';
import { AuthRequest, TokenTypeBearer, DefaultExpiresInSeconds } from "../models/auth";
import { AuthResponse } from "../models/auth";

@Controller()
export class AccountController {

    @Post('/auth')
    public async auth(@Body({ required: true }) request: AuthRequest): Promise<AuthResponse> {

        return {
            accessToken: '',
            tokenType: TokenTypeBearer,
            expiresIn: DefaultExpiresInSeconds
        };
    }
}