"use client";

import { motion } from "framer-motion";
import { Download } from "@/lib/phosphor";

export function FinalCTA() {
  return (
    <section id="downloads" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-brand/4 blur-3xl" />

      <div className="mx-auto max-w-3xl px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-4">
            Comece agora
          </span>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.02em] text-text-primary">
            Sua cidade espera por você
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-text-secondary max-w-md mx-auto">
            Baixe o Hiven e comece a descobrir experiências reais perto de você.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://expo.dev/accounts/danielcalebe/projects/hiven/builds/68c9138a-491a-4c1b-83b8-12fd13d2d0ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 h-14 px-6 rounded-full font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] gradient-brand text-text-on-brand shadow-lg"
          >
            <Download size={20} weight="bold" />
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[9px] font-normal opacity-70 uppercase tracking-wider">Download</span>
              <span>APK Android</span>
            </span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-6 text-[13px] text-text-tertiary"
        >
          Gratuito. Disponível para Android e iOS.
        </motion.p>
      </div>
    </section>
  );
}
