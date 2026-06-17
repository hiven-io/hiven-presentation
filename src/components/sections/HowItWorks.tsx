"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, CalendarCheck, Sparkle, Star } from "@/lib/phosphor";
import { steps } from "@/config/site";

const icons = [Compass, CalendarCheck, Sparkle, Star];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[var(--soft)]/50 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading overline="Como funciona" title="Quatro passos para viver a cidade" />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 80,
                  damping: 16,
                }}
                className="rounded-xl bg-[var(--elevated)] border border-[var(--border)] p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={22} color="var(--brand)" />
                  <span className="text-[10px] font-bold text-text-secondary font-mono">0{i + 1}</span>
                </div>
                <h3 className="text-[17px] font-semibold text-text-primary mb-2">{s.title}</h3>
                <p className="text-[15px] text-text-secondary leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
