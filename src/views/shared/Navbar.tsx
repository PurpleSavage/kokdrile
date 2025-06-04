'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

function Navbar() {
  const path =usePathname()
  return (
    <nav className="sticky top-0 z-40 p-4 flex items-center border-b border-slate-600/50"  style={{ backdropFilter: 'blur(8px)' }}>
        <Link href="/" className="text-2xl font-bold text-white  ">Kokodrile</Link>
        <div className=" grow flex gap-6 justify-end">
            {
              path==='/auth/register' || path==='/' ? 
              <Link href="/auth/register" className="px-6 py-2 hover:bg-slate-200 font-medium rounded-md bg-white
             text-black">Register</Link> : null
            }
            {
              path === '/auth' || path==='/'? 
              <Link href="/auth" className="px-6 py-2 hover:text-slate-300 font-medium rounded-md border border-slate-600/50
             text-white">Sign in</Link> : null
            }
        </div>
    </nav>
  )
}

export default Navbar