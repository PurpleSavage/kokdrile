import 'server-only'


import OpenAI from "openai";
import { GenerateImageDto } from "../../dto/generateImage.dto";
import { OpenAIRepository } from "../../domain/openaiRepository";


export class OpenAIService implements OpenAIRepository {
  constructor(private openia: OpenAI) {}
  async generateImageDallee(generateImageDto: GenerateImageDto){
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