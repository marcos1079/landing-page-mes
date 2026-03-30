import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { format, isSameDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Unlock, Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type SlotStatus = "livre" | "ocupado";

export interface TimeSlot {
  time: string;
  status: SlotStatus;
}

export interface DayAvailability {
  [dateKey: string]: TimeSlot[];
}

const DEFAULT_SLOTS: TimeSlot[] = [
  { time: "07:00", status: "livre" },
  { time: "09:00", status: "livre" },
  { time: "11:00", status: "livre" },
  { time: "14:00", status: "livre" },
  { time: "16:00", status: "livre" },
  { time: "19:00", status: "livre" },
];

const generateInitialAvailability = (): DayAvailability => {
  const avail: DayAvailability = {};
  const today = new Date();
  for (let i = 0; i < 60; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const key = format(d, "yyyy-MM-dd");
    avail[key] = DEFAULT_SLOTS.map((s) => ({
      ...s,
      status: Math.random() > 0.3 ? "livre" : "ocupado",
    }));
  }
  return avail;
};

interface Props {
  availability: DayAvailability;
  onToggleSlot?: (dateKey: string, slotIndex: number) => void;
  isAdmin: boolean;
}

const AvailabilitySection = ({ availability, onToggleSlot, isAdmin }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const dateKey = format(selectedDate, "yyyy-MM-dd");
  const slots = availability[dateKey] || DEFAULT_SLOTS;

  const bookedDates = useMemo(() => {
    return Object.entries(availability)
      .filter(([, sl]) => sl.every((s) => s.status === "ocupado"))
      .map(([k]) => new Date(k + "T12:00:00"));
  }, [availability]);

  return (
    <section id="disponibilidade" className="py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">Agenda</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            {isAdmin ? "Gerenciar Disponibilidade" : "Verifique a Disponibilidade"}
          </h2>
          {isAdmin && (
            <Badge variant="outline" className="mt-3 border-accent text-accent">
              <Lock className="w-3 h-3 mr-1" /> Modo Administrador
            </Badge>
          )}
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl shadow-card p-4"
          >
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(d) => d && setSelectedDate(d)}
              locale={ptBR}
              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              modifiers={{ booked: bookedDates }}
              modifiersClassNames={{ booked: "bg-destructive/20 text-destructive" }}
              className="pointer-events-auto"
            />
            <div className="flex gap-4 mt-4 px-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-accent/60" /> Disponível</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-destructive/40" /> Lotado</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-card rounded-xl shadow-card p-6"
          >
            <h3 className="text-lg font-bold text-foreground mb-1 font-sans">
              {format(selectedDate, "EEEE, dd 'de' MMMM", { locale: ptBR })}
            </h3>
            <p className="text-sm text-muted-foreground mb-6">Horários disponíveis para reserva</p>

            <div className="space-y-3">
              {slots.map((slot, i) => (
                <div
                  key={slot.time}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-lg border transition-colors",
                    slot.status === "livre"
                      ? "border-accent/30 bg-accent/5"
                      : "border-destructive/20 bg-destructive/5"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {slot.status === "livre" ? (
                      <Check className="w-5 h-5 text-accent" />
                    ) : (
                      <X className="w-5 h-5 text-destructive" />
                    )}
                    <span className="font-semibold text-foreground">{slot.time}</span>
                    <Badge
                      variant={slot.status === "livre" ? "secondary" : "destructive"}
                      className={slot.status === "livre" ? "bg-accent/15 text-accent border-0" : ""}
                    >
                      {slot.status === "livre" ? "Disponível" : "Reservado"}
                    </Badge>
                  </div>

                  {isAdmin && onToggleSlot && (
                    <Button
                      size="sm"
                      variant={slot.status === "livre" ? "outline" : "default"}
                      onClick={() => onToggleSlot(dateKey, i)}
                    >
                      {slot.status === "livre" ? (
                        <><Lock className="w-3.5 h-3.5 mr-1" /> Bloquear</>
                      ) : (
                        <><Unlock className="w-3.5 h-3.5 mr-1" /> Liberar</>
                      )}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilitySection;
