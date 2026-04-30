import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Send } from "lucide-react";


const BookingForm = () => {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    data: "",
    servico: "",
  });

  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.nome || !form.whatsapp || !form.data || !form.servico) {
    toast.error("Preencha todos os campos.");
    return;
  }

  const numero = "5563984347495"; // número da empresa

  const mensagem = `Olá! Gostaria de fazer uma pré-reserva:

👤 Nome: ${form.nome}
📱 WhatsApp: ${form.whatsapp}
📅 Data: ${form.data}
🚌 Serviço: ${form.servico}`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
};

  return (
    <section id="reserva" className="py-24 bg-background">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Agende já
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Faça Sua Pré-Reserva
          </h2>

          <p className="text-muted-foreground mt-3">
            Preencha o formulário e retornaremos rapidamente pelo WhatsApp.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl shadow-elevated p-8 md:p-10 space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              id="nome"
              placeholder="Seu nome"
              value={form.nome}
              onChange={(e) =>
                setForm({ ...form, nome: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              placeholder="(00) 00000-0000"
              value={form.whatsapp}
              onChange={(e) =>
                setForm({ ...form, whatsapp: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="data">Data Desejada</Label>
            <Input
              id="data"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={form.data}
              onChange={(e) =>
                setForm({
                  ...form,
                  data: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-2">
            <Label>Tipo de Serviço</Label>
            <Select
              value={form.servico}
              onValueChange={(v) =>
                setForm({ ...form, servico: v })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o serviço" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="Aluguel para Empresas">
                  Aluguel para Empresas
                </SelectItem>

                <SelectItem value="Viagens em Grupo">
                  Viagens em Grupo
                </SelectItem>

                <SelectItem value="Translado Aeroporto">
                  Translado Aeroporto
                </SelectItem>

                <SelectItem value="Eventos Especiais">
                  Eventos Especiais
                </SelectItem>
                <SelectItem value="Outros Serviços">
                  Outros Serviços
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
  variant="hero"
  size="lg"
  className="w-full py-6 text-lg"
  disabled={loading || enviado}
>
  <Send className="w-5 h-5 mr-2" />

  {loading
    ? "Enviando..."
    : enviado
    ? "Pré-Reserva Enviada ✓"
    : "Enviar Pré-Reserva"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;