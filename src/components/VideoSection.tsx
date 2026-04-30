import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imagens = [
  "/imagens/1.jpeg",
  "/imagens/11.jpeg",
  "/imagens/111.jpeg",
  "/imagens/2.jpeg",
  "/imagens/22.jpeg",
  "/imagens/222.jpeg",
  "/imagens/3.jpeg",
  "/imagens/33.jpeg",
];

const VideoSection = () => {
  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 👇 navegação manual
  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % imagens.length);
  };

  return (
    <section id="apresentacao" className="py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Conheça a M&S Transporte e Turismo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Apresentação da Empresa
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-card relative"
        >
          <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden rounded-2xl">

            {/* FUNDO DESFOCADO */}
            <img
              src={imagens[index]}
              className="absolute w-full h-full object-cover blur-2xl scale-110 opacity-10"
            />

            {/* IMAGEM PRINCIPAL */}
            <img
              src={imagens[index]}
              className="relative max-h-full object-contain z-10"
            />

            {/* 🔥 SETA ESQUERDA */}
            <button
              onClick={prevSlide}
              className="absolute left-4 z-20 bg-white/80 hover:bg-white text-black p-3 rounded-full transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* 🔥 SETA DIREITA */}
            <button
              onClick={nextSlide}
              className="absolute right-4 z-20 bg-white/80 hover:bg-white text-black p-3 rounded-full transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* INDICADORES */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {imagens.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;