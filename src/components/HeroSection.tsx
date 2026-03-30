import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-van.jpg";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById("reserva")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Van executiva premium"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.85 }} />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 tracking-wide">
            Transporte Executivo Premium
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Conforto e Segurança em{" "}
            <span className="text-gradient-gold">Cada Viagem</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-xl">
            Translados executivos, viagens em grupo e aluguel corporativo com a
            qualidade e pontualidade que você merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" onClick={scrollToBooking} className="px-10 py-6 text-lg">
              Reserve Agora
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })} className="px-10 py-6 text-lg">
              Nossos Serviços
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
