'use client'
import { GiReptileTail } from "react-icons/gi";
import { FaArrowUp } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { useState } from "react";
import { GenerateImageDto } from "@/modules/main/dto/generateImage.dto";
export default function ImageGenerator() {
    const [context,setContext]=useState('')
    const [isLoad,setIsLoad]=useState(false)
    const handleSubmit=async (e:React.FormEvent)=>{
        e.preventDefault()
       try {
            setIsLoad(true)
            const [error,generateImageDto] = GenerateImageDto.create({context:context})
            if(error){
                console.log(error)
                return
            }
            const response = await fetch('/api/image',{
                method:'POST',
                 headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(generateImageDto)
            })
            const data = await response.json()
            console.log(data)
       } catch (error) {
            console.log(error)
       }finally{
        setIsLoad(false)
       }

    }
  return (
    <section className=' w-3/5 space-y-6'>
        <div className="space-y-2">
            <h2 className='text-4xl text-white flex items-center justify-center font-medium gap-5 text-center'>
                Kokodrile
                <GiReptileTail size={30} color="white"/>
            </h2>
            <p className="text-slate-300 text-xl font-medium text-center">Crea las mejores imágenes para marketing digital</p>
        </div>
        <form className="bg-[#1c1c1c] border rounded-4xl border-slate-600/50 pt-6 px-6 pb-3" onSubmit={handleSubmit}> 
            <textarea 
                className="text-white outline-none h-[100px] w-full" 
                onChange={(e)=>setContext(e.target.value)}
                value={context}
                placeholder="Describe la imagen que quieres generar" />
            <div className="flex justify-between w-full">
                <button type="button" className="text-pink-600 rounded-full cursor-poointer p-2 border border-slate-500/50"><FaRegHeart size={20}/></button>
                <button type="submit" className=" rounded-full p-2 cursor-poointer bg-gray-600" disabled={isLoad}><FaArrowUp size={18}/></button>
            </div>
        </form> 
    </section>
  )
}
