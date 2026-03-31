import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="py-16" style={{ background: "var(--hero-gradient)" }}>
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="M&S Transporte e Turismo" className="h-12 mb-4 brightness-0 invert" />
          <p className="text-primary-foreground/60 leading-relaxed">
            Transporte executivo com conforto, segurança e pontualidade. Sua viagem começa aqui.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 font-sans">Contato</h4>
          <ul className="space-y-3 text-primary-foreground/70">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /> (11) 99999-0000</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /> contato@vanexpress.com.br</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> São Paulo, SP</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-foreground mb-4 font-sans">WhatsApp</h4>
          <a
            href="https://wa.me/5511999990000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/20 text-accent hover:bg-accent/30 transition-colors font-semibold"
          >
            <MessageCircle className="w-5 h-5" /> Fale Conosco
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/40 text-sm">
        © {new Date().getFullYear()} M&S Transporte e Turismo. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
