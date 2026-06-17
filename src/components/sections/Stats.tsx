"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Star, Sparkle, UsersThree } from "@/lib/phosphor";
import { avatarColors } from "@/config/site";

const metrics = [
  { icon: MapPin, value: "12.4K", label: "Experiências registradas" },
  { icon: Star, value: "8.2K", label: "Avaliações publicadas" },
  { icon: UsersThree, value: "3.1K", label: "Locais descobertos" },
];

const proofs = [
  {
    name: "Lucas",
    initial: "L",
    text: "Fui na Roda de Samba da Praça Sete pelo Hiven e virou meu rolê favorito. Já levei 3 amigos e todo mundo voltou no domingo.",
    exp: "24 experiências",
  },
  {
    name: "Ana",
    initial: "A",
    text: "Finalmente um app onde as avaliações são de verdade. Dá pra saber quem realmente foi e o que achou — sem frescura.",
    exp: "18 experiências",
  },
  {
    name: "Pedro",
    initial: "P",
    text: "O mapa mudou minha relação com a cidade. Antes eu não sabia metade do que estava rolando a três quadras de casa.",
    exp: "32 experiências",
  },
];

function CountUp({ value, format }: { value: string; format: "K" | "number" }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const target = format === "K" ? parseFloat(value) * 1000 : parseInt(value, 10);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  const display = format === "K" ? `${(count / 1000).toFixed(1)}K` : String(count);
  return <span ref={ref}>{display}</span>;
}

export function Stats() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          overline="Números"
          title="Uma comunidade que cresce com a cidade"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              className="text-center p-8 rounded-xl bg-[var(--elevated)] border border-[var(--border)]"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--wash)] flex items-center justify-center mx-auto mb-4">
                <m.icon size={22} color="var(--brand)" />
              </div>
              <span className="block text-3xl font-bold text-text-primary tracking-tight">
                <CountUp value={m.value} format={m.value.endsWith("K") ? "K" : "number"} />
              </span>
              <span className="text-[15px] text-text-secondary mt-1">{m.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {proofs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              className="rounded-xl bg-[var(--soft)] border border-[var(--border)] p-4 md:p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: avatarColors[i % avatarColors.length] }}
                >
                  {p.initial}
                </div>
                <div>
                  <span className="text-[14px] font-semibold text-text-primary">{p.name}</span>
                  <div className="flex items-center gap-1 text-[11px] text-text-secondary">
                    <Sparkle size={11} color="var(--brand-orange)" weight="fill" />
                    {p.exp}
                  </div>
                </div>
              </div>
              <p className="text-[15px] text-text-secondary leading-relaxed italic">&ldquo;{p.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
