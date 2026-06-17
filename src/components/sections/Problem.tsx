"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, Star, UsersThree } from "@/lib/phosphor";
import { problems } from "@/config/site";

const icons = [Compass, Star, UsersThree];

export function Problem() {
  return (
    <section id="produto" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          overline="O problema"
          title="As ferramentas atuais não foram feitas para descobrir a cidade"
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((p, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                }}
                className="rounded-xl bg-[var(--elevated)] border border-[var(--border)] p-6 hover:border-[var(--border-strong)] hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--wash)] flex items-center justify-center mb-4">
                  <Icon size={20} color="var(--brand)" />
                </div>
                <h3 className="text-[17px] font-semibold text-text-primary mb-2">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-text-secondary">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
