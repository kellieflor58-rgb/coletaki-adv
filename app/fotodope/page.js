'use client';

import React from 'react';
import { ArrowRight, EyeOff, TrendingUp, Globe, DollarSign, Lock, Link2 } from 'lucide-react';

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

const PLACEHOLDER_1 = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FCE7F3"/><stop offset="100%" stop-color="#FBCFE8"/></linearGradient></defs><rect width="800" height="450" fill="url(#g)"/><text x="400" y="225" font-family="Arial" font-size="20" fill="#9D174D" text-anchor="middle" opacity="0.5">Imagem ilustrativa</text></svg>');
const PLACEHOLDER_2 = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FBCFE8"/><stop offset="100%" stop-color="#F9A8D4"/></linearGradient></defs><rect width="800" height="450" fill="url(#g)"/><text x="400" y="225" font-family="Arial" font-size="20" fill="#9D174D" text-anchor="middle" opacity="0.5">Imagem ilustrativa</text></svg>');

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
          <span style={{ color:INK_MUTE }}>RENDA ONLINE · MULHERES</span>
        </div>

        <h1 style={{ fontSize:38, fontWeight:900, color:INK, lineHeight:1.12, letterSpacing:'-0.035em', margin:'0 0 18px' }}>
          A plataforma que chegou ao Brasil pagando mulheres por <span style={{ color:PINK }}>fotos do pé</span> — sem mostrar o rosto e sem precisar de público
        </h1>

        <p style={{ fontSize:18, color:INK_SOFT, lineHeight:1.55, margin:'0 0 24px', fontWeight:500 }}>
          Chamada de <a href={LINK_FOOTPRIV} target="_blank" rel="noopener" style={{ color:PINK, textDecoration:'underline', fontWeight:700 }}>FootPriv</a>, a plataforma viralizou nos últimos meses ao oferecer um modelo inédito: anonimato total, sem necessidade de seguidores em redes sociais e pagamento direto em real. O fenômeno cresceu rápido em cidades do interior paulista.
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
          <img src={PLACEHOLDER_1} alt="Plataforma FootPriv" style={{ width:'100%', display:'block' }} />
        </div>
        <div style={{ fontSize:11, color:INK_MUTE, marginBottom:28, fontStyle:'italic' }}>
          O modelo brasileiro de renda anônima por fotos cresceu rápido no último semestre.
        </div>

        <B>
          <p>Existe um termo que vem aparecendo cada vez mais em rodas de conversa femininas no Brasil: "FootPriv". A plataforma chegou ao mercado nacional há pouco tempo e, em menos de um ano, virou um dos fenômenos mais comentados do setor de renda digital para mulheres.</p>
          <p>O conceito é, à primeira vista, estranho. Vende-se foto de pé. Calcanhar, tornozelo, dedinho, pé descalço, com meia, com esmalte. Só isso.</p>
          <p>Mas a forma como o modelo funciona é o que explica o boom. <strong>Diferente de plataformas tradicionais de monetização digital, a FootPriv não exige que a creator apareça, mostre o rosto, crie perfil em rede social ou tenha qualquer tipo de público.</strong></p>
          <p>É o tipo de inversão que muda tudo.</p>
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
              <text x="240" y="115" fontSize="42" fontWeight="900" fill="#EA1D2C" fontFamily="Arial" textAnchor="middle">🍔</text>
              <rect x="20" y="200" width="180" height="34" rx="17" fill="#fff" />
              <text x="42" y="222" fontSize="13" fontWeight="800" fill="#EA1D2C" fontFamily="Arial">PEDIR AGORA</text>
            </svg>
          </a>
          <div style={{ fontSize:9, color:'#9CA3AF', marginTop:8 }}>Anúncios por <strong>Google AdSense</strong></div>
        </div>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          Por que está virando boom
        </h2>

        <B>
          <p>O modelo tradicional de monetização de conteúdo na internet sempre teve a mesma equação: <strong>quanto maior o seu público, mais você ganha.</strong> Para isso, era preciso aparecer, postar regularmente, interagir com seguidores, construir uma marca pessoal pública. Tudo o oposto do que a maioria das mulheres comuns está disposta a fazer.</p>
          <p>A FootPriv quebrou essa lógica. <strong>Em vez de exigir público da creator, a plataforma já entrega o público pronto.</strong> Mais de 40 mil compradores cadastrados, espalhados por mais de 60 países, com fetiche específico por pés femininos. Quando uma foto é postada, eles fazem ofertas em sistema de leilão.</p>
          <p>A creator só precisa decidir qual oferta aceitar. Sem postar em Instagram. Sem mostrar o rosto. Sem dar satisfação para ninguém. <strong>Anonimato é regra de negócio da plataforma, não uma escolha opcional.</strong></p>
          <p>O resultado é que, em poucos meses, o boca a boca entre mulheres explodiu. Cidades do interior paulista — como Ribeirão Preto, Campinas e São José do Rio Preto — figuram hoje entre as regiões com maior crescimento de cadastros da plataforma.</p>
        </B>

        <div style={{ background:'#0A1628', color:'#fff', borderRadius:16, padding:24, marginBottom:28 }}>
          <div style={{ display:'flex', gap:12, alignItems:'center', marginBottom:14 }}>
            <div style={{ width:42, height:42, borderRadius:12, background:PINK, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <EyeOff size={22} />
            </div>
            <div style={{ fontSize:18, fontWeight:800 }}>O ponto que faz toda a diferença</div>
          </div>
          <div style={{ fontSize:14, opacity:0.88, lineHeight:1.65 }}>
            Marido, namorado, mãe, vizinha, colega de trabalho — <strong style={{ color:YELLOW }}>nenhuma dessas pessoas vai saber.</strong> A creator não aparece, não precisa fazer rede social, não precisa criar perfil público. Operação 100% privada, do cadastro ao saque.
          </div>
        </div>

        <div style={{ borderRadius:12, overflow:'hidden', margin:'32px 0 8px', background:'#f3f4f6', border:'1px solid '+LINE }}>
          <img src={PLACEHOLDER_2} alt="Renda extra anônima" style={{ width:'100%', display:'block' }} />
        </div>
        <div style={{ fontSize:11, color:INK_MUTE, marginBottom:28, fontStyle:'italic' }}>
          O cadastro leva minutos e o primeiro saque costuma cair em dias.
        </div>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          Como funciona o modelo de assinatura
        </h2>

        <B>
          <p>Para acessar todas as funcionalidades da plataforma — incluindo o sistema de leilão, o painel de ofertas e a base completa de compradores — a creator precisa pagar um <strong>plano de assinatura mensal</strong>. É o ponto que separa quem testa do que opera de verdade.</p>
          <p>O valor da assinatura, segundo a própria plataforma, foi pensado para ser acessível. <strong>Na prática, a maioria das creators relata que o plano se paga já na primeira ou segunda venda — muitas vezes na mesma semana do cadastro.</strong></p>
          <p>É o tipo de modelo que filtra naturalmente quem está realmente disposto a operar. Sem cobrança alta de entrada, sem fidelização extensa, sem letras miúdas. Apenas uma mensalidade modesta que se autopaga rápido para quem entra com seriedade.</p>
          <p>Depois disso, tudo o que entra de venda é renda líquida da creator, descontada apenas a taxa padrão de transação da plataforma.</p>
        </B>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          Os números do fenômeno
        </h2>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:28 }}>
          <Stat icone={TrendingUp} numero="+40 mil" label="compradores ativos cadastrados na plataforma" />
          <Stat icone={Globe} numero="60 países" label="de origem dos compradores internacionais" />
          <Stat icone={DollarSign} numero="R$ 280+" label="valor médio por foto vendida (variável por leilão)" />
          <Stat icone={Lock} numero="100%" label="anônimo — sem rosto, sem nome, sem rede social" />
        </div>

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          A explicação para o sucesso
        </h2>

        <B>
          <p>O sucesso da FootPriv no Brasil pode ser explicado por três fatores combinados.</p>
          <p>O primeiro é <strong>cultural</strong>. O brasileiro — e a brasileira — tem uma relação particular com privacidade quando o assunto é renda informal. Há resistência forte a expor a vida pessoal em redes sociais para ganhar dinheiro. A FootPriv resolve isso ao oferecer 100% de anonimato.</p>
          <p>O segundo é <strong>econômico</strong>. O salário médio das mulheres brasileiras ainda é insuficiente para cobrir um custo de vida em alta. Qualquer fonte de renda extra que não exija sair de casa, vínculo trabalhista ou qualificação técnica encontra demanda imediata.</p>
          <p>O terceiro é <strong>tecnológico</strong>. A plataforma é brasileira, em português, com pagamento direto em real e suporte local. Diferente de concorrentes internacionais, não há barreira de idioma, câmbio ou conversão. Caiu no leilão, caiu na conta.</p>
          <p>Combinados, esses três fatores explicam por que cidades do interior paulista figuram entre as regiões de maior crescimento — locais onde a renda extra é mais necessária e a discrição é cultura.</p>
        </B>

        <div style={{ background:'#F9FAFB', borderLeft:'4px solid '+PINK, borderRadius:8, padding:16, marginTop:32, marginBottom:32 }}>
          <div style={{ fontSize:13, color:INK_SOFT, lineHeight:1.6, marginBottom:12 }}>
            Para conhecer melhor a plataforma e verificar como funciona o cadastro, acesse diretamente o site oficial da FootPriv.
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
            resumo="Levantamento conduzido por instituto independente mostra crescimento histórico do interesse por modelos de renda flexível."
          />
          <Noticia
            tag="MULHERES"
            titulo="Renda anônima cresce 230% no Brasil: novas plataformas mudam o cenário do trabalho feminino"
            resumo="Estudos do setor apontam que mulheres brasileiras lideram a busca por modelos de renda que preservem a privacidade pessoal."
          />
          <Noticia
            tag="MERCADO"
            titulo="Mercado de creators no exterior movimenta US$ 15 bilhões em 2025"
            resumo="Brasileiras figuram entre as maiores beneficiárias de plataformas internacionais, com pagamentos em real via PIX."
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
          <strong>Aviso legal:</strong> Esta matéria foi produzida de forma editorial independente, sem parceria comercial com a FootPriv. Plataforma exclusiva para maiores de 18 anos. Resultados variam por dedicação, sazonalidade e demanda. Não há garantia de rendimento. Verifique sempre os termos no site oficial antes de qualquer assinatura.
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

function Stat({ icone: Icon, numero, label }) {
  return (
    <div style={{ background:'#FEF7FB', border:'1.5px solid '+PINK+'30', borderRadius:14, padding:16 }}>
      <div style={{ width:34, height:34, borderRadius:10, background:PINK, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:10 }}>
        <Icon size={16} />
      </div>
      <div style={{ fontSize:22, fontWeight:900, color:PINK_DARK, letterSpacing:'-0.02em', lineHeight:1.1 }}>{numero}</div>
      <div style={{ fontSize:11, color:INK_MUTE, marginTop:6, lineHeight:1.5 }}>{label}</div>
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
