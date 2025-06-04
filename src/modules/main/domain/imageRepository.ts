import 'server-only'
import {type GenerateImageDto } from "../dto/generateImage.dto";
import { Image } from "./Image";

export interface ImageRepository{
    generateImage(generateImageDto:GenerateImageDto):Promise<Image>
    getIamges():Promise<Image[]>
}