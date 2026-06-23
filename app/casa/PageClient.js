'use client';
import React from 'react';
import { Coffee, ArrowRight, Quote, Calendar, Lightbulb, TrendingUp } from 'lucide-react';

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

function Link({ children }) {
  return <a href="https://coletaki.com" style={{ color: NAVY, fontWeight: 700, textDecoration: 'underline' }}>{children}</a>;
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
          Sem investir 1 real, Pedro se cadastrou na <Link>Coletaki</Link> e transformou um quartinho do apartamento em um ponto de coleta de marketplace. Hoje fatura mais de R$ 5 mil por mês em casa e aposentou a bag do iFood. Vou te contar sobre o modelo de negócio e como fazer parte.
        </p>

        <img src={IMG_HERO} alt="Apartamento do Pedro operando como ponto de coleta" style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 36, fontStyle: 'italic' }}>O quartinho do Pedro hoje: prateleira organizada, pacotes etiquetados, fluxo simples.</p>

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

        <Para>Hoje, em vez de dar uma resposta genérica, vou te contar uma história real — a do Pedro. Ele foi entregador do iFood por quatro anos. Hoje fatura mais de <strong>R$ 5 mil por mês</strong> sem sair de casa, e não investiu um centavo pra começar. Depois eu explico o modelo de negócio por trás disso e por que ele tá crescendo em silêncio nos últimos dois anos.</Para>


        {/* ===== Pedro ===== */}
        <div style={{ background: BG_SOFT, padding: 28, borderRadius: 14, margin: '32px 0', border: '1px solid ' + LINE }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <Calendar size={14} color={GOLD} />
            <span style={{ fontSize: 11, fontWeight: 800, color: GOLD, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Caso real · Março de 2025</span>
          </div>

          <H2>A história do Pedro</H2>

          <Para>O Pedro é meu vizinho. A gente se conhece há um tempo, daqueles trocos de "bom dia" no elevador e cerveja no churrasco de fim de ano. Em fevereiro de 2025, num desses encontros corriqueiros na padaria do bairro, ele me parou pra desabafar.</Para>

          <Para>Tinha quatro anos no iFood. Saía 9 da manhã, voltava 11 da noite. Ganhava em média R$ 2.800 por mês — quando dava sorte. Em semana de chuva ou de poucos pedidos, fechava R$ 1.900. A esposa estava grávida do segundo filho.</Para>

          <Citacao>"Carlos, eu não sei mais o que fazer. Tomei dois tombos esse ano. A moto tá no conserto de novo. Eu não vejo saída."</Citacao>

          <Para>A gente terminou a conversa ali mesmo, no balcão da padaria. Eu disse pra ele que tinha lido sobre uma ideia que parecia exatamente o tipo de virada que ele precisava — trabalho de casa, horário previsível, renda recorrente. Mandei o link da <Link>Coletaki</Link> pelo zap.</Para>

          <Para>Pedro hesitou no começo. Você sabe como é — <em>"e se não funcionar?"</em>, <em>"e se for golpe?"</em>, <em>"vou perder tempo de novo".</em> Mas a esposa insistiu pra ele tentar. Não tinha o que perder: o cadastro era gratuito e a validação também.</Para>

          <H2>O que aconteceu nos meses seguintes</H2>

          <div style={{ background: '#fff', padding: 18, borderRadius: 10, border: '1px solid ' + LINE, marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid ' + LINE }}>
              <div style={{ background: NAVY, color: '#fff', width: 64, padding: '8px 0', borderRadius: 8, textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.7 }}>FEV</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>25</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>Cadastrou no site da Coletaki</div>
                <div style={{ fontSize: 13, color: INK_SOFT, lineHeight: 1.5 }}>Levou 4 minutos no celular. Em 2 dias o consultor ligou pra marcar a videochamada de verificação.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid ' + LINE }}>
              <div style={{ background: NAVY, color: '#fff', width: 64, padding: '8px 0', borderRadius: 8, textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.7 }}>FEV</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>25</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>Quartinho aprovado · começou a operar</div>
                <div style={{ fontSize: 13, color: INK_SOFT, lineHeight: 1.5 }}>10 dias depois do cadastro já estava recebendo pacotes. Só precisou montar uma prateleira simples. Primeira semana: 80 pacotes, R$ 380 de comissão.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid ' + LINE }}>
              <div style={{ background: NAVY, color: '#fff', width: 64, padding: '8px 0', borderRadius: 8, textAlign: 'center', flexShrink: 0 }}>
                <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.7 }}>JULHO</div>
                <div style={{ fontSize: 18, fontWeight: 800 }}>25</div>
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>Aposentou a bag do iFood</div>
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

        <H2>Mas qual é a ideia por trás disso?</H2>

        <Para>Agora que você conhece a história do Pedro, deixa eu te explicar o modelo de negócio inteiro — qual problema os marketplaces estão resolvendo e por que o ponto de coleta virou a peça-chave dessa engrenagem.</Para>
        {/* ===== Qual é a ideia / DOR ===== */}
        <Para>Hoje os grandes marketplaces (Shopee, Mercado Livre, Amazon, Shein) prometem entrega cada vez mais rápida — em muitos casos no mesmo dia ou em 24 horas. Só que tem um detalhe que poucos enxergam: <strong>tudo isso é despachado a partir de um único centro de distribuição</strong>, geralmente afastado dos bairros onde os clientes moram.</Para>

        <Para>Resultado: cada veículo sai do CD lotado, percorre quilômetros, e muitas vezes precisa entrar num bairro inteiro só pra fazer <strong>uma única entrega</strong>. Some isso à explosão de pedidos das últimas Black Fridays, com volume crescendo todo ano, e o custo logístico vira impraticável. O prazo aperta.</Para>

        <Para>A saída encontrada pelos marketplaces foi inteligente: <strong>descentralizar a operação usando pontos de coleta espalhados pelos bairros</strong>. Em vez de cada veículo fazer uma entrega isolada numa rua, ele faz <strong>uma única parada num endereço</strong> — a casa de um morador comum — e deixa ali 30, 40, às vezes 60 pacotes de uma vez. Depois, outros veículos passam ao longo do dia pra recolher os pacotes que precisam ser entregues ali nas proximidades. E a entrega final fica muito mais ágil.</Para>

        <Citacao>O ponto de coleta é a ponte entre o CD e a entrega final no bairro. O morador não atende cliente, não despacha, não tem contato com comprador. Só recebe os pacotes nos horários combinados e devolve quando outro veículo passa pra retirar.</Citacao>

        {/* ===== Como funciona ===== */}
        <H2>Como funciona o dia a dia</H2>

        <Para>Já que você conhece o Pedro, fica mais fácil entender a rotina. O dia a dia da operação no quartinho dele funciona assim:</Para>

        <Para><strong>Por volta das 8h da manhã</strong>, um veículo encosta na porta do prédio. Pode ser uma van do próprio CD do marketplace, pode ser um carro terceirizado contratado pela <Link>Coletaki</Link>. Pra Pedro não muda nada — o procedimento é o mesmo. O motorista desce com os pacotes do dia: em geral entre 20 e 60 caixinhas leves de e-commerce.</Para>

        <Para>Pedro <strong>lê o QR code de entrada de cada pacote no aplicativo</strong> da Coletaki, junto com o motorista. Em seguida, organiza tudo no quartinho separado, em prateleiras etiquetadas. Esse processo costuma levar uns 15 a 20 minutos.</Para>

        <Para><strong>Por volta das 11h</strong>, outro veículo passa. Esse traz mais alguns pacotes e leva embora boa parte dos que já estavam no ponto desde o dia anterior. Mesma rotina: leitura do QR de entrada nos novos, leitura do QR de saída nos que estão saindo. Tudo registrado no aplicativo.</Para>

        <Para><strong>Por volta das 14h da tarde</strong>, última passagem do dia. Mais alguns pacotes chegam e parte dos que ficaram das 11h são recolhidos pra entrega final no bairro. Às vezes leva tudo, às vezes sobra um pouco pra sair no dia seguinte.</Para>

        <img src={IMG_PACOTES} alt="Pacotes organizados no quartinho do Pedro" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>Manhã típica no quartinho do Pedro: pacotes organizados aguardando a próxima passagem.</p>

        <Para>A parte importante é essa: <strong>Pedro não atende cliente final, não despacha mercadoria, não tem contato com comprador</strong>. Só recebe, lê o QR, guarda, devolve pro motorista quando ele volta. O sistema da Coletaki cuida de toda a comunicação, do rastreio e do destino final dos pacotes.</Para>

        <Para>Entre uma passagem e outra, Pedro está livre. Almoça com a esposa, leva a filha na escola, descansa. <strong>Trabalha menos de 2 horas por dia — distribuídas em três janelas curtas — e fatura mais do que ganhava arriscando a vida na rua.</strong></Para>

        {/* ===== Por que funciona ===== */}
        <H2>Por que esse modelo funciona tão bem</H2>

        <Para>A grande sacada é que ele tira do seu caminho praticamente todos os obstáculos de quem quer empreender em casa.</Para>

        <Para>Você não precisa investir nada — basta ter um cômodo limpo e seguro, com espaço pra prateleiras. Não precisa sair pra entregar — os veículos vêm até você três vezes por dia, em horários combinados. Não precisa atender ninguém — a única interação é com os motoristas que passam, e leva poucos minutos. Não precisa lidar com cliente final, devolução ou reclamação — tudo isso fica com a Coletaki.</Para>

        <Para>E o pagamento é por pacote processado, <strong>depositado quinzenalmente nos dias 1 e 16 de cada mês</strong>, direto na conta vinculada ao seu CPF. Sem mensalidade, sem taxa de adesão, sem investimento inicial. Quanto mais pacotes passam, mais você ganha.</Para>



        {/* ===== Pra quem serve ===== */}
        <H2>Pra quem essa ideia serve?</H2>

        <Para>Conversando com vários pontos de coleta que já estão em operação, dá pra desenhar o perfil que tende a dar mais certo:</Para>

        <Para>
          <strong style={{ color: NAVY }}>✓</strong> Mora em casa ou apartamento com algum cômodo sobrando (quartinho, área de serviço, garagem coberta)<br/>
          <strong style={{ color: NAVY }}>✓</strong> Pode estar em casa nos horários de passagem dos veículos (manhã, meio-dia e início da tarde)<br/>
          <strong style={{ color: NAVY }}>✓</strong> Tem cômodo seco, sem infiltração, longe de janela que dá pra rua<br/>
          <strong style={{ color: NAVY }}>✓</strong> Aceita seguir a rotina de registro de pacotes pelo aplicativo<br/>
          <strong style={{ color: NAVY }}>✓</strong> Quer renda recorrente sem precisar gerenciar funcionário nem estoque
        </Para>

        <Para>Se você marcou pelo menos três desses, vale a pena testar. O cadastro é gratuito e a videochamada com o consultor também.</Para>

        {/* ===== CTA ===== */}
        <div style={{ background: NAVY, color: '#fff', borderRadius: 16, padding: 36, marginTop: 56, textAlign: 'center' }}>
          <TrendingUp size={32} color={GOLD} style={{ margin: '0 auto 12px', display: 'block' }} />
          <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
            Quer descobrir se a sua casa pode virar ponto de coleta?
          </h3>
          <p style={{ fontSize: 15, opacity: 0.9, lineHeight: 1.6, margin: '0 0 24px', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            Igual ao Pedro: você se cadastra, um consultor faz uma videochamada com você e já te diz se o espaço serve. Sem custo, sem compromisso.
          </p>
          <a href="https://coletaki.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: GOLD, color: NAVY, padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 800, fontSize: 15, letterSpacing: '-0.01em' }}>
            Ver se a minha casa serve <ArrowRight size={18} />
          </a>
          <div style={{ fontSize: 11, opacity: 0.7, marginTop: 18 }}>Sem investimento · validação gratuita · resposta em até uma semana</div>
        </div>

        <H2>Pra fechar</H2>

        <Para>Toda decisão tem risco. Mas existem ideias de negócio que minimizam esse risco a quase zero — e <strong>ponto de coleta é uma delas</strong>. Você não investe, não tem estoque, não tem funcionário, e em uma semana já pode estar operando.</Para>

        <Para>Pra quem está cansado da rua, já tomou tombo de moto, perdeu pacote na chuva — vale dar uma olhada com calma. O site da Coletaki é <Link>coletaki.com</Link>. Você se cadastra, eles te chamam pra videochamada e já te dizem se o espaço serve. Sem precisar pagar nada.</Para>

        <Para><em>Se essa matéria ajudar você a tomar coragem, me manda mensagem. Adoro saber das histórias.</em></Para>

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
