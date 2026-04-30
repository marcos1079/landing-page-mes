import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/white.png";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Reservar", href: "#reserva" },
];

const numero = "5563984347495";

const mensagem = "Olá! Gostaria de saber mais sobre os serviços.";

const whatsappLink = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-lg border-b border-white/10">
      <div className="container flex items-center justify-between h-20">
        
        {/* LOGO */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="M&S Transporte e Turismo"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* BOTÃO WHATSAPP */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-all"
          >
            <FaWhatsapp className="w-4 h-4" />
            Fale no WhatsApp
          </a>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-black border-b border-white/10 px-6 pb-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-white/80 hover:text-white"
            >
              {l.label}
            </a>
          ))}

          {/* BOTÃO WHATSAPP MOBILE */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl text-sm font-semibold mt-3"
          >
            <FaWhatsapp className="w-5 h-5" />
            Fale no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;