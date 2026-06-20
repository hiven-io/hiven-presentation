import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark, LogoWordmark } from "@/components/ui/HivenLogo";

export const metadata: Metadata = {
  title: "Download APK — Hiven",
  description: "Baixe o APK do Hiven e instale diretamente no seu Android. Guia completo de instalação.",
};

export default function DownloadApk() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <header className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <LogoMark size={20} />
            <LogoWordmark height={14} />
          </Link>
          <Link
            href="/"
            className="text-[13px] text-text-secondary hover:text-text-primary transition-colors"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <div className="mb-10">
          <h1 className="text-[28px] md:text-[32px] font-bold text-text-primary tracking-tight">
            Download APK
          </h1>
          <p className="mt-3 text-[17px] text-text-secondary leading-relaxed">
            Baixe e instale o Hiven diretamente no seu Android. Gratuito, sem anúncios, sem rastreamento.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--elevated)] p-6 md:p-8 mb-10">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-1">
              <h2 className="text-[17px] font-semibold text-text-primary mb-2">
                Hiven v0.1.0
              </h2>
              <p className="text-[14px] text-text-secondary mb-1">Tamanho: ~15 MB</p>
              <p className="text-[14px] text-text-secondary mb-4">Requer Android 8.0 ou superior</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://expo.dev/accounts/danielcalebe/projects/hiven/builds/68c9138a-491a-4c1b-83b8-12fd13d2d0ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-full font-semibold text-[14px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] gradient-brand text-text-on-brand shadow-lg"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Baixar APK
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-orange)] flex items-center justify-center">
              <span className="text-2xl font-bold text-white">H</span>
            </div>
          </div>
        </div>

        <h2 className="text-[20px] font-bold text-text-primary mb-6">
          Como instalar
        </h2>

        <ol className="space-y-6">
          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--brand)] text-white flex items-center justify-center text-[13px] font-bold">
              1
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-text-primary mb-1">
                Permitir instalação de fontes desconhecidas
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                Vá em <strong className="text-text-primary">Configurações → Segurança</strong> e ative a opção
                &quot;Fontes desconhecidas&quot; ou &quot;Instalar apps desconhecidos&quot; para o navegador que você utilizou.
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--brand)] text-white flex items-center justify-center text-[13px] font-bold">
              2
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-text-primary mb-1">
                Baixar o APK
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                Clique no botão &quot;Baixar APK&quot; acima. O download começará automaticamente.
                Você pode ver um aviso de segurança — é normal para apps fora da Play Store.
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--brand)] text-white flex items-center justify-center text-[13px] font-bold">
              3
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-text-primary mb-1">
                Instalar o app
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                Abra o arquivo baixado (geralmente na pasta &quot;Downloads&quot;). Toque em &quot;Instalar&quot; e aguarde a conclusão.
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--brand)] text-white flex items-center justify-center text-[13px] font-bold">
              4
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-text-primary mb-1">
                Criar sua conta
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                Abra o Hiven, crie sua conta com email ou Google e comece a explorar experiências reais perto de você.
              </p>
            </div>
          </li>
        </ol>

        <div className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--soft)] p-6">
          <h3 className="text-[15px] font-semibold text-text-primary mb-2">
            Perguntas frequentes
          </h3>
          <div className="space-y-4 mt-4">
            <div>
              <p className="text-[14px] font-medium text-text-primary">É seguro instalar o APK?</p>
              <p className="text-[14px] text-text-secondary mt-1 leading-relaxed">
                Sim. O APK é assinado digitalmente pela equipe do Hiven. Você pode verificar a integridade do arquivo antes de instalar.
              </p>
            </div>
            <div>
              <p className="text-[14px] font-medium text-text-primary">Vai receber atualizações?</p>
              <p className="text-[14px] text-text-secondary mt-1 leading-relaxed">
                Sim. Notificaremos dentro do app quando houver uma nova versão disponível para download.
              </p>
            </div>
            <div>
              <p className="text-[14px] font-medium text-text-primary">Funciona em qualquer Android?</p>
              <p className="text-[14px] text-text-secondary mt-1 leading-relaxed">
                O Hiven requer Android 8.0 (Oreo) ou superior. A maioria dos dispositivos modernos é compatível.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
