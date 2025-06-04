import 'server-only'

import { GenerateImageDto } from "../dto/generateImage.dto";
import { Image } from "./Image";

export interface OpenAIRepository{
    generateImageDallee(generateImageDto: GenerateImageDto):Promise<Omit<Image,'id'>>
}