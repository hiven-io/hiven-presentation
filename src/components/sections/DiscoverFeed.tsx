"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Heart, ChatCircle, Sparkle, FunnelSimple } from "@/lib/phosphor";
import { experiences, categoryGradients } from "@/config/site";

export function DiscoverFeed() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeading
              align="left"
              overline="Feed de descoberta"
              title="Deslize por experiências reais perto de você"
              description="Um card deck vertical com fotos, detalhes, distância e participantes. Deslize para cima para ver mais."
              className="!max-w-none"
            />
            <div className="mt-8 flex flex-col gap-3">
              {[
                { icon: FunnelSimple, text: "Filtre por vibe, tipo e formato" },
                { icon: MapPin, text: "Veja distância e localização exata" },
                { icon: Heart, text: "Curta, salve e compartilhe experiências" },
                { icon: Sparkle, text: "Descubra o algoritmo For You baseado nos seus interesses" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-[15px] text-text-secondary">
                  <Icon size={16} color="var(--brand)" weight="bold" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-xl overflow-hidden shadow-lg"
                style={{
                  height: i === 0 ? undefined : undefined,
                  minHeight: i === 0 ? "240px" : "200px",
                  maxHeight: i === 0 ? "300px" : "240px",
                  marginTop: i > 0 ? "-40px" : "0",
                  zIndex: 3 - i,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: categoryGradients[exp.categoryColor] ?? "var(--surface)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--scrim)]" />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span
                    className="inline-flex items-center text-[10px] font-semibold px-2.5 py-1 rounded-full text-text-on-dark"
                    style={{ backgroundColor: exp.categoryColor }}
                  >
                    {exp.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-20">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-text-on-dark leading-tight">{exp.title}</h3>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <MapPin size={10} color="var(--text-on-dark)" opacity={0.6} />
                    <span className="text-[12px] text-text-on-dark/60">{exp.place} — {exp.distance}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-text-on-dark/50">
                    <span>{exp.attending} participantes</span>
                    <span>{exp.time}</span>
                  </div>
                </div>
                <div className="absolute right-3 bottom-6 flex flex-col items-center gap-3">
                  {[
                    { icon: Heart, count: String(exp.attending) },
                    { icon: ChatCircle, count: String(Math.round(exp.attending / 4)) },
                  ].map(({ icon: Icon, count }) => (
                    <div key={count} className="flex flex-col items-center gap-0.5">
                      <Icon size={18} color="var(--text-on-dark)" opacity={0.8} weight="regular" />
                      <span className="text-[8px] text-text-on-dark/50">{count}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
