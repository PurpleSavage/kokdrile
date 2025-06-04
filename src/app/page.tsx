import CommunitySection from "@/views/landing/CommunitySection";
import Header from "@/views/landing/Header";
import Navbar from "@/views/shared/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar/>
      <Header/>
      <CommunitySection/>
    </div>
  );
}
