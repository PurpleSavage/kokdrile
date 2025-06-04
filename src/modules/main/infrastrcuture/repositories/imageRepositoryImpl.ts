
import { Image } from "../../domain/Image";
import { ImageRepository } from "../../domain/imageRepository";
import { GenerateImageDto } from "../../dto/generateImage.dto";
import type OpenAI from "openai";

export class ImageRepositoryImpl implements ImageRepository {
    constructor(private openia: OpenAI) {}

    async generateImage(generateImageDto: GenerateImageDto): Promise<Image> {
        const { context } = generateImageDto;

        try {
            const result = await this.openia.images.generate({
                prompt: context,
                n: 1,
                size: "1024x1024",
            });


            if (!result.data || result.data.length === 0 || !result.data[0].url) {
                throw new Error("No se pudo generar la imagen");
            }

            const imageUrl = result.data[0].url;

            return {
                url:imageUrl,
                size:'1024x1024',
                context
            };
        } catch (error) {
            console.error("Error al generar la imagen:", error);
            throw new Error("Error al generar la imagen");
        }
    }
}
