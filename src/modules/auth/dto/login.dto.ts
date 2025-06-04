import { Validators } from "../validators/validators";

export class LoginDto{
    constructor(
        public email:string,
        public password:string
    ){}
    static create( object: { [ key: string ]: unknown} ): [ string?, LoginDto?]{
        const { email, password } = object;
        if ( !email ) return [ 'Missing email' ];
        if (typeof email !=="string" || !Validators.email.test( email ) ) return [ 'Email is not valid' ];
        if ( !password ) return ['Missing password'];
        if (typeof password !=="string" || password.length < 6 ) return ['Password too short'];
    
        return [
          undefined,
          new LoginDto(email, password)
        ];
    }
}