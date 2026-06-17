"use client";

import { motion } from "framer-motion";
import { MapPin, ChatCircle, Star, Heart, Compass, UserCircle } from "@/lib/phosphor";
import { experiences, posts, categoryGradients, avatarColors } from "@/config/site";

export function Screenshow() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-4">
            Galeria
          </span>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.02em] text-text-primary">
            O Hiven em ação
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Descoberta */}
          <ScreenCard title="Descoberta" icon={<Compass size={16} color="var(--brand)" />}>
            <div className="flex flex-col gap-2">
              {experiences.slice(0, 2).map((exp) => (
                <div key={exp.id} className="flex items-center gap-3 bg-[var(--elevated)]/90 rounded-lg p-2.5">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: categoryGradients[exp.categoryColor] ?? "var(--surface)" }}
                  >
                    {exp.title[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[13px] font-semibold text-text-primary">{exp.title}</h4>
                    <div className="flex items-center gap-1.5 text-[11px] text-text-secondary">
                      <MapPin size={9} color="var(--text-secondary)" />
                      <span>{exp.distance}</span>
                      <span>·</span>
                      <span>{exp.attending} part.</span>
                    </div>
                  </div>
                  <Heart size={16} color="var(--text-secondary)" />
                </div>
              ))}
            </div>
          </ScreenCard>

          {/* Social */}
          <ScreenCard title="Social" icon={<ChatCircle size={16} color="var(--brand)" />}>
            <div className="flex flex-col gap-2">
              {posts.slice(0, 2).map((post, idx) => (
                <div key={post.id} className="flex items-center gap-3 bg-[var(--elevated)]/90 rounded-lg p-2.5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: avatarColors[idx % avatarColors.length] }}
                  >
                    {post.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[13px] font-semibold text-text-primary">{post.name}</h4>
                    <div className="flex items-center gap-1.5 text-[11px] text-text-secondary">
                      <span>{post.via}</span>
                      <span>·</span>
                      <span>{post.place}</span>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: post.rating }).map((_, i) => (
                      <Star key={i} size={8} color="var(--brand-orange)" weight="fill" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScreenCard>

          {/* Perfil */}
          <ScreenCard title="Perfil" icon={<UserCircle size={16} color="var(--brand)" />}>
            <div className="flex flex-col items-center justify-center h-full py-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand to-brand-orange flex items-center justify-center text-2xl font-bold text-text-on-brand mb-4 shadow-lg">
                L
              </div>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: "Experiências", value: "24" },
                  { label: "Seguidores", value: "156" },
                  { label: "Avaliações", value: "48" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <span className="block text-xl font-bold text-text-primary">{s.value}</span>
                    <span className="text-[10px] text-text-secondary">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScreenCard>

          {/* Avaliações */}
          <ScreenCard title="Avaliações" icon={<Star size={16} color="var(--brand)" />}>
            <div className="bg-[var(--elevated)]/90 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: avatarColors[0] }}
                >
                  {posts[0].name[0]}
                </div>
                <div>
                  <span className="text-[12px] font-semibold text-text-primary">{posts[0].name}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: posts[0].rating }).map((_, idx) => (
                      <Star key={idx} size={10} color="var(--brand-orange)" weight="fill" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[12px] text-text-secondary leading-relaxed line-clamp-2">{posts[0].text}</p>
              <div className="flex items-center gap-3 mt-2 text-text-secondary">
                <Heart size={13} color="var(--text-secondary)" />
                <span className="text-[10px]">{posts[0].likes}</span>
                <ChatCircle size={13} color="var(--text-secondary)" />
                <span className="text-[10px]">{posts[0].comments}</span>
              </div>
            </div>
          </ScreenCard>
        </div>
      </div>
    </section>
  );
}

function ScreenCard({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--elevated)]"
    >
      <div className="bg-gradient-to-br from-[var(--surface)] to-[var(--bg)] p-5 min-h-[200px] relative">
        {children}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          {icon}
          <h4 className="text-[15px] font-semibold text-text-primary">{title}</h4>
        </div>
      </div>
    </motion.div>
  );
}
