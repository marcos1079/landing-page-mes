import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import VideoSection from "@/components/VideoSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar isAdmin={false} onToggleAdmin={() => {}} />
      <HeroSection />
      <ServicesSection />
      <DifferentialsSection />
      <VideoSection />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
