export class ValidationError extends Error {
    
	private code:number;

    constructor(msg: string, code?: number) {
        super(msg);
        this.code = code || 500;
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}
//HttpError
try{
	throw new ValidationError("Validation error message");
}
catch(error){
	if(error instanceof ValidationError){
	   console.log('Validation error: '+error.message);
	}
	else{
		console.log('NOT a Validation error');
	}
}