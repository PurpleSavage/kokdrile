import 'server-only'

import  { Schema, model, models, Model, Document } from "mongoose";

// ✅ Define la interfaz
export interface ImageDoc extends Document {
  context: string;
  size: string;
  url: string;
}

// ✅ Aplica la interfaz al Schema
const imageSchema = new Schema<ImageDoc>(
  {
    context: { type: String, required: true },
    size: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

export const ImageModel: Model<ImageDoc> =
  (models.Image as Model<ImageDoc>) || model<ImageDoc>("Image", imageSchema);