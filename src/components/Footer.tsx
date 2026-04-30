import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/white.png";

const Footer = () => (
  <footer className="bg-[#0f1f3d] text-white py-10">
    <div className="container">

      {/* GRID PRINCIPAL */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">

        {/* LOGO + DESCRIÇÃO */}
        <div className="space-y-4">
          <img
            src={logo} 
            alt="M&S Transporte e Turismo" 
            className="h-20 w-auto object-contain"
            
          />
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Transporte executivo com conforto, segurança e pontualidade.
          </p>
        </div>

        {/* CONTATO */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Contato</h4>

          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              (63) 98434-7495
            </li>

            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <a
                href="mailto:comercial@mestransporteeturismo.com.br"
                className="hover:underline"
              >
                comercial@mestransporteeturismo.com.br
              </a>
            </li>

            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent" />
              Palmas, TO
            </li>
          </ul>
        </div>

        {/* AÇÕES */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Fale com a gente</h4>

          <div className="flex flex-col gap-3">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/5563984347495"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition text-sm font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Fale no WhatsApp
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/mstransporteeturismo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-sm font-medium"
            >
              <Instagram className="w-4 h-4" />
              @mstransporteeturismo
            </a>

          </div>
        </div>
      </div>

      {/* DIVISÓRIA */}
      <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/50 text-xs">
        © {new Date().getFullYear()} M&S Transporte e Turismo. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;