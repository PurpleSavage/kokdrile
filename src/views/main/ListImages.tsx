"use client";
import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import ModalImage from "./ModalImage";
import { useImageStore } from "@/store/image.store";
import { Image as ImageType } from "@/modules/main/domain/Image";
import ImageCardSkeleton from "./ImageCardSkeleton";

export default function ListImages() {
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const setImages = useImageStore((state) => state.setImages);
  const images = useImageStore((state) => state.images);
  const isAdding = useImageStore((state) => state.isAdding);
  const newImageId = useImageStore((state) => state.newImageId);

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoad(true);
        const response = await fetch("/api/image");
        const data = await response.json();
        console.log(data);
        setImages(data);
      } catch (error) {
        console.error(error);
        setError("Error al cargar imágenes");
      } finally {
        setIsLoad(false);
      }
    };

    if (!newImageId) {
      // carga normal sin imagen nueva pendiente
      getImages();
      return;
    }

    let retries = 0;
    const MAX_RETRIES = 2;
    const RETRY_DELAY = 8000;

    const retryFetch = async () => {
      retries++;
      try {
        const res = await fetch("/api/image");
        const data = await res.json();
        console.log(data);
        const newImage = data.find((img: ImageType) => img.id === newImageId);

        if (newImage && newImage.url) {
          const uniqueImages = data.filter(
            (img: ImageType, index: number, self: ImageType[]) =>
              index === self.findIndex((t) => t.id === img.id)
          );
          setImages(uniqueImages);
          useImageStore.getState().setNewImageId(null); // ya cargó, limpia estado
        } else if (retries < MAX_RETRIES) {
          setTimeout(retryFetch, RETRY_DELAY);
        } else {
          // si quieres puedes mostrar error o mensaje
          setError("ocurrió un error al cargar");
        }
      } catch (error) {
        console.log(error);
        if (retries < MAX_RETRIES) {
          setTimeout(retryFetch, RETRY_DELAY);
        } else {
          // manejar error
          setError("ocurrió un error al cargar las imágenes");
        }
      } finally {
        setIsLoad(false);
      }
    };

    retryFetch();
  }, [newImageId, setImages]);

  return (
    <section className="w-full p-4">
      {selectedImage && (
        <ModalImage
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

      {isLoad ? (
        <div className="bg-[#1c1c1c] backdrop-blur-sm rounded-2xl p-8 border border-white/10 w-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-2xl font-semibold">
              Cargando tus imagenes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <ImageCardSkeleton key={i} />
            ))}
          </div>
        </div>
      ) : error ? (
        <p className="text-pink-500">{error}</p>
      ) : images && images.length !== 0 ? (
        <div className="bg-[#1c1c1c] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-2xl font-semibold">
              Tus imagenes creadas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {isAdding && <ImageCardSkeleton key="skeleton-placeholder" />}
            {images.map((image) => (
              <ImageCard
                key={image.id}
                image={image}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-[#1c1c1c] backdrop-blur-sm rounded-2xl p-8 border border-white/10 w-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-white text-2xl font-semibold">
              Tus imagenes creadas
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center py-16 text-white/70">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mb-4 text-white/30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5h18M3 19h18M4 8h16v8H4V8z"
                />
              </svg>
              <p className="text-lg font-medium text-white/80">
                Sin imágenes aún
              </p>
              <p className="text-sm mt-1 text-white/50">
                Sube tu primera imagen para comenzar tu galería
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
