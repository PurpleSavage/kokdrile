import 'server-only'
import { type GenerateImageDto } from "../dto/generateImage.dto";
import { Image } from "./Image";
import { ImageRepository } from "./imageRepository";

export class ImageService implements ImageRepository{
    constructor(
        private imageRepository:ImageRepository
    ){}
    async generateImage(generateImageDto:GenerateImageDto): Promise<Image> {
        
        return this.imageRepository.generateImage(generateImageDto)
    }
    async getIamges(): Promise<Image[]> {
        return this.imageRepository.getIamges()
    }
}