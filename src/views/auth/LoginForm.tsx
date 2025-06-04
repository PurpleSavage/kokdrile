'use client'

import { type LoginDto } from "@/modules/auth/dto/login.dto"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function LoginForm() {
  const [userLogin,setUserLogin]=useState<LoginDto>({
        email:'',
        password:''
    })
    const router= useRouter()
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        
       router.push('/')
    }
  return (
    <form className="  space-y-6" onSubmit={handleLogin}>
       <div className="space-y-1">
            <h2 className="text-3xl font-medium text-white">Iniciar Sesión</h2>
            <p className="text-gray-300">Ingresa tus credenciales para acceder a tu cuenta</p>
        </div>
        <div className="space-y-3">
            <div className="space-y-2">
                <label htmlFor="email" className="block font-medium text-white">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    className="h-10 px-2 rounded-md w-full outline-none border border-slate-300/50 text-white placeholder:text-gray-400" 
                    placeholder="correo@ejemplo.com"
                    value={userLogin.email}
                    onChange={(e) =>
                        setUserLogin({
                        ...userLogin,
                        email: e.target.value,
                        })
                    }
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="password" className="block font-medium text-white">Contraseña</label>
                <input 
                    type="password" 
                    className="h-10 px-2 rounded-md w-full outline-none border border-slate-300/50 text-white"  
                    id="password" 
                     onChange={(e)=>setUserLogin({
                        ...userLogin,
                        password:e.target.value
                    })}
                />
            </div>
            <button 
                type="submit" 
                className="w-full bg-white hover:bg-gray-200 cursor-pointer text-black rounded-md py-2"
            >Iniciar sesión</button>
            <div className=" flex items-center justify-end  w-full">
              <Link href="/auth/register" className="underline">¿Aún no tienes cuenta?</Link>
            </div>
        </div>
    </form>
  )
}
