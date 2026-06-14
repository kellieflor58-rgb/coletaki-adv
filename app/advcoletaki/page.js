'use client';

import React from 'react';
import { ArrowRight, Check, Shield, Clock, Link2 } from 'lucide-react';

const RED = '#C4170C';
const RED_DARK = '#9A1208';
const RED_LIGHT = '#FEF2F2';
const INK = '#1a1a1a';
const INK_SOFT = '#4a4a4a';
const INK_MUTE = '#6B7280';
const LINE = '#E5E7EB';
const YELLOW = '#FFC700';

const FOTO_AUTOR = 'https://media.licdn.com/dms/image/v2/D4D03AQEcZc_WGkcu7g/profile-displayphoto-scale_400_400/B4DZkRAeUnGkAg-/0/1756926962727?e=2147483647&v=beta&t=wuS4qcfeklxK1C8kXVF8qubvgpHUzu9rLo-BFViGai0';

const IMAGEM_HERO = 'https://i.pinimg.com/736x/d5/c1/b5/d5c1b510c3c53e23a0ba06a44235ce93.jpg';
const IMG_2 = 'https://i.pinimg.com/736x/ba/cb/93/bacb93b2f5c282e4df2281c58498058f.jpg';
const IMG_3 = 'https://i.pinimg.com/736x/19/a8/d2/19a8d20e84c069aed7dca2f85fe4cdeb.jpg';
const IMG_4 = 'https://i.pinimg.com/736x/f3/b4/f1/f3b4f1af57418f1a463b700fafc273e0.jpg';

const BAIRROS = ['Centro','Jardim Botânico','Ribeirânia','Sumarezinho','City Ribeirão','Iguatemi','Alto da Boa Vista','Vila Tibério','Jardim Paulista','Quintino Facci','Jardim Paulistano','Jardim Independência','Campos Elíseos','Vila Virgínia','Subsetor Sul'];

const MENU = ['Home','Matérias','Economia','Cidades','Oportunidades'];

export default function Page() {
  const ir = () => window.open('https://cadastro-coletaki.vercel.app', '_blank');
  const hoje = new Date().toLocaleDateString('pt-BR', { weekday:'long', day:'2-digit', month:'long' });
  const data = new Date().toLocaleDateString('pt-BR', { day:'2-digit', month:'long', year:'numeric' });

  return (
    <div style={{ minHeight:'100vh', background:'#fff', color:INK }}>
      <div style={{ background:'#0A1628', color:'#fff', padding:'6px 16px', fontSize:11, letterSpacing:'0.05em', textAlign:'center', fontWeight:600 }}>
        DIÁRIO DO INTERIOR · EDIÇÃO ONLINE · CONTEÚDO INDEPENDENTE
      </div>

      <header style={{ borderBottom:'3px solid '+RED, background:'#fff', position:'sticky', top:0, zIndex:50, boxShadow:'0 1px 3px rgba(0,0,0,0.04)' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'14px 20px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:28 }}>
            <div style={{ fontSize:22, fontWeight:900, color:INK, letterSpacing:'-0.03em' }}>
              Diário do Interior<span style={{ color:RED }}>.</span>
            </div>
            <nav style={{ display:'flex', gap:22 }} className="menu-desk">
              {MENU.map(m => <a key={m} href="#" style={{ fontSize:13, fontWeight:600, color:INK_SOFT, textDecoration:'none' }}>{m}</a>)}
            </nav>
          </div>
          <div style={{ fontSize:11, color:INK_MUTE, fontWeight:600 }}>{hoje}</div>
        </div>
      </header>

      <article style={{ maxWidth:760, margin:'0 auto', padding:'40px 20px 60px' }}>

        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:18, fontSize:11, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase' }}>
          <span style={{ color:RED }}>ECONOMIA</span>
          <span style={{ color:INK_MUTE }}>›</span>
          <span style={{ color:INK_MUTE }}>RENDA EXTRA</span>
        </div>

        <h1 style={{ fontSize:38, fontWeight:900, color:INK, lineHeight:1.12, letterSpacing:'-0.035em', margin:'0 0 18px' }}>
          R$ 3 a R$ 6 mil por mês sem sair de casa e sem chefe? Em <span style={{ color:RED }}>Ribeirão Preto</span>, está virando realidade
        </h1>

        <p style={{ fontSize:18, color:INK_SOFT, lineHeight:1.55, margin:'0 0 24px', fontWeight:500 }}>
          Quem tem um quartinho pequeno, um cantinho na garagem, ou um quarto com espaço sobrando, agora pode usar isso para tirar até R$ 6 mil por mês — sem patrão, sem chefe e sem precisar sair de casa. Entenda como.
        </p>

        <div style={{ borderTop:'1px solid '+LINE, borderBottom:'1px solid '+LINE, padding:'14px 0', marginBottom:24, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:14 }}>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <img src={FOTO_AUTOR} alt="Mathias Perini" style={{ width:48, height:48, borderRadius:'50%', objectFit:'cover', border:'2px solid '+LINE }} />
            <div>
              <div style={{ fontSize:13, fontWeight:800, color:INK, lineHeight:1.2 }}>Por Mathias Perini</div>
              <div style={{ fontSize:11, color:INK_MUTE, lineHeight:1.3, marginTop:2 }}>Jornalista · Editor de Economia</div>
              <div style={{ fontSize:11, color:INK_MUTE, marginTop:2 }}>{data} · 5 min de leitura</div>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <Sh label="f" cor="#1877F2" />
            <Sh label="X" cor="#000" />
            <Sh label="in" cor="#0A66C2" />
            <ShL />
          </div>
        </div>

        <div style={{ borderRadius:14, overflow:'hidden', marginBottom:10, background:'#f3f4f6', border:'1px solid '+LINE }}>
          <img src={IMAGEM_HERO} alt="Ponto de coleta residencial" style={{ width:'100%', display:'block' }} />
        </div>
        <div style={{ fontSize:11, color:INK_MUTE, marginBottom:28, fontStyle:'italic' }}>
          Espaços simples de casas comuns viraram pontos de coleta de marketplaces em todo o interior paulista.
        </div>

        <B>
          <p>Imagine receber <strong>R$ 2.500 a cada 15 dias</strong> sem ter saído de casa para trabalhar.</p>
          <p>Você acorda. Se espreguiça. Faz o seu café da manhã com calma. E espera.</p>
          <p>Por volta das 8 da manhã, um carro encosta na sua porta. Alguém da equipe deixa alguns pacotes — daqueles da Shopee, do Mercado Livre, do Pegaki. Você guarda no espaço que separou em casa.</p>
          <p>Lá pelas 11 horas, outra passagem. Trazem mais alguns pacotes, e levam os primeiros que ficaram aguardando.</p>
          <p>Às 14 horas, o último carro do dia passa. Recolhe o que sobrou e leva pra distribuição final.</p>
          <p>Esta é a sua rotina. Quinze dias depois, <strong>o pagamento está na sua conta</strong>. O valor varia conforme o volume do seu ponto, a quantidade de marketplaces ativos e a época do ano.</p>
        </B>

        <div style={{ background:'#FAFAFA', border:'1px solid '+LINE, borderRadius:6, padding:'10px 14px', margin:'24px 0', textAlign:'center' }}>
          <div style={{ fontSize:9, fontWeight:600, color:'#9CA3AF', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>Publicidade</div>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ display:'inline-block', cursor:'pointer' }}>
            <svg width="300" height="250" viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth:'100%', height:'auto', borderRadius:4 }}>
              <defs>
                <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a1a1a" />
                  <stop offset="100%" stopColor="#4a4a4a" />
                </linearGradient>
                <linearGradient id="carBody" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f5f5f5" />
                  <stop offset="100%" stopColor="#c8c8c8" />
                </linearGradient>
              </defs>
              <rect width="300" height="250" fill="url(#bgGrad)" />
              <text x="20" y="38" fontSize="14" fontWeight="900" fill="#EE2E36" fontFamily="Arial">NOVO</text>
              <text x="20" y="58" fontSize="20" fontWeight="900" fill="#fff" fontFamily="Arial">YARIS</text>
              <text x="20" y="78" fontSize="20" fontWeight="900" fill="#fff" fontFamily="Arial">CROSS</text>
              <text x="20" y="108" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Arial">O PRINCIPAL PODER</text>
              <text x="20" y="124" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Arial">É O DE ESCOLHA.</text>
              <ellipse cx="200" cy="160" rx="80" ry="35" fill="url(#carBody)" />
              <rect x="135" y="135" width="130" height="30" rx="12" fill="url(#carBody)" />
              <circle cx="155" cy="180" r="14" fill="#1a1a1a" />
              <circle cx="155" cy="180" r="6" fill="#666" />
              <circle cx="245" cy="180" r="14" fill="#1a1a1a" />
              <circle cx="245" cy="180" r="6" fill="#666" />
              <rect x="240" y="42" width="40" height="22" rx="3" fill="#EE2E36" />
              <text x="244" y="58" fontSize="12" fontWeight="900" fill="#fff" fontFamily="Arial">TOYOTA</text>
              <rect x="100" y="200" width="100" height="32" rx="16" fill="#EE2E36" />
              <text x="118" y="221" fontSize="13" fontWeight="800" fill="#fff" fontFamily="Arial">SAIBA MAIS</text>
            </svg>
          </a>
          <div style={{ fontSize:9, color:'#9CA3AF', marginTop:8 }}>Anúncios por <strong>Google AdSense</strong></div>
        </div>

        <B>
          <p>Parece bom demais pra ser verdade?</p>
        </B>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          Como esse negócio funciona, na prática
        </h2>

        <B>
          <p>A explicação é mais simples do que parece. Os grandes marketplaces (Mercado Livre, Shopee, Pegaki) hoje têm um problema de logística que cresceu fora do controle: <strong>muitos pacotes pequenos, espalhados por toda a cidade, com prazo de entrega cada vez mais curto.</strong></p>
          <p>Pensa no caso real. Um pacote pequeno saiu do centro de distribuição localizado em <strong>Campos Elíseos</strong> e precisa chegar num cliente no <strong>City Ribeirão</strong> — quase 12 km de distância — com prazo de entrega ainda no mesmo dia. Outro pacote sai do <strong>Iguatemi</strong> e tem que chegar na <strong>Vila Tibério</strong>. Outro vai de <strong>Ribeirânia</strong> para o <strong>Subsetor Sul</strong>.</p>
          <p>Pra um único veículo da transportadora atravessar a cidade só pra entregar aquele item, sai caro demais. Inviável. Multiplica isso por <strong>milhares de pacotes pequenos por dia</strong> e você entende o tamanho do gargalo.</p>
          <p>A saída? <strong>Ter o pacote já armazenado dentro do bairro.</strong> Quando o pedido cai, um veículo parceiro só precisa retirar na sua residência (ou na de outro ponto próximo) e levar até o endereço final. Distância curta, custo baixo, prazo cumprido.</p>
          <p>É exatamente isso que a <a href="https://cadastro-coletaki.vercel.app" target="_blank" rel="noopener" style={{ color:RED, textDecoration:'underline', fontWeight:600 }}>Coletaki</a> viabilizou para os marketplaces. Em vez de manter dezenas de galpões espalhados pela cidade (caro, burocrático, demorado), eles criaram uma rede de <strong>pequenos pontos de coleta residenciais</strong> nos bairros — e isso resolveu o problema.</p>
          <p>Pra eles, ficou viável operar em alto volume. Para os moradores de bairro, virou fonte de renda real sem precisar sair de casa.</p>
        </B>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          Parece fácil. Mas não é pra todo mundo
        </h2>

        <B>
          <p>É honesto dizer: a rotina parece simples — e até é. <strong>Mas exige dedicação e responsabilidade.</strong></p>
          <p>O pagamento é <strong>por item processado</strong> — ou seja, cada pacote que entra e cada pacote que sai do seu ponto gera valor. Toda movimentação é registrada via QR Code direto pelo aplicativo: você confirma a entrada na chegada e confirma a saída quando o veículo de distribuição leva.</p>
          <p>Isso significa duas coisas. Primeiro: <strong>quanto mais movimento, maior o seu rendimento.</strong> Segundo: cada pacote tem rastreio e responsabilidade definida — você é o guardião enquanto ele está com você.</p>
          <p>Por isso, três regras são inegociáveis:</p>
          <p>1) <strong>O local precisa estar fechado e fora do alcance de crianças e animais.</strong> Sem exceção. Animal de estimação não pode ter acesso ao espaço onde os pacotes estão armazenados.</p>
          <p>2) <strong>Os pacotes precisam sair na mesma condição em que entraram.</strong> Sem amassados, sem rasgos, sem violação. É responsabilidade direta da pessoa que armazena.</p>
          <p>3) <strong>Os horários precisam ser respeitados.</strong> Você precisa estar disponível pra receber, conferir o QR Code e liberar a coleta nos horários combinados.</p>
          <p>Quem trata o ponto de coleta como hobby, não dura um mês. Quem trata como compromisso de verdade, vê o saldo subir todo quinze dias.</p>
          <p>A boa notícia: <strong>funciona tanto em casa quanto em apartamento.</strong> Não precisa ser um cômodo grande — uma parte da garagem, uma área de serviço, um quartinho fechado, um cantinho da lavanderia. Tudo serve, desde que esteja limpo, fechado para animais e crianças, e dentro dessas regras.</p>
        </B>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          Por que essa oportunidade chegou em Ribeirão Preto agora?
        </h2>

        <B>
          <p>Ribeirão Preto é o terceiro maior polo de e-commerce do interior paulista, mas durante décadas a cidade conviveu com uma limitação técnica que afetava todo mundo: <strong>quase ninguém podia ser ponto de coleta.</strong></p>
          <p>Não era falta de gente interessada. Era falta de permissão.</p>
          <p>Antigamente, só podia operar como ponto de coleta quem tivesse <strong>CNPJ com o CNAE 5320-2/02</strong> (serviços de entrega rápida), além de alvará da prefeitura, contratos individuais com cada marketplace e várias outras certificações operacionais.</p>
          <p>Resultado? A cidade ficou refém de pouquíssimos galpões cadastrados no centro. Os bairros viviam o caos: pacotes atrasando, Mercado Livre devolvendo encomendas, clientes xingando nas redes sociais, motorista voltando com a carga sem conseguir entregar.</p>
          <p>Em <strong>2022</strong>, uma normatização do trabalho intermediado por plataformas abriu uma brecha legal: empresas com CNPJ adequado passaram a poder homologar pessoas físicas para operarem sob a estrutura jurídica delas.</p>
          <p>Foi nessa janela que a <a href="https://cadastro-coletaki.vercel.app" target="_blank" rel="noopener" style={{ color:RED, textDecoration:'underline', fontWeight:800 }}>Coletaki</a> entrou em campo. Eles começaram em <strong>São Paulo capital</strong>, onde o modelo opera há quase dois anos. A média dos pontos paulistanos hoje é de <strong>R$ 3.600 por mês</strong>, com mais de 800 pontos ativos rodando nas zonas Norte, Sul, Leste e Oeste da capital.</p>
          <p>Em <strong>2026, a operação chegou em Ribeirão Preto</strong>. E os primeiros operadores locais já estão batendo médias acima de R$ 4 mil mensais — justamente porque a demanda represada na cidade é maior do que a média de SP.</p>
        </B>

        

        <div style={{ borderRadius:12, overflow:'hidden', margin:'32px 0 8px', background:'#f3f4f6', border:'1px solid '+LINE }}>
          <img src={IMG_2} alt="Operação Coletaki" style={{ width:'100%', display:'block' }} />
        </div>
        <div style={{ fontSize:11, color:INK_MUTE, marginBottom:28, fontStyle:'italic' }}>
          Pacotes organizados em um ponto residencial parceiro durante a rota matinal.
        </div>

        

        <div style={{ background:RED_LIGHT, border:'1.5px solid '+RED+'30', borderRadius:14, padding:18, margin:'24px 0' }}>
          <div style={{ fontSize:11, fontWeight:900, color:RED_DARK, letterSpacing:'0.08em', marginBottom:6 }}>O DADO QUE PESA NA DECISÃO</div>
          <div style={{ fontSize:15, color:INK, lineHeight:1.65 }}>
            Em São Paulo capital, onde o modelo opera há um ano e meio, a média dos pontos é de <strong>R$ 3.600 por mês</strong>. Em Ribeirão Preto, com demanda represada, os primeiros operadores já ultrapassaram <strong>R$ 4 mil</strong>. Em meses de pico (Black Friday e Natal), o volume mais que dobra.
          </div>
        </div>

        <div style={{ borderRadius:12, overflow:'hidden', margin:'32px 0 8px', background:'#f3f4f6', border:'1px solid '+LINE }}>
          <img src={IMG_3} alt="Rotina de ponto de coleta" style={{ width:'100%', display:'block' }} />
        </div>
        <div style={{ fontSize:11, color:INK_MUTE, marginBottom:28, fontStyle:'italic' }}>
          A rotina cabe tranquilamente entre as tarefas do dia — recebimento pela manhã, coleta no início da tarde.
        </div>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          O passo a passo do cadastro
        </h2>

        <B>
          <p>O processo começa pela consulta de disponibilidade. A pessoa interessada digita seu CEP no site da <a href="https://cadastro-coletaki.vercel.app" target="_blank" rel="noopener" style={{ color:RED, textDecoration:'underline', fontWeight:600 }}>Coletaki</a>, e o sistema retorna em segundos se a microrregião está aberta para novos pontos. Algumas áreas já estão saturadas, outras seguem com vagas.</p>
          <p>Confirmada a disponibilidade, o cadastro é direto: dados pessoais básicos, descrição do espaço em casa e contato. Não há cobrança de taxa de adesão, mensalidade ou qualquer custo de entrada.</p>
          <p>Logo após o cadastro, o próprio app da <a href="https://cadastro-coletaki.vercel.app" target="_blank" rel="noopener" style={{ color:RED, textDecoration:'underline', fontWeight:600 }}>Coletaki</a> abre a agenda do consultor responsável pela região, com horários disponíveis nos próximos dias. O candidato escolhe entre <strong>visita presencial ou videochamada</strong> e confirma o agendamento ali mesmo, em segundos. A análise observa critérios como ventilação, iluminação, isolamento do espaço em relação a animais e crianças, e condições gerais de armazenagem.</p>
          <p>Aprovado o ponto, o operador passa por um <strong>treinamento rápido de cerca de 4 horas</strong>, dividido em duas frentes:</p>
          <p>A primeira é técnica — uso do aplicativo, leitura dos QR Codes de entrada e saída dos pacotes, conferência das encomendas, registro de movimentação. A operação inteira é digital e auditada em tempo real pela <a href="https://cadastro-coletaki.vercel.app" target="_blank" rel="noopener" style={{ color:RED, textDecoration:'underline', fontWeight:600 }}>Coletaki</a> e pelos marketplaces parceiros.</p>
          <p>A segunda parte do treinamento é operacional: como manter o ambiente limpo, organizado, fora do alcance de crianças e animais, e como garantir que cada pacote saia exatamente nas mesmas condições em que entrou. A ideia, segundo a empresa, é "não diminuir a qualidade da entrega" — afinal, os marketplaces continuam respondendo pela imagem perante o cliente final.</p>
          <p>Após o treinamento, o ponto entra na rota logística da semana seguinte e começa a operar.</p>
          <p style={{ textAlign:'center', marginTop:20, marginBottom:8 }}>
            <a href="https://cadastro-coletaki.vercel.app" target="_blank" rel="noopener" style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#fff', color:'#C4170C', border:'2px solid #C4170C', borderRadius:10, padding:'12px 22px', fontSize:14, fontWeight:800, textDecoration:'none', cursor:'pointer' }}>
              Iniciar cadastro pela Coletaki →
            </a>
          </p>
        </B>

        

        <div style={{ borderRadius:12, overflow:'hidden', margin:'32px 0 8px', background:'#f3f4f6', border:'1px solid '+LINE }}>
          <img src={IMG_4} alt="Ponto de coleta ativo" style={{ width:'100%', display:'block' }} />
        </div>
        <div style={{ fontSize:11, color:INK_MUTE, marginBottom:28, fontStyle:'italic' }}>
          Espaços antes subutilizados — uma garagem parada, um quarto sem uso — viraram fonte de renda recorrente.
        </div>

        <h3 style={{ fontSize:18, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', borderLeft:'4px solid '+RED, paddingLeft:10 }}>
          Leia também
        </h3>

        <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:32 }}>
          <Noticia
            tag="ECONOMIA"
            titulo="Trabalho remoto em alta: 6 em cada 10 brasileiros desejam abandonar o CLT em 2026, aponta pesquisa"
            resumo="Levantamento conduzido por instituto independente mostra crescimento histórico do interesse por modelos de renda flexível no Brasil."
          />
          <Noticia
            tag="LOGÍSTICA"
            titulo="E-commerce no interior paulista cresce 47% em 2025 e expõe gargalos de entrega"
            resumo="Cidades como Ribeirão Preto, Campinas e São José do Rio Preto registraram aumento expressivo nas reclamações por atraso."
          />
          <Noticia
            tag="MERCADO"
            titulo="Mercado Livre amplia rede de pontos de coleta e mira interior do país"
            resumo="Marketplace pretende dobrar o número de pontos parceiros até o fim de 2026 para reduzir prazos de entrega last-mile."
          />
          <Noticia
            tag="OPORTUNIDADE"
            titulo="Renda extra: como pequenos negócios em casa estão movimentando R$ 8 bi por ano"
            resumo="Estudo do Sebrae aponta que 4 milhões de brasileiros geram renda complementar a partir de atividades domiciliares regulamentadas."
          />
        </div>

        <div style={{ background:'#FEF3C7', border:'1px solid #FDE68A', borderRadius:10, padding:12, fontSize:11, color:'#78350F', lineHeight:1.55, marginBottom:28 }}>
          <strong>Aviso legal:</strong> os valores citados são baseados em médias públicas de pontos da <a href="https://cadastro-coletaki.vercel.app" target="_blank" rel="noopener" style={{ color:RED, textDecoration:'underline', fontWeight:600 }}>Coletaki</a> em São Paulo e Ribeirão Preto e variam por bairro, esforço operacional e sazonalidade. Não há garantia de rendimento. Conteúdo editorial independente, sem parceria comercial.
        </div>

        <div style={{ borderTop:'1px solid '+LINE, paddingTop:18, paddingBottom:18, display:'flex', alignItems:'center', gap:10, flexWrap:'wrap' }}>
          <span style={{ fontSize:13, fontWeight:700, color:INK }}>Compartilhe:</span>
          <Sh label="f" cor="#1877F2" />
          <Sh label="X" cor="#000" />
          <Sh label="in" cor="#0A66C2" />
          <ShL />
        </div>

        <div style={{ borderTop:'1px solid '+LINE, paddingTop:18, marginTop:10, fontSize:11, color:INK_MUTE, lineHeight:1.5, textAlign:'center' }}>
          © 2026 Diário do Interior · Conteúdo editorial independente
        </div>
      </article>

      <style>{`@media (max-width:640px){.menu-desk{display:none !important}}`}</style>
    </div>
  );
}

function B({ children }) {
  return <div style={{ fontSize:17, color:'#1a1a1a', lineHeight:1.7 }}>{React.Children.map(children, c => <div style={{ marginBottom:14 }}>{c}</div>)}</div>;
}

function P({ n, t, children }) {
  return (
    <div style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
      <div style={{ width:36, height:36, borderRadius:10, background:'#C4170C', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:15, fontWeight:800, flexShrink:0 }}>{n}</div>
      <div style={{ flex:1 }}>
        <div style={{ fontSize:15, fontWeight:800, color:'#1a1a1a', marginBottom:4 }}>{t}</div>
        <div style={{ fontSize:14, color:'#4a4a4a', lineHeight:1.6 }}>{children}</div>
      </div>
    </div>
  );
}

function I({ children }) {
  return (
    <div style={{ display:'flex', gap:10, alignItems:'center' }}>
      <div style={{ width:22, height:22, borderRadius:'50%', background:'#dcfce7', color:'#16a34a', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}><Check size={12} strokeWidth={3} /></div>
      <div style={{ fontSize:14, color:'#1a1a1a', lineHeight:1.5 }}>{children}</div>
    </div>
  );
}

function S({ v, d }) {
  return (
    <div style={{ background:'#0A1628', color:'#fff', borderRadius:12, padding:14, textAlign:'center' }}>
      <div style={{ fontSize:20, fontWeight:900, color:'#FFC700', letterSpacing:'-0.02em', lineHeight:1 }}>{v}</div>
      <div style={{ fontSize:10, opacity:0.85, marginTop:6, lineHeight:1.3 }}>{d}</div>
    </div>
  );
}

function D({ n, b, t }) {
  return (
    <div style={{ background:'#F9FAFB', border:'1.5px solid #C4170C30', borderRadius:14, padding:18 }}>
      <div style={{ display:'flex', gap:4, marginBottom:8 }}>
        {[1,2,3,4,5].map(i => <span key={i} style={{ color:'#FFC700', fontSize:15 }}>★</span>)}
      </div>
      <div style={{ fontSize:14, color:'#1a1a1a', lineHeight:1.6, marginBottom:10, fontStyle:'italic' }}>{'"'+t+'"'}</div>
      <div style={{ fontSize:13, color:'#1a1a1a', fontWeight:700 }}>{n}</div>
      <div style={{ fontSize:11, color:'#6B7280', marginTop:2 }}>{b} · Ribeirão Preto</div>
    </div>
  );
}


function Noticia({ tag, titulo, resumo }) {
  return (
    <div style={{ background:'#fff', border:'1px solid #E5E7EB', borderRadius:10, padding:16 }}>
      <div style={{ fontSize:10, fontWeight:800, color:'#C4170C', letterSpacing:'0.08em', marginBottom:6 }}>{tag}</div>
      <div style={{ fontSize:15, fontWeight:800, color:'#1a1a1a', lineHeight:1.3, marginBottom:6, letterSpacing:'-0.01em' }}>{titulo}</div>
      <div style={{ fontSize:12, color:'#6B7280', lineHeight:1.5 }}>{resumo}</div>
    </div>
  );
}

function Sh({ label, cor }) {
  return <button style={{ width:32, height:32, borderRadius:'50%', background:'#fff', border:'1.5px solid #E5E7EB', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', color:cor, fontSize:13, fontWeight:900, fontFamily:'inherit' }}>{label}</button>;
}

function ShL() {
  return <button style={{ width:32, height:32, borderRadius:'50%', background:'#fff', border:'1.5px solid #E5E7EB', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', color:'#6B7280' }}><Link2 size={14} /></button>;
}
