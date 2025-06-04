import { Image } from '@/modules/main/domain/Image'
import { create } from 'zustand'

interface ImageState {
  images: Image[]
  setImages: (images: Image[]) => void
  addImage: (image: Image) => void
}

export const useImageStore = create<ImageState>()((set) => ({
  images: [],
  setImages: (images) => set({ images }),
  addImage: (image) => set((state) => ({ images: [...state.images, image] })),
}))
