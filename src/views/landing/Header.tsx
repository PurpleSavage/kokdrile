import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";
import style from '../css/landing.module.css'
function Header() {
  return (
    <header className="flex items-start overflow-hidden justify-center relative w-full ">
      <video width="600" height="600" autoPlay loop muted playsInline className="">
        <source src="/black-hole.mp4" type="video/webm" />
        Tu navegador no soporta la reproducción de videos.
      </video>
     <div className="absolute overflow-hidden top-0 left-0 right-0 bottom-0 flex items-center 
     justify-center flex-col gap-6 bg-black/40">
        <div className={`${style.meteorContainer} rotate-90`}>
            <div className={`${style.meteor}`}></div>
            <div className={`${style.meteor}`}></div>
            <div className={`${style.meteor}`}></div>
            <div className={`${style.meteor}`}></div>
            <div className={`${style.meteor}`}></div>
        </div>
        <h1 className="text-7xl text-white font-bold animate-pulse">GENERA IMÁGENES ÉPICAS</h1>
        <p className="text-xl text-gray-300 md:w-3/4 lg:w-3/4 font-bold text-center">Transforma conceptos en arte visual revolucionario. 
          Nuestra IA de última generación combina algoritmos RGB avanzados para crear imágenes que desafían la realidad.</p>

        <Link href="" className="flex px-6 gap-2 items-center py-2 bg-white text-black rounded-md">
          Iniciar generación
          <FaArrowRight size={20}/>
        </Link>
     </div>
    </header>
  )
}

export default Header