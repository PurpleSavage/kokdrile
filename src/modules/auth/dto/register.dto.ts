import { Validators } from "../validators/validators";

export class RegisterDto{
    constructor(
        public email:string,
        public password:string,
        public name:string
    ){}
    static create( object: { [ key: string ]: string} ): [ string?, RegisterDto?]{
        const { email, password,confirmPassword,name } = object;
        if([email,password,confirmPassword].every(e=>e==="")) return ["All fields are required."]

        if(confirmPassword !== password) return["Your password and confirmation do not match."]

        if ( !email ) return [ 'Missing email' ];
        if (typeof email !=="string" || !Validators.email.test( email ) ) return [ 'Email is not valid' ];
        if ( !password ) return ['Missing password'];
        if (typeof password !=="string" || password.length < 6 ) return ['Password too short'];
        if(!name) return['Missing name']
        return [
          undefined,
          new RegisterDto(email, password,name)
        ];
    }
}