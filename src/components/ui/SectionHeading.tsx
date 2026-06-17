"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {overline && (
        <span className={`inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-4 ${align === "center" ? "mx-auto" : ""}`}>
          {overline}
        </span>
      )}
      <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-[15px] md:text-[17px] leading-relaxed text-text-secondary ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
