'use client';

import React from 'react';
import { Coffee, Heart } from 'lucide-react';

const NAVY = '#0F2A5C';
const GOLD = '#D4A946';
const INK = '#0F1419';
const INK_SOFT = '#2C3440';
const INK_MUTE = '#5B6573';
const LINE = '#E5E9EF';
const PAPER = '#F6F9FC';
const PAPER_WARM = '#FAF8F3';

const FOTO_AUTOR = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruoFtCtl2GCdFxfesIkwY8dLRo7yubE5GL4YL7kIoUcEOrKWS0kzzD9X7&s=10';
const LINK_COLETAKI = 'https://coletaki.com';
const IMG_HERO = 'https://i.pinimg.com/736x/d5/c1/b5/d5c1b510c3c53e23a0ba06a44235ce93.jpg';
const IMG_PACOTES = 'https://i.pinimg.com/736x/ba/cb/93/bacb93b2f5c282e4df2281c58498058f.jpg';

function Link({ children }) {
  return <a href={LINK_COLETAKI} style={{ color: NAVY, fontWeight: 700, textDecoration: 'underline' }}>{children}</a>;
}

function Para({ children }) {
  return <p style={{ fontSize: 17.5, lineHeight: 1.8, color: INK_SOFT, marginBottom: 24 }}>{children}</p>;
}

function H2({ children }) {
  return <h2 style={{ fontSize: 28, fontWeight: 800, color: NAVY, margin: '48px 0 20px', letterSpacing: '-0.02em', lineHeight: 1.3 }}>{children}</h2>;
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
          <a href="/casa" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Coffee size={22} />
            </div>
            <div>
              <div style={{ fontSize: 21, fontWeight: 800, color: NAVY, letterSpacing: '-0.02em', lineHeight: 1 }}>Café com Dicas</div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', color: INK_MUTE, marginTop: 5, textTransform: 'uppercase' }}>papo reto · vida real</div>
            </div>
          </a>
          <nav style={{ display: 'flex', gap: 30 }} className="menu-d">
            <a href="#" style={{ fontSize: 13, color: INK_SOFT, textDecoration: 'none', fontWeight: 600 }}>Posts</a>
            <a href="#" style={{ fontSize: 13, color: INK_SOFT, textDecoration: 'none', fontWeight: 600 }}>Ideias</a>
            <a href="#" style={{ fontSize: 13, color: INK_SOFT, textDecoration: 'none', fontWeight: 600 }}>Sobre</a>
          </nav>
        </div>
      </header>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '60px 28px 100px' }}>

        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: GOLD + '20', color: '#8a6f1f', padding: '5px 14px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            ☕ Ideias de Negócio · 9 min de leitura
          </div>
        </div>

        <h1 style={{ fontSize: 44, fontWeight: 800, color: NAVY, letterSpacing: '-0.025em', lineHeight: 1.1, textAlign: 'center', marginBottom: 24 }} className="h1-main">
          A ideia de negócio: de motorista de Uber a <span style={{ color: GOLD }}>R$ 5 mil por mês de casa</span>, sem investir 1 real
        </h1>

        <p style={{ fontSize: 19, color: INK_SOFT, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, margin: '0 auto 36px' }}>
          Eu virei ponto de coleta de marketplace há 4 meses. Aposentei o Uber, abri uma renda nova de casa e venho contar tudo: o que é, como entrei, e como você pode entrar também.
        </p>

        <img src={IMG_HERO} alt="O quarto que virou meu ponto de coleta" style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 40, fontStyle: 'italic' }}>O quartinho que eu transformei em ponto de coleta. Hoje paga meus boletos... e minhas viagens.</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 50 }}>
          <img src={FOTO_AUTOR} alt="Carlos Andrade" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '3px solid ' + NAVY }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: INK }}>Carlos Andrade</div>
            <div style={{ fontSize: 12, color: INK_MUTE }}>papo reto e dicas que ninguém te conta</div>
          </div>
        </div>

        <p style={{ fontSize: 21, color: INK, marginBottom: 24 }}><strong>Vamos direto ao ponto.</strong></p>

        <Para>Sou o Carlos, 33 anos. Fui motorista de Uber por um ano e meio. Trabalhava 9 horas por dia, tirava em média R$ 90 líquidos, e ainda assim o dinheiro sumia todo em gasolina e oficina. Cansei.</Para>

        <Para>Hoje sou ponto de coleta de marketplace e fecho mês na casa dos <strong>R$ 5 mil</strong> — trabalhando menos de 2 horas por dia, de casa. Vou te explicar como funciona esse modelo, por que ele existe, e como você pode entrar nele.</Para>

        <H2>Mas o que é, de fato, esse "ponto de coleta"?</H2>

        <Para>Esse modelo existe porque os grandes marketplaces (Shopee, Mercado Livre, Amazon, Shein) prometem entrega cada vez mais rápida — em muitos casos no mesmo dia ou em 24 horas. Só que tem um detalhe que poucos enxergam: <strong>tudo isso é despachado a partir de um único centro de distribuição</strong>, geralmente afastado dos bairros onde os clientes moram.</Para>

        <Para>Resultado: cada veículo sai do CD lotado, percorre quilômetros, e muitas vezes precisa entrar num bairro inteiro só pra fazer <strong>uma única entrega</strong>. Some isso à explosão de pedidos das últimas Black Fridays, com volume crescendo todo ano, e o custo logístico vira impraticável. O prazo aperta.</Para>

        <Para>A saída encontrada foi descentralizar a operação usando <strong>pontos de coleta espalhados pelos bairros</strong>. Em vez de cada veículo fazer uma entrega isolada numa rua, ele faz uma única parada num endereço — a casa de um morador — e deixa ali 30, 40, às vezes 60 pacotes de uma vez. Depois, outros veículos passam ao longo do dia pra recolher os pacotes que precisam ser entregues ali nas proximidades. A entrega final fica muito mais ágil.</Para>

        <Para>E é exatamente esse "morador" que eu virei. Esse é o negócio.</Para>

        <H2>O cadastro e a verificação</H2>

        <Para>Cheguei em casa depois daquela corrida, contei pra esposa, e ela respondeu uma coisa que ficou na minha cabeça: <em>"Carlos, pelo menos tenta. Se der ruim, sinceramente, não tem muito como piorar."</em></Para>

        <Para>No dia seguinte, antes mesmo de levar o filho na escola, abri o site da <Link>Coletaki</Link> e a gente foi preenchendo o cadastro juntos no celular. Levou uns três minutos. Pediu CEP pra confirmar cobertura da região, nome, CPF, endereço, descrição do espaço e horários disponíveis.</Para>

        <Para>Voltei pra almoçar e tomei um susto — minha esposa já tinha falado com a equipe da Coletaki no telefone e marcado uma <strong>videochamada de verificação pra dois dias depois</strong>. A chamada serve pra confirmar que o endereço existe mesmo, que o local tem higiene adequada e que dá pra trancar. Eles olham o cômodo pelo celular, conferem se tem infiltração, se fica longe de janela voltada pra rua, e se não tem cachorro ou gato circulando no espaço.</Para>

        <Para>No meu caso foi aprovado na hora. Em alguns casos eles pedem ajustes e dão prazo de 72 horas pra você resolver. Em seguida me mandaram um <strong>contrato de responsabilidades</strong> pra assinatura digital — que basicamente cobre o seguinte: as mercadorias têm seguro, mas você é responsável por registrar avaria no app caso receba algo danificado. Se você registra, tá blindado. Se não registra, cai na sua responsabilidade.</Para>

        <Para>Depois disso vieram <strong>4 horas de treinamento online</strong> cobrindo uso do app, leitura de QR code e calendário de pagamento. Na semana seguinte meu ponto entrou em operação.</Para>

        <Para><strong>Do cadastro à primeira coleta foram 11 dias.</strong> Sem investir um real.</Para>

        <H2>Como é o dia a dia</H2>

        <Para>Por volta das 8h da manhã, um veículo encosta na porta. Pode ser uma van do CD do marketplace, pode ser um carro terceirizado contratado pela <Link>Coletaki</Link>. Não muda nada pra mim. O motorista desce com os pacotes — em geral entre 20 e 60 caixinhas leves de e-commerce.</Para>

        <Para>Eu leio o QR code de entrada de cada pacote no aplicativo, junto com ele. Em seguida, organizo tudo no quartinho separado, em prateleiras. Esse processo leva uns 15 a 20 minutos.</Para>

        <Para>Às 11h, outro veículo passa. Esse traz mais alguns pacotes e leva embora boa parte dos que já estavam no ponto. Mesma rotina: leitura do QR de entrada nos novos, leitura do QR de saída nos que saem. Tudo registrado no app.</Para>

        <Para>Às 14h, última passagem do dia. Mais alguns pacotes chegam e parte dos que ficaram das 11h são recolhidos. Às vezes leva tudo, às vezes sobra um pouco pra sair só no dia seguinte.</Para>

        <img src={IMG_PACOTES} alt="Pacotes organizados aguardando próxima passagem" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>Manhã típica: 55 pacotes recém-chegados, aguardando a próxima passagem.</p>

        <Para>A parte importante é essa: <strong>eu não atendo cliente final, não despacho mercadoria, não tenho contato com comprador.</strong> Só recebo, leio o QR, guardo, devolvo pro motorista quando ele volta. O sistema da Coletaki cuida do resto — comunicação, rastreio, destino final.</Para>

        <Para>Entre uma passagem e outra eu fico livre. Almoço com a esposa, busco meu filho na escola, faço o que dá. <strong>Trabalho menos de 2 horas por dia distribuídas em três janelas curtas — e fatura mais do que ganhava rodando 12 horas no aplicativo.</strong></Para>

        <H2>Quanto isso dá, na prática</H2>

        <Para>O pagamento é por pacote processado, depositado <strong>quinzenalmente todo dia 1 e dia 16</strong>, direto na conta vinculada ao CPF. Sem mensalidade, sem taxa de adesão, sem investimento inicial.</Para>

        <Para>Esses foram meus quatro primeiros meses:</Para>

        <Para><strong>Janeiro</strong> (primeiro mês, volume crescendo): R$ 2.140<br /><strong>Fevereiro</strong>: R$ 4.180<br /><strong>Março</strong> (estabilizou): R$ 5.720<br /><strong>Abril</strong>: R$ 4.870</Para>

        <Para>Comparando com Uber, eu tirava em média uns R$ 2.500 a R$ 3.000 líquidos no mês — depois de descontar combustível e manutenção. Hoje fechei o quadrimestre em torno de R$ 4 mil de média, trabalhando menos de 15% do tempo que eu trabalhava antes.</Para>

        <H2>Mas não é pra qualquer um</H2>

        <Para>Antes de você correr pra se cadastrar, deixa eu ser sincero: <strong>esse modelo exige responsabilidade.</strong> Não é bico, não é "trabalha quando quiser". Os horários de chegada e saída dos veículos são combinados com antecedência e <strong>você precisa estar lá.</strong></Para>

        <Para>Se você falta num dia sem avisar, <strong>vários clientes ficam sem o pacote deles</strong> — porque o motorista chega, não tem ninguém pra receber, e a entrega trava. Isso compromete o prazo dos compradores, o nome do marketplace e o seu próprio cadastro. Pontos que faltam várias vezes são desligados.</Para>

        <Para>Quem entra precisa ter:</Para>

        <Para>
          <strong style={{ color: NAVY }}>✓</strong> Compromisso com os horários das três passagens do dia (manhã, meio-dia, início da tarde)<br/>
          <strong style={{ color: NAVY }}>✓</strong> Um cômodo seco, sem infiltração, longe de janela que dá pra rua<br/>
          <strong style={{ color: NAVY }}>✓</strong> Disciplina pra registrar todos os pacotes no aplicativo (entrada e saída)<br/>
          <strong style={{ color: NAVY }}>✓</strong> Vontade de ter renda recorrente sem precisar lidar com cliente, estoque ou funcionário
        </Para>

        <Para>Se você se viu nesses critérios, vale fazer o cadastro. Não cobra nada e a validação é gratuita.</Para>

        <H2>Por que esse modelo tá crescendo agora</H2>

        <Para>Esse não é um modelo de hoje. Plataformas como Amazon Hub Counter e Mercado Livre Agência já existem há anos. A diferença é que <strong>essas plataformas grandes só aceitam comércios estabelecidos</strong> — papelaria, mercadinho, gráfica. Pra moradores comuns, é difícil entrar.</Para>

        <Para>A Coletaki nasceu pra preencher esse vão: ela trabalha com <strong>pessoas físicas, em residências</strong>, e cuida da validação e logística. O modelo dela tem crescido rápido porque os marketplaces precisam de capilaridade — quanto mais pontos espalhados pelos bairros, mais barato e rápido fica entregar.</Para>

        <Para>Pra você ter ideia, a estimativa interna da empresa é que precisariam de pelo menos 5 mil pontos novos só nos próximos 12 meses pra atender a demanda atual.</Para>

        <H2>Como entrar</H2>

        <Para>O processo é exatamente o que eu descrevi acima. Você acessa o site da <Link>Coletaki</Link>, preenche o cadastro (3 a 4 minutos), agenda a videochamada de verificação, assina o contrato de responsabilidades, faz o treinamento e começa a operar. Do início ao fim, demora de 7 a 14 dias.</Para>

        <Para>O cadastro não cobra nada. A validação não cobra nada. Não tem mensalidade, taxa de adesão, ou compra de produto. Você só ganha quando o pacote passa pelo seu ponto.</Para>

        <div style={{ background: NAVY, color: '#fff', borderRadius: 16, padding: 40, marginTop: 50, textAlign: 'center' }}>
          <h3 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
            Quer ver se a sua casa serve?
          </h3>
          <p style={{ fontSize: 15, opacity: 0.9, lineHeight: 1.6, margin: '0 0 26px', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            Igual eu fiz: você se cadastra no site, faz uma videochamada com o consultor e já recebe a resposta. Sem compromisso e sem custo.
          </p>
          <a href={LINK_COLETAKI} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: GOLD, color: NAVY, padding: '15px 36px', borderRadius: 10, textDecoration: 'none', fontWeight: 800, fontSize: 15, letterSpacing: '-0.01em' }}>
            Quero fazer meu cadastro →
          </a>
          <div style={{ fontSize: 11, opacity: 0.65, marginTop: 18 }}>cadastro grátis · validação grátis · resposta em até 14 dias</div>
        </div>

        <H2>Pra fechar</H2>

        <Para>Quem tá pesquisando ideia de negócio sabe que a maior parte das opções exige ou capital, ou risco alto, ou tempo de maturação. Ponto de coleta de marketplace é uma das poucas que não exige nada disso. Não é mágico, não é fácil pra todo mundo, mas é simples — e pra quem tem o perfil certo, funciona.</Para>

        <Para>Eu não imaginava que ia escrever esse texto há um ano. Tava só tentando me virar com o Uber. Hoje passo o dia inteiro em casa, almoço com a esposa, busco meu filho na escola, e fecho mês com 50% a mais do que eu ganhava na rua.</Para>

        <Para>Se isso fizer sentido pra você, o site é <Link>coletaki.com</Link>. Boa sorte aí.</Para>

        <div style={{ textAlign: 'center', marginTop: 60, paddingTop: 36, borderTop: '1px solid ' + LINE }}>
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
