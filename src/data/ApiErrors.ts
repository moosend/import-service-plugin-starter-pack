
/*

 Example validation error object:

 {
    "ValidationErrors": [
         {
             "Field": "AuthString",
             "Message": "Cannot be empty"
         }
     ],
     "Code": -1,
     "Service": "Template Api Plugin"
 }

 */

/**
 *   Code has to be one of
 *
 *   -1 for bad requests meaning there was a validation error.
 *   -2 for unauthorized requests.
 *   -3 for internal server errors.
 */
export interface ApiValidationErrorResponse {
    ValidationErrors: Array<ApiValidationError>,
    Code: number, //has to be -1, -2 or -3
    Service: string
}

export interface ApiValidationError {
    Field: string,
    Message: string
}
