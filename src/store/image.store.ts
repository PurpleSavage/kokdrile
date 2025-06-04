import { Image } from "@/modules/main/domain/Image";
import { create } from "zustand";

export interface ImageState {
  images: Image[];
  newImageId: string | null; // id de imagen nueva pendiente
  setNewImageId: (id: string | null) => void;
  setImages: (images: Image[]) => void;
  addImage: (image: Image) => void;
  isAdding: boolean;
  setIsAdding: (value: boolean) => void;
}

export const useImageStore = create<ImageState>()((set) => ({
  images: [],
  isAdding: false,
  newImageId: null,
  setNewImageId: (id) => set({ newImageId: id }),
  setImages: (images) => set({ images }),
  addImage: (image) =>
    set((state) => ({ images: [...state.images, image], isAdding: false })),
  setIsAdding: (value) => set({ isAdding: value }),
}));
