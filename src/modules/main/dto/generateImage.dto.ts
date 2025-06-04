export class GenerateImageDto{
    constructor(
        public context:string
    ){}
    static create(object:{[key:string]:string}):[string?, GenerateImageDto?]{
        const {context} =object
        return[
            undefined,
            new GenerateImageDto(context)
        ]
    }
}