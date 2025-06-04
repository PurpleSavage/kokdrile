import { ImageService } from "@/modules/main/domain/imageService";
import { GenerateImageDto } from "@/modules/main/dto/generateImage.dto";
import { openai } from "@/modules/main/infrastrcuture/http-client/openia";
import { ImageRepositoryImpl } from "@/modules/main/infrastrcuture/repositories/imageRepositoryImpl";
import { NextResponse } from "next/server";



export async function POST(req: Request){
    
    try {
        const body = await req.json();
        const imageRepositoryImpl = new ImageRepositoryImpl(openai)
        const imageService = new ImageService(imageRepositoryImpl)
        const [error, generateImageDto] = GenerateImageDto.create(body)
        if(error){
            return NextResponse.json({error,status:400})
        }
        const response = imageService.generateImage(generateImageDto!)
        return NextResponse.json({msg:response,status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:'Hubo un error',status:500})
    }
 }
