'use client';
import React from 'react';
import { Coffee, ArrowRight, Quote, Check, TrendingUp, Lightbulb, Calendar } from 'lucide-react';

const NAVY = '#0F2A5C';
const GOLD = '#D4A946';
const INK = '#0F1419';
const INK_SOFT = '#2C3440';
const INK_MUTE = '#5B6573';
const LINE = '#E5E9EF';
const BG_SOFT = '#FAFBFC';

const FOTO_AUTOR = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruoFtCtl2GCdFxfesIkwY8dLRo7yubE5GL4YL7kIoUcEOrKWS0kzzD9X7&s=10';
const FOTO_PEDRO = 'https://i.pinimg.com/736x/30/0e/0a/300e0aabcfbe9b3da8c46cd35cf30c4d.jpg';
const FOTO_BAG = 'https://i.pinimg.com/736x/97/c3/cb/97c3cb09fdc7ec5b66c4d99f5f1b6b67.jpg';
const FOTO_CASA = 'https://i.pinimg.com/736x/26/8d/49/268d4948ba31faf6e9c4dd0c8c0a1f88.jpg';
const FOTO_PACOTES = 'https://i.pinimg.com/736x/d0/cb/2c/d0cb2cb20c4faf2b6f29f0a48d2c2b39.jpg';

const MENU = ['Home', 'Materias', 'Economia', 'Cidades', 'Oportunidades'];

function Para({ children }) {
  return <p style={{ fontSize: 17, lineHeight: 1.8, color: INK_SOFT, margin: '0 0 20px' }}>{children}</p>;
}

function H2({ children }) {
  return <h2 style={{ fontSize: 26, fontWeight: 800, color: NAVY, margin: '40px 0 18px', letterSpacing: '-0.02em', lineHeight: 1.3 }}>{children}</h2>;
}

function Citacao({ children }) {
  return (
    <div style={{ background: BG_SOFT, borderLeft: '4px solid ' + GOLD, padding: '20px 24px', margin: '24px 0', borderRadius: '0 8px 8px 0' }}>
      <Quote size={22} color={GOLD} style={{ marginBottom: 8 }} />
      <div style={{ fontSize: 17, lineHeight: 1.7, color: INK, fontStyle: 'italic', fontWeight: 500 }}>{children}</div>
    </div>
  );
}

function CardIdeia({ num, titulo, desc, lucro }) {
  return (
    <div style={{ background: '#fff', border: '1px solid ' + LINE, borderRadius: 12, padding: 20, marginBottom: 14, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <div style={{ background: NAVY, color: '#fff', width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, flexShrink: 0 }}>{num}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 16, fontWeight: 800, color: INK, marginBottom: 4 }}>{titulo}</div>
        <div style={{ fontSize: 14, color: INK_SOFT, lineHeight: 1.6, marginBottom: 8 }}>{desc}</div>
        <div style={{ fontSize: 12, color: GOLD, fontWeight: 700, letterSpacing: '0.05em' }}>{lucro}</div>
      </div>
    </div>
  );
}

export default function PageClient() {
  const [scroll, setScroll] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(Math.min(100, Math.max(0, (window.scrollY / total) * 100)));
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#fff', color: INK, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>

      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, background: 'rgba(0,0,0,0.05)', zIndex: 100 }}>
        <div style={{ height: '100%', width: scroll + '%', background: NAVY, transition: 'width 0.1s' }} />
      </div>

      <header style={{ background: '#fff', borderBottom: '1px solid ' + LINE, position: 'sticky', top: 3, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Coffee size={22} />
            </div>
            <div>
              <div style={{ fontSize: 21, fontWeight: 800, color: NAVY, letterSpacing: '-0.02em', lineHeight: 1 }}>Cafe com Dicas</div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', color: INK_MUTE, marginTop: 5, textTransform: 'uppercase' }}>papo reto - vida real</div>
            </div>
          </a>
          <nav style={{ display: 'flex', gap: 30 }} className="menu-d">
            {MENU.map(m => <a key={m} href="#" style={{ fontSize: 13, color: INK_SOFT, textDecoration: 'none', fontWeight: 600 }}>{m}</a>)}
          </nav>
        </div>
      </header>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px 80px' }}>

        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: GOLD + '15', color: '#8a6f1f', padding: '6px 16px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            <Lightbulb size={12} /> Ideias de Negocio - 8 min de leitura
          </div>
        </div>

        <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em', marginBottom: 24, textAlign: 'center', color: NAVY }} className="h1-main">
          7 ideias para sair do CLT em 2026 - e a que mais cresce <span style={{ color: GOLD }}>nao exige investimento</span>
        </h1>

        <p style={{ fontSize: 19, color: INK_SOFT, lineHeight: 1.6, margin: '0 auto 36px', textAlign: 'center', maxWidth: 620 }}>
          Reuni as 7 oportunidades que mais escutei nos ultimos 6 meses entre amigos, leitores e gente que tomou coragem de mudar. Tem uma especifica que vem chamando atencao - e foi a que tirou um amigo nosso do iFood.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 36 }}>
          <div style={{ width: 80, height: 1, background: LINE }} />
          <div style={{ fontSize: 14, color: GOLD, letterSpacing: '0.4em', fontWeight: 700 }}>- - -</div>
          <div style={{ width: 80, height: 1, background: LINE }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 50 }}>
          <img src={FOTO_AUTOR} alt="Carlos Andrade" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '3px solid ' + NAVY }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: INK }}>Carlos Andrade</div>
            <div style={{ fontSize: 12, color: INK_MUTE }}>papo reto e dicas que ninguem te conta</div>
          </div>
        </div>

        <Para>Toda semana eu recebo umas 10 mensagens parecidas: <em>"Carlos, to cansado do trampo. O que da pra fazer hoje sem ter dinheiro pra investir?"</em></Para>

        <Para>Eu sempre respondia caso por caso. Mas como ja anotei tudo o que mais funcionou, resolvi escrever esse texto. Aqui estao as <strong>7 ideias</strong> que mais aparecem - de quem largou CLT e tirou seu sustento.</Para>

        <Para>No final eu conto a historia do Pedro. Ele era entregador de iFood ate marco de 2025. Hoje fatura mais de <strong>R$ 5.000 por mes</strong> sem sair de casa - e sem ter investido um centavo. Mas vamos por partes.</Para>

        {/* ===== Lista de ideias ===== */}
        <H2>1. Marmita fitness no bairro</H2>
        <Para><strong>Quanto da:</strong> R$ 1.500 a R$ 4.000/mes. Voce produz em casa, vende pelo WhatsApp pra academias e escritorios proximos.</Para>
        <Para><strong>Risco:</strong> Alvara da vigilancia, geladeira boa, conhecimento minimo de nutricao. Estoca pouco, perde pouco. Crescer escala junto.</Para>

        <H2>2. Conserto de celular em casa</H2>
        <Para>Hoje da pra aprender pelo YouTube em 2 meses. Aparelhos parados em gavetas tem montao. Tela trincada de iPhone troca por R$ 350 e leva 15 minutos.</Para>
        <Para><strong>Quanto da:</strong> R$ 2.000 a R$ 6.000/mes. Comeca com R$ 600 de kit basico (chave Pentalobe, ventosa, secador de calor).</Para>

        <H2>3. Limpeza pos-obra</H2>
        <Para>Quem reformou em 2024-25 ta acabando agora. Limpeza pos-obra cobra R$ 8 a R$ 15 por m² e nao precisa de equipamento sofisticado.</Para>
        <Para><strong>Quanto da:</strong> R$ 1.800 a R$ 3.500/mes trabalhando 3 dias da semana.</Para>

        <H2>4. Adestrador de caes na sua propria rua</H2>
        <Para>Mais gente comprou pet na pandemia e nunca aprendeu a educar. Curso online de adestramento custa R$ 800 e te qualifica.</Para>
        <Para><strong>Quanto da:</strong> R$ 80 a R$ 150 por sessao. 20 sessoes por mes ja virou um salario.</Para>

        <H2>5. Conserto de roupas e ajustes</H2>
        <Para>Maquina de costura usada custa R$ 350. Bairro com lojas de moda barata sempre tem cliente. Cobra R$ 25 por barra, R$ 40 por ajuste de cintura.</Para>
        <Para><strong>Quanto da:</strong> R$ 1.200 a R$ 2.500/mes. Sem chefe, sem horario fixo.</Para>

        <H2>6. Brinquedoteca em casa pra criancas</H2>
        <Para>Se voce mora num lugar com area aberta, da pra alugar a casa por 3 horas pra festinhas infantis. Cidades pequenas estao com falta disso.</Para>
        <Para><strong>Quanto da:</strong> R$ 250 a R$ 600 por festa. 8 festas por mes ja vira renda boa.</Para>

        <H2>7. Ponto de coleta de marketplace - a queridinha do momento</H2>

        <img src={FOTO_PACOTES} alt="Pacotes" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>Pacotes esperando retirada na sala de um ponto de coleta.</p>

        <Para>Essa aqui foi a que mais me chamou atencao. Funciona assim: marketplaces como <strong>Shopee, Mercado Livre, Amazon e Shein</strong> tem um problema gigante - muita gente nao ta em casa pra receber pacote.</Para>

        <Para>A solucao deles? Usar <strong>moradores comuns</strong> como pontos de retirada. Voce recebe os pacotes em casa, guarda numa prateleira, e os destinatarios vao buscar quando puderem.</Para>

        <Para>Voce ganha por cada coleta feita. Nao precisa investir nada. Nao precisa de loja, alvara, funcionario nem CNPJ.</Para>

        <Citacao>O que mais me impressionou: tem morador faturando entre R$ 3.500 e R$ 6.000 por mes - apenas recebendo pacotes em horarios certos. E gente comum, sem experiencia de logistica.</Citacao>

        <Para>A empresa que opera isso melhor no Brasil hoje se chama <strong><a href="https://coletaki.com" style={{ color: NAVY, fontWeight: 700, textDecoration: 'underline' }}>Coletaki</a></strong>. Eles validam cada ponto antes (pra evitar problemas com pacote sumido) e isso da seguranca. Vou contar a historia do Pedro pra voce entender melhor.</Para>

        {/* ===== Historia do Pedro ===== */}
        <div style={{ background: BG_SOFT, padding: 28, borderRadius: 14, margin: '32px 0', border: '1px solid ' + LINE }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <Calendar size={14} color={GOLD} />
            <span style={{ fontSize: 11, fontWeight: 800, color: GOLD, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Caso real - Marco de 2025</span>
          </div>

          <H2>A historia do Pedro</H2>

          <img src={FOTO_PEDRO} alt="Pedro" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
          <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 24, fontStyle: 'italic' }}>Pedro Henrique, 32 anos. Ex-entregador iFood. Hoje ponto de coleta.</p>

          <Para>Conheci o Pedro em fevereiro de 2025. Foi numa cafeteria aqui perto. Ele tava na fila atras de mim, de uniforme de iFood, e a gente comecou a conversar.</Para>

          <Para>Pedro trabalhava no iFood ha 4 anos. Saia 9 da manha, voltava as 11 da noite. Ganhava em media R$ 2.800 por mes - com sorte. Em dia de chuva ou semana de menos pedidos, R$ 1.900.</Para>

          <Citacao>"Carlos, eu nao sei mais. Tomei dois tombos esse ano. A moto ta no conserto. Minha esposa ta gravida do segundo. Eu nao vejo saida."</Citacao>

          <Para>Naquele dia, contei sobre a Coletaki pra ele. Disse que tinha um amigo que ja tava nisso ha 6 meses e tava bem.</Para>

          <Para>Pedro hesitou. Voce sabe como e - <em>"nao quero perder tempo com promessa"</em>, <em>"e se nao funcionar?"</em>, <em>"e se for golpe?"</em>.</Para>

          <Para>Eu falei pra ele: <strong>"Pedro, voce nao precisa investir nada. So cadastra, um consultor vai te chamar numa videochamada, conhece sua casa, e ai voce decide."</strong></Para>

          <H2>O que aconteceu nos 6 meses seguintes</H2>

          <div style={{ background: '#fff', padding: 18, borderRadius: 10, border: '1px solid ' + LINE, marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid ' + LINE }}>
              <div style={{ background: NAVY, color: '#fff', width: 64, padding: '8px 0', borderRadius: 8, textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.7 }}>MARCO</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>25</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>Cadastrou no site</div>
                <div style={{ fontSize: 13, color: INK_SOFT, lineHeight: 1.5 }}>Levou 4 minutos. Em 3 dias o consultor Matheus ligou pra marcar videochamada.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid ' + LINE }}>
              <div style={{ background: NAVY, color: '#fff', width: 64, padding: '8px 0', borderRadius: 8, textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.7 }}>ABRIL</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>25</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>Casa validada - comecou a operar</div>
                <div style={{ fontSize: 13, color: INK_SOFT, lineHeight: 1.5 }}>So precisou ajustar uma prateleira na lavanderia. Primeira semana: 18 coletas, R$ 416.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid ' + LINE }}>
              <div style={{ background: NAVY, color: '#fff', width: 64, padding: '8px 0', borderRadius: 8, textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.7 }}>JULHO</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>25</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>Largou o iFood</div>
                <div style={{ fontSize: 13, color: INK_SOFT, lineHeight: 1.5 }}>Ja fechava R$ 4.300 mensal so com Coletaki. Vendeu a moto. Esposa chorou de alegria.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ background: GOLD, color: NAVY, width: 64, padding: '8px 0', borderRadius: 8, textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 800 }}>HOJE</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>2026</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>Faturando R$ 5.200/mes em media</div>
                <div style={{ fontSize: 13, color: INK_SOFT, lineHeight: 1.5 }}>Casa propria pintada. Filha matriculada no balle. Almoca com a esposa todo dia.</div>
              </div>
            </div>
          </div>

          <H2>O que ele mais valoriza hoje</H2>

          <Citacao>"Nao e o dinheiro, Carlos. E poder estar em casa quando minha filha chega da escola. E nunca mais ter medo de chuva. E olhar pra minha esposa e ver que ela ta tranquila pela primeira vez em anos."</Citacao>

          <Para>Pedro nao tem oratoria de coach. Ele e um cara normal. E e exatamente por isso que a historia dele vale.</Para>

        </div>

        {/* ===== CTA ===== */}
        <div style={{ background: NAVY, color: '#fff', borderRadius: 16, padding: 36, marginTop: 56, textAlign: 'center' }}>
          <TrendingUp size={32} color={GOLD} style={{ margin: '0 auto 12px', display: 'block' }} />
          <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
            Quer descobrir se sua casa pode virar ponto de coleta?
          </h3>
          <p style={{ fontSize: 15, opacity: 0.9, lineHeight: 1.6, margin: '0 0 24px', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            Igual o Pedro, voce cadastra, um consultor faz uma videochamada com voce e ja te diz se serve. Sem custo, sem compromisso.
          </p>
          <a href="https://coletaki.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: GOLD, color: NAVY, padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 800, fontSize: 15, letterSpacing: '-0.01em' }}>
            Ver se minha casa serve <ArrowRight size={18} />
          </a>
          <div style={{ fontSize: 11, opacity: 0.7, marginTop: 18 }}>Sem investimento - validacao gratuita - resposta em ate 1 semana</div>
        </div>

        {/* Conclusao */}
        <H2>Pra fechar</H2>

        <Para>Toda decisao tem risco. As 7 ideias que listei nao sao pra todo mundo - cada uma exige um perfil. Mas se voce ta cansado do CLT, escolhe uma e vai.</Para>

        <Para>Eu pessoalmente acho que <strong>ponto de coleta</strong> e o jeito mais inteligente de comecar - porque nao exige investimento, nao tem estoque pra perder, e em uma semana voce ta operando.</Para>

        <Para>Se voce quiser dar uma olhada sem compromisso, o site da Coletaki e <a href="https://coletaki.com" style={{ color: NAVY, fontWeight: 700 }}>coletaki.com</a>. E so cadastrar. Nem precisa pagar nada pra falar com o consultor.</Para>

        <Para><em>Se essa materia ajudar voce a tomar coragem, me manda mensagem. Adoro saber das historias.</em></Para>

        {/* Assinatura */}
        <div style={{ textAlign: 'center', marginTop: 48, paddingTop: 32, borderTop: '1px solid ' + LINE }}>
          <img src={FOTO_AUTOR} alt="Carlos" style={{ width: 92, height: 92, borderRadius: '50%', objectFit: 'cover', border: '4px solid ' + NAVY, marginBottom: 16 }} />
          <div style={{ fontSize: 18, fontWeight: 800, color: INK }}>Carlos Andrade</div>
          <div style={{ fontSize: 13, color: INK_MUTE, marginTop: 4 }}>Escrevo sobre o que aprendi conversando com gente comum.</div>
        </div>

      </article>

      <footer style={{ background: NAVY, color: '#fff', padding: '40px 24px', textAlign: 'center', marginTop: 60 }}>
        <div style={{ fontSize: 13, opacity: 0.7 }}>Cafe com Dicas - Diario do Interior - Conteudo independente</div>
        <div style={{ fontSize: 11, opacity: 0.5, marginTop: 6 }}>Este e um conteudo opinativo. Coletaki e mencionada conforme experiencia real.</div>
      </footer>

      <style>{`
        .menu-d { display: flex; }
        @media (max-width: 768px) {
          .menu-d { display: none !important; }
          .h1-main { font-size: 28px !important; }
        }
      `}</style>

    </div>
  );
}
