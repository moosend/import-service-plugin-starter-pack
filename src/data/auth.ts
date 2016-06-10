
/*

 Example response body:

 {
 "IsAuthenticated": true,
 "Message": "Success",
 "AuthString": "{\"Username\":\"username\",\"Password\":\"password\"}"
 }

 */

/**
 * Has to be the type for the request body when auth is requested
 */
export interface AuthenticationRequest {
    AuthString: string
}

/**
 *Has to be the type for the response body when auth is requested
 */
export interface AuthenticationResult {
    IsAuthenticated: boolean,
    Message: string,
    AuthString: string
}
