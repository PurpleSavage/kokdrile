'use client'

import  { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import { useImageStore } from '@/store/image.store'


export default function ListImages() {
    const [isLoad,setIsLoad]=useState(false)
    const [error,setError]=useState('')

    const setImages = useImageStore((state)=>state.setImages)
    const images =useImageStore(state=>state.images)
   useEffect(()=>{
    const getImages = async ()=>{
        try {
            setIsLoad(true)

            const response = await fetch('/api/image',{
                method:'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json()
            setImages(data)

        } catch (error) {
            console.log(error)
            setError('Error al cargar imágenes')
        }finally{
            setIsLoad(false)
        }
    }
    getImages()
   },[setImages])
  return (
    <section className='grid grid-cols-4 w-full bg-[#1c1c1c]'>
        {
            isLoad ? 
                <p className='text-white'>Cargando...</p>
            : error ? 
            <p className='text-pink-500'>{error}</p>
            :
            images && images.length !== 0 ? 
                images.map(image=>(
                    <ImageCard key={image.id} image={image}/>
                ))
                :
                <p className='text-white'>Aún no tienes imagenes en tu galería</p>
        }
    </section>
  )
}
