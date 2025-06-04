import 'server-only'
import { CustomError } from "@/modules/errors/custom.error"
import { Image } from "../../domain/Image"
import { ImageRaw } from "../repositories/imageRepositoryImpl"
export class ImageMapper{
    static imageEntityFromObject (object:ImageRaw):Image{
        const {context,size,url,_id} = object
        if(!_id ) throw CustomError.badRequest(' Missing id')
        if(!context) throw CustomError.badRequest(' Missing context')
        if(!size) throw CustomError.badRequest(' Missing size')
        if(!url) throw CustomError.badRequest(' Missing url')
        return{

            id:_id, 
            context,
            size,
            url,
        } 
            
        
    }
}