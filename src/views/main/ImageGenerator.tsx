"use client";
import { GiReptileTail } from "react-icons/gi";
import { FaArrowUp } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { GenerateImageDto } from "@/modules/main/dto/generateImage.dto";
import { useImageStore } from "@/store/image.store";

export default function ImageGenerator() {
  const [context, setContext] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const setIsAdding = useImageStore((state) => state.setIsAdding);
  const setNewImageId = useImageStore((state) => state.setNewImageId);
  const newImageId = useImageStore((state) => state.newImageId);

  useEffect(()=>{
    setNewImageId(null);
  },[setNewImageId])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoad(true);
    setIsAdding(true);
    try {
      if (newImageId) {
        setNewImageId(null);
      }

      const [error, generateImageDto] = GenerateImageDto.create({ context });
      if (error) {
        console.log(error);
        return;
      }

      const res = await fetch("/api/image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(generateImageDto),
      });

      const image = await res.json(); // probablemente con url: null
      setNewImageId(image.id);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoad(false);
      setIsAdding(false);
      setContext("");
    }
  };

  return (
    <section className=" w-3/5 space-y-6 ">
      <div className="space-y-2 mt-20">
        <h2 className="text-4xl text-white flex items-center justify-center font-medium gap-5 text-center">
          Kokodrile
          <GiReptileTail size={30} color="white" />
        </h2>
        <p className="text-slate-300 text-xl font-medium text-center">
          Crea las mejores imágenes para marketing digital
        </p>
      </div>
      <form
        className="bg-[#1c1c1c] border rounded-4xl border-slate-600/50 pt-6 px-6 pb-3"
        onDragEnter={handleSubmit}
        onSubmit={handleSubmit}
      >
        <textarea
          className="text-white outline-none h-[100px] w-full"
          onChange={(e) => setContext(e.target.value)}
          value={context}
          placeholder="Describe la imagen que quieres generar"
        />
        <div className="flex justify-between w-full">
          <button
            type="button"
            className="text-pink-600 rounded-full cursor-poointer p-2 border border-slate-500/50"
          >
            <FaRegHeart size={20} />
          </button>
          <button
            type="submit"
            className="rounded-full p-2 bg-gray-600 text-white transition-all duration-300 hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoad}
          >
            <FaArrowUp size={18} />
          </button>
        </div>
      </form>
    </section>
  );
}
