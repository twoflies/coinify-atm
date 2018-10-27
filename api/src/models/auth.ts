export const GrantTypePin = 'pin';
export const TokenTypeBearer = 'bearer';
export const DefaultExpiresInSeconds = 5 * 60;

export class AuthRequest {
    public grantType: string;

    public accountNumber: string;

    public pin: string;
}

export class AuthResponse {
    public accessToken: string;

    public tokenType: string;

    public expiresIn : number;
}