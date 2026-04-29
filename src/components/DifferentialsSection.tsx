import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Wind, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  {
    icon: ShieldCheck,
    title: "Motoristas Profissionais",
    desc: "Equipe treinada, habilitada e com experiência em transporte executivo.",
  },
  {
    icon: Sparkles,
    title: "Vans Higienizadas",
    desc: "Limpeza rigorosa e higienização completa antes de cada viagem.",
  },
  {
    icon: Wind,
    title: "Ar-Condicionado",
    desc: "Climatização perfeita em todos os veículos para seu conforto total.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    desc: "Compromisso com horários — chegamos antes para você nunca se atrasar.",
  },
];

const DifferentialsSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  // AUTO PLAY AUTOMÁTICO
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const item = items[current];

  return (
    <section
      className="py-24"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Por que nos escolher
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
            Nossos Diferenciais
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-6">
              <item.icon className="w-10 h-10 text-accent" />
            </div>

            <h3 className="text-2xl font-bold text-primary-foreground mb-4 font-sans">
              {item.title}
            </h3>

            <p className="text-primary-foreground/70 leading-relaxed text-lg max-w-2xl mx-auto">
              {item.desc}
            </p>
          </motion.div>

          {/* botão anterior */}
          <button
            onClick={prevSlide}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-3 hover:scale-105 transition"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* botão próximo */}
          <button
            onClick={nextSlide}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-3 hover:scale-105 transition"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;