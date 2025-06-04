
'use client'
import { type RegisterDto } from "@/modules/auth/dto/register.dto"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"



export default function RegisterForm() {
   const [userRegister,setUserRegister]=useState<RegisterDto>({
           email:'',
           password:'',
           name:''
    })
    const [confirmPassword,SetConfirmPassword] = useState('')


    const router= useRouter()
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault()
        
        router.push('/main')
    }
  return (
    <form  className="space-y-6" onSubmit={handleRegister}>
       <div className="space-y-1">
            <h2 className="text-3xl font-medium text-white">Crear Cuenta</h2>
            <p className="text-gray-300">Regístrate para comenzar a usar la plataforma</p>
        </div>
        <div className="space-y-3"> 
            <div className="space-y-2">
                <label htmlFor="name" className="block font-medium text-white">Nombre completo</label>
                <input 
                    type="email" 
                    id="name" 
                    className="h-10 px-2 rounded-md w-full outline-none border border-slate-300/50 text-white placeholder:text-gray-400" 
                    placeholder="Juan Pérez"
                    value={userRegister.name}
                    onChange={(e)=>setUserRegister({
                        ...userRegister,
                        name:e.target.value
                    })}
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="block font-medium text-white">Email</label>
                <input 
                    type="text" 
                    id="email" 
                    className="h-10 px-2 rounded-md w-full outline-none border border-slate-300/50 text-white placeholder:text-gray-400" 
                    placeholder="correo@jemplo.com"
                    value={userRegister.email}
                    onChange={(e)=>setUserRegister({
                        ...userRegister,
                        email:e.target.value
                    })}
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="password" className="block font-medium text-white">Contraseña</label>
                <input 
                    type="password" 
                    className="h-10 px-2 rounded-md w-full outline-none border text-white border-slate-300/50"  
                    id="password" 
                    value={userRegister.password}
                    onChange={(e)=>setUserRegister({
                        ...userRegister,
                        password:e.target.value
                    })}
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="confirm" className="block font-medium text-white">confirmar contraseña</label>
                <input 
                    type="password" 
                    className="h-10 px-2 rounded-md w-full outline-none border text-white border-slate-300/50"  
                    id="confirm" 
                    value={confirmPassword}
                    onChange={(e)=>SetConfirmPassword(e.target.value)}
                />
            </div>
            <button 
                type="submit" 
                className="w-full bg-white hover:bg-gray-200 cursor-pointer text-black rounded-md py-2"
            >Registrarse</button>
            <div className=" flex items-center justify-end  w-full">
              <Link href="/auth" className="underline">¿Ya tienes cuenta?</Link>
            </div>
        </div>
    </form>
  )
}
