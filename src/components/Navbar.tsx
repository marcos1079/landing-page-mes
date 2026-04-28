import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-transparente.png";

interface Props {
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Disponibilidade", href: "#disponibilidade" },
  { label: "Reservar", href: "#reserva" },
];

const Navbar = ({ isAdmin, onToggleAdmin }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="flex items-center">
          <img
  src={logo}
  alt="M&S Transporte e Turismo"
  className="h-40 w-auto object-contain"
/>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Button
            variant={isAdmin ? "default" : "ghost"}
            size="sm"
            onClick={onToggleAdmin}
            className={cn(isAdmin && "bg-accent text-accent-foreground")}
          >
            <ShieldCheck className="w-4 h-4 mr-1" />
            {isAdmin ? "Admin ON" : "Admin"}
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 pb-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground">
              {l.label}
            </a>
          ))}
          <Button variant="ghost" size="sm" onClick={() => { onToggleAdmin(); setOpen(false); }}>
            <ShieldCheck className="w-4 h-4 mr-1" /> {isAdmin ? "Admin ON" : "Admin"}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
