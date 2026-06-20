"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Download } from "@/lib/phosphor";

const APK_URL = "https://expo.dev/accounts/danielcalebe/projects/hiven/builds/68c9138a-491a-4c1b-83b8-12fd13d2d0ca";

function useThemeColor() {
  const [color, setColor] = useState("#2A2320");
  useEffect(() => {
    const update = () => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue("--text-primary").trim();
      setColor(raw || "#2A2320");
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);
  return color;
}

export function ApkQrButton() {
  const [showQr, setShowQr] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const fgColor = useThemeColor();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!showQr) return;
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowQr(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showQr]);

  const handleClick = () => {
    if (isMobile) {
      window.location.href = "https://expo.dev/accounts/danielcalebe/projects/hiven/builds/68c9138a-491a-4c1b-83b8-12fd13d2d0ca";
    } else {
      setShowQr((v) => !v);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center gap-3 h-14 px-6 rounded-full font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] gradient-brand text-text-on-brand shadow-lg"
      >
        <Download size={20} weight="bold" />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[9px] font-normal opacity-70 uppercase tracking-wider">Download</span>
          <span>APK Direto</span>
        </span>
      </button>

      <AnimatePresence>
        {showQr && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 z-50"
          >
            <div className="rounded-2xl bg-[var(--elevated)] border border-[var(--border)] shadow-2xl p-5 flex flex-col items-center gap-3">
              <QRCodeSVG
                value={APK_URL}
                size={160}
                bgColor="transparent"
                fgColor={fgColor}
                level="M"
                includeMargin={false}
              />
              <p className="text-[12px] text-text-secondary text-center leading-snug">
                Escaneie para baixar<br />no seu Android
              </p>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[var(--elevated)] border-r border-b border-[var(--border)]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
