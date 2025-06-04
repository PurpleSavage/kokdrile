import { Image } from "@/modules/main/domain/Image";

interface Props {
  image: Image;
  onClick: () => void;
}

export default function ImageCard({ image, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="group bg-white/5 hover:bg-white/10 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
    >
      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.url}
          alt={image.context}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white font-medium text-sm truncate flex-1">
            {image.context}
          </h3>
          <span className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full whitespace-nowrap">
            {image.size}
          </span>
        </div>
        <p className="text-white/70 text-xs">Image Marketing</p>
      </div>
    </div>
  );
}
