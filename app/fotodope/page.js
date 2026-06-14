'use client';

import React from 'react';
import { ArrowRight, Check, X, Shield, AlertTriangle, Link2 } from 'lucide-react';

const PINK = '#DB2777';
const PINK_DARK = '#9D174D';
const PINK_LIGHT = '#FCE7F3';
const INK = '#1a1a1a';
const INK_SOFT = '#4a4a4a';
const INK_MUTE = '#6B7280';
const LINE = '#E5E7EB';
const YELLOW = '#FFC700';
const RED = '#C4170C';
const GREEN = '#16a34a';

const LINK_FOOTPRIV = 'https://footpriv.com';
const FOTO_AUTOR = 'https://media.licdn.com/dms/image/v2/D4D03AQEcZc_WGkcu7g/profile-displayphoto-scale_400_400/B4DZkRAeUnGkAg-/0/1756926962727?e=2147483647&v=beta&t=wuS4qcfeklxK1C8kXVF8qubvgpHUzu9rLo-BFViGai0';

const PLACEHOLDER_HERO = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FCE7F3"/><stop offset="100%" stop-color="#FBCFE8"/></linearGradient></defs><rect width="800" height="450" fill="url(#g)"/><text x="400" y="225" font-family="Arial" font-size="20" fill="#9D174D" text-anchor="middle" opacity="0.5">Imagem ilustrativa</text></svg>');

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
          Vender <span style={{ color:PINK }}>foto do pé</span> realmente paga? Veja em quais plataformas funciona, quais exigem público e qual é 100% anônima
        </h1>

        <p style={{ fontSize:18, color:INK_SOFT, lineHeight:1.55, margin:'0 0 24px', fontWeight:500 }}>
          A pergunta tem aparecido cada vez mais em pesquisas no Google. Plataformas como OnlyFans, Privacy e FootPriv movimentam o mercado, mas com regras muito diferentes. Esta matéria explica o que é real, o que é mito, o que exige seguidores e o que pode ser feito de forma totalmente anônima.
        </p>

        <div style={{ borderTop:'1px solid '+LINE, borderBottom:'1px solid '+LINE, padding:'14px 0', marginBottom:24, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:14 }}>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <img src={FOTO_AUTOR} alt="Mathias Perini" style={{ width:48, height:48, borderRadius:'50%', objectFit:'cover', border:'2px solid '+LINE }} />
            <div>
              <div style={{ fontSize:13, fontWeight:800, color:INK, lineHeight:1.2 }}>Por Mathias Perini</div>
              <div style={{ fontSize:11, color:INK_MUTE, lineHeight:1.3, marginTop:2 }}>Jornalista · Editor de Economia</div>
              <div style={{ fontSize:11, color:INK_MUTE, marginTop:2 }}>{data} · 7 min de leitura</div>
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
          <img src={PLACEHOLDER_HERO} alt="Renda online no Brasil" style={{ width:'100%', display:'block' }} />
        </div>
        <div style={{ fontSize:11, color:INK_MUTE, marginBottom:28, fontStyle:'italic' }}>
          A internet abriu novas formas de renda extra para mulheres no Brasil. Mas nem todas as plataformas funcionam do mesmo jeito.
        </div>

        <B>
          <p>A pesquisa "como vender foto do pé" cresceu mais de 400% no Google nos últimos 12 meses no Brasil. Por trás dessa curiosidade explosiva, existe uma dúvida real: <strong>isso realmente paga? Em quais sites funciona? Precisa aparecer? É legal?</strong></p>
          <p>A resposta curta é: sim, é um mercado real. Mas as plataformas onde isso acontece operam com regras muito diferentes entre si — e a maioria das pessoas que pesquisa o assunto não tem ideia dessa diferença.</p>
          <p>Esta matéria coloca os fatos em ordem. <strong>Vamos analisar as três principais plataformas usadas para esse fim hoje no mercado:</strong></p>
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

        {/* ============================================ */}
        {/* PLATAFORMA 1 — ONLYFANS */}
        {/* ============================================ */}

        <h2 style={{ fontSize:28, fontWeight:900, color:INK, marginTop:36, marginBottom:6, letterSpacing:'-0.025em', lineHeight:1.2 }}>
          1. OnlyFans e Privacy
        </h2>
        <p style={{ fontSize:13, color:INK_MUTE, fontWeight:600, marginTop:0, marginBottom:14, textTransform:'uppercase', letterSpacing:'0.06em' }}>
          Funcionam, mas exigem público próprio e divulgação constante
        </p>

        <B>
          <p>O <strong>OnlyFans</strong> e a <strong>Privacy</strong> são as duas plataformas mais lembradas quando o assunto é monetização de conteúdo adulto online. A primeira tem alcance global e paga em dólar; a segunda é brasileira e paga via PIX. As duas permitem que mulheres vendam fotos e vídeos, incluindo "feet pics" (fotos de pé).</p>
          <p>O modelo de negócio é semelhante entre as duas: você cria um perfil, define um valor de assinatura mensal, e os clientes pagam para acessar o conteúdo que você posta dentro da plataforma.</p>
          <p>Mas há uma armadilha que poucos avisos: <strong>nenhuma das duas entrega público pra você.</strong> Elas apenas hospedam os arquivos e processam o pagamento. Toda a parte de atrair clientes é por sua conta.</p>
          <p>Para faturar de verdade, é preciso <strong>construir uma audiência própria</strong> — geralmente via Instagram, Twitter, TikTok ou Reddit. Isso significa criar perfis públicos com a sua imagem, postar conteúdo regularmente, interagir com seguidores, divulgar links e construir essa audiência ao longo de meses (às vezes anos).</p>
          <p>Outro ponto: por serem plataformas de <strong>assinatura mensal</strong>, o conteúdo precisa ser constante. Quem assina espera novidades semanalmente. Sem isso, os clientes cancelam e a receita desaparece.</p>
          <p>Resumindo: <strong>OnlyFans e Privacy funcionam, mas funcionam pra quem já tem público.</strong> Para quem está começando do zero e quer manter o anonimato, é uma escalada longa e desgastante.</p>
        </B>

        <CardPlataforma
          icone="O / P"
          cor="#FF1F8E"
          nome="OnlyFans + Privacy"
          dor="Exigem público próprio, divulgação e conteúdo recorrente"
          itens={[
            { ok:true, texto:'Funcionam para feet pics e outros conteúdos' },
            { ok:true, texto:'OnlyFans paga em dólar; Privacy paga em real (PIX)' },
            { ok:false, texto:'Não entregam público — você precisa construir audiência' },
            { ok:false, texto:'Exigem perfis em redes sociais para divulgação contínua' },
            { ok:false, texto:'Modelo de assinatura mensal — exige conteúdo constante' },
            { ok:false, texto:'Vínculo público — sua imagem fica associada à plataforma' },
            { ok:false, texto:'Concorrência altíssima de creators consolidadas' },
          ]}
        />

        <h2 style={{ fontSize:28, fontWeight:900, color:INK, marginTop:36, marginBottom:6, letterSpacing:'-0.025em', lineHeight:1.2 }}>
          2. FeetFinder
        </h2>
        <p style={{ fontSize:13, color:INK_MUTE, fontWeight:600, marginTop:0, marginBottom:14, textTransform:'uppercase', letterSpacing:'0.06em' }}>
          Especializada em fotos de pé, mas com limitações importantes
        </p>

        <B>
          <p>O <strong>FeetFinder</strong> é uma plataforma americana especializada exclusivamente em conteúdo de pé. Tem uma base internacional consolidada e movimenta um volume considerável de transações no setor.</p>
          <p>O ponto positivo é que, diferente de OnlyFans e Privacy, ele <strong>já tem público próprio interessado especificamente em feet pics.</strong> Você não precisa atrair compradores — eles já estão lá dentro.</p>
          <p>Mas há três limitações relevantes para o público brasileiro. A primeira é o <strong>pagamento</strong>: todo o sistema opera em dólar, e o saque é via gateway internacional. Conversão, taxa de câmbio e tempo de espera são parte do dia a dia.</p>
          <p>A segunda é a <strong>interface e suporte em inglês</strong>. A plataforma não tem versão em português, e qualquer questão de cadastro, suporte ou disputa precisa ser resolvida em outro idioma.</p>
          <p>A terceira é o <strong>nível de anonimato</strong>. Embora não exija mostrar o rosto, a verificação de identidade é mais aberta e o perfil fica visível para qualquer comprador navegando na plataforma.</p>
        </B>

        <CardPlataforma
          icone="FF"
          cor="#1E40AF"
          nome="FeetFinder"
          dor="Especializada, porém em inglês e com pagamento internacional"
          itens={[
            { ok:true, texto:'Especializada em feet pics — público próprio existe' },
            { ok:true, texto:'Não exige seguidores ou divulgação em redes sociais' },
            { ok:false, texto:'Pagamento em dólar, com taxas de conversão e câmbio' },
            { ok:false, texto:'Interface e suporte 100% em inglês' },
            { ok:false, texto:'Anonimato parcial — perfil fica visível na busca' },
            { ok:false, texto:'Saque internacional pode demorar dias' },
          ]}
        />

        <h2 style={{ fontSize:28, fontWeight:900, color:INK, marginTop:36, marginBottom:6, letterSpacing:'-0.025em', lineHeight:1.2 }}>
          3. FootPriv
        </h2>
        <p style={{ fontSize:13, color:PINK_DARK, fontWeight:700, marginTop:0, marginBottom:14, textTransform:'uppercase', letterSpacing:'0.06em' }}>
          A melhor opção para o público brasileiro — 100% anônima e em português
        </p>

        <B>
          <p>A <a href={LINK_FOOTPRIV} target="_blank" rel="noopener" style={{ color:PINK, textDecoration:'underline', fontWeight:700 }}>FootPriv</a> é uma plataforma <strong>brasileira</strong> especializada exclusivamente em fotos de pé. Surgiu para resolver as três falhas das opções anteriores: a falta de público próprio do OnlyFans/Privacy, e o pagamento internacional e idioma estrangeiro do FeetFinder.</p>
          <p>Em vez de exigir que você atraia público, a FootPriv já tem uma base de <strong>mais de 40 mil compradores ativos</strong> espalhados por mais de 60 países. O sistema funciona por leilão: você posta uma foto, os compradores fazem ofertas em moedas locais, e você escolhe qual aceitar.</p>
          <p>O ponto que faz a real diferença para o público brasileiro: <strong>100% anônimo, 100% em português, pagamento direto em real.</strong> Não é necessário aparecer, ter perfil em rede social, divulgar nada ou lidar com câmbio.</p>
          <p>A plataforma cobre todo o anonimato. Sem rosto, sem nome real, sem corpo, sem identidade pública. Apenas o pé. E o saque cai na conta brasileira já convertido, no mesmo dia da venda.</p>
          <p>Por ser <strong>venda avulsa</strong> (não assinatura), você não precisa manter conteúdo constante. Posta quando quiser. Vende quando quiser. Sem cobrança, sem pressão.</p>
        </B>

        <CardPlataforma
          icone="F"
          cor={PINK}
          nome="FootPriv"
          dor="100% anônima, em português, pagamento em real"
          destaque
          itens={[
            { ok:true, texto:'Mais de 40 mil compradores já cadastrados (não precisa trazer)' },
            { ok:true, texto:'100% anônimo — sem rosto, sem nome, sem rede social' },
            { ok:true, texto:'Plataforma brasileira, em português' },
            { ok:true, texto:'Pagamento em real, direto na conta no mesmo dia' },
            { ok:true, texto:'Sistema de leilão: você escolhe o melhor lance' },
            { ok:true, texto:'Venda avulsa — sem postagem obrigatória' },
            { ok:true, texto:'Especializada em fotos de pé (categoria de alta demanda)' },
          ]}
        />

        {/* ============================================ */}
        {/* COMPARATIVO RÁPIDO */}
        {/* ============================================ */}

        <h2 style={{ fontSize:24, fontWeight:800, color:INK, marginTop:40, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          Comparativo rápido
        </h2>

        <div style={{ overflowX:'auto', marginBottom:32 }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13, minWidth:560 }}>
            <thead>
              <tr style={{ borderBottom:'2px solid '+INK }}>
                <th style={{ textAlign:'left', padding:'10px 8px', fontSize:11, fontWeight:800, color:INK_MUTE, textTransform:'uppercase', letterSpacing:'0.05em' }}>Critério</th>
                <th style={{ padding:'10px 8px', fontSize:12, fontWeight:800 }}>OnlyFans / Privacy</th>
                <th style={{ padding:'10px 8px', fontSize:12, fontWeight:800 }}>FeetFinder</th>
                <th style={{ padding:'10px 8px', fontSize:13, fontWeight:800, color:PINK_DARK }}>FootPriv</th>
              </tr>
            </thead>
            <tbody>
              <LinhaTab label="Precisa de público próprio?" v1="Sim" v2="Não" v3="Não" ok3 />
              <LinhaTab label="Precisa divulgar em redes?" v1="Sim" v2="Não" v3="Não" ok3 />
              <LinhaTab label="100% anônimo?" v1="Não" v2="Parcial" v3="Sim" ok3 />
              <LinhaTab label="Em português" v1="Privacy sim" v2="Não" v3="Sim" ok3 />
              <LinhaTab label="Pagamento em real" v1="Privacy sim" v2="Não (dólar)" v3="Sim" ok3 />
              <LinhaTab label="Funciona pra feet pics?" v1="Sim" v2="Sim (foco)" v3="Sim (foco)" />
              <LinhaTab label="Modelo" v1="Assinatura" v2="Venda" v3="Venda por leilão" ok3 />
            </tbody>
          </table>
        </div>

        {/* ============================================ */}
        {/* CONCLUSÃO */}
        {/* ============================================ */}

        <h2 style={{ fontSize:26, fontWeight:800, color:INK, marginTop:40, marginBottom:14, letterSpacing:'-0.02em', lineHeight:1.25 }}>
          Resumindo: o que funciona pra quem
        </h2>

        <B>
          <p>Se você <strong>já tem público em redes sociais</strong> — algumas dezenas de milhares de seguidores — e está disposta a manter presença constante online, OnlyFans e Privacy podem funcionar. São plataformas robustas, com cases reais de creators que faturam bem.</p>
          <p>Se você é fluente em inglês, não se incomoda em receber em dólar e lidar com câmbio, e tolera um perfil semi-anônimo visível, o FeetFinder é uma opção razoável. Funciona, mas com atrito.</p>
          <p>Agora, se você é uma mulher brasileira comum, sem audiência prévia, sem inglês fluente, que quer receber em real direto no PIX e <strong>não quer aparecer de jeito nenhum</strong> — a <a href={LINK_FOOTPRIV} target="_blank" rel="noopener" style={{ color:PINK, textDecoration:'underline', fontWeight:700 }}>FootPriv</a> é a única opção viável hoje.</p>
          <p>É a única que junta os três pontos críticos: <strong>público pronto, anonimato total, pagamento em real</strong>. Para o perfil que representa 95% das brasileiras pesquisando o assunto, é o caminho mais direto.</p>
          <p>Não é mágica. É um modelo de negócio que opera há tempo suficiente para ter base consolidada — só que feito por brasileiros, para brasileiras.</p>
        </B>

        <div style={{ background:'#F9FAFB', borderLeft:'4px solid '+PINK, borderRadius:8, padding:16, marginTop:32, marginBottom:32 }}>
          <div style={{ fontSize:13, color:INK_SOFT, lineHeight:1.6, marginBottom:12 }}>
            Para conhecer melhor a plataforma e iniciar o cadastro, acesse diretamente o site oficial da FootPriv.
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
          <strong>Aviso legal:</strong> Esta matéria foi produzida de forma editorial independente, sem parceria comercial com OnlyFans, Privacy, FeetFinder ou FootPriv. Plataformas exclusivas para maiores de 18 anos. Resultados variam por região, dedicação e perfil. Não há garantia de rendimento.
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

function CardPlataforma({ icone, cor, nome, dor, itens, destaque }) {
  return (
    <div style={{
      background: destaque ? '#FEF7FB' : '#fff',
      border: '2px solid ' + (destaque ? cor : '#E5E7EB'),
      borderRadius: 14,
      padding: 18,
      marginBottom: 28,
      boxShadow: destaque ? '0 8px 24px rgba(219,39,119,0.1)' : 'none',
    }}>
      <div style={{ display:'flex', gap:12, alignItems:'center', marginBottom:14 }}>
        <div style={{ width:44, height:44, borderRadius:12, background:cor, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:900, flexShrink:0 }}>
          {icone}
        </div>
        <div>
          <div style={{ fontSize:16, fontWeight:800, color:'#1a1a1a', lineHeight:1.2 }}>{nome}</div>
          <div style={{ fontSize:12, color:'#6B7280', marginTop:2, fontStyle:'italic' }}>{dor}</div>
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
        {itens.map((it, i) => (
          <div key={i} style={{ display:'flex', gap:10, alignItems:'flex-start' }}>
            <div style={{ width:20, height:20, borderRadius:'50%', background: it.ok ? '#dcfce7' : '#fee2e2', color: it.ok ? '#16a34a' : '#dc2626', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
              {it.ok ? <Check size={11} strokeWidth={3} /> : <X size={11} strokeWidth={3} />}
            </div>
            <div style={{ fontSize:13, color:'#1a1a1a', lineHeight:1.55 }}>{it.texto}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LinhaTab({ label, v1, v2, v3, ok3 }) {
  return (
    <tr style={{ borderBottom:'1px solid #E5E7EB' }}>
      <td style={{ padding:'10px 8px', fontSize:12, color:'#4a4a4a' }}>{label}</td>
      <td style={{ padding:'10px 8px', textAlign:'center', fontSize:12, color:'#6B7280' }}>{v1}</td>
      <td style={{ padding:'10px 8px', textAlign:'center', fontSize:12, color:'#6B7280' }}>{v2}</td>
      <td style={{ padding:'10px 8px', textAlign:'center', fontSize:13, fontWeight: ok3 ? 800 : 500, color: ok3 ? '#9D174D' : '#1a1a1a', background: ok3 ? '#FEF7FB' : 'transparent' }}>{v3}</td>
    </tr>
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
