import { motion } from "framer-motion";
import { Building2, Users, Plane, PartyPopper, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";

const services = [
  {
    icon: Building2,
    title: "Aluguel para Empresas",
    description:
      "Transporte corporativo sob medida para sua equipe, com motoristas experientes e veículos de alto padrão.",
  },
  {
    icon: Users,
    title: "Viagens em Grupo",
    description:
      "Conforto e espaço para viagens familiares, excursões e passeios com total segurança.",
  },
  {
    icon: Plane,
    title: "Translado Aeroporto",
    description:
      "Pontualidade garantida para embarques e desembarques, com monitoramento de voos em tempo real.",
  },
  {
    icon: PartyPopper,
    title: "Eventos Especiais",
    description:
      "Casamentos, formaturas e eventos corporativos com transporte elegante e organizado.",
  },
];

const ServicesSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  };

  const service = services[current];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            O que oferecemos
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Nossos Serviços
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="border-0 shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader className="p-10 text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <CardTitle className="text-2xl mb-4">
                  {service.title}
                </CardTitle>

                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          {/* Botão anterior */}
          <button
            onClick={prevSlide}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:scale-105 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Botão próximo */}
          <button
            onClick={nextSlide}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 hover:scale-105 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;