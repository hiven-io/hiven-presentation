import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark, LogoWordmark } from "@/components/ui/HivenLogo";

export const metadata: Metadata = {
  title: "Termos de Uso — Hiven",
  description: "Termos de uso do Hiven. Leia os termos e condições que regem o uso do aplicativo.",
};

export default function TermosDeUso() {
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
            Termos de Uso
          </h1>
          <div className="mt-3 flex items-center gap-3 text-[13px] text-text-tertiary">
            <span>Versão 0.1.0 — beta</span>
            <span className="w-1 h-1 rounded-full bg-text-tertiary" />
            <span>Vigência: 04/06/2026</span>
          </div>
        </div>

        <div className="prose-hiven">
          <p className="text-[15px] leading-relaxed text-text-secondary mb-8">
            Ao instalar e usar o Hiven em sua versão beta, você concorda com os termos abaixo.
            Leia com atenção.
          </p>

          <Section number={1} title="Sobre o beta">
            <p>
              O <strong>Hiven Beta</strong> é uma versão preliminar do aplicativo, distribuída para
              até <strong>50 usuários</strong> via TestFlight (iOS) e Google Internal Testing (Android).
              Pode ter bugs, instabilidades, mudanças de UX, perda de dados e/ou indisponibilidade
              temporária. Você usa por sua conta e risco.
            </p>
          </Section>

          <Section number={2} title="Quem pode usar">
            <ul>
              <li>Maior de 18 anos</li>
              <li>Possuir conta válida (e-mail + senha) criada via app</li>
              <li>Aceitar receber comunicações sobre o beta no e-mail cadastrado</li>
              <li>Não violar as <strong>Regras de comunidade</strong> (seção 4)</li>
            </ul>
          </Section>

          <Section number={3} title="O que o app faz">
            <p>Permite que você:</p>
            <ul>
              <li>Descubra experiências sociais urbanas próximas (feed de descoberta + mapa)</li>
              <li>Crie suas próprias experiências</li>
              <li>Declare participação em experiências de outros</li>
              <li>Crie avaliações e postagens sobre lugares e experiências</li>
              <li>Siga, curta, comente, salve</li>
              <li>Configure preferências (raio de descoberta, tags, notificações)</li>
            </ul>
          </Section>

          <Section number={4} title="Regras de comunidade">
            <p>Você concorda em <strong>não</strong>:</p>
            <ul>
              <li>Publicar discurso de ódio, ameaças, conteúdo sexual explícito, violência gráfica</li>
              <li>Promover atividades ilegais</li>
              <li>Fazer spam, phishing, golpes</li>
              <li>Personificar outras pessoas</li>
              <li>Compartilhar dados pessoais de terceiros sem consentimento</li>
              <li>Tentar contornar mecanismos de proteção</li>
            </ul>
            <p>
              A quebra dos compromissos acima pode resultar em soft-delete dos seus conteúdos,
              suspensão da conta no beta ou banimento permanente em versões futuras do app.
            </p>
          </Section>

          <Section number={5} title="Conteúdo criado por você">
            <ul>
              <li>Você mantém os <strong>direitos autorais</strong> do que cria.</li>
              <li>
                Você nos concede licença gratuita, não-exclusiva e mundial para hospedar, processar
                e exibir seu conteúdo no app durante o beta.
              </li>
              <li>
                Você é responsável por ter os direitos sobre as fotos que envia, incluindo fotos de
                outras pessoas.
              </li>
            </ul>
          </Section>

          <Section number={6} title="Dados e privacidade">
            <p>
              O tratamento de dados é regido pela{" "}
              <Link href="/politica-de-privacidade" className="text-brand hover:underline font-medium">
                Política de Privacidade
              </Link>
              .
            </p>
            <ul>
              <li>Dados do beta podem ser apagados ao final do beta, sem aviso prévio.</li>
              <li>
                Você pode pedir exclusão a qualquer momento via{" "}
                <a href="mailto:hivenapp@gmail.com" className="text-brand hover:underline">
                  hivenapp@gmail.com
                </a>
                .
              </li>
            </ul>
          </Section>

          <Section number={7} title="Disponibilidade e suporte">
            <ul>
              <li>Sem garantia de uptime.</li>
              <li>Suporte via e-mail: hivenapp@gmail.com.</li>
              <li>SLA não-vinculante: respondemos em até 48 horas durante dias úteis.</li>
            </ul>
          </Section>

          <Section number={8} title="Mudanças neste documento">
            <p>
              Podemos atualizar estes termos. Mudanças materiais são comunicadas dentro do app no
              próximo login.
            </p>
          </Section>

          <Section number={9} title="Lei aplicável">
            <p>
              Estes termos são regidos pela legislação brasileira. Foro: comarca da cidade de
              cadastro do usuário ou, na ausência, São Paulo/SP.
            </p>
          </Section>

          <Section number={10} title="Como entrar em contato">
            <p>
              E-mail único:{" "}
              <a href="mailto:hivenapp@gmail.com" className="text-brand hover:underline">
                hivenapp@gmail.com
              </a>
              .
            </p>
          </Section>

          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <p className="text-[13px] text-text-tertiary italic">
              Ao prosseguir com o uso, você confirma que leu e concorda com estes termos.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-[var(--border)] py-8">
        <div className="mx-auto max-w-3xl px-6 flex items-center justify-between text-[13px] text-text-tertiary">
          <span>&copy; {new Date().getFullYear()} Hiven.</span>
          <Link href="/" className="hover:text-text-primary transition-colors">
            hiven.app
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-[17px] font-semibold text-text-primary mb-3 flex items-center gap-2">
        <span className="text-[13px] font-mono text-text-tertiary">{String(number).padStart(2, "0")}</span>
        {title}
      </h2>
      <div className="text-[15px] leading-relaxed text-text-secondary space-y-3">
        {children}
      </div>
    </section>
  );
}
