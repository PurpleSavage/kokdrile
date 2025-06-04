import 'server-only'

import { v4 as uuidv4 } from 'uuid';
import OpenAI from "openai";
import { GenerateImageDto } from "../../dto/generateImage.dto";
import { OpenAIRepository } from "../../domain/openaiRepository";
import { imagekitConfig } from '@/modules/config/imageKitconfig';


export class OpenAIService implements OpenAIRepository {
  constructor(private openia: OpenAI) {}
  async generateImageDallee(generateImageDto: GenerateImageDto){
     const { context } = generateImageDto;
     try {
             
      const result = await this.openia.images.generate({
          prompt: context,
          n: 1,
          size: "1024x1024",
          response_format: "b64_json",
       });
  
  
      if (!result.data || result.data.length === 0 || ! result.data[0].b64_json) {
        throw new Error("No se pudo generar la imagen");
      }
  
      const imageBase =  result.data[0].b64_json;
        const id= uuidv4()
        const image = await imagekitConfig.upload({
            file:imageBase,
            fileName: `${id}-image`,
            folder: "/uploads", 
        })

      return {
        url:image.url,
        size:'1024x1024',
        context
      };
      } catch (error) {
        console.error("Error al generar la imagen:", error);
        throw new Error("Error al generar la imagen");
      }
  } 
        
}