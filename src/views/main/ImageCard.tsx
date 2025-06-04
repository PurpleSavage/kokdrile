import { Image as ImageEntity } from '@/modules/main/domain/Image'
import React from 'react'



interface ImageCardProps{
    image:ImageEntity
}
export default function ImageCard({image}:ImageCardProps) {
  return (
    <div className='w-full'>
        <div className='w-full border border-slate-500/50'>
          <img
            className='w-full'
            alt='Image'
            src={image.url}
          /> 
        </div>
        <div className='space-y-2'>
          <div className='flex justify-between'>
            <p className='w-1/2 text-ellipsis overflow-hidden'>{image.context}</p>
            <p className='py-1  bg-green-800 border border-green-600'>{image.size}</p>
          </div>
          <p>Image Marketing</p>
        </div> 
    </div>
  )
}
