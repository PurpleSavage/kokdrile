import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import style from "../css/landing.module.css";
function Header() {
  return (
    <header className="flex items-start overflow-hidden justify-center relative w-full h-screen">
      <video
        width="600"
        height="600"
        autoPlay
        loop
        muted
        playsInline
        className=""
      >
        <source src="/black-hole.mp4" type="video/webm" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 overflow-hidden">
        <div className={`${style.meteorContainer} z-20 rotate-90`}>
          <div className={`${style.meteor}`}></div>
          <div className={`${style.meteor}`}></div>
          <div className={`${style.meteor}`}></div>
          <div className={`${style.meteor}`}></div>
          <div className={`${style.meteor}`}></div>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 right-0 bottom-0 flex items-center 
      justify-center flex-col gap-4 md:gap-6 bg-black/40 z-30 px-4 md:px-8"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
        text-white font-bold animate-pulse text-center leading-tight uppercase"
        >
          Tu marketing, potenciado por IA
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl text-gray-300 
        w-full sm:w-5/6 md:w-3/4 lg:w-3/4 xl:w-2/3 font-bold text-center 
        leading-relaxed"
        >
          Convierte tus conceptos en imágenes profesionales diseñadas para
          captar la atención de tu audiencia y aumentar tus ventas.
        </p>

        <Link
          href="/main"
          className="flex px-4 sm:px-6 gap-2 items-center 
        py-2 sm:py-3 bg-white text-black rounded-md hover:bg-slate-200 
        cursor-pointer text-sm sm:text-base font-medium transition-colors"
        >
          Genera tu imagen <FaArrowRight size={16} className="sm:w-5 sm:h-5" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
