"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "@/lib/phosphor";

const STORAGE_KEY = "hiven-theme";

function getThemeSnapshot() {
  return localStorage.getItem(STORAGE_KEY) ?? "system";
}

function getThemeServerSnapshot() {
  return "system";
}

function subscribeTheme(callback: () => void) {
  const handler = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

function resolveTheme(stored: string): "light" | "dark" {
  if (stored === "dark" || stored === "light") return stored;
  if (typeof window !== "undefined") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
}

export function ThemeToggle() {
  const stored = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const theme = resolveTheme(stored);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY, newValue: next }));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="w-9 h-9 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-[var(--surface)] transition-colors"
      aria-label={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
