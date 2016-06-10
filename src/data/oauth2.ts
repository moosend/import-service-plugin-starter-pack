import {AuthenticationResult} from './Auth'

export {AuthenticationResult};

export interface OAuth2Token {
    access_token: string,
    refresh_token: string,
    expires_in: number,
    token_type: string,
    expiration_date?: Date
}
