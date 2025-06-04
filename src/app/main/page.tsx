
import ImageGenerator from "@/views/main/ImageGenerator";
import ListImages from "@/views/main/ListImages";


export default function page() {
  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center items-center text-white ">
        <ImageGenerator/>
        <ListImages />
    </div>
  )
}
