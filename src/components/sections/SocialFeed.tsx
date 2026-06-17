"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Heart, ChatCircle, Star, MapPin, SealCheck, BookmarkSimple, ShareNetwork, Sparkle } from "@/lib/phosphor";
import { LogoMark } from "@/components/ui/HivenLogo";
import { posts } from "@/config/site";
import { avatarColors } from "@/config/site";

export function SocialFeed() {
  return (
    <section className="py-20 md:py-28 bg-[var(--soft)]/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 flex flex-col gap-3"
          >
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-xl bg-[var(--bg)] border border-[var(--border)] p-4"
              >
                <div className="flex gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: avatarColors[i % avatarColors.length] }}
                  >
                    {post.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[14px] font-semibold text-text-primary">{post.name}</span>
                      <SealCheck size={13} color="var(--brand)" weight="fill" />
                      <span className="text-[12px] text-text-secondary">{post.username}</span>
                      <span className="text-[10px] text-text-tertiary">·</span>
                      <span className="text-[12px] text-text-secondary">{post.time}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1.5">
                      <LogoMark size={11} />
                      <span className="text-[11px] text-text-secondary">via</span>
                      <span className="text-[12px] font-medium text-text-primary">{post.via}</span>
                      <span className="text-[10px] text-text-tertiary">·</span>
                      <MapPin size={10} color="var(--text-secondary)" />
                      <span className="text-[11px] text-text-secondary">{post.place}</span>
                    </div>
                    <div className="flex gap-0.5 mt-2">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          size={12}
                          color={idx < post.rating ? "var(--brand-orange)" : "var(--border)"}
                          weight={idx < post.rating ? "fill" : "regular"}
                        />
                      ))}
                    </div>
                    <p className="text-[13px] leading-relaxed text-text-secondary mt-2">{post.text}</p>
                    <div className="flex items-center gap-4 mt-3 pt-2 border-t border-[var(--border)]/60">
                      <button type="button" className="flex items-center gap-1">
                        <Heart size={16} color="var(--text-secondary)" weight="regular" />
                        <span className="text-[11px] text-text-secondary">{post.likes}</span>
                      </button>
                      <button type="button" className="flex items-center gap-1">
                        <ChatCircle size={16} color="var(--text-secondary)" weight="regular" />
                        <span className="text-[11px] text-text-secondary">{post.comments}</span>
                      </button>
                      <button type="button" className="flex items-center gap-1">
                        <ShareNetwork size={16} color="var(--text-secondary)" weight="regular" />
                      </button>
                      <button type="button" className="flex items-center gap-1 ml-auto">
                        <BookmarkSimple size={16} color="var(--text-secondary)" weight="regular" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <SectionHeading
              align="left"
              overline="Feed social"
              title="Avaliações com contexto de quem realmente foi"
              description="Ratings detalhados, fotos e comentários. Todo conteúdo é conectado a uma experiência vivida — nada de posts genéricos."
              className="!max-w-none"
            />
            <div className="mt-8 flex flex-col gap-3">
              {[
                { icon: Star, text: "Avaliações com múltiplos critérios" },
                { icon: Sparkle, text: "Posts espontâneos sobre cada experiência" },
                { icon: SealCheck, text: "Badge de presença: saiba quem realmente foi" },
                { icon: Heart, text: "Engajamento real: likes, comentários e compartilhamentos" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-[15px] text-text-secondary">
                  <Icon size={16} color="var(--brand)" weight="bold" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


