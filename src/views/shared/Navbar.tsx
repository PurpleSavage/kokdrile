import Link from "next/link"


function Navbar() {
  return (
    <nav className="sticky top-0 z-10 p-4 flex items-center border-b border-slate-600/50"  style={{ backdropFilter: 'blur(8px)' }}>
        <p className="text-2xl font-bold text-white grow ">Kokodrile</p>
        <div className="space-x-6">
            <Link href="" className="px-6 py-2 hover:bg-slate-200 font-medium rounded-md bg-white
             text-black">Register</Link>
            <Link href="" className="px-6 py-2 hover:text-slate-300 font-medium rounded-md border border-slate-600/50
             text-white">Sign in</Link>
        </div>
    </nav>
  )
}

export default Navbar