"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/HivenLogo";
import { ArrowRight, MapPin, Heart, ChatCircle } from "@/lib/phosphor";
import { siteConfig, experiences } from "@/config/site";

function JazzDecor() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <circle cx="100" cy="100" r="60" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <circle cx="100" cy="100" r="40" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      <circle cx="100" cy="100" r="12" fill="rgba(255,255,255,0.08)" />
      <path d="M100 40 C100 40 130 70 130 100 C130 130 100 160 100 160" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" fill="none" />
      <path d="M100 40 C100 40 70 70 70 100 C70 130 100 160 100 160" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" fill="none" />
      <rect x="60" y="95" width="80" height="10" rx="5" fill="rgba(255,255,255,0.04)" />
      <circle cx="55" cy="55" r="3" fill="rgba(255,255,255,0.06)" />
      <circle cx="145" cy="145" r="3" fill="rgba(255,255,255,0.06)" />
      <circle cx="150" cy="50" r="2" fill="rgba(255,255,255,0.04)" />
      <circle cx="50" cy="150" r="2" fill="rgba(255,255,255,0.04)" />
    </svg>
  );
}

function FoodDecor() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <circle cx="100" cy="100" r="55" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <circle cx="100" cy="100" r="45" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <path d="M85 60 L85 140" stroke="rgba(255,255,255,0.07)" strokeWidth="2" strokeLinecap="round" />
      <path d="M85 60 C85 60 75 70 75 80 C75 90 85 90 85 90" stroke="rgba(255,255,255,0.07)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M115 60 L115 85" stroke="rgba(255,255,255,0.07)" strokeWidth="2" strokeLinecap="round" />
      <path d="M115 85 C120 85 125 90 125 95 C125 100 120 105 115 105 C110 105 105 100 105 95 C105 90 110 85 115 85z" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)" />
      <circle cx="60" cy="55" r="2" fill="rgba(255,255,255,0.05)" />
      <circle cx="140" cy="145" r="2" fill="rgba(255,255,255,0.05)" />
      <circle cx="150" cy="60" r="1.5" fill="rgba(255,255,255,0.04)" />
      <circle cx="50" cy="140" r="1.5" fill="rgba(255,255,255,0.04)" />
    </svg>
  );
}

function ArtDecor() {
  return (
    <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <rect x="55" y="50" width="90" height="100" rx="4" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <rect x="65" y="60" width="70" height="50" rx="2" fill="rgba(255,255,255,0.03)" />
      <circle cx="80" cy="75" r="6" fill="rgba(255,255,255,0.05)" />
      <path d="M65 95 L85 80 L100 90 L115 75 L135 95" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
      <rect x="65" y="115" width="30" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
      <rect x="65" y="123" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.03)" />
      <circle cx="45" cy="45" r="2" fill="rgba(255,255,255,0.05)" />
      <circle cx="155" cy="155" r="2" fill="rgba(255,255,255,0.05)" />
      <circle cx="155" cy="45" r="1.5" fill="rgba(255,255,255,0.04)" />
      <circle cx="45" cy="155" r="1.5" fill="rgba(255,255,255,0.04)" />
    </svg>
  );
}

const cardMeta: Record<string, { decor: typeof JazzDecor; gradient: string }> = {
  "1": { decor: JazzDecor, gradient: "linear-gradient(145deg, #3D2066 0%, #2A1547 50%, #1A0D30 100%)" },
  "2": { decor: FoodDecor, gradient: "linear-gradient(145deg, #5C3A1E 0%, #3D2713 50%, #261809 100%)" },
  "3": { decor: ArtDecor, gradient: "linear-gradient(145deg, #4A1525 0%, #330E1A 50%, #1F0810 100%)" },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div className="absolute inset-0 gradient-hero" style={{ y: bgY }} />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand/3 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-orange/2 blur-3xl" />

      <motion.div className="absolute inset-0" style={{ opacity }}>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--hero-from)] to-transparent" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <LogoMark size={20} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                {siteConfig.tagline}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-[28px] sm:text-[36px] md:text-[56px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-text-primary"
            >
              {siteConfig.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-[16px] md:text-[19px] lg:text-[21px] leading-relaxed text-text-secondary max-w-lg"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button variant="cta" size="lg" href="#downloads">
                <span className="flex items-center gap-2">
                  Baixar App
                  <ArrowRight size={18} weight="bold" />
                </span>
              </Button>
              <Button variant="secondary" size="lg" href="#demo">
                Ver Demonstração
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end mt-12 sm:mt-16 lg:mt-0"
          >
            <HeroCards />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroCards() {
  return (
    <div className="relative w-full max-w-[340px] md:max-w-[400px]">
      {experiences.map((exp, i) => {
        const meta = cardMeta[exp.id] ?? cardMeta["1"];
        const Decor = meta.decor;
        return (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 120, damping: 18 }}
            className="absolute w-full rounded-2xl overflow-hidden shadow-lg"
            style={{
              zIndex: 10 - i,
              transform: `translateY(${i * 60}px) scale(${1 - i * 0.04})`,
              marginTop: i > 0 ? `-${60 - i * 10}px` : "0",
            }}
          >
            <div className="relative h-[320px]" style={{ background: meta.gradient }}>
              {/* Decorative SVG */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Decor />
              </div>
              {/* Subtle radial glow */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-white/5 blur-3xl" />
              {/* Bottom scrim for text */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              {/* Category badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/15 text-white backdrop-blur-sm">
                  {exp.category}
                </span>
              </div>
              {/* Info */}
              <div className="absolute bottom-4 left-4 right-16">
                <h3 className="text-2xl font-bold text-white leading-tight">{exp.title}</h3>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <MapPin size={12} color="rgba(255,255,255,0.7)" />
                  <span className="text-[13px] text-white/70">{exp.place} — {exp.distance}</span>
                </div>
                <div className="flex items-center gap-4 mt-2 text-[11px] text-white/50">
                  <span>{exp.attending} participantes</span>
                  <span>{exp.time}</span>
                </div>
              </div>
              {/* Action icons */}
              <div className="absolute right-3 bottom-6 flex flex-col items-center gap-4">
                {[Heart, ChatCircle].map((ActionIcon, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-0.5">
                    <ActionIcon size={18} color="rgba(255,255,255,0.8)" />
                    <span className="text-[8px] text-white/50">{idx === 0 ? exp.attending : Math.round(exp.attending / 4)}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
