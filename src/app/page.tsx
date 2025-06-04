import CommunitySection from "@/views/landing/CommunitySection";
import FeaturesSection from "@/views/landing/FeaturesSection";
import Footer from "@/views/landing/Footer";
import Header from "@/views/landing/Header";
import Navbar from "@/views/shared/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Header />
      <CommunitySection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
