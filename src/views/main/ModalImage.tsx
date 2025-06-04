import { Image } from "@/modules/main/domain/Image";
import { CgClose } from "react-icons/cg";

interface Props {
  image: Image;
  onClose: () => void;
}

export default function ModalImage({ image, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-black/90 backdrop-blur-md rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
        >
          <CgClose className="w-5 h-5 text-white" />
        </button>

        <div className="p-6 space-y-4">
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.url}
              alt={image.context}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-white text-2xl font-bold">{image.context}</h2>
          <p className="text-white/70">Tamaño: {image.size}</p>
        </div>
      </div>
    </div>
  );
}
