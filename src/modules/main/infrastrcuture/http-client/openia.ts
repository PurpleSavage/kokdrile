import OpenAI from "openai";
export const openai= new OpenAI({
  apiKey: process.env.OPENIA_API_KEY,
});