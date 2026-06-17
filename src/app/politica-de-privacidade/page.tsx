import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark, LogoWordmark } from "@/components/ui/HivenLogo";

export const metadata: Metadata = {
  title: "Política de Privacidade — Hiven",
  description: "Política de privacidade do Hiven. Saiba como coletamos, usamos e protegemos seus dados.",
};

export default function PoliticaDePrivacidade() {
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
            Política de Privacidade
          </h1>
          <div className="mt-3 flex items-center gap-3 text-[13px] text-text-tertiary">
            <span>Versão 0.1.0 — beta</span>
            <span className="w-1 h-1 rounded-full bg-text-tertiary" />
            <span>Vigência: 04/06/2026</span>
          </div>
        </div>

        <div className="prose-hiven">
          <p className="text-[15px] leading-relaxed text-text-secondary mb-8">
            Este documento descreve como o Hiven coleta, usa, armazena e compartilha dados pessoais
            durante a fase beta.
          </p>

          <Section number={1} title="Quem somos">
            <p>
              O Hiven é um aplicativo de descoberta e compartilhamento de experiências sociais
              urbanas, atualmente em <strong>fase beta fechada</strong> com no máximo 50 usuários. O
              responsável pelo tratamento dos dados é a equipe do projeto Hiven, contatável em{" "}
              <a href="mailto:hivenapp@gmail.com" className="text-brand hover:underline">
                hivenapp@gmail.com
              </a>
              .
            </p>
          </Section>

          <Section number={2} title="Dados que coletamos">
            <SubSection title="Dados de conta">
              <ul>
                <li>E-mail (necessário para criar conta e recuperar senha)</li>
                <li>Nome de usuário (público)</li>
                <li>Nome de exibição (público)</li>
                <li>Senha (armazenada com hash via Supabase Auth — nunca em texto plano)</li>
                <li>Foto de perfil (opcional, pública)</li>
                <li>Capa de perfil (opcional, pública)</li>
                <li>Bio (opcional, pública)</li>
                <li>Cidade (opcional, pública)</li>
              </ul>
            </SubSection>

            <SubSection title="Dados de localização">
              <ul>
                <li>
                  Quando você concede a permissão &ldquo;Quando em uso&rdquo;, coletamos sua
                  localização atual para mostrar experiências próximas no feed e no mapa.
                </li>
                <li>
                  Sua localização <strong>não é armazenada</strong> no servidor de forma associada a
                  você. Ela é usada apenas em tempo real e descartada.
                </li>
                <li>
                  A geolocalização pode ser usada (com consentimento explícito) para detecção de
                  presença em experiências — neste caso, apenas o resultado booleano &ldquo;esteve
                  perto&rdquo; é registrado, não suas coordenadas.
                </li>
              </ul>
            </SubSection>

            <SubSection title="Conteúdo criado por você">
              <ul>
                <li>Experiências (título, descrição, datas, fotos, local)</li>
                <li>Postagens (avaliações e recomendações)</li>
                <li>Comentários</li>
                <li>Curtidas, salvamentos</li>
                <li>Quem você segue / quem te segue</li>
              </ul>
            </SubSection>

            <SubSection title="Dados técnicos">
              <ul>
                <li>Crashes do app (capturados pelo TestFlight ou Play Console)</li>
                <li>Token de sessão do Supabase (mantido localmente para manter você logado)</li>
              </ul>
            </SubSection>

            <SubSection title="Dados que não coletamos no beta">
              <ul>
                <li>Tracking de uso / analytics</li>
                <li>Token de push notification</li>
                <li>Áudio / vídeo</li>
                <li>Lista de contatos do dispositivo</li>
                <li>Dados de saúde</li>
                <li>Identificadores publicitários</li>
              </ul>
            </SubSection>
          </Section>

          <Section number={3} title="Como usamos os dados">
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left py-2 pr-4 font-semibold text-text-primary">Dado</th>
                    <th className="text-left py-2 font-semibold text-text-primary">Uso</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-[var(--border)]/50">
                    <td className="py-2 pr-4">Conta + perfil</td>
                    <td className="py-2">Identificar você no app e mostrar para outros usuários (sujeito à sua privacidade)</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]/50">
                    <td className="py-2 pr-4">Localização (temporária)</td>
                    <td className="py-2">Mostrar experiências próximas</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]/50">
                    <td className="py-2 pr-4">Conteúdo</td>
                    <td className="py-2">Compor o feed social e a descoberta</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]/50">
                    <td className="py-2 pr-4">Tags preferidas</td>
                    <td className="py-2">Personalizar a ordem das experiências no seu feed</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Reports</td>
                    <td className="py-2">Permitir moderação manual quando você denuncia conteúdo abusivo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <strong>Não vendemos seus dados.</strong> Não compartilhamos com anunciantes. Não
              fazemos perfilamento para terceiros.
            </p>
          </Section>

          <Section number={4} title="Compartilhamento com terceiros">
            <div className="overflow-x-auto">
              <table className="w-full text-[14px] border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left py-2 pr-4 font-semibold text-text-primary">Terceiro</th>
                    <th className="text-left py-2 pr-4 font-semibold text-text-primary">Para quê</th>
                    <th className="text-left py-2 font-semibold text-text-primary">Dados</th>
                  </tr>
                </thead>
                <tbody className="text-text-secondary">
                  <tr className="border-b border-[var(--border)]/50">
                    <td className="py-2 pr-4">Supabase</td>
                    <td className="py-2 pr-4">Backend (banco, autenticação, storage)</td>
                    <td className="py-2">Conteúdo criado, e-mail/senha hash, localização em tempo real (não armazenada)</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]/50">
                    <td className="py-2 pr-4">Mapbox</td>
                    <td className="py-2 pr-4">Renderização do mapa</td>
                    <td className="py-2">Coordenadas do viewport (não associadas a você)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Apple / Google</td>
                    <td className="py-2 pr-4">Distribuição da build</td>
                    <td className="py-2">Identificadores gerenciados pelas lojas</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[13px] text-text-tertiary">
              Supabase e Mapbox têm políticas próprias de privacidade. Consulte{" "}
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                supabase.com/privacy
              </a>{" "}
              e{" "}
              <a href="https://www.mapbox.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                mapbox.com/legal/privacy
              </a>
              .
            </p>
          </Section>

          <Section number={5} title="Onde armazenamos">
            <ul>
              <li>
                Banco de dados Supabase: região São Paulo (sa-east-1) quando possível, ou US East
                (us-east-1).
              </li>
              <li>
                Fotos enviadas: armazenadas em buckets do Supabase Storage, públicos por padrão.
                Tratar fotos no app como &ldquo;públicas para qualquer pessoa com o link&rdquo;.
              </li>
            </ul>
          </Section>

          <Section number={6} title="Quanto tempo guardamos">
            <ul>
              <li>
                <strong>Beta</strong>: dados ativos enquanto o beta durar. Ao encerrar, podemos apagar
                todos os dados sem aviso prévio.
              </li>
              <li>
                <strong>Conta apagada</strong>: ao solicitar exclusão, apagamos seu perfil, posts,
                experiências, curtidas e comentários em até <strong>30 dias</strong>.
              </li>
              <li>
                <strong>Reports</strong>: mantidos pelo período do beta para auditoria de moderação.
              </li>
            </ul>
          </Section>

          <Section number={7} title="Seus direitos (LGPD)">
            <p>
              Em conformidade com a LGPD (Lei 13.709/2018), você pode:
            </p>
            <ul>
              <li>Confirmar a existência de tratamento</li>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
              <li>Solicitar a exclusão dos seus dados</li>
              <li>Solicitar a portabilidade dos seus dados</li>
              <li>Revogar o consentimento</li>
            </ul>
            <p>
              Como exercer: envie e-mail para{" "}
              <a href="mailto:hivenapp@gmail.com" className="text-brand hover:underline">
                hivenapp@gmail.com
              </a>{" "}
              com o assunto <strong>&ldquo;LGPD&rdquo;</strong>. Atendemos em até 15 dias úteis.
            </p>
          </Section>

          <Section number={8} title="Crianças e adolescentes">
            <p>
              O Hiven é destinado a <strong>maiores de 18 anos</strong>. Não coletamos
              intencionalmente dados de menores de 18. Se você é responsável por um menor e acha que
              enviamos dados dele, escreva para{" "}
              <a href="mailto:hivenapp@gmail.com" className="text-brand hover:underline">
                hivenapp@gmail.com
              </a>{" "}
              e apagaremos imediatamente.
            </p>
          </Section>

          <Section number={9} title="Segurança">
            <ul>
              <li>Senhas armazenadas com hash bcrypt (Supabase Auth)</li>
              <li>Comunicação via HTTPS/TLS 1.2+</li>
              <li>Acesso ao banco controlado por Row Level Security</li>
              <li>Em caso de vazamento, comunicamos os usuários afetados em até 72 horas</li>
            </ul>
          </Section>

          <Section number={10} title="Cookies e rastreadores">
            <p>
              O Hiven é um app nativo e <strong>não usa cookies</strong> no sentido tradicional.
              Usamos um token de sessão local (armazenado em AsyncStorage) para manter você logado.
            </p>
          </Section>

          <Section number={11} title="Alterações">
            <p>
              Podemos atualizar esta política ocasionalmente. Mudanças materiais serão comunicadas
              dentro do app no momento do login e por e-mail.
            </p>
          </Section>

          <Section number={12} title="Encarregado de Proteção de Dados (DPO)">
            <p>
              Contato único:{" "}
              <a href="mailto:hivenapp@gmail.com" className="text-brand hover:underline">
                hivenapp@gmail.com
              </a>
              , atendimento humano durante o beta.
            </p>
          </Section>

          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <p className="text-[13px] text-text-tertiary italic">
              Última atualização: 04/06/2026 (Fase beta).
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-[15px] font-semibold text-text-primary mb-2">{title}</h3>
      <div className="text-[15px] leading-relaxed text-text-secondary space-y-2">
        {children}
      </div>
    </div>
  );
}
