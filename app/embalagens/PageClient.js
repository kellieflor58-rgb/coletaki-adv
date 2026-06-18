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
            <span>04 junho · 2026</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD }} />
            <span>relato pessoal</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: GOLD }} />
            <span>8 min de leitura</span>
          </div>
        </div>

        <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.025em', marginBottom: 24, textAlign: 'center', color: NAVY }} className="h1-main">
          Caí no golpe do "trabalho em casa montando embalagens" e descobri o que <span style={{ color: GOLD }}>realmente funciona</span>
        </h1>

        <p style={{ fontSize: 19, color: INK_SOFT, lineHeight: 1.6, margin: '0 auto 36px', textAlign: 'center', maxWidth: 640 }}>
          Comprei um kit de R$ 297 prometendo R$ 4 mil por mês montando embalagens em casa. Nunca chegou. Por acaso, três meses depois, acabei descobrindo um modelo de logística residencial que funciona de verdade — e tô há quatro meses operando. Conto a história sem firula.
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
          <img src={IMG_HERO} alt="Operação de coleta no apartamento" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ fontSize: 12, color: INK_MUTE, fontStyle: 'italic', textAlign: 'center', marginBottom: 50 }}>
          Hoje opero um ponto de coleta de marketplaces no meu apartamento. Mas o caminho até aqui passou por um golpe.
        </div>

        <div style={{ maxWidth: 640, margin: '0 auto' }}>

          <p style={{ fontSize: 21, color: INK, marginBottom: 24 }}><strong>E aí, beleza?</strong></p>

          <Para>Meu nome é Carlos, tenho 33 anos, casado, dois filhos. Moro em Ribeirão Preto, interior de São Paulo. Esse texto aqui é meio que um desabafo + alerta + dica, tudo junto. Vou contar uma história que me incomoda até hoje, mas que terminou bem — e talvez a sua possa terminar antes de começar mal.</Para>

          <Para>Em setembro do ano passado, eu tava desempregado havia uns meses. Tinha pedido as contas em junho, cansado da CLT, achando que ia recolocar fácil. Não recolocaram. Os meses foram passando, a reserva foi minguando, e a ansiedade foi tomando conta.</Para>

          <H2>O anúncio que parecia perfeito demais</H2>

          <Para>Foi numa madrugada de sexta-feira que me deparei com aquele anúncio. Tava rolando o feed do Instagram sem rumo, e apareceu um vídeo de uma mulher sorridente mostrando uma sala arrumadinha com várias caixinhas decorativas, fitas, papel de presente. A legenda dizia algo como <em>"Faço R$ 4 mil por mês montando embalagens no conforto da minha casa. Quer aprender?"</em></Para>

          <Para>Cliquei. Caí numa página com depoimentos de pessoas comuns: dona de casa, aposentada, mãe solo, estudante. Todos contando que tinham começado <strong>comprando um kit profissional</strong> e em poucas semanas já tavam recebendo pedidos de empresas grandes — Mercado Livre, Magalu, Shein. Era só montar embalagens, colocar etiqueta, e pronto. Pagamento por unidade.</Para>

          <Para>O kit custava R$ 297. Incluía os materiais iniciais, "acesso ao sistema de captação de pedidos", treinamento em vídeo e suporte. Prometiam que em até 15 dias eu já tava recebendo encomendas em casa pra montar. Parecia certinho demais. Mas eu tava desesperado, e desespero é péssimo conselheiro.</Para>

          <Para>Mostrei pra esposa. Ela ficou desconfiada — <em>"Carlos, isso aí cheira a coisa errada."</em> Mas eu argumentei. Falei dos depoimentos, do site que parecia profissional, dos números. Acabei convencendo ela e a mim mesmo. Paguei R$ 297 no cartão.</Para>

          <H2>O kit que nunca chegou</H2>

          <Para>No e-mail de confirmação dizia que o kit seria entregue em até 7 dias úteis. Esperei. No oitavo dia, comecei a estranhar. Mandei mensagem no WhatsApp deles — respondeu uma atendente dizendo que tinha tido "problema na transportadora", e que o prazo tinha sido estendido pra 15 dias úteis.</Para>

          <Para>Aceitei. Esperei mais. No 16º dia útil, mandei mensagem de novo. Outra atendente, outra desculpa: <em>"problema logístico, vamos enviar com prioridade essa semana."</em> Não enviaram. Mandei de novo no 20º. Sem resposta. No 25º, o número do WhatsApp tinha simplesmente sumido.</Para>

          <Para>Voltei no site original. O domínio estava no ar, mas o chat de suporte tava desativado. Pesquisei o CNPJ da empresa — não constava em nenhum cadastro válido. Procurei a marca em sites de defesa do consumidor — dezenas de reclamações idênticas à minha, todas dos últimos 6 meses, todas sem resposta.</Para>

          <Para><strong>Eu tinha caído num golpe.</strong> R$ 297 que entraram no buraco. Não era o fim do mundo, mas pra quem tava sem emprego e contando moeda, doía.</Para>

          <Para>Pior que o prejuízo financeiro foi o estrago no humor. Passei dias me sentindo um idiota por ter caído numa coisa tão batida. A esposa não falou nada, mas eu sabia que ela tava pensando "eu te avisei". Eu mesmo tava pensando isso.</Para>

          <H2>O Uber e a corrida que mudou tudo</H2>

          <Para>Em outubro, ainda sem emprego e agora com R$ 297 a menos na conta, baixei o aplicativo de motorista. Foi a primeira coisa que eu fiz que tinha rendimento garantido — não muito, mas todo dia entrava algum dinheiro. Tirava entre R$ 80 e R$ 110 líquidos por dia, trabalhando 8, 9 horas. O carro foi começando a precisar de manutenção e a conta mal fechava. Mas pelo menos não era golpe.</Para>

          <Para>Foi numa terça-feira no comecinho de janeiro deste ano. Última corrida do dia. Peguei um cara perto do centro, uns 40 anos, simpático. No meio da viagem ele me perguntou se eu trabalhava só de Uber. Eu acabei desabafando — falei do gasto com o carro, falei do desânimo, e em algum momento contei sobre o golpe das embalagens. Disse que tinha perdido R$ 297 achando que ia trabalhar em casa.</Para>

          <Para>Ele ouviu até o fim, ficou quieto um momento, e respondeu:</Para>

          <div style={{ background: PAPER_WARM, borderLeft: '3px solid ' + GOLD, padding: '24px 28px', margin: '32px 0', borderRadius: '0 8px 8px 0' }}>
            <p style={{ fontSize: 19, fontStyle: 'italic', color: NAVY, lineHeight: 1.55, margin: 0 }}>
              "Cara, tá cheio desses golpes por aí. Mas existe um modelo de trabalho em casa que funciona de verdade. Conheço um amigo que virou ponto de coleta dessas empresas de marketplace — recebe pacote em casa três vezes por dia e devolve pro motorista. Tá tirando uns quatro, cinco mil por mês. Sem comprar kit nenhum, sem pagar nada antes."
            </p>
          </div>

          <Para>Pedi o nome da empresa. Ele pesquisou no celular, achou o site da <Link>Coletaki</Link> e me mandou pelo zap. Anotei mentalmente, agradeci, deixei ele no destino.</Para>

          <H2>Cheguei em casa e contei pra esposa</H2>

          <Para>Cheguei em casa direto pro jantar com a esposa e as crianças. Depois que os filhos foram dormir, sentei na mesa e desabafei de novo — só que dessa vez já com a história do passageiro fresca na cabeça. Comentei sobre o tal site que o cara me indicou, falei o que ele tinha contado do amigo.</Para>

          <Para>Ela ficou desconfiada imediatamente. <em>"Carlos, depois do golpe das embalagens, eu vou olhar tudo com lupa."</em> Justo. Mas pediu pra eu mostrar o site. Abrimos o computador ali mesmo, na sala.</Para>

          <Para>A diferença saltava aos olhos. <strong>Não pediam pagamento. Não vendiam kit. Não tinha "investimento inicial".</strong> Era cadastro gratuito pelo CPF, treinamento online gratuito, e o pagamento vinha por pacote processado — quem ganhava quando o operador ganhava. A empresa só lucrava se o ponto também lucrasse.</Para>

          <Para>Continuamos pesquisando juntos por uma semana. Achei reportagens em sites de notícia de cidades do interior, depoimentos em vídeo de pontos operando, avaliações em sites de defesa do consumidor. <strong>Empresa formal, operando há quatro anos, com mais de 800 pontos ativos pelo Brasil.</strong> No fim, ela me olhou e disse: <em>"Carlos, pelo menos tenta. Se der ruim, sinceramente, não tem muito como piorar."</em></Para>

          <H2>O cadastro: completamente diferente do golpe</H2>

          <Para>Acordei cedo no dia seguinte. Antes mesmo de levar o filho na escola, abri o site da <Link>Coletaki</Link> e a gente foi preenchendo o cadastro juntos no celular, ali no café da manhã. Levou uns três minutos. Pediu o CEP pra confirmar cobertura (tinha), nome, CPF, endereço, descrição do espaço disponível e horários.</Para>

          <Para>Saí pra levar o filho, depois fiz algumas corridas de Uber pra não perder o dia. Voltei pra almoçar e tomei um susto bom — minha esposa já tinha falado com a equipe da Coletaki no telefone e marcado uma <strong>videochamada de verificação pra dois dias depois</strong>. O propósito da chamada era simples: confirmar que o endereço existia, que o local tinha higiene adequada e que era pessoa real do outro lado.</Para>

          <Para>Na chamada, você precisa <strong>mostrar o rosto e apresentar um documento de identidade</strong> pra confirmar que é você. Depois é só mostrar o espaço pelo celular. Eles olham o cômodo, conferem a limpeza, verificam que dá pra trancar e que fica fora da circulação. O único pedido foi pra deixar os pacotes fora do alcance das crianças e animais. Aprovado na hora.</Para>

          <Para>Se identificarem alguma irregularidade, te dão 72 horas pra ajustar. As regras: sem infiltração de água, longe de janelas que dão pra rua, sem animais visíveis durante a gravação. Era um processo sério, profissional. <strong>Nada parecido com o que tinha me prometido no golpe das embalagens.</strong></Para>

          <H2>O contrato de responsabilidades</H2>

          <Para>No mesmo dia da videochamada me mandaram um contrato de responsabilidades pra ler com calma e assinar digitalmente. Aqui pra mim, depois do golpe que tinha passado, foi um teste importante. Li tudo com atenção, parágrafo por parágrafo.</Para>

          <Para>O contrato diz, em resumo: quase todas as mercadorias têm seguro. Se um cliente final receber algo danificado por avaria comprovada, a Coletaki cobre. Mas eles não pagam ao ponto se o motivo da devolução for avaria <strong>e</strong> o último registro tiver sido na sua casa <strong>e</strong> você não tiver comunicado o sistema que ele já chegou avariado.</Para>

          <Para>A ferramenta de proteção é simples: avisar no app no momento do recebimento que a mercadoria já chegou com sinais de avaria, tirar foto, deixar registro. Se você fizer isso, sua responsabilidade tá coberta. Direto, sem letras miúdas escondidas.</Para>

          <Para>Logo depois veio o treinamento online de quatro horas. Uso do app, regras de conferência, leitura de QR code, registro de avaria, calendário de pagamento. Profissional. Na quarta-feira seguinte meu ponto entrou em operação.</Para>

          <H2>Como funciona o dia a dia</H2>

          <Para>Por volta das 8h, o motorista encosta na minha porta. Às vezes é alguém do CD de distribuição do próprio marketplace, às vezes terceirizado contratado pela Coletaki. Não muda nada pra mim. Ele desce com os pacotes — em geral entre <strong>20 e 60 por passagem</strong>, todos pequenos: caixinhas, envelopes, embalagens leves de e-commerce comum. Eu leio o QR code de entrada de cada um no app, junto com ele, e guardo no cômodo separado.</Para>

          <Para>Às 11h passa de novo. Traz mais pacotes e leva os que ficaram do dia anterior e os que cheguei pela manhã. Às 14h, última passagem do dia: deixa mais alguns, recolhe parte do que ficou das 11. Quando os pacotes saem, leitura de QR code de saída no app, um por um. Essa parte é crucial — se uma encomenda sumir em algum momento da cadeia, o sistema rastreia pelo QR qual foi o último local onde foi escaneada.</Para>

          <div style={{ margin: '40px 0 16px', borderRadius: 12, overflow: 'hidden' }}>
            <img src={IMG_PACOTES} alt="Pacotes organizados no apartamento" style={{ width: '100%', display: 'block' }} />
          </div>
          <div style={{ fontSize: 12, color: INK_MUTE, fontStyle: 'italic', textAlign: 'center', marginBottom: 50 }}>
            Manhã típica: 30 pacotes recém-chegados, todos pequenos, aguardando a próxima passagem.
          </div>

          <H2>Pagamento todo dia 01 e dia 16</H2>

          <Para>O pagamento é por pacote processado, depositado <strong>quinzenalmente: todo dia 01 e todo dia 16</strong> direto na conta vinculada ao CPF. Sem mensalidade, sem taxa de adesão, sem investimento inicial. Só preciso manter os pacotes em local seguro e estar nos horários combinados de chegada e saída.</Para>

          <Para>Esses foram meus 4 meses operando:</Para>

          <Para><strong>Janeiro</strong> (primeiro mês, ritmo crescendo): R$ 2.140<br /><strong>Fevereiro</strong>: R$ 4.180<br /><strong>Março</strong> (volume estabilizou): R$ 5.720<br /><strong>Abril</strong>: R$ 4.870</Para>

          <Para>Hoje minha média gira entre <strong>R$ 3 mil e R$ 6 mil por mês</strong>. Black Friday, Natal e Dia dos Namorados puxam pra cima. Janeiro e fevereiro tendem a ser mais fracos.</Para>

          <H2>A diferença entre golpe e operação real</H2>

          <Para>Olhando pra trás, eu vejo com clareza o que diferenciava o golpe das embalagens da operação real da Coletaki. Em todo trabalho legítimo, a lógica é a mesma: <strong>você ganha quando produz, não quando paga pra começar.</strong></Para>

          <Para>O golpe das embalagens pedia R$ 297 antes mesmo de eu ver qualquer trabalho. A Coletaki não pediu um centavo. O golpe prometia "empresas grandes mandando encomendas em até 15 dias" sem nenhum vínculo formal — a Coletaki tem contrato assinado, treinamento, processo de aprovação. O golpe sumiu quando virei pra cobrar — a Coletaki me liga toda semana só pra acompanhar.</Para>

          <Para>Se você tá pesquisando "trabalho em casa montando embalagens" agora, deixo um pedido honesto: <strong>desconfie de qualquer coisa que peça dinheiro antes de você começar a trabalhar.</strong> Trabalho de verdade não cobra entrada. Você pode até precisar de espaço, de tempo, de organização. Mas dinheiro pra começar? Não.</Para>

          <H2>O que mudou na minha rotina</H2>

          <Para>Hoje eu acordo às seis, tomo café com os filhos, levo eles na escola. Volto, atendo a passagem das oito. Almoço decente em casa, atendo a das onze. Tiro uma soneca se quero. Atendo a das duas. Resto da tarde tô livre — busco as crianças, faço caminhada com a esposa, janto cedo, durmo bem.</Para>

          <Para>No começo eu ainda fazia algumas corridas de Uber depois das duas, com medo de não cair dinheiro no dia do pagamento. Demorou uns dois meses pra eu acreditar que era sólido. Hoje, com a operação rodando estável, prefiro priorizar minha qualidade de vida.</Para>

          <Para>Em mais de dez anos de CLT eu nunca tive uma rotina dessas. E quase não tive essa também — porque por pouco não desisti de procurar saída depois do golpe das embalagens. <strong>É por isso que tô contando essa história aqui hoje.</strong></Para>

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
