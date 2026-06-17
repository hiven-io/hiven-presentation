"use client";

import { motion } from "framer-motion";
import { DownloadButton } from "@/components/ui/DownloadButton";

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
          <DownloadButton store="google-play" />
          <DownloadButton store="app-store" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4"
        >
          <DownloadButton store="apk" />
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
