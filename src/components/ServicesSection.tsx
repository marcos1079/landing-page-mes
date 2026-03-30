import { motion } from "framer-motion";
import { Building2, Users, Plane, PartyPopper } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Aluguel para Empresas",
    description: "Transporte corporativo sob medida para sua equipe, com motoristas experientes e veículos de alto padrão.",
  },
  {
    icon: Users,
    title: "Viagens em Grupo",
    description: "Conforto e espaço para viagens familiares, excursões e passeios com total segurança.",
  },
  {
    icon: Plane,
    title: "Translado Aeroporto",
    description: "Pontualidade garantida para embarques e desembarques, com monitoramento de voos em tempo real.",
  },
  {
    icon: PartyPopper,
    title: "Eventos Especiais",
    description: "Casamentos, formaturas e eventos corporativos com transporte elegante e organizado.",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm tracking-widest uppercase">O que oferecemos</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Nossos Serviços</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="h-full border-0 shadow-card hover:shadow-elevated transition-shadow duration-300 group cursor-default">
              <CardHeader className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
