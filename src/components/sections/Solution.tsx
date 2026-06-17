"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Sparkle, UsersThree, Star, Compass } from "@/lib/phosphor";

const steps = [
  { icon: Compass, label: "Descubra", desc: "Encontre experiências no feed ou mapa" },
  { icon: UsersThree, label: "Participe", desc: "Confirme presença com a comunidade" },
  { icon: MapPin, label: "Vá", desc: "Faça check-in no local" },
  { icon: Sparkle, label: "Compartilhe", desc: "Avalie e publique o que viveu" },
  { icon: Star, label: "Reputação", desc: "Construa credibilidade na rede" },
];

export function Solution() {
  return (
    <section className="py-20 md:py-28 bg-[var(--soft)]/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand/1 to-brand-orange/1 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeading
          overline="A solução"
          title="O Hiven conecta descoberta com experiência real"
          description="Todo conteúdo nasce de algo vivido. Não é sobre postar — é sobre estar lá."
        />
        <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 16,
              }}
              className="flex flex-col items-center text-center flex-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--elevated)] border border-[var(--border)] flex items-center justify-center mb-2.5">
                <s.icon size={22} color="var(--brand)" />
              </div>
              <span className="text-[13px] font-semibold text-text-primary">{s.label}</span>
              <span className="text-[11px] text-text-secondary mt-0.5 hidden md:block">{s.desc}</span>
              <span className="text-[11px] text-text-secondary mt-0.5 block md:hidden">{s.desc.split(" ").slice(0, 4).join(" ")}…</span>
            </motion.div>
          ))}
        </div>
        <div className="hidden md:block relative max-w-4xl mx-auto mt-2">
          <div className="absolute top-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
