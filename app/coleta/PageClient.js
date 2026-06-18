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
            <span>9 min de leitura</span>
          </div>
        </div>

        <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.025em', marginBottom: 24, textAlign: 'center', color: NAVY }} className="h1-main">
          Como faturo de <span style={{ color: GOLD }}>R$ 3,5 a R$ 6 mil</span> em casa sendo ponto de coleta de marketplace: minha jornada completa em 4 meses
        </h1>

        <p style={{ fontSize: 19, color: INK_SOFT, lineHeight: 1.6, margin: '0 auto 36px', textAlign: 'center', maxWidth: 640 }}>
          Saí da carteira assinada em junho do ano passado. Fiquei desempregado, virei Uber, queimei reserva, tentei coisa que deu prejuízo. Em janeiro descobri o modelo de ponto de coleta de marketplaces. Em 4 meses estabilizei minha renda entre R$ 3,5 e R$ 6 mil. Esse é o passo a passo completo e sem maquiagem.
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
          <img src={IMG_HERO} alt="Garagem com pacotes" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ fontSize: 12, color: INK_MUTE, fontStyle: 'italic', textAlign: 'center', marginBottom: 50 }}>
          A garagem da minha casa, hoje. Era depósito de tralha velha. Hoje paga meus boletos.
        </div>

        <div style={{ maxWidth: 640, margin: '0 auto' }}>

          <p style={{ fontSize: 21, color: INK, marginBottom: 24 }}><strong>E aí, beleza?</strong></p>

          <Para>Meu nome é Carlos, tenho 33 anos, casado, dois filhos. Moro no interior, em uma cidade média do estado de São Paulo. Trabalhei 6 anos como supervisor de operações em uma empresa de logística, dessas grandes que atendem e-commerce, até que em junho do ano passado pedi as contas.</Para>

          <H2>A demissão e a busca frustrada</H2>

          <Para>O motivo de eu sair foi cansaço, basicamente. Seis anos é tempo que cabe muita coisa, e cabia muita coisa ruim ali no fim. Pedi as contas num impulso depois de uma reunião onde fui humilhado na frente da equipe inteira. Saí com a rescisão na conta e a certeza de que ia recolocar fácil.</Para>

          <Para>Os dois primeiros meses foram só busca por emprego. O problema é que as vagas que apareciam pagavam quase metade do que eu ganhava antes. Não dava conta das minhas despesas de jeito nenhum. Recusei algumas propostas, esperei mais um pouco, mas nada melhor apareceu.</Para>

          <H2>Virei motorista de aplicativo no susto</H2>

          <Para>Em agosto, com a conta apertando de verdade, baixei o aplicativo de motorista e botei o carro na rua. Foi uma decisão sem orgulho nenhum. Era o que eu tinha pra fazer naquele momento.</Para>

          <Para>No começo até parecia que ia dar pra ir levando. Tirava uns <strong>R$ 80 líquidos por dia, às vezes R$ 90 nos dias bons</strong>, trabalhando 8, 9 horas. Mas aí o carro começou a precisar de manutenção — troca de pastilha, óleo, alinhamento, um pneu novo. Aquilo foi comendo o dinheiro que eu achava que tava sobrando. <strong>No fim do mês, depois das despesas com o carro, a conta não fechava.</strong> Era trabalhar pra manter o carro rodando, basicamente.</Para>

          <Para>Aquela rotina virou meu mundo durante uns meses. Sair de manhã, voltar à noite cansado, comer qualquer coisa, dormir, sair de novo. A esposa via meu desânimo crescendo. Eu também via.</Para>

          <H2>A conversa de carro que mudou minha vida</H2>

          <Para>Foi numa terça-feira no comecinho de janeiro deste ano. Lembro porque tava frio, eu tava com fome, e era a última corrida do dia.</Para>

          <Para>Peguei um passageiro perto do centro pra deixar num bairro residencial — uns 25 minutos de viagem. Cara de uns 40 anos, simpático. Começou conversando bobagem, depois perguntou se eu trabalhava só com aplicativo. Eu, pra falar a verdade, tava cansado mas era educado. Contei rapidão que tava entre empregos, que tinha tentado um curso de afiliado na internet que não deu certo e perdi um dinheiro, e que tava no aplicativo enquanto procurava outra coisa.</Para>

          <Para>Quando falei do curso, ele riu. <em>"Pô, eu já fui nessa também. Perdi um dinheiro tentando viver de internet. Não é pra qualquer um. Sabe o que tá dando certo agora? Olha, vou te falar uma coisa que eu fiquei sabendo semana passada..."</em></Para>

          <div style={{ background: PAPER_WARM, borderLeft: '3px solid ' + GOLD, padding: '24px 28px', margin: '32px 0', borderRadius: '0 8px 8px 0' }}>
            <p style={{ fontSize: 19, fontStyle: 'italic', color: NAVY, lineHeight: 1.55, margin: 0 }}>
              "Um amigo meu virou ponto de coleta dessas empresas que entregam pacote de marketplace. Tipo, deixa o motorista deixar pacote na casa dele e depois passa pra buscar de novo, várias vezes por dia. Ele tá ganhando uns R$ 4 mil, R$ 5 mil por mês, em casa. Acho que vou tentar também. Tá crescendo um bocado."
            </p>
          </div>

          <Para>Eu prestei atenção porque era a primeira vez que ouvia alguém falar disso na vida real, não em vídeo de propaganda. Era um cara comum no banco de trás do meu carro, num diálogo casual. Pedi pra ele me passar o nome da empresa. Ele falou: <em>"acho que se chama Coletaki, deixa eu confirmar."</em> Pesquisou no celular, achou o site, me mandou o link pelo zap.</Para>

          <Para>Deixei ele no destino, fui pra casa pensando naquilo o caminho todo.</Para>

          <H2>Cheguei em casa e pesquisei até de madrugada</H2>

          <Para>Naquela mesma noite, depois do jantar, sentei no computador. Comecei pela <Link>Coletaki</Link>, depois fui pra reportagens em sites de notícia de cidades do interior que falavam de pontos de coleta, depois sites de defesa do consumidor pra ver reclamações. Empresa formal, registrada, operando há quatro anos, com mais de 800 pontos ativos em cidades brasileiras.</Para>

          <Para>Vi vários depoimentos de gente comum operando. Uma senhora aposentada tirando R$ 3 mil por mês na casa dela. Um casal jovem perto de R$ 5 mil. Um homem de meia-idade com R$ 6 mil em um espaço maior. Sem chefe, sem CNPJ, sem investimento. Cadastro pelo CPF, treinamento gratuito, pagamento por pacote processado.</Para>

          <Para>Mostrei pra esposa quando ela acordou na manhã seguinte. A primeira reação dela foi de pé atrás: <em>"Carlos, depois do curso de afiliado, eu vou olhar tudo com lupa."</em> Eu também tava com pé atrás. Mas a gente passou uma semana pesquisando junto. Quanto mais a gente conferia, mais convincente parecia.</Para>

          <Para>No dia 12 de janeiro eu me cadastrei.</Para>

          <H2>Como funciona, contando como eu mesmo entendi</H2>

          <Para>Pra quem nunca ouviu falar dessa operação (eu mesmo era assim até essa corrida de Uber), vou explicar do jeito mais natural possível. Sem termo técnico, sem firula.</Para>

          <Para>A Coletaki é uma empresa que faz a ponte entre os grandes marketplaces — Mercado Livre, Shopee, Amazon e outros — e pontos de coleta espalhados em casas comuns no Brasil. Em vez de ter um centro de distribuição gigante atendendo cada região, eles usam essa malha de pequenos pontos residenciais, coordenados por motoristas que fazem rotas curtas durante o dia.</Para>

          <Para>Pra mim, como ponto, a operação acontece assim. Por volta das oito da manhã, um motorista da <Link>Coletaki</Link> encosta o carro na minha porta. Ele desce com uns pacotes, em geral dez, quinze por passagem, que vieram dos marketplaces. Eu confiro pacote por pacote junto com ele, registro a entrada no app que eles disponibilizam, e guardo tudo na garagem que separei pra isso.</Para>

          <Para>Às onze, ele passa de novo. Traz mais pacotes e leva os que ficaram aguardando do dia anterior, pra distribuição final. Às duas da tarde, última passagem. Recolhe o que sobrou e o meu dia operacional encerra ali.</Para>

          <Para>A parte que eu não tinha entendido direito antes de começar é essa: <strong>eu não despacho pacote, não atendo cliente, não tenho contato com comprador.</strong> Eu só recebo, guardo e devolvo pro motorista quando ele volta. Toda a relação com o destinatário final é responsabilidade da Coletaki e do marketplace. Eu opero a parte intermediária.</Para>

          <Para>O pagamento é por pacote processado. Cada pacote conferido e devolvido gera uma comissão fixa. Não tem mensalidade, não tem taxa de adesão, não tem investimento inicial. Pagamento na conta a cada quinze dias, direto no meu CPF.</Para>

          <Para>O cadastro durou três minutos no site. Pediu CEP pra ver se minha região tinha cobertura (tinha), nome, CPF, endereço, descrição do espaço disponível e horários. Em três dias me ligaram pra agendar o treinamento online — quatro horas na quinta-feira seguinte. Foi prático: uso do app, regras de armazenamento, conferência de pacotes, política de extravio. Sem enrolação.</Para>

          <Para>Na quarta-feira da semana seguinte, meu ponto entrou em operação.</Para>

          <div style={{ margin: '40px 0 16px', borderRadius: 12, overflow: 'hidden' }}>
            <img src={IMG_PACOTES} alt="Pacotes organizados na garagem" style={{ width: '100%', display: 'block' }} />
          </div>
          <div style={{ fontSize: 12, color: INK_MUTE, fontStyle: 'italic', textAlign: 'center', marginBottom: 50 }}>
            Minha manhã: pacotes recém-chegados, prontos pra conferência antes da próxima passagem do motorista.
          </div>

          <H2>O primeiro mês: ainda desconfiado</H2>

          <Para>Comecei a operar no dia 22 de janeiro. Primeira passagem do motorista, oito e dezessete da manhã. Onze pacotes. Conferi um por um, registrei no app, organizei na garagem que tinha esvaziado na semana anterior. Coloquei umas prateleiras simples com madeira que já tava em casa.</Para>

          <Para>O volume foi crescendo aos poucos. Primeira semana, fechei com sessenta pacotes processados. Segunda semana, cento e vinte. Terceira, duzentos. Quarta semana, quase trezentos.</Para>

          <Para>No dia 22 de fevereiro, o primeiro pagamento caiu na conta: <strong>R$ 2.140</strong>. Eu olhei pra esposa, ela olhou pra mim. Era pouco menos do que eu ganhava de CLT no último emprego, mas era líquido, em casa, com cinco horas de trabalho por dia. E sem chefe, sem trânsito, sem aquele aperto no peito de domingo à noite pensando na segunda.</Para>

          <Para>A esposa só falou: <em>"Carlos, isso pode dar certo."</em> Eu ainda não tava acreditando totalmente. Mas tava começando.</Para>

          <H2>Fevereiro, março, abril: a coisa virou</H2>

          <Para>Em fevereiro, o volume continuou crescendo. O sistema da Coletaki começa a direcionar mais pacotes pros pontos que atendem com regularidade e sem erro de registro. Como eu tava lá todo dia, no horário, sem perder pacote, eles foram aumentando o volume da minha região comigo. Fechei o mês com <strong>R$ 4.180</strong>.</Para>

          <Para>Foi nessa hora que eu sentei e disse pra esposa que não ia mais procurar emprego. A gente conversou bastante naquele domingo. Era um risco — eu tava abandonando a busca por estabilidade tradicional pra apostar em algo que ainda tinha três meses de operação. Mas a conta tava fazendo sentido pela primeira vez em meses.</Para>

          <Para>Março foi a virada definitiva. Operei no ritmo total: mil e quatrocentos pacotes processados no mês. Pagamento depositado: <strong>R$ 6.020</strong>. Mais do que eu ganhava no melhor mês da CLT, com hora extra. Tirei o extrato, fui no quarto onde a esposa tava ajudando as crianças com o dever, mostrei a tela do celular pra ela. Ela leu, releu, fechou o olho um segundo. Não falou nada. Só me abraçou.</Para>

          <Para>Abril foi mês de estabilização. <strong>R$ 5.870</strong>. Hoje, depois de quatro meses operando, minha média gira entre R$ 3,5 mil e R$ 6 mil por mês, dependendo do volume da semana, da época do ano, da quantidade de marketplaces ativos na região. <strong>Datas como Black Friday e Natal a tendência é puxar pra cima. Janeiro e fevereiro tendem a ser meses mais fracos.</strong></Para>

          <H2>O que mudou de verdade</H2>

          <Para>Não foi só dinheiro. O dinheiro é importante e mudou minha situação financeira — voltei a pagar conta sem aperto, recuperei a reserva que tinha queimado, comecei a guardar um pouco pro futuro. Mas a virada de verdade foi a rotina.</Para>

          <Para>Hoje eu acordo às sete. Tomo café com os filhos antes da escola, levo eles no carro. Volto pra casa, atendo a primeira passagem das oito. Faço um almoço decente, tomo banho, atendo a passagem das onze. Tiro uma soneca no meio da tarde se quero. Atendo a passagem das duas. Depois disso, tô livre. Vou buscar as crianças, dou uma caminhada com a esposa, faço janta cedo, durmo bem.</Para>

          <Para>Em seis anos de logística, eu nunca tive uma rotina assim. Nunca. Era sempre a corrida — acordar exausto, sair correndo, voltar exausto. A vida acontecia nas pequenas brechas. Hoje a vida é o principal, e o trabalho é uma parte boa e organizada do dia. <strong>Essa é a diferença que ninguém te conta quando fala de "trabalhar em casa".</strong></Para>

          <H2>Antes de fechar: não é pra todo mundo</H2>

          <Para>Quero ser honesto contigo. Não é solução universal. Existem pré-requisitos reais que precisam ser respeitados pra esse modelo fazer sentido.</Para>

          <Para>Você precisa ter um cômodo fechado em casa, com chave, separado da circulação cotidiana da família. Não pode ser corredor, não pode ser sala compartilhada. Pacotes precisam ficar trancados e seguros. Quem mora em apartamento pequeno sem espaço extra vai ter dificuldade.</Para>

          <Para>Precisa ter disponibilidade durante o dia. As passagens do motorista acontecem em horários específicos e precisam ser atendidas. Quem trabalha CLT em horário comercial não consegue conciliar.</Para>

          <Para>Precisa ter regularidade. O sistema da Coletaki direciona volume pra quem mostra confiabilidade. Quem opera de forma inconstante perde priorização rapidamente.</Para>

          <Para>Por último, precisa que a sua região tenha cobertura do programa. Isso é o primeiro filtro do cadastro — você informa o CEP e o sistema te diz se ali tem operação ativa.</Para>

          <Para>Pra quem tem essas quatro coisas — <strong>espaço fechado, disponibilidade, regularidade e região coberta</strong> — é a oportunidade mais sólida que eu vi nos últimos anos.</Para>

          <H2>Por que tô escrevendo isso</H2>

          <Para>Não tô vendendo curso, não sou afiliado, não sou influencer de nada. Cheguei nessa história por uma conversa de Uber num dia que eu tava cansado e desanimado. Testei na pele. Ainda opero meu ponto todo dia.</Para>

          <Para>Tô contando porque sei que tem muita gente como eu cinco meses atrás — pedindo demissão por impulso, queimando reserva, tentando coisa que dá errado, perdendo dinheiro em curso furado. Achei justo dividir a história de alguém comum como eu, que conseguiu sair desse buraco, sem propaganda barata.</Para>

          <Para>Se você tá pesquisando isso agora e a sua situação parece com a minha do final do ano passado, talvez valha a pena olhar com calma. Não como salvação garantida, mas como um caminho real que existe.</Para>

          <div style={{ textAlign: 'center', padding: '44px 0', borderTop: '1px solid ' + LINE, borderBottom: '1px solid ' + LINE, margin: '50px 0' }}>
            <p style={{ fontSize: 16, color: INK_SOFT, lineHeight: 1.65, maxWidth: 540, margin: '0 auto 28px', fontStyle: 'italic' }}>
              Pra conhecer a Coletaki, verificar se sua região tem cobertura e fazer o cadastro inicial pelo CPF, é tudo direto no site da empresa. Sem custo, sem compromisso, sem cartão pedido na entrada.
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
