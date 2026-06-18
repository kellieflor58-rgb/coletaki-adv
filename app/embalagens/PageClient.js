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
          Era entregador da Shopee, ganhava R$ 3 mil e gastava R$ 1.000 em combustível. <span style={{ color: GOLD }}>Virei o ponto de coleta e ganho mais sem rodar.</span>
        </h1>

        <p style={{ fontSize: 19, color: INK_SOFT, lineHeight: 1.6, margin: '0 auto 36px', textAlign: 'center', maxWidth: 640 }}>
          Dois anos correndo a cidade inteira entregando pacote pra Shopee. Tirava R$ 3 mil brutos por mês, mas o combustível e a manutenção do carro comiam mais de R$ 1.000. Conhecendo a operação por dentro, descobri o outro lado dela: os pontos residenciais. Pulei pra esse lado e nunca mais voltei pra rua.
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
          Hoje o motorista da Shopee passa na minha porta três vezes por dia. Antes, era eu na rua.
        </div>

        <div style={{ maxWidth: 640, margin: '0 auto' }}>

          <p style={{ fontSize: 21, color: INK, marginBottom: 24 }}><strong>E aí, beleza?</strong></p>

          <Para>Meu nome é Carlos, tenho 33 anos, casado, dois filhos. Moro em Ribeirão Preto, interior de São Paulo. Hoje vou contar uma história que tem ironia até demais: passei dois anos da minha vida entregando pacote da Shopee na rua, gastando combustível, comendo poeira, brigando com trânsito. Até que descobri quem ganhava mais dinheiro na operação inteira: <strong>as pessoas que ficam em casa recebendo os pacotes que eu entregava.</strong></Para>

          <Para>Hoje sou um deles. E nunca mais voltei pra rua.</Para>

          <H2>Dois anos como entregador da Shopee</H2>

          <Para>Em meados de 2023 a Shopee tava explodindo no Brasil. Tinha um anúncio em todo canto pedindo entregador autônomo — só precisava ter CNH, carro próprio (ou moto) e disposição. Eu tava saindo de uma CLT cansativa, queria flexibilidade, e comprei o discurso da "liberdade do entregador". Me cadastrei numa terça, comecei a rodar na quinta.</Para>

          <Para>No começo era animado. A gente buscava lote de pacotes num hub local — uma transportadora terceirizada da Shopee, no caso da minha região — e tinha o dia todo pra entregar. Em torno de 80, 100 pacotes por dia, cada um a uns R$ 2 de comissão. Fazia uma média de <strong>R$ 3.000 brutos por mês</strong> trabalhando seis dias por semana.</Para>

          <Para>Parecia bom. Mas a conta nunca era só o que entrava.</Para>

          <H2>O combustível e a manutenção que ninguém fala</H2>

          <Para>Ribeirão Preto é uma cidade grande, espalhada. Quando você é entregador, você roda muito — bairro do Sumarezinho de manhã, Vila Virgínia depois do almoço, Greenville no fim da tarde. Em um dia normal, eu rodava entre 120 e 180 km. Final de mês, dava uns 4.000 km no carro.</Para>

          <Para>Combustível? <strong>Entre R$ 800 e R$ 1.000 por mês.</strong> Manutenção? Pneu desgastando rápido, troca de óleo a cada 45 dias, pastilha de freio em 3 meses, alinhamento mensal, e a cada 6 meses um susto maior — suspensão, embreagem, alguma coisa elétrica. <strong>Soma tudo e dava mais R$ 400, R$ 500 mensais.</strong></Para>

          <Para>Quando eu fechava o mês de verdade, líquido na conta, sobrava entre <strong>R$ 1.400 e R$ 1.700</strong>. Trabalhando 9, 10 horas por dia, comendo na rua, perdendo final de semana com a família. A esposa começou a perceber. Eu também — só não queria admitir.</Para>

          <H2>O dia que eu olhei pro outro lado do balcão</H2>

          <Para>Nas minhas rotas eu tinha alguns endereços fixos que apareciam toda semana. Casas comuns em bairros residenciais, onde eu não entregava só pro morador — eu deixava lote. Cinco, dez, quinze pacotes de uma vez só, todos pra moradores diferentes da região. Quem recebia separava, organizava, e depois entregava pros vizinhos certos.</Para>

          <Para>Eram os pontos de coleta residencial. Eu sabia que existiam, achava prático pra logística, mas nunca tinha pensado muito sobre eles. Eram só mais um endereço na lista do dia.</Para>

          <Para>Tinha um senhor numa casa simples no Jardim Paulista que sempre me recebia bem. Cumprimentava, oferecia café, conversa rápida. Em uma manhã de fim de novembro, cheguei pra deixar um lote grande nele — uns 40 pacotes, dia movimentado de promoção. Enquanto a gente conferia, ele puxou conversa:</Para>

          <Para><em>"E aí Carlos, como tão as entregas? Tá rodando muito?"</em></Para>

          <Para>Eu desabafei. Falei do combustível, da manutenção, do cansaço, do quanto tava sobrando líquido. Ele me ouviu com paciência, mexeu numa caneca de café que tava sobre a mesa, e respondeu:</Para>

          <div style={{ background: PAPER_WARM, borderLeft: '3px solid ' + GOLD, padding: '24px 28px', margin: '32px 0', borderRadius: '0 8px 8px 0' }}>
            <p style={{ fontSize: 19, fontStyle: 'italic', color: NAVY, lineHeight: 1.55, margin: 0 }}>
              "Carlos, eu faço esse ponto aqui há um ano e meio. Não rodo um metro, não gasto combustível, não troco pneu, não tenho que correr com o sol nem com a chuva. Recebo entre R$ 4 mil e R$ 5 mil por mês, líquido, depositado direto na conta. Você tá no lado errado da equação, meu filho."
            </p>
          </div>

          <Para>Fiquei mudo. Olhei pra ele, olhei pros pacotes empilhados na sala, olhei pro meu carro lá fora todo sujo de poeira do dia. E pensei: <em>"como eu não tinha visto isso antes?"</em></Para>

          <H2>A pergunta certa, finalmente</H2>

          <Para>Pedi mais detalhes. Ele explicou que operava com uma empresa chamada <Link>Coletaki</Link>, que era a intermediária entre os marketplaces e os pontos residenciais. Falou do cadastro gratuito pelo CPF, do treinamento, da rotina de três passagens por dia, do pagamento quinzenal.</Para>

          <Para>Anotei tudo. Saí dali pensando, fui terminar a rota, mas a cabeça já não tava mais na entrega. Tava fazendo conta de cabeça. <strong>Se eu trocasse de lado, em vez de gastar R$ 1.500 de combustível e manutenção pra tirar R$ 1.500 líquidos, eu poderia receber R$ 4 mil sem rodar nada.</strong></Para>

          <Para>Naquela noite, no jantar, contei tudo pra esposa. Mostrei o site da Coletaki no celular. Ela ficou desconfiada de cara — <em>"Carlos, isso parece bom demais."</em> Justo. Mas pediu pra eu pesquisar com calma. Passamos a semana inteira olhando reportagens em sites de notícia de cidades do interior, depoimentos em vídeo, avaliações em sites de defesa do consumidor.</Para>

          <Para><strong>Empresa formal, operando há quatro anos, com mais de 800 pontos ativos pelo Brasil.</strong> Sem cobrança de adesão, sem mensalidade, sem investimento inicial. Pagamento por pacote processado, depositado direto no CPF.</Para>

          <Para>No fim da semana, ela me olhou e disse: <em>"Carlos, pelo menos tenta. Você já tá rodando pra Shopee mesmo. Se der ruim, volta pra rua. Mas se der certo, a gente recupera muita coisa."</em> Foi a permissão que eu precisava.</Para>

          <H2>O cadastro: completamente diferente da estrada</H2>

          <Para>Acordei cedo no dia seguinte. Antes mesmo de sair pra rota, abri o site da <Link>Coletaki</Link> e preenchi o cadastro junto com a esposa no café da manhã. Levou uns três minutos. Pediu CEP pra confirmar cobertura (tinha), nome, CPF, endereço, descrição do espaço disponível e horários.</Para>

          <Para>Saí pra rodar a rota da Shopee como sempre. Voltei pra almoçar e tomei um susto bom — minha esposa já tinha falado com a equipe da Coletaki no telefone e marcado uma <strong>videochamada de verificação pra dois dias depois</strong>. O propósito da chamada era simples: confirmar que o endereço existia, que o local tinha higiene adequada e que era pessoa real do outro lado.</Para>

          <Para>Na chamada, você precisa <strong>mostrar o rosto e apresentar um documento de identidade</strong>. Depois é só mostrar o espaço pelo celular. Eles olham o cômodo, conferem a limpeza, verificam que dá pra trancar e que fica fora da circulação. O único pedido foi pra deixar os pacotes fora do alcance das crianças e animais. Aprovado na hora.</Para>

          <Para>Se identificarem irregularidade, te dão 72 horas pra ajustar. As regras: sem infiltração de água, longe de janelas que dão pra rua, sem animais visíveis durante a gravação. <strong>Era um processo sério, profissional.</strong> Bem diferente de qualquer "cadastro de entregador" que eu já tinha feito.</Para>

          <H2>O contrato de responsabilidades</H2>

          <Para>No mesmo dia da videochamada me mandaram um contrato de responsabilidades pra ler com calma e assinar digitalmente. Como entregador antigo, eu já sabia o quanto avaria de pacote pega gente despreparada. Li tudo com atenção.</Para>

          <Para>O contrato diz, em resumo: quase todas as mercadorias têm seguro. Se um cliente final receber algo danificado por avaria comprovada, a Coletaki cobre. Mas eles não pagam ao ponto se o motivo da devolução for avaria <strong>e</strong> o último registro tiver sido na sua casa <strong>e</strong> você não tiver comunicado o sistema que ele já chegou avariado.</Para>

          <Para>A ferramenta de proteção é simples: avisar no app no momento do recebimento que a mercadoria já chegou com sinais de avaria, tirar foto, deixar registro. Se você fizer isso, sua responsabilidade tá coberta.</Para>

          <Para>Depois veio o treinamento online de quatro horas. Uso do app, regras de conferência, leitura de QR code, registro de avaria, calendário de pagamento. Direto, sem enrolação. Na quarta-feira seguinte meu ponto entrou em operação.</Para>

          <Para>E aqui vai uma ironia: <strong>quem me deixou os primeiros pacotes foi um entregador que eu conhecia da rua.</strong> A gente trabalhava no mesmo hub. Ele olhou pra mim com cara de espanto e perguntou: <em>"Carlos, você virou ponto agora?"</em> Eu ri. <em>"Virei. Te ajudo a chegar mais rápido em casa, e ainda ganho mais que você."</em></Para>

          <H2>Como funciona o dia a dia agora</H2>

          <Para>Por volta das 8h, o motorista encosta na minha porta. Às vezes é alguém do CD da Shopee, às vezes é alguém da Coletaki, às vezes terceirizado. Não muda nada pra mim. Ele desce com os pacotes — em geral entre <strong>20 e 60 por passagem</strong>, todos pequenos: caixinhas, envelopes, embalagens leves de e-commerce comum. Eu leio o QR code de entrada de cada um no app, junto com o motorista, e guardo no cômodo separado.</Para>

          <Para>Às 11h passa de novo. Traz mais pacotes e leva os que ficaram do dia anterior e os que cheguei pela manhã. Às 14h, última passagem do dia: deixa mais alguns, recolhe parte do que ficou das 11. Quando os pacotes saem, leitura de QR code de saída no app, um por um.</Para>

          <Para>Essa parte é crucial — se uma encomenda sumir em algum momento da cadeia, o sistema rastreia pelo QR qual foi o último local onde foi escaneada. Como eu já vivi a outra ponta, eu sei o quanto isso protege quem tá operando o ponto.</Para>

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

          <Para>Mas o número que mais importa pra mim é outro: <strong>esses valores são líquidos.</strong> Não tem combustível pra descontar. Não tem manutenção. Não tem pneu, não tem freio, não tem mecânica. O que cai na conta, fica.</Para>

          <H2>A virada matemática completa</H2>

          <Para>Vou fazer a comparação direta, porque doeu na alma quando finalmente sentei pra calcular:</Para>

          <Para><strong>Como entregador da Shopee:</strong> R$ 3.000 brutos · menos R$ 900 de combustível médio · menos R$ 450 de manutenção média · menos R$ 250 de alimentação na rua = <strong>R$ 1.400 líquidos</strong> trabalhando 9 horas por dia, 6 dias por semana, na rua.</Para>

          <Para><strong>Como ponto de coleta da Coletaki:</strong> média de R$ 4.500 líquidos · zero combustível · zero manutenção · zero alimentação fora = <strong>R$ 4.500 líquidos</strong> trabalhando 5 horas por dia, em casa, com a família por perto.</Para>

          <Para><strong>A mesma operação. O mesmo mercado. Lados opostos.</strong></Para>

          <H2>O que mudou na minha vida</H2>

          <Para>Hoje eu acordo às seis, tomo café com os filhos, levo eles na escola. Volto, atendo a passagem das oito. Almoço decente em casa, atendo a das onze. Tiro uma soneca se quero. Atendo a das duas. Resto da tarde tô livre.</Para>

          <Para>No começo eu ainda fazia algumas corridas extras de entrega como freelancer depois das duas, com medo de não cair dinheiro no dia do pagamento. Demorou uns dois meses pra eu acreditar que era sólido. Hoje, com a operação rodando estável, prefiro priorizar minha qualidade de vida. Busco as crianças, faço caminhada com a esposa, janto cedo, durmo bem.</Para>

          <Para>O carro, que era meu instrumento de trabalho, virou só meio de transporte de novo. Faz três meses que eu não troco óleo. <strong>Aliás, faz três meses que eu não brigo com trânsito também.</strong></Para>

          <H2>Pra quem ainda tá entregando</H2>

          <Para>Se você é entregador hoje — Shopee, Mercado Livre, Amazon, iFood, qualquer um — e tá lendo isso, deixo um pedido: <strong>senta e faz a sua conta de verdade.</strong> Pega o quanto você fatura no mês, desconta combustível real, manutenção real, alimentação real, desgaste do carro. Vê quanto sobra de fato.</Para>

          <Para>Se o que sobra é menos do que você poderia tirar como ponto de coleta na sua região, talvez seja hora de virar o jogo. Não é pra todo mundo — precisa ter espaço fechado em casa, disponibilidade nos horários, regularidade. Mas pra quem já tá rodando há um tempo e tá cansado da rua, vale pesquisar.</Para>

          <Para>Eu juro de pés juntos que não ganho nada pra escrever esse texto. Cheguei na <Link>Coletaki</Link> por uma conversa com um senhor de cabelo branco numa manhã de novembro, tomando café na sala dele enquanto descarregava pacotes. Testei na pele. Tô há quatro meses, ganhando o triplo do que tirava na rua, em metade do tempo. <strong>Achei justo dividir.</strong></Para>

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
            Aqui é meu cantinho pra contar coisas reais: como saí da rua, o que aprendi como entregador, o que finalmente funcionou. Sem firula, sem curso pra vender. Papo reto de quem tá vivendo.
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
