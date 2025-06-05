import 'server-only'

import { Connection } from "@/modules/data/connection";
import { Image } from "../../domain/Image";
import { ImageRepository } from "../../domain/imageRepository";
import { GenerateImageDto } from "../../dto/generateImage.dto";

import { OpenAIRepository } from "../../domain/openaiRepository";
import { ImageModel } from "@/modules/data/models/ImageModel";
import { ImageMapper } from "../mapper/ImageMapper";



export interface ImageRaw {
  _id: string;
  context: string;
  size: string;
  url: string;
}
export class ImageRepositoryImpl implements ImageRepository {
    constructor(private openaiRepository: OpenAIRepository) {}

    async generateImage(generateImageDto: GenerateImageDto): Promise<Image> {

        try {
            const connection = Connection.getInstance()
            await connection.connect()
            const result = await this.openaiRepository.generateImageDallee(generateImageDto)
            const imagemodel = await ImageModel.create({
                context:result.context,
                size:result.size,
                url:result.url
            })
            return ImageMapper.imageEntityFromObject(imagemodel.toObject() as ImageRaw)
        } catch (error) {
            console.error("Error al generar la imagen:", error);
            throw new Error("Error al generar la imagen");
        }
    }
    async getIamges(): Promise<Image[]> {
        try {
            const connection = Connection.getInstance()
            await connection.connect()
            const images = await ImageModel.find()
            console.log(images)
            return images.map(image=>ImageMapper.imageEntityFromObject(image.toObject() as ImageRaw))
        } catch (error) {
            console.error("Error al generar la imagen:", error);
            throw new Error("Error al obtener imágenes");
        }
    }
}
