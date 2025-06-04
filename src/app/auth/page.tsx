import LoginForm from "@/views/auth/LoginForm"
import { GiReptileTail } from "react-icons/gi";
function page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-2">
        <section className="w-full md:w-3/4 lg:w-1/3 space-y-5  border-gray-600/50 border p-6 rounded-lg">
          <div className="w-full flex items-center justify-center">
            <div className="p-2 bg-white rounded-md flex flex-col items-center">
              <GiReptileTail size={20} color="black"/>
              <p className="text-black text-sm">kokodrile</p>
            </div>
          </div>
          <LoginForm/>
        </section>
    </div>
  )
}

export default page