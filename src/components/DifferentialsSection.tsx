import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Wind, Clock } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Motoristas Profissionais", desc: "Equipe treinada, habilitada e com experiência em transporte executivo." },
  { icon: Sparkles, title: "Vans Higienizadas", desc: "Limpeza rigorosa e higienização completa antes de cada viagem." },
  { icon: Wind, title: "Ar-Condicionado", desc: "Climatização perfeita em todos os veículos para seu conforto total." },
  { icon: Clock, title: "Pontualidade", desc: "Compromisso com horários — chegamos antes para você nunca se atrasar." },
];

const DifferentialsSection = () => (
  <section className="py-24" style={{ background: "var(--hero-gradient)" }}>
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-accent font-semibold text-sm tracking-widest uppercase">Por que nos escolher</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-3">Nossos Diferenciais</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-5">
              <item.icon className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-primary-foreground mb-2 font-sans">{item.title}</h3>
            <p className="text-primary-foreground/70 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
