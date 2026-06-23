'use client';
import React from 'react';
import { Coffee, Heart, ArrowRight, Quote, Check } from 'lucide-react';

const NAVY = '#0F2A5C';
const GOLD = '#D4A946';
const INK = '#0F1419';
const INK_SOFT = '#2C3440';
const INK_MUTE = '#5B6573';
const LINE = '#E5E9EF';
const BG_SOFT = '#FAFBFC';

const FOTO_CAMILA = 'https://i.pinimg.com/736x/30/0e/0a/300e0aabcfbe9b3da8c46cd35cf30c4d.jpg';
const FOTO_CASAL = 'https://i.pinimg.com/736x/3d/0f/40/3d0f40b04d5f306e0a2086d83b8f5663.jpg';
const FOTO_MOTO = 'https://i.pinimg.com/736x/97/c3/cb/97c3cb09fdc7ec5b66c4d99f5f1b6b67.jpg';
const FOTO_CASA = 'https://i.pinimg.com/736x/26/8d/49/268d4948ba31faf6e9c4dd0c8c0a1f88.jpg';
const FOTO_FILHA = 'https://i.pinimg.com/736x/d0/cb/2c/d0cb2cb20c4faf2b6f29f0a48d2c2b39.jpg';
const FOTO_CALDAS = 'https://i.pinimg.com/736x/c1/2a/c1/c12ac1cc5c97cb1c4a36b65a3b6ea3a3.jpg';

const MENU = ['Home', 'Histórias', 'Renda', 'Vida real', 'Sobre'];

function Para({ children, italic, center }) {
  return (
    <p style={{
      fontSize: 17, lineHeight: 1.8, color: INK_SOFT, margin: '0 0 20px',
      fontStyle: italic ? 'italic' : 'normal',
      textAlign: center ? 'center' : 'left'
    }}>
      {children}
    </p>
  );
}

function DataDiario({ children, mes, ano }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, marginTop: 42 }}>
      <div style={{ background: NAVY, color: '#fff', padding: '10px 16px', borderRadius: 8, textAlign: 'center', minWidth: 76 }}>
        <div style={{ fontSize: 10, fontWeight: 700, opacity: 0.7, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{mes}</div>
        <div style={{ fontSize: 20, fontWeight: 800, lineHeight: 1, marginTop: 2 }}>{ano}</div>
      </div>
      <div style={{ flex: 1, height: 1, background: LINE }} />
      <h2 style={{ fontSize: 22, fontWeight: 800, color: NAVY, margin: 0, letterSpacing: '-0.02em', textAlign: 'right', flexShrink: 0 }}>{children}</h2>
    </div>
  );
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
        <div style={{ height: '100%', width: scroll + '%', background: GOLD, transition: 'width 0.1s' }} />
      </div>

      <header style={{ background: '#fff', borderBottom: '1px solid ' + LINE, position: 'sticky', top: 3, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Heart size={22} />
            </div>
            <div>
              <div style={{ fontSize: 21, fontWeight: 800, color: NAVY, letterSpacing: '-0.02em', lineHeight: 1 }}>Diário de Camila</div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', color: INK_MUTE, marginTop: 5, textTransform: 'uppercase' }}>histórias reais de quem reinventou a vida</div>
            </div>
          </a>
          <nav style={{ display: 'flex', gap: 30 }} className="menu-d">
            {MENU.map(m => <a key={m} href="#" style={{ fontSize: 13, color: INK_SOFT, textDecoration: 'none', fontWeight: 600 }}>{m}</a>)}
          </nav>
        </div>
      </header>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px 80px' }}>

        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: GOLD + '15', color: GOLD, padding: '6px 16px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            <Heart size={12} /> Diário pessoal · 9 min de leitura
          </div>
        </div>

        <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.025em', marginBottom: 24, textAlign: 'center', color: NAVY }} className="h1-main">
          Eu pedi demissão. Ele <span style={{ color: GOLD }}>vendeu a moto</span>. Hoje a gente vive disso.
        </h1>

        <p style={{ fontSize: 19, color: INK_SOFT, lineHeight: 1.6, margin: '0 auto 36px', textAlign: 'center', maxWidth: 580 }}>
          Esse é o diário dos últimos 12 meses da nossa vida. Tem dia que eu olho pro Pedro dormindo e ainda não acredito que a gente conseguiu.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 36 }}>
          <img src={FOTO_CAMILA} alt="Camila Rocha" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '3px solid ' + NAVY }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: INK }}>Camila Rocha</div>
            <div style={{ fontSize: 12, color: INK_MUTE }}>34 anos · Ribeirão Preto · ex-operadora de telemarketing</div>
          </div>
        </div>

        <img src={FOTO_CASAL} alt="Eu e o Pedro" style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 40, fontStyle: 'italic' }}>Eu e o Pedro, dezembro de 2025. Primeira vez que a gente tirou férias juntos depois de 9 anos.</p>

        <Para>Antes de qualquer coisa: <strong>eu nunca quis escrever um diário público</strong>. Mas faz três meses que minha irmã insiste pra eu contar nossa história. Ela diz que tem muita gente passando o que a gente passou e precisa ouvir.</Para>

        <Para>Então tá bom. Vou contar.</Para>

        <Para>Esse texto não é sobre dinheiro. Mas tem dinheiro nele. É sobre o que mudou na nossa casa quando o Pedro parou de chegar em casa às onze da noite cheirando óleo de moto.</Para>

        {/* ===== JANEIRO ===== */}
        <DataDiario mes="Jan" ano="25">Quando ele chegou chorando</DataDiario>

        <Para>Dia 14 de janeiro. Era terça-feira. Pedro voltou da rua às onze e meia da noite e sentou no chão da cozinha. Não tirou o casaco. Não tirou o capacete. Só sentou.</Para>

        <Para>Eu perguntei o que tinha acontecido. Ele falou que tinha tomado o terceiro tombo do mês. Dessa vez na chuva, na avenida Independência. Não machucou nada grave, mas ele tava com a mão tremendo.</Para>

        <Citacao>"Camila, eu não aguento mais. Eu olho pra Maria Eduarda dormindo e não sei se amanhã eu volto pra casa."</Citacao>

        <Para>Maria Eduarda tinha 4 anos. Pedro era motoboy há nove. Nove anos chegando em casa depois das dez. Nove anos de chuva, sol, trânsito de Ribeirão num verão de 41 graus.</Para>

        <Para>Naquela noite eu fiz café. Não dormimos. <strong>A gente decidiu que algo tinha que mudar.</strong> Só não sabia o quê.</Para>

        {/* ===== FEVEREIRO ===== */}
        <DataDiario mes="Fev" ano="25">Eu pedi demissão</DataDiario>

        <Para>Eu trabalhava na operadora de telemarketing há 6 anos. Ganhava R$ 1.620 com o vale-alimentação. Saía de casa às 5 e meia da manhã pra pegar dois ônibus.</Para>

        <Para>O pior não era o dinheiro. Era não ver minha filha. Eu chegava e ela já tava dormindo. Saía e ela ainda não tinha acordado.</Para>

        <Para>Ela me chamava de "tia" às vezes. Eu fingia que achava engraçado.</Para>

        <Para>Pedi demissão dia 4 de fevereiro. Sem ter outro emprego. Sem plano. Minha mãe quase teve um piti — "Camila você endoidou?".</Para>

        <Para>Talvez. Mas eu precisava de um tempo pra pensar.</Para>

        {/* ===== MARCO ===== */}
        <DataDiario mes="Mar" ano="25">A moto foi embora</DataDiario>

        <img src={FOTO_MOTO} alt="A moto do Pedro" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>A Honda Titan 2018 do Pedro. Comprou em 6 anos de boleto.</p>

        <Para>Em março a gente tava com R$ 940 na conta. Maria Eduarda precisava do uniforme da escola e a luz tinha vencido.</Para>

        <Para>Eu disse pro Pedro: <em>vende a moto.</em></Para>

        <Para>Ele me olhou como se eu tivesse pedido pra ele vender uma parte do corpo. Aquela moto era a vida dele. Era o que pagava as contas. Era o orgulho de ter comprado em 60 prestações.</Para>

        <Citacao>"Mas é meu trabalho, Camila. Se eu vender a moto eu não tenho mais como ganhar dinheiro."</Citacao>

        <Para>Eu segurei a mão dele e falei: <strong>"a gente vai dar um jeito. Mas você não vai morrer numa avenida pra trazer R$ 90 por dia."</strong></Para>

        <Para>Vendemos por R$ 8.200. Pagamos contas, comprei comida, sobrou pouco mais de R$ 2.000.</Para>

        {/* ===== ABRIL ===== */}
        <DataDiario mes="Abr" ano="25">O que mudou tudo</DataDiario>

        <Para>Foi no dia 22 de abril. Eu lembro porque foi aniversário da Maria Eduarda. A gente fez bolo simples, daqueles de caixinha.</Para>

        <Para>Apareceu o Júnior. Júnior é amigo de infância do Pedro, daqueles que mora 3 ruas pra baixo. Ele chegou com uma marmita de feijoada que a esposa tinha feito (porque a gente não tinha quase nada em casa naquela semana).</Para>

        <Para>Ele perguntou como a gente tava. Pedro contou tudo.</Para>

        <Para>O Júnior ficou olhando pra gente, em silêncio. Depois disse:</Para>

        <Citacao>"Pedro, eu sou ponto de coleta da Coletaki há 6 meses. Tô tirando uns R$ 4.500 por mês só recebendo pacote em casa. Cê tem que ver isso."</Citacao>

        <Para>Eu confesso que achei estranho. <em>Ponto de coleta?</em> Que negócio era esse?</Para>

        <Para>Pedro pegou o celular dele e o Júnior mostrou. Marketplaces grandes — Amazon, Shein, Mercado Livre — usam casas de moradores comuns pra deixar os pacotes que os motoristas de moto não conseguem entregar (porque a pessoa não tá em casa, porque o prédio não recebe, porque o endereço é difícil).</Para>

        <Para>O morador recebe o pacote, guarda na sala dele, e depois o destinatário vai buscar quando puder. <strong>A pessoa ganha por cada coleta feita.</strong></Para>

        <Para>Pedro olhou pra mim. Eu olhei pra Pedro. Mesma cara. Mesma pergunta na cabeça: <em>"isso pode ser pra gente?".</em></Para>

        {/* ===== MAIO ===== */}
        <DataDiario mes="Mai" ano="25">A visita do consultor</DataDiario>

        <Para>Naquela mesma semana a gente entrou no site da Coletaki. Preenchemos o cadastro. Levou uns 4 minutos.</Para>

        <Para>3 dias depois, ligou no celular do Pedro: <em>"Boa tarde, aqui é o Matheus da Coletaki. Vamos marcar uma chamada de vídeo pra eu conhecer o espaço?"</em></Para>

        <Para>Eu fiquei nervosa. Será que nossa casa seria aceita? A gente mora num conjuntinho simples, 2 quartos, lavanderia coberta na frente.</Para>

        <Para>Marcamos a videochamada pra sexta às 4 da tarde. O Matheus foi gentil. Pediu pra gente mostrar a sala, a área da frente, onde os pacotes ficariam. Tirou prints. Anotou medidas.</Para>

        <img src={FOTO_CASA} alt="Nossa lavanderia" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>A nossa lavanderia. Foi aqui que a gente começou a guardar os pacotes.</p>

        <Citacao>"Camila, vocês precisam só organizar uma prateleira aqui na lavanderia. Coloca uma cortina. Em uma semana cês tão prontos."</Citacao>

        <Para>Em uma semana. <strong>Uma semana.</strong> A gente tinha demorado mais tempo procurando emprego em loja sem nenhum retorno.</Para>

        {/* ===== JUNHO ===== */}
        <DataDiario mes="Jun" ano="25">A primeira semana</DataDiario>

        <Para>Começamos dia 10 de junho. Recebemos um app, um QR code de entrada, um cartaz com horário.</Para>

        <Para>Primeiro dia: 3 coletas. Eu fiquei ansiosa cada vez que tocava a campainha — <em>e se eu deixar cair? e se confundir?</em></Para>

        <Para>Não caiu nada. Não confundi nada. Era só receber o pacote, escanear o código no app, guardar na prateleira.</Para>

        <Para>Final da semana: 18 pacotes. R$ 416 só de comissão.</Para>

        <Para>Pedro disse: <em>"Camila, isso aqui pode dar certo."</em></Para>

        {/* ===== AGOSTO ===== */}
        <DataDiario mes="Ago" ano="25">Quatro mil duzentos reais</DataDiario>

        <Para>Em agosto fechamos R$ 4.247 só com Coletaki. Quase 3 vezes o que eu ganhava na operadora.</Para>

        <Para>E sabe o que mais marcou? Não foi o dinheiro.</Para>

        <Para>Foi quando a Maria Eduarda chegou da escola e a gente tava lá. Os dois. Esperando ela na porta com biscoito.</Para>

        <Para>Ela me abraçou e disse: <em>"mamãe, você não vai trabalhar mais?".</em></Para>

        <Citacao>"Vou sim, filha. Mas agora é aqui. Pertinho de você."</Citacao>

        {/* ===== SETEMBRO ===== */}
        <DataDiario mes="Set" ano="25">O cartão da escola</DataDiario>

        <img src={FOTO_FILHA} alt="Maria Eduarda" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>Maria Eduarda, 5 anos. Hoje ela faz balé porque a gente conseguiu pagar.</p>

        <Para>Em setembro a Maria Eduarda trouxe um bilhete da escola — eles tavam organizando aula de balé. R$ 180 por mês.</Para>

        <Para>Antes eu teria dito que não dava. Naquele dia, eu olhei pra cartão da agenda e respondi: <strong>"pode matricular".</strong></Para>

        <Para>Foi a primeira vez em 5 anos que eu falei sim pra alguma coisa pra ela sem fazer conta antes.</Para>

        {/* ===== NOVEMBRO ===== */}
        <DataDiario mes="Nov" ano="25">Caldas Novas</DataDiario>

        <img src={FOTO_CALDAS} alt="Caldas Novas" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>Nossa primeira viagem juntos. Caldas Novas, novembro de 2025.</p>

        <Para>Em novembro fechamos R$ 5.870. A gente combinou de tirar 5 dias e levar a Maria Eduarda pra Caldas Novas.</Para>

        <Para>Foi a primeira viagem da vida dela. <strong>Eu chorei o caminho inteiro do carro.</strong></Para>

        <Para>O Pedro segurou minha mão na BR e disse:</Para>

        <Citacao>"Cami, faz 9 anos que eu te falava 'a gente vai conseguir'. Olha pra gente agora."</Citacao>

        {/* ===== DEZEMBRO ===== */}
        <DataDiario mes="Dez" ano="25">Olhei pra ele e vi paz</DataDiario>

        <Para>Hoje, escrevendo esse texto, dia 18 de dezembro de 2025. Faltam 7 dias pro Natal.</Para>

        <Para>Pedro tá dormindo no sofá ali do meu lado, com o controle da TV na mão. Maria Eduarda tá na casa da minha irmã, voltando amanhã.</Para>

        <Para>Olhei pra ele agora e vi <strong>paz pela primeira vez em 9 anos.</strong></Para>

        <Para>Não é o dinheiro. Não é só o dinheiro.</Para>

        <Para>É o fato de que ele não tá lá fora, na chuva, tomando tombo. É o fato de que eu tô aqui, vendo minha filha crescer.</Para>

        <Para>É o fato de que a gente fez uma escolha doida — vender a moto, pedir demissão sem garantia — e deu certo.</Para>

        {/* ===== CTA ===== */}
        <div style={{ background: NAVY, color: '#fff', borderRadius: 16, padding: 36, marginTop: 56, textAlign: 'center' }}>
          <Heart size={32} color={GOLD} style={{ margin: '0 auto 12px', display: 'block' }} />
          <h3 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
            Quer saber se a sua casa serve?
          </h3>
          <p style={{ fontSize: 15, opacity: 0.9, lineHeight: 1.6, margin: '0 0 24px', maxWidth: 460, marginLeft: 'auto', marginRight: 'auto' }}>
            O Matheus (consultor que me atendeu) faz uma chamada de vídeo de 30 minutos com você. Se sua casa servir, você começa em até uma semana — igual a gente.
          </p>
          <a href="https://www.coletaki.com/cadastro" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: GOLD, color: NAVY, padding: '14px 32px', borderRadius: 10, textDecoration: 'none', fontWeight: 800, fontSize: 15, letterSpacing: '-0.01em' }}>
            Quero saber se serve <ArrowRight size={18} />
          </a>
          <div style={{ fontSize: 11, opacity: 0.7, marginTop: 18 }}>Sem compromisso · A validação é gratuita</div>
        </div>

        {/* Assinatura */}
        <div style={{ textAlign: 'center', marginTop: 48, paddingTop: 32, borderTop: '1px solid ' + LINE }}>
          <img src={FOTO_CAMILA} alt="Camila" style={{ width: 92, height: 92, borderRadius: '50%', objectFit: 'cover', border: '4px solid ' + NAVY, marginBottom: 16 }} />
          <div style={{ fontSize: 18, fontWeight: 800, color: INK }}>Camila Rocha</div>
          <div style={{ fontSize: 13, color: INK_MUTE, marginTop: 4 }}>Compartilhei essa história porque me pediram. Se ajudar uma família, valeu.</div>
        </div>

      </article>

      <footer style={{ background: NAVY, color: '#fff', padding: '40px 24px', textAlign: 'center', marginTop: 60 }}>
        <div style={{ fontSize: 13, opacity: 0.7 }}>Diário do Interior · Histórias reais de quem decidiu mudar</div>
        <div style={{ fontSize: 11, opacity: 0.5, marginTop: 6 }}>Este é um conteúdo opinativo. Coletaki é mencionada conforme experiência real.</div>
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
