import CommunitySection from "@/views/landing/CommunitySection";
import FeaturesSection from "@/views/landing/FeaturesSection";
import Footer from "@/views/landing/Footer";
import Header from "@/views/landing/Header";
import ScrollSection from "@/views/landing/ScrollSection";
import Navbar from "@/views/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <ScrollSection />
      <CommunitySection />
      <FeaturesSection />
      <Footer />
    </>
  );
}
