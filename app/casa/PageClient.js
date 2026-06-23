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
const IMG_HERO = 'https://i.pinimg.com/736x/d5/c1/b5/d5c1b510c3c53e23a0ba06a44235ce93.jpg';
const IMG_PACOTES = 'https://i.pinimg.com/736x/ba/cb/93/bacb93b2f5c282e4df2281c58498058f.jpg';

const MENU = ['Home', 'Matérias', 'Economia', 'Cidades', 'Oportunidades'];

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
              <div style={{ fontSize: 21, fontWeight: 800, color: NAVY, letterSpacing: '-0.02em', lineHeight: 1 }}>Café com Dicas</div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', color: INK_MUTE, marginTop: 5, textTransform: 'uppercase' }}>papo reto · vida real</div>
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
            <Lightbulb size={12} /> Ideia de Negócio · 8 min de leitura
          </div>
        </div>

        <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em', marginBottom: 24, textAlign: 'center', color: NAVY }} className="h1-main">
          De entregador do iFood a <span style={{ color: GOLD }}>R$ 5 mil por mês</span>: a ideia de negócio que ninguém te conta
        </h1>

        <p style={{ fontSize: 19, color: INK_SOFT, lineHeight: 1.6, margin: '0 auto 36px', textAlign: 'center', maxWidth: 620 }}>
          Sem investir 1 real, Pedro se cadastrou na Coletaki e mudou de vida. Hoje fatura mais de R$ 5 mil por mês em casa, sem CNPJ, sem estoque, sem precisar sair pra entregar. Vou te contar sobre o modelo de negócio e como fazer parte.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 36 }}>
          <div style={{ width: 80, height: 1, background: LINE }} />
          <div style={{ fontSize: 14, color: GOLD, letterSpacing: '0.4em', fontWeight: 700 }}>· · ·</div>
          <div style={{ width: 80, height: 1, background: LINE }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 50 }}>
          <img src={FOTO_AUTOR} alt="Carlos Andrade" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '3px solid ' + NAVY }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: INK }}>Carlos Andrade</div>
            <div style={{ fontSize: 12, color: INK_MUTE }}>papo reto e dicas que ninguém te conta</div>
          </div>
        </div>

        <Para>Toda semana eu recebo mensagem perguntando a mesma coisa: <em>"Carlos, qual ideia de negócio funciona hoje sem precisar investir?"</em></Para>

        <Para>Eu sempre respondia caso a caso. Mas existe uma ideia que vem crescendo em silêncio nos últimos dois anos — e quase ninguém fala sobre ela. Hoje eu vou explicar tudo do começo ao fim.</Para>

        <Para>E vou contar também a história do Pedro. Ele foi entregador de iFood por quatro anos. Hoje fatura mais de <strong>R$ 5.000 por mês</strong> trabalhando de casa, e não investiu um centavo pra começar. Vamos por partes.</Para>

        {/* ===== Como funciona ===== */}
        <H2>Qual é a ideia?</H2>

        <Para>Você já parou pra pensar quantos pacotes o entregador de moto leva de volta porque não tem ninguém em casa pra receber?</Para>

        <Para>Só Shopee, Mercado Livre, Amazon e Shein, juntas, processam <strong>milhões de devoluções por mês</strong> por esse motivo. E sabe quanto custa pra essas empresas trazer o pacote de volta, processar, tentar entregar de novo e, no fim, devolver pro vendedor? Custa caro. Muito caro.</Para>

        <Para>Pra resolver isso, elas criaram uma solução mais inteligente: usar <strong>moradores comuns como pontos de retirada</strong>.</Para>

        <Citacao>Você recebe o pacote em casa, guarda numa prateleira, e o destinatário vai buscar quando puder. A empresa paga você por cada coleta realizada.</Citacao>

        <img src={IMG_PACOTES} alt="Pacotes na sala" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>Pacotes guardados esperando retirada. Um ponto médio movimenta entre 15 e 30 pacotes por dia.</p>

        <H2>Por que esse modelo funciona tão bem</H2>

        <Para>A grande sacada desse modelo é que ele tira do seu caminho praticamente todos os obstáculos de quem quer empreender.</Para>

        <Para>Você não precisa investir nada — usa o espaço que já tem em casa, seja uma prateleira na lavanderia ou um canto da sala. Não precisa sair pra entregar — os motoboys dos marketplaces trazem os pacotes até você, e os clientes vão buscar na sua porta. Não precisa ficar à disposição o dia inteiro — você atende em três janelas curtas (manhã, almoço e tarde), com cerca de uma hora em cada uma.</Para>

        <Para>E o melhor: a renda é escalável. Quanto mais coletas você faz, mais você ganha. Pontos bem localizados chegam tranquilamente a 30 coletas por dia.</Para>

        <H2>Não é bico — é parceria séria</H2>

        <Para>Aqui vai a parte que muita gente não entende: <strong>esse modelo não é bico</strong>. As empresas que operam esse negócio de verdade fazem questão de validar cada ponto antes — porque precisam ter certeza de que o pacote do cliente vai estar seguro na sua casa.</Para>

        <Para>Quem opera esse modelo de forma mais organizada no Brasil hoje é a <strong><a href="https://coletaki.com" style={{ color: NAVY, fontWeight: 700, textDecoration: 'underline' }}>Coletaki</a></strong>. Funciona assim: você se cadastra, um consultor faz uma videochamada com você para avaliar a casa, e só depois disso você começa a operar. Isso traz segurança pros dois lados — pra você e pra empresa.</Para>

        <img src={IMG_HERO} alt="Casa simples" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>Um apartamento comum operando como ponto de coleta.</p>

        {/* ===== Historia do Pedro ===== */}
        <div style={{ background: BG_SOFT, padding: 28, borderRadius: 14, margin: '32px 0', border: '1px solid ' + LINE }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <Calendar size={14} color={GOLD} />
            <span style={{ fontSize: 11, fontWeight: 800, color: GOLD, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Caso real · Março de 2025</span>
          </div>

          <H2>A história do Pedro</H2>

          <img src={IMG_HERO} alt="Pedro" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
          <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 24, fontStyle: 'italic' }}>A casa do Pedro depois das adaptações. Hoje é o ponto de coleta do bairro.</p>

          <Para>Conheci o Pedro em fevereiro de 2025, numa cafeteria aqui do bairro. Ele estava na fila atrás de mim, com uniforme do iFood, e a gente começou a conversar.</Para>

          <Para>Pedro trabalhava no aplicativo há quatro anos. Saía 9 da manhã, voltava 11 da noite. Ganhava em média R$ 2.800 por mês — quando dava sorte. Em semana de chuva ou de poucos pedidos, fechava R$ 1.900.</Para>

          <Citacao>"Carlos, eu não sei mais o que fazer. Tomei dois tombos esse ano. A moto tá no conserto. Minha esposa tá grávida do segundo. Eu não vejo saída."</Citacao>

          <Para>Naquele dia eu falei pra ele sobre a ideia do ponto de coleta. Contei que um amigo meu já estava nisso há seis meses e que estava indo bem.</Para>

          <Para>Pedro hesitou. Você sabe como é — <em>"e se não funcionar?"</em>, <em>"e se for golpe?"</em>, <em>"vou perder tempo de novo".</em></Para>

          <Para>Eu disse pra ele: <strong>"Pedro, você não precisa investir nada. É só se cadastrar. Um consultor vai marcar uma videochamada com você, conhecer a sua casa, e aí você decide se quer ou não."</strong></Para>

          <H2>O que aconteceu nos seis meses seguintes</H2>

          <div style={{ background: '#fff', padding: 18, borderRadius: 10, border: '1px solid ' + LINE, marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid ' + LINE }}>
              <div style={{ background: NAVY, color: '#fff', width: 64, padding: '8px 0', borderRadius: 8, textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.7 }}>MARÇO</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>25</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>Cadastrou no site</div>
                <div style={{ fontSize: 13, color: INK_SOFT, lineHeight: 1.5 }}>Levou 4 minutos. Em 3 dias o consultor Matheus ligou para marcar a videochamada.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid ' + LINE }}>
              <div style={{ background: NAVY, color: '#fff', width: 64, padding: '8px 0', borderRadius: 8, textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.7 }}>ABRIL</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>25</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>Casa aprovada · começou a operar</div>
                <div style={{ fontSize: 13, color: INK_SOFT, lineHeight: 1.5 }}>Só precisou arrumar uma prateleira na lavanderia. Na primeira semana, foram 18 coletas e R$ 416 de comissão.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid ' + LINE }}>
              <div style={{ background: NAVY, color: '#fff', width: 64, padding: '8px 0', borderRadius: 8, textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.7 }}>JULHO</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>25</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>Largou o iFood</div>
                <div style={{ fontSize: 13, color: INK_SOFT, lineHeight: 1.5 }}>Já fechava R$ 4.300 por mês só com o ponto de coleta. Vendeu a moto. A esposa chorou de alegria.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ background: GOLD, color: NAVY, width: 64, padding: '8px 0', borderRadius: 8, textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 800 }}>HOJE</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>2026</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>Faturando R$ 5.200 por mês em média</div>
                <div style={{ fontSize: 13, color: INK_SOFT, lineHeight: 1.5 }}>Casa própria pintada. Filha matriculada no balé. Almoça com a esposa todo dia.</div>
              </div>
            </div>
          </div>

          <H2>O que ele mais valoriza hoje</H2>

          <Citacao>"Não é o dinheiro, Carlos. É poder estar em casa quando minha filha chega da escola. É nunca mais ter medo da chuva. É olhar pra minha esposa e ver ela tranquila pela primeira vez em anos."</Citacao>

          <Para>Pedro não tem discurso de coach. É um cara normal. E é justamente por isso que a história dele importa.</Para>

        </div>

        {/* ===== Pra quem serve? ===== */}
        <H2>Pra quem essa ideia serve?</H2>

        <Para>Conversando com vários pontos de coleta que já estão em operação, montei a lista do perfil que tende a dar mais certo:</Para>

        <Para>
          <strong style={{ color: NAVY }}>✓</strong> Mora em casa ou apartamento com algum espaço sobrando (lavanderia, área de serviço, sala grande)<br/>
          <strong style={{ color: NAVY }}>✓</strong> Está em casa pelo menos nos horários principais do dia (manhã, almoço e tarde)<br/>
          <strong style={{ color: NAVY }}>✓</strong> Mora em bairro com movimento (perto de comércio, escola ou centro)<br/>
          <strong style={{ color: NAVY }}>✓</strong> Tem paciência para atender as pessoas com educação<br/>
          <strong style={{ color: NAVY }}>✓</strong> Quer renda recorrente sem precisar gerenciar funcionário
        </Para>

        <Para>Se você marcou pelo menos três desses, vale a pena fazer o teste. O cadastro é gratuito e a videochamada com o consultor também.</Para>

        {/* ===== CTA ===== */}
        <div style={{ background: NAVY, color: '#fff', borderRadius: 16, padding: 36, marginTop: 56, textAlign: 'center' }}>
          <TrendingUp size={32} color={GOLD} style={{ margin: '0 auto 12px', display: 'block' }} />
          <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
            Quer descobrir se a sua casa pode virar ponto de coleta?
          </h3>
          <p style={{ fontSize: 15, opacity: 0.9, lineHeight: 1.6, margin: '0 0 24px', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            Igual ao Pedro: você se cadastra, um consultor faz uma videochamada com você e já te diz se a casa serve. Sem custo, sem compromisso.
          </p>
          <a href="https://coletaki.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: GOLD, color: NAVY, padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 800, fontSize: 15, letterSpacing: '-0.01em' }}>
            Ver se a minha casa serve <ArrowRight size={18} />
          </a>
          <div style={{ fontSize: 11, opacity: 0.7, marginTop: 18 }}>Sem investimento · validação gratuita · resposta em até uma semana</div>
        </div>

        {/* Conclusao */}
        <H2>Pra fechar</H2>

        <Para>Toda decisão tem risco. Mas existem ideias de negócio que minimizam esse risco a quase zero — e <strong>ponto de coleta é uma delas</strong>. Você não investe, não tem estoque para encalhar, não tem funcionário pra gerenciar, e em uma semana já está operando.</Para>

        <Para>Pra quem já está cansado de bico na rua, já tomou tombo de moto, já teve carteira roubada, já perdeu pacote na chuva — vale dar uma olhada com calma.</Para>

        <Para>O site da Coletaki é <a href="https://coletaki.com" style={{ color: NAVY, fontWeight: 700 }}>coletaki.com</a>. Você se cadastra, eles te chamam pra videochamada e já te dizem se a casa serve. Sem precisar pagar nada.</Para>

        <Para><em>Se essa matéria ajudar você a tomar coragem, me manda mensagem. Adoro saber das histórias.</em></Para>

        {/* Assinatura */}
        <div style={{ textAlign: 'center', marginTop: 48, paddingTop: 32, borderTop: '1px solid ' + LINE }}>
          <img src={FOTO_AUTOR} alt="Carlos" style={{ width: 92, height: 92, borderRadius: '50%', objectFit: 'cover', border: '4px solid ' + NAVY, marginBottom: 16 }} />
          <div style={{ fontSize: 18, fontWeight: 800, color: INK }}>Carlos Andrade</div>
          <div style={{ fontSize: 13, color: INK_MUTE, marginTop: 4 }}>Escrevo sobre o que aprendi conversando com gente comum.</div>
        </div>

      </article>

      <footer style={{ background: NAVY, color: '#fff', padding: '40px 24px', textAlign: 'center', marginTop: 60 }}>
        <div style={{ fontSize: 13, opacity: 0.7 }}>Café com Dicas · Diário do Interior · Conteúdo independente</div>
        <div style={{ fontSize: 11, opacity: 0.5, marginTop: 6 }}>Este é um conteúdo opinativo. A Coletaki é mencionada conforme experiência real.</div>
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
