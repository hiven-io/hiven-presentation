"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "@/lib/phosphor";

interface DownloadButtonProps {
  store: "google-play" | "app-store" | "apk";
  href?: string;
}

const GooglePlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M4.2 2.5C3.8 2.8 3.5 3.3 3.5 4v16c0 .7.3 1.2.7 1.5l.1.1L13.4 12 4.3 2.6l-.1-.1z"
      fill="currentColor"
    />
    <path
      d="M16.3 15.2L13.4 12l2.9-3.2 3.3 1.9c.6.3.6.8 0 1.1l-3.3 3.4z"
      fill="currentColor"
    />
    <path
      d="M4.2 21.5c.3.3.8.5 1.4.5.4 0 .8-.1 1.2-.4l10-5.7-2.9-2.9L4.2 21.5z"
      fill="currentColor"
    />
    <path
      d="M16.8 8.4L6.8 2.7c-.4-.3-.8-.4-1.2-.4-.6 0-1.1.2-1.4.5L13.4 12l3.4-3.6z"
      fill="currentColor"
    />
  </svg>
);

const AppStoreIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C9.5 2 8 3.8 8 6.5c0 2 1 3.5 2.5 4.5L12 22l1.5-11c1.5-1 2.5-2.5 2.5-4.5C16 3.8 14.5 2 12 2z"
      fill="currentColor"
      fillOpacity="0.2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 6.5C9 4.5 10.3 3 12 3s3 1.5 3 3.5S13.7 10 12 10 9 8.5 9 6.5z"
      fill="currentColor"
    />
    <path
      d="M7.5 14.5L12 22l4.5-7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const config = {
  "google-play": {
    label: "Google Play",
    sub: "Disponível na",
    icon: <GooglePlayIcon />,
  },
  "app-store": {
    label: "App Store",
    sub: "Disponível na",
    icon: <AppStoreIcon />,
  },
  apk: {
    label: "APK Direto",
    sub: "Download",
    icon: <Download size={20} weight="bold" />,
  },
};

export function DownloadButton({ store, href = "#" }: DownloadButtonProps) {
  const [showToast, setShowToast] = useState(false);
  const c = config[store];
  const isPlaceholder = href === "#";

  return (
    <div className="relative">
      <a
        href={isPlaceholder ? undefined : href}
        onClick={(e) => {
          if (isPlaceholder) {
            e.preventDefault();
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2500);
          }
        }}
        className="inline-flex items-center gap-3 h-14 px-6 rounded-full font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] gradient-brand text-text-on-brand shadow-lg"
      >
        {c.icon}
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[9px] font-normal opacity-70 uppercase tracking-wider">{c.sub}</span>
          <span>{c.label}</span>
        </span>
      </a>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap gradient-brand text-text-on-brand text-sm py-2 px-4 rounded-full shadow-lg"
          >
            Em breve disponível
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
