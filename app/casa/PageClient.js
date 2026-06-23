'use client';
import React from 'react';
import { Coffee, ArrowRight, Quote, Check, TrendingUp, Lightbulb, Calendar, Package, Home, MapPin, Clock } from 'lucide-react';

const NAVY = '#0F2A5C';
const GOLD = '#D4A946';
const INK = '#0F1419';
const INK_SOFT = '#2C3440';
const INK_MUTE = '#5B6573';
const LINE = '#E5E9EF';
const BG_SOFT = '#FAFBFC';

const FOTO_AUTOR = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruoFtCtl2GCdFxfesIkwY8dLRo7yubE5GL4YL7kIoUcEOrKWS0kzzD9X7&s=10';
const FOTO_PEDRO = 'https://i.pinimg.com/736x/30/0e/0a/300e0aabcfbe9b3da8c46cd35cf30c4d.jpg';
const FOTO_PACOTES = 'https://i.pinimg.com/736x/d0/cb/2c/d0cb2cb20c4faf2b6f29f0a48d2c2b39.jpg';
const FOTO_CASA = 'https://i.pinimg.com/736x/26/8d/49/268d4948ba31faf6e9c4dd0c8c0a1f88.jpg';

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

function CardPilar({ icon: Icon, titulo, desc }) {
  return (
    <div style={{ background: '#fff', border: '1px solid ' + LINE, borderRadius: 12, padding: 20 }}>
      <div style={{ width: 44, height: 44, borderRadius: 10, background: GOLD + '20', color: GOLD, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
        <Icon size={22} />
      </div>
      <div style={{ fontSize: 15, fontWeight: 800, color: INK, marginBottom: 6 }}>{titulo}</div>
      <div style={{ fontSize: 13, color: INK_SOFT, lineHeight: 1.6 }}>{desc}</div>
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
            <Lightbulb size={12} /> Ideia de Negocio - 8 min de leitura
          </div>
        </div>

        <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em', marginBottom: 24, textAlign: 'center', color: NAVY }} className="h1-main">
          A ideia de negocio que ta tirando entregadores de iFood do trabalho na rua: <span style={{ color: GOLD }}>ponto de coleta em casa</span>
        </h1>

        <p style={{ fontSize: 19, color: INK_SOFT, lineHeight: 1.6, margin: '0 auto 36px', textAlign: 'center', maxWidth: 620 }}>
          Marketplaces tao pagando entre R$ 3.500 e R$ 6.000 por mes pra moradores comuns guardarem pacotes em casa. Sem investimento, sem CNPJ, sem precisar sair de casa. Vou contar como funciona - e como o Pedro saiu do iFood usando isso.
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

        <Para>Toda semana eu recebo mensagem perguntando a mesma coisa: <em>"Carlos, qual ideia de negocio funciona hoje sem precisar investir?"</em></Para>

        <Para>Eu sempre respondia caso por caso. Mas tem uma ideia especifica que ta crescendo silenciosamente nos ultimos 2 anos e quase ninguem fala sobre. E hoje eu vou explicar ela inteira.</Para>

        <Para>Vou contar tambem a historia do Pedro. Ele era entregador de iFood ha 4 anos. Hoje fatura mais de <strong>R$ 5.000 por mes em casa</strong>, sem ter investido um centavo. Vamos por partes.</Para>

        {/* ===== Como funciona ===== */}
        <H2>Qual e a ideia?</H2>

        <Para>Voce ja parou pra pensar quantos pacotes o entregador de moto leva embora porque nao tem ninguem em casa pra receber?</Para>

        <Para>So a Shopee, Mercado Livre, Amazon e Shein juntas processam <strong>milhoes de devolucoes por mes</strong> so por isso. E sabe quanto custa pra elas trazer aquele pacote de volta, processar, tentar entregar de novo, eventualmente devolver? Custa muito.</Para>

        <Para>Por isso eles criaram uma solucao mais inteligente: usar <strong>moradores comuns como pontos de retirada</strong>.</Para>

        <Citacao>Voce recebe o pacote em casa, guarda numa prateleira, e o destinatario vai buscar quando puder. A empresa paga voce por cada coleta feita.</Citacao>

        <img src={FOTO_PACOTES} alt="Pacotes na sala" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>Pacotes guardados esperando retirada. Um ponto medio gerencia entre 15 e 30 por dia.</p>

        <H2>Por que esse modelo funciona tao bem</H2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 32 }} className="cards-pilares">
          <CardPilar icon={Package} titulo="Zero investimento" desc="Nao precisa comprar nada. Voce usa o espaco que ja tem em casa - uma prateleira, um canto da lavanderia." />
          <CardPilar icon={Home} titulo="Trabalha em casa" desc="Voce nao sai pra entregar. Os motoboys que trazem os pacotes ate voce, e os clientes vem buscar." />
          <CardPilar icon={Clock} titulo="Horario controlado" desc="Voce atende em 3 janelas - manha, almoco, tarde. Aproximadamente 1 hora por janela." />
          <CardPilar icon={TrendingUp} titulo="Renda escalavel" desc="Quanto mais coletas, mais voce ganha. Pontos bem localizados fazem 30+ coletas por dia." />
        </div>

        <H2>E o ponto chave: nao e bico, e parceria</H2>

        <Para>Aqui esta a parte que muita gente nao entende: <strong>esse modelo nao e um bico</strong>. As empresas que operam isso de verdade fazem questao de validar cada ponto antes - porque elas precisam ter certeza que o pacote do cliente vai estar seguro.</Para>

        <Para>Quem opera melhor isso no Brasil hoje e a <strong><a href="https://coletaki.com" style={{ color: NAVY, fontWeight: 700, textDecoration: 'underline' }}>Coletaki</a></strong>. Ela faz uma videochamada com voce, um consultor avalia sua casa, e so depois voce comeca a operar. Isso da seguranca tanto pra voce quanto pro marketplace.</Para>

        <img src={FOTO_CASA} alt="Casa simples" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>Uma casa simples bem localizada vale ouro pra logistica de marketplace.</p>

        {/* ===== Historia do Pedro ===== */}
        <div style={{ background: BG_SOFT, padding: 28, borderRadius: 14, margin: '32px 0', border: '1px solid ' + LINE }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <Calendar size={14} color={GOLD} />
            <span style={{ fontSize: 11, fontWeight: 800, color: GOLD, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Caso real - Marco de 2025</span>
          </div>

          <H2>A historia do Pedro</H2>

          <img src={FOTO_PEDRO} alt="Pedro" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
          <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 24, fontStyle: 'italic' }}>Pedro Henrique, 32 anos. Ex-entregador iFood. Hoje ponto de coleta.</p>

          <Para>Conheci o Pedro em fevereiro de 2025 numa cafeteria aqui perto. Ele tava na fila atras de mim, de uniforme de iFood, e a gente comecou a conversar.</Para>

          <Para>Pedro trabalhava no iFood ha 4 anos. Saia 9 da manha, voltava as 11 da noite. Ganhava em media R$ 2.800 por mes - com sorte. Em dia de chuva ou semana de menos pedidos, R$ 1.900.</Para>

          <Citacao>"Carlos, eu nao sei mais. Tomei dois tombos esse ano. A moto ta no conserto. Minha esposa ta gravida do segundo. Eu nao vejo saida."</Citacao>

          <Para>Naquele dia contei sobre a ideia de ponto de coleta pra ele. Falei que tinha um amigo que ja tava nisso ha 6 meses e tava bem.</Para>

          <Para>Pedro hesitou. Voce sabe como e - <em>"e se nao funcionar?"</em>, <em>"e se for golpe?"</em>, <em>"vou perder tempo de novo".</em></Para>

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

        {/* ===== Pra quem serve? ===== */}
        <H2>Pra quem essa ideia serve?</H2>

        <Para>Conversando com varios pontos ja em operacao, fiz uma lista do perfil que da mais certo:</Para>

        <Para>
          <strong style={{ color: NAVY }}>✓</strong> Mora em casa ou apartamento com algum espaco extra (lavanderia, area de servico, sala grande)<br/>
          <strong style={{ color: NAVY }}>✓</strong> Esta em casa ao menos nos horarios principais do dia (manha, almoco, tarde)<br/>
          <strong style={{ color: NAVY }}>✓</strong> Mora em bairro com movimento (perto de comercio, escola, centro)<br/>
          <strong style={{ color: NAVY }}>✓</strong> Tem disposicao pra atender pessoas educadamente<br/>
          <strong style={{ color: NAVY }}>✓</strong> Quer renda recorrente sem precisar gerenciar empregados
        </Para>

        <Para>Se voce se encaixou em pelo menos 3 desses, vale fazer o teste. O cadastro e gratuito e a videochamada com o consultor tambem.</Para>

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

        <Para>Toda decisao tem risco. Mas tem ideias de negocio que minimizam esse risco a zero - <strong>ponto de coleta e uma delas</strong>. Voce nao investe, nao tem estoque, nao tem funcionario, e em uma semana ja ta operando.</Para>

        <Para>Pra quem ja ta cansado de bico na rua, ja tomou tombo de moto, ja teve carteira roubada, ja perdeu pacote na chuva - vale dar uma olhada com calma.</Para>

        <Para>O site da Coletaki e <a href="https://coletaki.com" style={{ color: NAVY, fontWeight: 700 }}>coletaki.com</a>. E so cadastrar, eles te chamam pra videochamada e ja te dizem se serve. Sem pagar nada.</Para>

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
          .cards-pilares { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </div>
  );
}
