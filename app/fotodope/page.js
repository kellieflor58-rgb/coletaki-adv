'use client';

import React from 'react';
import { ArrowRight, Check, Shield, Lock, Globe, DollarSign, EyeOff, AlertTriangle, Link2 } from 'lucide-react';

const PINK = '#DB2777';
const PINK_DARK = '#9D174D';
const PINK_LIGHT = '#FCE7F3';
const INK = '#1a1a1a';
const INK_SOFT = '#4a4a4a';
const INK_MUTE = '#6B7280';
const LINE = '#E5E7EB';
const YELLOW = '#FFC700';
const RED = '#C4170C';

const LINK_FOOTPRIV = 'https://footpriv.com';
const FOTO_AUTOR = 'https://media.licdn.com/dms/image/v2/D4D03AQEcZc_WGkcu7g/profile-displayphoto-scale_400_400/B4DZkRAeUnGkAg-/0/1756926962727?e=2147483647&v=beta&t=wuS4qcfeklxK1C8kXVF8qubvgpHUzu9rLo-BFViGai0';

// Placeholders neutros (cores rosa pastel) — usuário trocará por imagens reais depois
const PLACEHOLDER_1 = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FCE7F3"/><stop offset="100%" stop-color="#FBCFE8"/></linearGradient></defs><rect width="800" height="450" fill="url(#g)"/><text x="400" y="225" font-family="Arial" font-size="20" fill="#9D174D" text-anchor="middle" opacity="0.5">Imagem ilustrativa</text></svg>');
const PLACEHOLDER_2 = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FBCFE8"/><stop offset="100%" stop-color="#F9A8D4"/></linearGradient></defs><rect width="800" height="450" fill="url(#g)"/><text x="400" y="225" font-family="Arial" font-size="20" fill="#9D174D" text-anchor="middle" opacity="0.5">Imagem ilustrativa</text></svg>');
const PLACEHOLDER_3 = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#F9A8D4"/><stop offset="100%" stop-color="#FCE7F3"/></linearGradient></defs><rect width="800" height="450" fill="url(#g)"/><text x="400" y="225" font-family="Arial" font-size="20" fill="#9D174D" text-anchor="middle" opacity="0.5">Imagem ilustrativa</text></svg>');

const MENU = ['Home','Matérias','Economia','Mulheres','Oportunidades'];

export default function Page() {
  const irFootpriv = () => { window.open(LINK_FOOTPRIV, '_blank'); };
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
          <span style={{ color:PINK_DARK }}>ECONOMIA</span>
          <span style={{ color:INK_MUTE }}>›</span>
          <span style={{ color:INK_MUTE }}>RENDA EXTRA · MULHERES</span>
        </div>

        <h1 style={{ fontSize:38, fontWeight:900, color:INK, lineHeight:1.12, letterSpacing:'-0.035em', margin:'0 0 18px' }}>
          R$ 2 a R$ 8 mil por mês sem mostrar o rosto e sem ninguém saber? Para mulheres brasileiras, <span style={{ color:PINK }}>está virando realidade</span>
        </h1>

        <p style={{ fontSize:18, color:INK_SOFT, lineHeight:1.55, margin:'0 0 24px', fontWeight:500 }}>
          Uma plataforma criada em 2024 conecta mais de 40 mil compradores internacionais a brasileiras que querem renda extra completamente anônima. O produto vendido surpreende — e a demanda é maior do que a oferta. Entenda como.
        </p>

        <div style={{ borderTop:'1px solid '+LINE, borderBottom:'1px solid '+LINE, padding:'14px 0', marginBottom:24, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:14 }}>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <img src={FOTO_AUTOR} alt="Mathias Perini" style={{ width:48, height:48, borderRadius:'50%', objectFit:'cover', border:'2px solid '+LINE }} />
            <div>
              <div style={{ fontSize:13, fontWeight:800, color:INK, lineHeight:1.2 }}>Por Mathias Perini</div>
              <div style={{ fontSize:11, color:INK_MUTE, lineHeight:1.3, marginTop:2 }}>Jornalista · Editor de Economia</div>
              <div style={{ fontSize:11, color:INK_MUTE, marginTop:2 }}>{data} · 6 min de leitura</div>
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
          <img src={PLACEHOLDER_1} alt="Renda extra para mulheres no Brasil" style={{ width:'100%', display:'block' }} />
        </div>
        <div style={{ fontSize:11, color:INK_MUTE, marginBottom:28, fontStyle:'italic' }}>
          Mulheres brasileiras descobriram uma forma totalmente anônima de gerar renda recorrente sem aparecer.
        </div>

        <B>
          <p>Imagine receber <strong>R$ 1.500 na sua conta</strong> sem ninguém — nem marido, nem família, nem amiga — fazer a mínima ideia de onde veio.</p>
          <p>Você acordou, tomou o seu café da manhã. Em algum momento do dia, tirou uma foto rápida do seu pé. Pode ter sido descalço, com meia, na areia, com esmalte, sem esmalte.</p>
          <p>Postou na plataforma. Em algumas horas, compradores de mais de 60 países começaram a dar lances. Você escolheu qual oferta aceitar. Recebeu na sua conta, em real, no mesmo dia.</p>
          <p>Não apareceu o rosto. Não foi usado seu nome verdadeiro. Não existe perfil em rede social vinculado. Marido, namorado, mãe, vizinha, colega de trabalho — <strong>ninguém vai saber.</strong></p>
          <p>Parece bom demais pra ser verdade?</p>
        </B>

        <div style={{ background:'#FAFAFA', border:'1px solid '+LINE, borderRadius:6, padding:'10px 14px', margin:'24px 0', textAlign:'center' }}>
          <div style={{ fontSize:9, fontWeight:600, color:'#9CA3AF', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>Publicidade</div>
          <a href="#" onClick={(e) => e.preventDefault()} style={{ display:'inline-block' }}>
            <svg width="300" height="250" viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth:'100%', height:'auto', borderRadius:4 }}>
              <defs>
                <linearGradient id="bgFood" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EA1D2C" />
                  <stop offset="100%" stopColor="#C8102E" />
                </linearGradient>
              </defs>
              <rect width="300" height="250" fill="url(#bgFood)" />
              <text x="20" y="44" fontSize="28" fontWeight="900" fill="#fff" fontFamily="Arial">iFood</text>
              <text x="20" y="80" fontSize="14" fontWeight="700" fill="#fff" fontFamily="Arial">Comida boa em</text>
              <text x="20" y="100" fontSize="14" fontWeight="700" fill="#fff" fontFamily="Arial">minutos na sua porta</text>
              <text x="20" y="135" fontSize="28" fontWeight="900" fill="#FFC700" fontFamily="Arial">R$ 30 OFF</text>
              <text x="20" y="156" fontSize="11" fontWeight="500" fill="#fff" fontFamily="Arial" opacity="0.85">na sua primeira compra</text>
              <circle cx="240" cy="100" r="40" fill="#fff" opacity="0.95" />
              <text x="240" y="110" fontSize="42" fontWeight="900" fill="#EA1D2C" fontFamily="Arial" textAnchor="middle">🍔</text>
              <rect x="20" y="200" width="180" height="34" rx="17" fill="#fff" />
              <text x="42" y="222" fontSize="13" fontWeight="800" fill="#EA1D2C" fontFamily="Arial">PEDIR AGORA</text>
            </svg>
          </a>
          <div style={{ fontSize:9, color:'#9CA3AF', marginTop:8 }}>Anúncios por <strong>Google AdSense</strong></div>
        </div>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          O que é vendido (e por que ninguém imagina)
        </h2>

        <B>
          <p>O produto vendido na plataforma é uma coisa que ninguém comenta em jantar de família, mas que movimenta milhões de dólares por ano no mundo todo: <strong>fotos de pé.</strong></p>
          <p>Pé. Calcanhar. Tornozelo. Dedinho do pé.</p>
          <p>Existe um mercado mundial gigantesco — gigantesco mesmo — formado por homens, na maioria de países árabes, asiáticos e europeus, que possuem fetiche por pés femininos. E pagam muito bem por uma foto.</p>
          <p>A plataforma se chama <a href={LINK_FOOTPRIV} target="_blank" rel="noopener" style={{ color:PINK, textDecoration:'underline', fontWeight:700 }}>FootPriv</a>. É brasileira. Paga em real, na sua conta. E a regra de ouro do sistema é uma só: <strong>seu rosto, sua identidade e sua vida pessoal permanecem completamente anônimos.</strong></p>
        </B>

        <div style={{ background:'#FEF2F2', border:'1px solid #FECACA', borderRadius:12, padding:16, margin:'24px 0', display:'flex', gap:12, alignItems:'flex-start' }}>
          <AlertTriangle size={20} color="#DC2626" style={{ flexShrink:0, marginTop:2 }} />
          <div>
            <div style={{ fontSize:13, fontWeight:800, color:'#991B1B', marginBottom:4 }}>Sim, vai estranhar antes de aceitar</div>
            <div style={{ fontSize:13, color:'#7F1D1D', lineHeight:1.6 }}>
              Sim, é estranho. Sim, é desconfortável de explicar para a avó. Mas é completamente legal, completamente anônimo, e já foi pago para milhares de brasileiras que você nunca vai saber quem são. Ninguém tem coragem de contar.
            </div>
          </div>
        </div>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          Por que paga tanto?
        </h2>

        <B>
          <p>A resposta é economia básica de qualquer mercado: <strong>tem mais demanda do que oferta.</strong></p>
          <p>São mais de 40 mil compradores ativos espalhados pelo mundo, contra uma quantidade muito menor de creators dispostas a vender. Em qualquer produto do planeta, quando faltam vendedoras, o preço sobe.</p>
          <p>É exatamente o que acontece na FootPriv. Uma única foto, vendida por leilão, pode ultrapassar R$ 500. Em meses bons, algumas creators relatam faturamento acima de R$ 8.000.</p>
          <p>Não é fortuna de Hollywood, mas também não é discurso de palco. É renda real, paga em conta brasileira.</p>
        </B>

        <div style={{ borderRadius:12, overflow:'hidden', margin:'32px 0 8px', background:'#f3f4f6', border:'1px solid '+LINE }}>
          <img src={PLACEHOLDER_2} alt="Mulher empreendedora" style={{ width:'100%', display:'block' }} />
        </div>
        <div style={{ fontSize:11, color:INK_MUTE, marginBottom:28, fontStyle:'italic' }}>
          O modelo permite que mulheres comuns gerem renda extra de forma 100% anônima e independente.
        </div>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          Como funciona, na prática
        </h2>

        <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:28 }}>
          <P n="1" t="Você tira uma foto" cor={PINK}>
            Pode ser do pé descalço, de meia, na areia, com esmalte, sem esmalte. Apenas o pé — nenhuma parte do rosto, do corpo ou do ambiente íntimo aparece.
          </P>
          <P n="2" t="A foto vai a leilão" cor={PINK}>
            Os mais de 40 mil compradores cadastrados podem fazer lances. Em poucas horas a foto já recebe ofertas. Você acompanha tudo em tempo real pelo painel.
          </P>
          <P n="3" t="Você escolhe quem leva" cor={PINK}>
            Não é o maior lance que ganha automaticamente. <strong>Você escolhe.</strong> Pode ser pelo valor, pelo perfil do comprador, ou por qualquer critério próprio.
          </P>
          <P n="4" t="Recebe direto na conta brasileira" cor={PINK}>
            A FootPriv desconta o valor do comprador na moeda local dele (dólar, euro, dirham, o que for) e deposita na sua conta em real, no mesmo dia. Caiu, é seu.
          </P>
        </div>

        <div style={{ background:'#0A1628', color:'#fff', borderRadius:16, padding:24, marginBottom:28 }}>
          <div style={{ display:'flex', gap:12, alignItems:'center', marginBottom:14 }}>
            <div style={{ width:42, height:42, borderRadius:12, background:PINK, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <EyeOff size={22} />
            </div>
            <div style={{ fontSize:18, fontWeight:800 }}>O ponto que faz toda a diferença: anonimato</div>
          </div>
          <div style={{ fontSize:14, opacity:0.88, lineHeight:1.65 }}>
            Você não precisa mostrar o rosto. Não precisa usar seu nome real. Não precisa criar perfil em rede social. Marido, namorado, mãe, vizinha, colega de trabalho — <strong style={{ color:YELLOW }}>nenhuma dessas pessoas vai saber.</strong> A plataforma foi pensada justamente para quem quer renda extra sem fofoca, sem julgamento e sem ter que dar satisfação para ninguém.
          </div>
        </div>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          Por que mulheres estão aderindo
        </h2>

        <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:28 }}>
          <Beneficio icon={Lock} titulo="100% anônimo" desc="Sem rosto, sem identidade, sem vínculo público com a plataforma." />
          <Beneficio icon={Globe} titulo="Mercado global" desc="Compradores em mais de 60 países pagam em moedas diferentes. Você recebe sempre em real." />
          <Beneficio icon={DollarSign} titulo="Você controla o preço" desc="Não aceita uma oferta baixa? Só esperar. Pode rejeitar todos os lances e refazer o leilão." />
          <Beneficio icon={Shield} titulo="Sem riscos legais" desc="Plataforma para maiores de 18 anos, com verificação de identidade. Transações totalmente legais." />
        </div>

        <div style={{ borderRadius:12, overflow:'hidden', margin:'32px 0 8px', background:'#f3f4f6', border:'1px solid '+LINE }}>
          <img src={PLACEHOLDER_3} alt="Renda extra anônima" style={{ width:'100%', display:'block' }} />
        </div>
        <div style={{ fontSize:11, color:INK_MUTE, marginBottom:28, fontStyle:'italic' }}>
          A operação leva minutos por dia e cabe perfeitamente na rotina de qualquer pessoa.
        </div>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          Três histórias reais (com identidades preservadas)
        </h2>

        <div style={{ display:'flex', flexDirection:'column', gap:14, marginBottom:28 }}>
          <D n="Anônima, 31 anos" b="Recife - PE" t="Comecei sem acreditar muito. Tirei três fotos no primeiro dia. Na primeira semana já tinha vendido por R$ 280 cada uma. Hoje, no quarto mês, já passei dos R$ 9.000. Ninguém da minha família sabe, e nem vai saber." />
          <D n="Anônima, 27 anos" b="Salvador - BA" t="Era atendente de loja com salário de R$ 1.500. Hoje faço em uma semana o que ganhava em um mês. Surreal. E nunca fui obrigada a fazer nada que não quisesse." />
          <D n="Anônima, 38 anos" b="Fortaleza - CE" t="Sou mãe solo de dois filhos. Tinha vergonha de procurar trabalho noturno. Quando descobri a FootPriv, na primeira semana já paguei aluguel atrasado. Hoje, com três meses, tenho reserva e respirei pela primeira vez em anos." />
        </div>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:40, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          A verdade sobre dinheiro em 2026
        </h2>

        <B>
          <p>Ninguém aqui está dizendo que você precisa fazer isso. Se o seu trabalho atual paga bem e te faz feliz, ótimo — continue.</p>
          <p>Mas se você está lendo essa matéria até aqui, é porque alguma coisa precisa mudar. Salário que não cobre as contas. Trabalho que não respeita. Vontade de viajar, de comprar coisas, de respirar.</p>
          <p>A <a href={LINK_FOOTPRIV} target="_blank" rel="noopener" style={{ color:PINK, textDecoration:'underline', fontWeight:700 }}>FootPriv</a> é real, está funcionando agora e já pagou em real para milhares de brasileiras. Tudo o que se precisa é um celular, um pé e a coragem para não ligar para o que os outros vão pensar.</p>
          <p><strong>Você decide.</strong></p>
        </B>

        <div style={{ background:'#F9FAFB', borderLeft:'4px solid '+PINK, borderRadius:8, padding:16, marginTop:32, marginBottom:32 }}>
          <div style={{ fontSize:13, color:INK_SOFT, lineHeight:1.6, marginBottom:12 }}>
            Para consultar a plataforma e iniciar o cadastro, acesse diretamente o site oficial da FootPriv.
          </div>
          <a href={LINK_FOOTPRIV} target="_blank" rel="noopener" style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:13, fontWeight:700, color:PINK, textDecoration:'none', borderBottom:'1px solid '+PINK, paddingBottom:2 }}>
            Acessar site da FootPriv <ArrowRight size={13} strokeWidth={2.5} />
          </a>
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
            tag="MULHERES"
            titulo="Renda anônima cresce 230% no Brasil: novas plataformas mudam o cenário do trabalho feminino"
            resumo="Estudos do setor apontam que mulheres brasileiras lideram a busca por modelos de renda que preservem a privacidade pessoal."
          />
          <Noticia
            tag="MERCADO"
            titulo="Mercado de creators no exterior movimenta US$ 15 bilhões em 2025"
            resumo="Brasileiras figuram entre as maiores beneficiárias de plataformas de monetização internacional, com pagamentos em real via PIX e transferência."
          />
          <Noticia
            tag="OPORTUNIDADE"
            titulo="Renda extra: como pequenos negócios em casa estão movimentando R$ 8 bi por ano"
            resumo="Estudo do Sebrae aponta que 4 milhões de brasileiros geram renda complementar a partir de atividades domiciliares."
          />
        </div>

        <div style={{ background:'#F9FAFB', borderRadius:14, padding:18, marginTop:28, marginBottom:24, display:'flex', gap:12, alignItems:'center' }}>
          <img src={FOTO_AUTOR} alt="Mathias Perini" style={{ width:58, height:58, borderRadius:'50%', objectFit:'cover', border:'2px solid '+LINE, flexShrink:0 }} />
          <div>
            <div style={{ fontSize:11, color:INK_MUTE, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:2 }}>Sobre o autor</div>
            <div style={{ fontSize:14, fontWeight:800, color:INK, lineHeight:1.2 }}>Mathias Perini</div>
            <div style={{ fontSize:12, color:INK_SOFT, marginTop:4, lineHeight:1.5 }}>
              Jornalista e editor de Economia. Cobre tendências de renda, mercado digital e novas formas de trabalho no Brasil há mais de 8 anos.
            </div>
          </div>
        </div>

        <div style={{ background:'#FEF3C7', border:'1px solid #FDE68A', borderRadius:10, padding:12, fontSize:11, color:'#78350F', lineHeight:1.55, marginBottom:28 }}>
          <strong>Aviso legal:</strong> os valores citados são médias públicas de creators ativas na FootPriv e podem variar conforme dedicação, região, sazonalidade e demanda. Não há garantia de rendimento. Plataforma exclusiva para maiores de 18 anos. Conteúdo editorial independente, sem parceria comercial.
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

function P({ n, t, cor, children }) {
  return (
    <div style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
      <div style={{ width:36, height:36, borderRadius:10, background:cor, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:15, fontWeight:800, flexShrink:0 }}>{n}</div>
      <div style={{ flex:1 }}>
        <div style={{ fontSize:15, fontWeight:800, color:'#1a1a1a', marginBottom:4 }}>{t}</div>
        <div style={{ fontSize:14, color:'#4a4a4a', lineHeight:1.6 }}>{children}</div>
      </div>
    </div>
  );
}

function Beneficio({ icon: Icon, titulo, desc }) {
  return (
    <div style={{ display:'flex', gap:12, alignItems:'flex-start', background:'#F9FAFB', border:'1px solid #E5E7EB', borderRadius:12, padding:14 }}>
      <div style={{ width:36, height:36, borderRadius:10, background:'#FCE7F3', color:'#DB2777', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
        <Icon size={16} />
      </div>
      <div>
        <div style={{ fontSize:14, fontWeight:800, color:'#1a1a1a', marginBottom:2 }}>{titulo}</div>
        <div style={{ fontSize:12, color:'#4a4a4a', lineHeight:1.55 }}>{desc}</div>
      </div>
    </div>
  );
}

function D({ n, b, t }) {
  return (
    <div style={{ background:'#F9FAFB', border:'1.5px solid #DB277740', borderRadius:14, padding:18 }}>
      <div style={{ display:'flex', gap:4, marginBottom:8 }}>
        {[1,2,3,4,5].map(i => <span key={i} style={{ color:'#FFC700', fontSize:15 }}>★</span>)}
      </div>
      <div style={{ fontSize:14, color:'#1a1a1a', lineHeight:1.6, marginBottom:10, fontStyle:'italic' }}>{'"'+t+'"'}</div>
      <div style={{ fontSize:13, color:'#1a1a1a', fontWeight:700 }}>{n}</div>
      <div style={{ fontSize:11, color:'#6B7280', marginTop:2 }}>{b}</div>
    </div>
  );
}

function Noticia({ tag, titulo, resumo }) {
  return (
    <div style={{ background:'#fff', border:'1px solid #E5E7EB', borderRadius:10, padding:16, cursor:'pointer' }}>
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
