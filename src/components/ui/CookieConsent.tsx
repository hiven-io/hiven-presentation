"use client";

import { useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ShieldCheck } from "@/lib/phosphor";
import Link from "next/link";

const STORAGE_KEY = "hiven-cookie-consent";

function getConsentSnapshot() {
  return localStorage.getItem(STORAGE_KEY) ?? "";
}

function getConsentServerSnapshot() {
  return "";
}

function subscribeConsent(callback: () => void) {
  const handler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, getConsentServerSnapshot);
  const visible = consent === "";

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY, newValue: "accepted" }));
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY, newValue: "rejected" }));
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6"
        >
          <div className="mx-auto max-w-2xl rounded-2xl bg-[var(--elevated)] border border-[var(--border)] shadow-lg p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--wash)] flex items-center justify-center flex-shrink-0 hidden sm:flex">
                <Cookie size={20} color="var(--brand)" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-semibold text-text-primary mb-1">
                  Cookies e privacidade
                </h3>
                <p className="text-[13px] leading-relaxed text-text-secondary mb-4">
                  Usamos cookies apenas para manter você logado e lembrar suas preferências. Não
                  rastreamos nem compartilhamos seus dados com terceiros. Leia nossa{" "}
                  <Link
                    href="/politica-de-privacidade"
                    className="text-brand hover:underline font-medium"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={accept}
                    className="inline-flex items-center gap-2 h-9 px-4 rounded-full text-[13px] font-semibold gradient-brand text-text-on-brand transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <ShieldCheck size={14} />
                    Aceitar
                  </button>
                  <button
                    type="button"
                    onClick={reject}
                    className="inline-flex items-center h-9 px-4 rounded-full text-[13px] font-semibold text-text-secondary bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all"
                  >
                    Rejeitar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
