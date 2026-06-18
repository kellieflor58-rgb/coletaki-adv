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
const LINK_COLETAKI = 'https://cadastro-coletaki.vercel.app';
const IMG_HERO = 'https://i.pinimg.com/736x/d5/c1/b5/d5c1b510c3c53e23a0ba06a44235ce93.jpg';
const IMG_PACOTES = 'https://i.pinimg.com/736x/ba/cb/93/bacb93b2f5c282e4df2281c58498058f.jpg';

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
          <a href="/coleta" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 14 }}>
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
            <a href="#" style={{ fontSize: 13, color: INK_SOFT, textDecoration: 'none', fontWeight: 600 }}>Sobre</a>
            <a href="#" style={{ fontSize: 13, color: INK_SOFT, textDecoration: 'none', fontWeight: 600 }}>Categorias</a>
            <a href="#" style={{ fontSize: 13, color: INK_SOFT, textDecoration: 'none', fontWeight: 600 }}>Newsletter</a>
          </nav>
        </div>
      </header>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '56px 28px 80px' }}>

        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 11, color: INK_MUTE, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
            <span>23 maio · 2026</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD }} />
            <span>relato pessoal</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD }} />
            <span>7 min de leitura</span>
          </div>
        </div>

        <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.025em', marginBottom: 24, textAlign: 'center', color: NAVY }} className="h1-main">
          De motorista de app a <span style={{ color: GOLD }}>R$ 3.000–6.000 por mês</span> como ponto de coleta de marketplace
        </h1>

        <p style={{ fontSize: 19, color: INK_SOFT, lineHeight: 1.6, margin: '0 auto 36px', textAlign: 'center', maxWidth: 640 }}>
          Hoje vou te contar como transformei meu apartamento num negócio: os prós, os contras, e o passo a passo pra entrar e até quanto dá pra faturar com a Coletaki.
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

        <div style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 14, aspectRatio: '2/1', boxShadow: '0 16px 48px rgba(15,42,92,0.18)' }}>
          <img src={IMG_HERO} alt="Apartamento operando como ponto de coleta" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ fontSize: 12, color: INK_MUTE, fontStyle: 'italic', textAlign: 'center', marginBottom: 50 }}>
          Meu apartamento, hoje. Era só uma sala de bagunça. Hoje paga meus boletos.
        </div>

        <div style={{ maxWidth: 640, margin: '0 auto' }}>

          <p style={{ fontSize: 21, color: INK, marginBottom: 24 }}><strong>E aí, beleza?</strong></p>

          <Para>Meu nome é Carlos, tenho 33 anos, casado, dois filhos. Moro em Ribeirão Preto, interior de São Paulo. Passei mais de dez anos de carteira assinada — daqueles trabalhos que parecem que vão durar a vida toda, com chefe ruim, plano de saúde caindo de qualidade ano após ano, e o salário aumentando bem menos do que o aluguel.</Para>

          <Para>Junho do ano passado bateu o cansaço de verdade. Tinha trinta e dois anos, dois filhos pequenos em casa, e a sensação cada vez mais clara de que eu tava acordando cedo todo dia pra construir o sonho dos outros. Pedi as contas num impulso, mas com uma certeza no peito: queria ter horário próprio, queria almoçar com minha esposa de vez em quando, queria pegar meu filho na escola sem precisar pedir permissão pra ninguém.</Para>

          <Para>Virei motorista de aplicativo no susto. No começo até parecia que ia dar tudo certo. Tirava uns <strong>R$ 80 a R$ 110 líquidos por dia</strong> trabalhando 8, 9 horas. Não era o melhor salário do mundo, mas era todo dia — entrava algum dinheiro mesmo nos dias mais ruins. Ribeirão Preto é uma cidade que roda bem pra Uber: tem universidade, tem hospital, tem evento toda semana, e o trânsito não é o caos de São Paulo capital. Achei que tinha encontrado meu lugar.</Para>

          <Para>Só que ninguém me avisou de uma coisa: <strong>o carro também trabalha.</strong> E o carro cansa, junto com o motorista. Em uns três meses eu já tinha gastado com pneu novo, troca de óleo dupla, pastilha de freio, alinhamento, balanceamento, e ainda um conserto chato na suspensão depois de um buraco fatal na Avenida Brasil. Cada manutenção comia uma semana inteira de corrida.</Para>

          <Para>Quando eu fechava o mês, sentava com a esposa pra fazer as contas, e o resultado era sempre o mesmo: <strong>tava trabalhando pra manter o carro rodando.</strong> O dinheiro entrava na conta, mas saía igualzinho pelo posto de gasolina e pela mecânica. A esposa não falava nada, mas eu via a preocupação no olhar dela. Eu mesmo tava começando a achar que tinha tomado a pior decisão da minha vida.</Para>

          <H2>A descoberta veio numa corrida</H2>

          <Para>Foi numa terça à noite no comecinho de janeiro. Última corrida do dia, eu já tava cansado. Peguei um cara perto do centro, uns 40 anos, simpático. No meio da viagem ele me perguntou se eu trabalhava só de Uber. Eu acabei desabafando — falei do gasto com o carro, do desânimo, da sensação de não tá indo a lugar nenhum.</Para>

          <Para>Ele ouviu, ficou quieto um momento, e respondeu:</Para>

          <div style={{ background: PAPER_WARM, borderLeft: '3px solid ' + GOLD, padding: '24px 28px', margin: '32px 0', borderRadius: '0 8px 8px 0' }}>
            <p style={{ fontSize: 19, fontStyle: 'italic', color: NAVY, lineHeight: 1.55, margin: 0 }}>
              "Cara, conheço um amigo que tava nessa mesma de Uber. Hoje ele virou ponto de coleta dessas empresas de marketplace — basicamente recebe pacote em casa, várias vezes por dia, e devolve pro motorista pegar de volta. Tá tirando uns quatro, cinco mil por mês. Sem ter que sair de casa."
            </p>
          </div>

          <Para>Pedi o nome da empresa. Ele pesquisou no celular, achou o site da <Link>Coletaki</Link> e me mandou o link pelo zap. Anotei mentalmente, agradeci, deixei ele no destino.</Para>

          <H2>Cheguei em casa e contei pra esposa</H2>

          <Para>Cheguei em casa direto pro jantar com a esposa e as crianças. Depois que os filhos foram dormir, sentei na mesa e desabafei de novo — só que dessa vez já com a história do passageiro fresca na cabeça. Comentei sobre o tal site que o cara me indicou, falei o que ele tinha me contado do amigo dele.</Para>

          <Para>Ela me ouviu até o fim, ficou quieta um pouco, e respondeu uma coisa que ficou na minha cabeça: <em>"Carlos, pelo menos tenta. Se der ruim, sinceramente, não tem muito como piorar."</em></Para>

          <Para>Foi a permissão que eu precisava ouvir.</Para>

          <H2>No dia seguinte, no café da manhã</H2>

          <Para>Acordei cedo no dia seguinte. Antes mesmo de levar o filho na escola, abri o site da <Link>Coletaki</Link> e a gente foi preenchendo o cadastro juntos no celular, ali no café da manhã. Levou uns três minutos. Pediu o CEP pra confirmar cobertura da região (tinha), nome, CPF, endereço, descrição do espaço disponível e horários.</Para>

          <Para>Saí pra levar o filho, depois engatei algumas corridas de Uber pra não perder o dia. Voltei pra almoçar e tomei um susto — minha esposa já tinha falado com a equipe da Coletaki no telefone e marcado uma <strong>videochamada de verificação pra dois dias depois</strong>. O propósito da chamada era simples: confirmar que o endereço existia mesmo, que o local tinha higiene adequada e que não era nada esquisito.</Para>

          <Para>Na chamada, você precisa <strong>mostrar o rosto e apresentar um documento de identidade</strong> pra confirmar que é você mesmo. Depois disso é só mostrar o espaço pelo celular. Eles olham o cômodo, conferem a limpeza, verificam que dá pra trancar e que fica fora da circulação cotidiana. <strong>O único pedido foi pra deixar os pacotes fora do alcance das crianças e animais.</strong> Aprovado na hora.</Para>

          <Para>Se durante a videochamada eles identificarem alguma irregularidade, te avisam o que precisa ajustar e dão um prazo de <strong>72 horas pra você arrumar</strong>. As regras principais que eles olham: não pode ter infiltração de água no local, não pode ser perto de janelas que dão pra rua (risco de roubo), e não pode aparecer animal no espaço durante a gravação. Se tiver um cachorro ou gato no cômodo na hora, eles não aprovam — mas basta refazer a chamada num quarto fechado ou na garagem que já passa tranquilo.</Para>

          <H2>O contrato de responsabilidades</H2>

          <Para>No mesmo dia da videochamada me mandaram pelo email um <strong>contrato de responsabilidades</strong> pra eu ler com calma e assinar digitalmente. É aqui que eu já queria explicar com clareza, porque é a parte que mais pega gente despreparada.</Para>

          <Para>O contrato diz, em resumo, o seguinte: <strong>quase todas as mercadorias que passam pelo ponto têm seguro</strong>, então se um cliente final receber algo danificado por avaria comprovada, a Coletaki cobre. Mas eles não pagam ao ponto se o motivo da devolução for avaria <strong>e</strong> o último registro do pacote tiver sido na sua casa <strong>e</strong> você não tiver comunicado o sistema que ele já chegou avariado.</Para>

          <Para>Em outras palavras: você é responsável pelo pacote enquanto ele está no seu ponto. Mas você tem uma ferramenta de proteção forte — basta <strong>avisar no app no momento do recebimento que a mercadoria que você deu entrada já está com sinais de avaria, tirar foto e deixar o registro feito</strong>. Se você fizer isso, sua responsabilidade tá coberta.</Para>

          <Para>Logo depois do contrato veio o treinamento online de quatro horas. Cobriu uso do app, regras de conferência, leitura de QR code, registro de avaria, calendário de pagamento. Direto, sem enrolação. Na quarta-feira da semana seguinte meu ponto entrou em operação.</Para>

          <H2>Como funciona o dia a dia</H2>

          <Para>Por volta das oito da manhã, o motorista encosta na minha porta. Às vezes é alguém do CD de distribuição do próprio marketplace (Mercado Livre, Shopee, Amazon), às vezes é um terceirizado de carro contratado pela <Link>Coletaki</Link> pra fazer a rota. Não muda nada pra mim — o procedimento é o mesmo.</Para>

          <Para>Ele desce com os pacotes. Em geral chegam entre <strong>20 e 60 pacotes por passagem</strong>, todos pequenos — caixinhas, envelopes, embalagens leves de e-commerce comum. Eu leio o QR code de entrada de cada pacote no app, junto com o motorista, e guardo tudo no cômodo separado.</Para>

          <Para>Às onze ele passa de novo. Traz mais pacotes e leva os que ficaram do dia anterior e também os que cheguei a receber pela manhã. Às duas da tarde, última passagem do dia: deixa mais alguns pacotes e recolhe parte do que ficou das onze — às vezes leva tudo, às vezes sobra um pouco que vai sair só no dia seguinte. Quando os pacotes saem, é o mesmo procedimento: <strong>leitura de QR code de saída no app, um por um</strong>.</Para>

          <Para>Esse registro é fundamental. Se uma encomenda sumir em algum momento da cadeia, o sistema da Coletaki consegue rastrear pelo QR code qual foi o último local onde ela foi escaneada. Por isso é <strong>extremamente importante ler o QR de saída de todos os pacotes antes de passar pro motorista</strong> — assim você fica blindado caso algo desapareça no caminho.</Para>

          <Para>A parte importante é essa: <strong>eu não despacho, não atendo cliente, não tenho contato com comprador.</strong> Só recebo, leio o QR, guardo, devolvo pro motorista quando ele volta. O sistema da Coletaki cuida do resto.</Para>

          <div style={{ margin: '40px 0 16px', borderRadius: 12, overflow: 'hidden' }}>
            <img src={IMG_PACOTES} alt="Pacotes organizados aguardando próxima passagem" style={{ width: '100%', display: 'block' }} />
          </div>
          <div style={{ fontSize: 12, color: INK_MUTE, fontStyle: 'italic', textAlign: 'center', marginBottom: 50 }}>
            Manhã típica: 30 pacotes recém-chegados, todos pequenos, aguardando a próxima passagem.
          </div>

          <H2>O pagamento: dia 1 e dia 16</H2>

          <Para>O pagamento é por pacote processado, depositado <strong>quinzenalmente: todo dia 01 e todo dia 16</strong> direto na minha conta vinculada ao CPF. Sem mensalidade, sem taxa de adesão, sem investimento inicial. Só preciso <strong>manter os pacotes em local seguro</strong> e <strong>estar nos horários combinados de chegada e saída dos veículos</strong>. É isso.</Para>

          <Para>Pra você ter uma referência, esses foram meus 4 meses operando:</Para>

          <Para><strong>Janeiro</strong> (primeiro mês, ritmo crescendo): R$ 2.140<br /><strong>Fevereiro</strong>: R$ 4.180<br /><strong>Março</strong> (volume estabilizou): R$ 5.720<br /><strong>Abril</strong>: R$ 4.870</Para>

          <Para>Hoje minha média gira entre <strong>R$ 3 mil e R$ 6 mil por mês</strong>, dependendo do volume da semana e da época. <strong>Black Friday, Natal e Dia dos Namorados puxam o volume pra cima. Janeiro e fevereiro tendem a ser meses mais fracos.</strong></Para>

          <H2>Os pontos negativos (porque tem)</H2>

          <Para>Quero ser honesto contigo. Tem dois pontos que pegam quem entra despreparado.</Para>

          <Para><strong>O primeiro é a atenção na conferência.</strong> Como o contrato deixa claro, qualquer pacote que chega com aspecto suspeito — caixa amassada, fita rompida, embalagem semi-aberta — você precisa <strong>fotografar pelo app e registrar avaria no momento do recebimento</strong>. Se você esquecer e o pacote sair quebrado, a responsabilidade é sua. Eu já fiz isso umas cinco vezes em quatro meses; em todas a Coletaki resolveu sem desconto pra mim — porém eu também <strong>não recebi os valores referentes àquelas mercadorias específicas</strong>, porque elas voltaram pra origem em vez de serem entregues.</Para>

          <Para><strong>O segundo é a regularidade obrigatória.</strong> Não dá pra tratar isso como renda extra sem responsabilidade. Você precisa estar em casa pra atender os motoristas nos três horários combinados — em geral <strong>8h da manhã, 11h e 14h da tarde</strong>. Quem falta passagem sem avisar antes perde priorização. Quem falta várias vezes pode ser desligado.</Para>

          <Para>Posso colocar minha esposa ou outra pessoa pra atender em algum horário se precisar? Pode. Mas essa pessoa precisa <strong>fazer a entrada e saída dos pacotes no app corretamente</strong>, e manter os itens seguros até a próxima passagem. A responsabilidade continua sendo do CPF cadastrado, então o ideal é treinar quem vai te substituir antes de delegar.</Para>

          <H2>O que mudou na minha rotina</H2>

          <Para>Hoje eu acordo às seis, tomo café com os filhos, levo eles na escola. Volto, atendo a passagem das oito. Almoço decente em casa, atendo a das onze. Tiro uma soneca se quero. Atendo a das duas. Resto da tarde tô livre — busco as crianças, faço caminhada com a esposa, janto cedo, durmo bem.</Para>

          <Para>No começo, sendo bem honesto, eu ainda fazia algumas corridas de Uber depois da última passagem das duas. <strong>Era um medo bobo de chegar o dia do pagamento e nada cair na minha conta.</strong> Demorou uns dois meses pra eu acreditar que o negócio era sólido. Hoje, com a operação rodando estável e a confiança construída, prefiro priorizar minha qualidade de vida. Levo as crianças no parquinho, vou pra academia, jantar tranquilo em casa.</Para>

          <Para>Em mais de dez anos de CLT eu nunca tive uma rotina dessas. <strong>Essa é a diferença que ninguém te conta quando fala de "trabalhar em casa".</strong></Para>

          <H2>Por que esse modelo tá crescendo no Brasil</H2>

          <Para>Conversando com gente do meio e lendo reportagens, comecei a entender por que essa operação tá se espalhando rápido pelo país.</Para>

          <Para>A dor número um dos grandes marketplaces hoje é a <strong>última milha</strong> — aquela parte final da entrega, do CD até a casa do cliente. É a parte que mais demora, mais reclama, mais custa. Quando o Mercado Livre, a Shopee ou a Amazon precisam atender bairros inteiros usando só centros de distribuição grandes, a entrega trava em 2, 3, 5 dias.</Para>

          <Para>Com pontos residenciais espalhados pela cidade, eles resolvem isso. <strong>Em vez de um CD gigante atender bairros distantes, dezenas de pontos pequenos cobrem cada região.</strong> A entrega final fica mais rápida pro cliente, e a logística fica drasticamente mais barata pra empresa. Por isso eles pagam bem pra quem opera ponto — porque resolve um problema que custa milhões em frustração de cliente e custo logístico.</Para>

          <Para>Esse modelo não é moda. É evolução natural do e-commerce brasileiro, que cresceu rápido demais pra ser atendido só com infraestrutura tradicional.</Para>

          <div style={{ textAlign: 'center', padding: '44px 0', borderTop: '1px solid ' + LINE, borderBottom: '1px solid ' + LINE, margin: '50px 0' }}>
            <p style={{ fontSize: 16, color: INK_SOFT, lineHeight: 1.65, maxWidth: 580, margin: '0 auto 28px', fontStyle: 'italic' }}>
              Antes de fechar quero deixar claro: <strong>não sou patrocinado pela Coletaki</strong>. Tô compartilhando aqui minha experiência pessoal e profissional com a empresa, que tem dado certo pra mim em Ribeirão Preto há quatro meses. Pode funcionar pra você do mesmo jeito ou pode não funcionar — depende da sua região, do seu espaço, da sua dedicação. Se quiser tirar suas próprias conclusões, o cadastro é direto no site oficial, gratuito, sem compromisso.
            </p>
            <a href={LINK_COLETAKI} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: NAVY, color: '#fff', padding: '16px 32px', borderRadius: 999, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 10px 28px rgba(15,42,92,0.32)' }}>
              Conhecer a Coletaki →
            </a>
          </div>

          <div style={{ textAlign: 'center', margin: '60px 0 30px' }}>
            <div style={{ fontSize: 19, color: INK_SOFT, marginBottom: 6 }}>Tamo junto,</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: NAVY, letterSpacing: '-0.02em' }}>Carlos<span style={{ color: GOLD, marginLeft: 6 }}>✦</span></div>
          </div>

          <div style={{ borderTop: '1px solid ' + LINE, paddingTop: 24, fontSize: 12, color: INK_MUTE, lineHeight: 1.7, fontStyle: 'italic', textAlign: 'center' }}>
            <strong>Aviso editorial:</strong> Relato baseado em experiência pessoal do autor, sem qualquer relação comercial. Resultados financeiros variam conforme localização, dedicação e demanda regional. Confira sempre os termos atualizados no site oficial antes de qualquer cadastro.
          </div>

        </div>

        <div style={{ marginTop: 80, background: PAPER, borderRadius: 20, padding: '40px 32px', textAlign: 'center', border: '1px solid ' + LINE }}>
          <img src={FOTO_AUTOR} alt="Carlos" style={{ width: 92, height: 92, borderRadius: '50%', objectFit: 'cover', border: '4px solid ' + NAVY, marginBottom: 16 }} />
          <div style={{ fontSize: 11, color: GOLD, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: 8 }}>E aí, sou o Carlos</div>
          <div style={{ fontSize: 26, fontWeight: 800, color: NAVY, marginBottom: 12 }}>Café com Dicas</div>
          <div style={{ fontSize: 15, color: INK_SOFT, lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
            Aqui é meu cantinho pra contar coisas reais: como saí da CLT, o que aprendi tentando coisa que não deu certo, o que finalmente funcionou. Sem firula, sem curso pra vender. Papo reto de quem tá vivendo.
          </div>
        </div>

        <div style={{ marginTop: 100, paddingTop: 36, borderTop: '1px solid ' + LINE, textAlign: 'center', fontSize: 12, color: INK_MUTE }}>
          <div style={{ marginBottom: 14, display: 'flex', justifyContent: 'center', gap: 6, alignItems: 'center' }}>
            <span>Feito com</span> <Heart size={13} color={GOLD} fill={GOLD} /> <span>e café preto</span>
          </div>
          <div style={{ display: 'flex', gap: 22, justifyContent: 'center', marginBottom: 18 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Newsletter</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contato</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacidade</a>
          </div>
          <div>© 2026 Café com Dicas · papo reto desde 2025</div>
        </div>

      </article>

      <style>{`
        @media (max-width: 768px) {
          .menu-d { display: none !important; }
          .h1-main { font-size: 28px !important; }
        }
      `}</style>
    </div>
  );
}

function Para({ children }) {
  return <p style={{ fontSize: 19, lineHeight: 1.8, color: '#2C3440', marginBottom: 22 }}>{children}</p>;
}

function H2({ children }) {
  return <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0F2A5C', margin: '56px 0 22px', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{children}</h2>;
}

function Link({ children }) {
  return <a href="https://cadastro-coletaki.vercel.app" target="_blank" rel="noopener" style={{ color: '#0F2A5C', textDecoration: 'underline', fontWeight: 700 }}>{children}</a>;
}
