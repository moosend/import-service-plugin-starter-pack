import * as config from 'config';
import {ApiErrorResponse, ApiValidationErrorResponse, ApiValidationError} from '../ApiErrors';


class ApiErrorResponseClass implements ApiErrorResponse{
    Error: string;
    Code: number;
    Status: number;
    Service: string;

    constructor(Error: string, Code:number, Status: number){
        this.Error = Error;
        this.Code = Code;
        this.Status = Status;
        this.Service = <string>config.get('details.Name');
    }
}

class ApiValidationErrorResponseClass implements ApiValidationErrorResponse{

    ValidationErrors: Array<ApiValidationError>;
    Code: number;
    Service: string;
    Status:number;


    constructor(ValidationErrors: Array<ApiValidationError>, Code:number, Status: number){
        this.ValidationErrors = ValidationErrors;
        this.Code = Code;
        this.Status = Status;
        this.Service = <string>config.get('details.Name');
    }
}

export class ApiValidationResponseError extends ApiValidationErrorResponseClass{

    constructor(ValidationErrors: Array<ApiValidationError>, Code:number = -1, Status: number = 400){
        super(ValidationErrors, Code, Status);
    }
}

export class ServerError extends ApiErrorResponseClass {
    constructor(Error: string = 'Server Error', Code:number = -3, Status: number = 500){
        super(Error, Code, Status);
    }

}

export class UnauthorizedError extends ApiErrorResponseClass{

    constructor(Error: string = 'Unauthorized', Code:number = -2, Status: number = 401){
        super(Error, Code, Status);
    }
}

export class BadRequestError extends ApiErrorResponseClass {

    constructor(Error: string = 'Bad Request', Code:number = -1, Status: number = 400){
        super(Error, Code, Status);
    }

}

export class SystemError extends ApiErrorResponseClass {
    constructor(Error: string, Code:number = -3, Status: number = 500){
        super(Error, Code, Status);
    }

}
export class NotFoundError extends ApiErrorResponseClass {
    constructor(Error: string = "Not Found", Code:number = -3, Status: number = 404){
        super(Error, Code, Status);
    }

}

export class GeneralApiError extends ApiErrorResponseClass {
    constructor(Error: string, Code:number = -2, Status: number = 400){
        super(Error, Code, Status);
    }

}