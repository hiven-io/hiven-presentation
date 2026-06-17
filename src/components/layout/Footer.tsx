"use client";

import Link from "next/link";
import { LogoMark, LogoWordmark } from "@/components/ui/HivenLogo";

const footerLinks = [
  {
    title: "Produto",
    items: [
      { label: "Para que serve", href: "#produto" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Download", href: "#downloads" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Termos de uso", href: "/termos-de-uso" },
      { label: "Privacidade", href: "/politica-de-privacidade" },
    ],
  },
  {
    title: "Contato",
    items: [{ label: "hivenapp@gmail.com", href: "mailto:hivenapp@gmail.com" }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--soft)]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <LogoMark size={20} />
              <LogoWordmark height={16} />
            </Link>
            <p className="text-[15px] text-text-secondary leading-relaxed max-w-xs">
              Rede social de experiências urbanas. Descubra, participe e compartilhe a cidade.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((g) => (
              <div key={g.title}>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-tertiary mb-3">{g.title}</h4>
                <ul className="flex flex-col gap-2">
                  {g.items.map((item) => (
                    <li key={item.label}>
                      {item.href.startsWith("mailto:") ? (
                        <a href={item.href} className="text-[15px] text-text-secondary hover:text-text-primary transition-colors">{item.label}</a>
                      ) : (
                        <Link href={item.href} className="text-[15px] text-text-secondary hover:text-text-primary transition-colors">{item.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-text-tertiary">&copy; {new Date().getFullYear()} Hiven.</p>
        </div>
      </div>
    </footer>
  );
}
