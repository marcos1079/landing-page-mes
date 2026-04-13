import { useState, useCallback } from "react";
import { format } from "date-fns";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import VideoSection from "@/components/VideoSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const DEFAULT_SLOTS: TimeSlot[] = [
  { time: "07:00", status: "livre" },
  { time: "09:00", status: "livre" },
  { time: "11:00", status: "livre" },
  { time: "14:00", status: "livre" },
  { time: "16:00", status: "livre" },
  { time: "19:00", status: "livre" },
];

const generateInitialAvailability = (): DayAvailability => {
  const avail: DayAvailability = {};
  const today = new Date();
  for (let i = 0; i < 60; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const key = format(d, "yyyy-MM-dd");
    avail[key] = DEFAULT_SLOTS.map((s) => ({
      ...s,
      status: Math.random() > 0.3 ? "livre" : "ocupado",
    }));
  }
  return avail;
};

const Index = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [availability, setAvailability] = useState<DayAvailability>(() => generateInitialAvailability());

  const handleToggleSlot = useCallback((dateKey: string, slotIndex: number) => {
    setAvailability((prev) => {
      const daySlots = [...(prev[dateKey] || DEFAULT_SLOTS)];
      daySlots[slotIndex] = {
        ...daySlots[slotIndex],
        status: daySlots[slotIndex].status === "livre" ? "ocupado" : "livre",
      };
      return { ...prev, [dateKey]: daySlots };
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar isAdmin={isAdmin} onToggleAdmin={() => setIsAdmin(!isAdmin)} />
      <HeroSection />
      <ServicesSection />
      <DifferentialsSection />
      <AvailabilitySection availability={availability} onToggleSlot={handleToggleSlot} isAdmin={isAdmin} />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
