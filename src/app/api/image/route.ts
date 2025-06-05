import { ImageService } from "@/modules/main/domain/imageService";
import { GenerateImageDto } from "@/modules/main/dto/generateImage.dto";
import { openai } from "@/modules/config/openiaconfig";
import { ImageRepositoryImpl } from "@/modules/main/infrastrcuture/repositories/imageRepositoryImpl";
import { NextResponse } from "next/server";
import { OpenAIService } from "@/modules/main/infrastrcuture/http-client/openia";



export async function POST(req: Request){
    
    try {
        const body = await req.json();
        const openaiRepository = new OpenAIService(openai)
        const imageRepositoryImpl = new ImageRepositoryImpl(openaiRepository)
        const imageService = new ImageService(imageRepositoryImpl)
        const [error, generateImageDto] = GenerateImageDto.create(body)
        if(error){
            return NextResponse.json({error,status:400})
        }
        const response =await imageService.generateImage(generateImageDto!)
        return NextResponse.json({response,status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:'Hubo un error',status:500})
    }
}


export async function GET() {
    try {
        const openaiRepository = new OpenAIService(openai)
        const imageRepositoryImpl = new ImageRepositoryImpl(openaiRepository)
        const imageService = new ImageService(imageRepositoryImpl)
        const response = await imageService.getIamges()
        return NextResponse.json(response,{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({error:'Hubo un error',status:500})
    }
}
