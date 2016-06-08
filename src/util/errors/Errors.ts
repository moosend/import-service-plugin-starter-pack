
export interface Error {
    message: string,
    status: number;

}

export class NotFoundError implements Error{
    public message: string;
    public status: number;

    constructor(message: string, status: number){
        this.message = message;
        this.status = status;
    }
}