'use client';

import React from 'react';
import { ArrowRight, Link2 } from 'lucide-react';

const RED = '#C4170C';
const RED_DARK = '#9A1208';
const INK = '#1a1a1a';
const INK_SOFT = '#333';
const INK_MUTE = '#666';
const LINE = '#e5e5e5';
const PAPER = '#fff';

const LINK_FOOTPRIV = 'https://footpriv.com';
const FOTO_AUTOR = 'https://author-service-images-prod-us-east-1.publishing.aws.arc.pub/ajc/WULWJJ6MLJDLXA6YITE4S67434.png';
const HERO_IMG = '/footpriv-hero.jpg';

const MENU = ['Home', 'Matérias', 'Economia', 'Mulheres', 'Oportunidades'];

export default function Page() {
  const hoje = new Date().toLocaleDateString('pt-BR', { weekday:'long', day:'2-digit', month:'long' });

  return (
    <div style={{ minHeight:'100vh', background:PAPER, color:INK, fontFamily:'Georgia, "Times New Roman", serif' }}>
      
      {/* TOP BAR */}
      <div style={{ background:'#1a1a1a', color:'#fff', padding:'6px 16px', fontSize:11, letterSpacing:'0.05em', textAlign:'center', fontWeight:600, fontFamily:'system-ui, sans-serif' }}>
        DIÁRIO DO INTERIOR · NOTÍCIAS E ECONOMIA DO INTERIOR PAULISTA
      </div>

      {/* HEADER */}
      <header style={{ borderBottom:'3px solid '+RED, background:PAPER, position:'sticky', top:0, zIndex:50, boxShadow:'0 1px 3px rgba(0,0,0,0.04)' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'16px 20px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <div style={{ display:'flex', alignItems:'center', gap:32 }}>
            <a href="/" style={{ textDecoration:'none', color:'inherit' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <div style={{ width:38, height:38, borderRadius:8, background:RED, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:900, fontSize:18, fontFamily:'system-ui, sans-serif' }}>DI</div>
                <div style={{ fontSize:21, fontWeight:900, color:INK, letterSpacing:'-0.02em', lineHeight:1, fontFamily:'Georgia, serif' }}>Diário <span style={{ color:RED }}>do Interior</span></div>
              </div>
            </a>
            <nav style={{ display:'flex', gap:24 }} className="menu-d">
              {MENU.map(m => <a key={m} href="#" style={{ fontSize:13, fontWeight:600, color:INK_SOFT, textDecoration:'none', fontFamily:'system-ui, sans-serif' }}>{m}</a>)}
            </nav>
          </div>
          <div style={{ fontSize:11, color:INK_MUTE, fontWeight:600, fontFamily:'system-ui, sans-serif', textTransform:'capitalize' }}>{hoje}</div>
        </div>
      </header>

      {/* ARTIGO */}
      <article style={{ maxWidth:720, margin:'0 auto', padding:'36px 20px 60px' }}>

        {/* CATEGORIA */}
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20, fontSize:11, fontWeight:800, letterSpacing:'0.08em', textTransform:'uppercase', fontFamily:'system-ui, sans-serif' }}>
          <span style={{ color:RED }}>ECONOMIA</span>
          <span style={{ color:INK_MUTE }}>›</span>
          <span style={{ color:INK_MUTE }}>RENDA ONLINE · MULHERES</span>
        </div>

        {/* HEADLINE */}
        <h1 style={{ fontSize:36, fontWeight:900, color:INK, lineHeight:1.15, letterSpacing:'-0.02em', margin:'0 0 16px', fontFamily:'Georgia, serif' }}>
          Aplicativo que paga por fotos do pé sem precisar mostrar o rosto explode no Brasil com mais de 10 mil cadastros em 1 mês de lançamento
        </h1>

        <p style={{ fontSize:18, color:INK_SOFT, lineHeight:1.55, margin:'0 0 24px', fontStyle:'italic', fontFamily:'Georgia, serif' }}>
          Chamada de FootPriv, a plataforma já operava em outros países há anos e finalmente desembarcou no Brasil em 2026. O modelo: leilão automatizado, pagamento direto em real, anonimato como regra.
        </p>

        {/* CRÉDITOS */}
        <div style={{ borderTop:'1px solid '+LINE, borderBottom:'1px solid '+LINE, padding:'14px 0', marginBottom:30, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:14 }}>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <img src={FOTO_AUTOR} alt="Rosana Sentinella" style={{ width:46, height:46, borderRadius:'50%', objectFit:'cover', border:'2px solid '+LINE }} />
            <div style={{ fontFamily:'system-ui, sans-serif' }}>
              <div style={{ fontSize:13, fontWeight:800, color:INK, lineHeight:1.2 }}>Rosana Sentinella</div>
              <div style={{ fontSize:11, color:INK_MUTE, lineHeight:1.3, marginTop:2 }}>Editora · Diário do Interior</div>
              <div style={{ fontSize:11, color:INK_MUTE, marginTop:1 }}>29 de maio de 2026 · 6 min de leitura</div>
            </div>
          </div>
        </div>

        {/* HERO */}
        <div style={{ borderRadius:6, overflow:'hidden', marginBottom:8 }}>
          <img src={HERO_IMG} alt="FootPriv plataforma de venda de fotos" style={{ width:'100%', display:'block' }} />
        </div>
        <div style={{ fontSize:11, color:INK_MUTE, marginBottom:30, fontStyle:'italic', fontFamily:'system-ui, sans-serif' }}>
          A FootPriv chegou ao Brasil e em pouco tempo virou um dos nomes mais comentados nas redes femininas.
        </div>

        {/* TEXTO CORRIDO - SEM CARDS, SEM BOXES */}
        <div style={{ fontSize:18, color:INK, lineHeight:1.75, fontFamily:'Georgia, serif' }}>
          
          <p style={{ marginBottom:18 }}>
            O aplicativo chama-se <a href={LINK_FOOTPRIV} target="_blank" rel="noopener" style={{ color:RED, textDecoration:'underline', fontWeight:700 }}>FootPriv</a> e, em pouco mais de um mês desde sua chegada ao mercado brasileiro, já registrou cerca de 10 mil cadastros femininos. O número impressiona porque foi alcançado sem campanhas pagas de marketing, sem grandes virais em redes sociais públicas e sem influenciadoras divulgando publicamente. A propagação aconteceu de boca em boca — mais especificamente, em grupos privados de WhatsApp.
          </p>

          <p style={{ marginBottom:18 }}>
            A proposta do aplicativo é simples e, ao mesmo tempo, atípica: permitir que mulheres vendam fotos dos próprios pés para uma base internacional de compradores, em sistema de leilão, sem precisar expor identidade, rosto ou nome verdadeiro. O pagamento é processado em moeda nacional brasileira, com a conversão cambial automática, e cai diretamente na conta bancária da vendedora.
          </p>

          <p style={{ marginBottom:18 }}>
            Embora a categoria de produto — fotos de pés — possa parecer nichada para o público em geral, especialistas em mercado digital apontam que o segmento movimenta cifras expressivas no exterior há mais de uma década. A FootPriv, segundo informações da própria empresa, opera há vários anos em mercados como Estados Unidos, Reino Unido, Alemanha, França, Canadá e Austrália, e decidiu expandir para o Brasil em 2026 atraída pelo potencial do mercado feminino brasileiro.
          </p>

          <p style={{ marginBottom:18 }}>
            O funcionamento do aplicativo segue um padrão diferente do que se vê em outras plataformas de monetização de conteúdo. A creator se cadastra diretamente no site oficial, passa por uma verificação de identidade obrigatória (com leitura facial e validação de documento — sistema similar ao usado por bancos digitais brasileiros) e, em até três minutos, está apta a publicar a primeira foto.
          </p>

          <p style={{ marginBottom:18 }}>
            A partir desse momento, cada foto enviada entra automaticamente em um sistema de leilão privado. Compradores cadastrados em mais de 60 países fazem ofertas em suas moedas locais — dólar, euro, libra, dirham, peso, entre outras — e o próprio sistema converte os valores para o real em tempo real. A creator não é obrigada a aceitar a oferta mais alta: ela pode escolher qual proposta aceitar, pode esperar novos lances chegarem, pode rejeitar todas as ofertas e refazer o leilão. O controle, segundo a empresa, é integral.
          </p>

          <p style={{ marginBottom:18 }}>
            Uma vez aceito o lance, o pagamento é processado e creditado na conta bancária brasileira da vendedora no mesmo dia, em real, sem necessidade de saque internacional, sem câmbio manual e sem qualquer intermediação fora do aplicativo. Não há, segundo a FootPriv, retenção mínima de saldo ou prazo de espera para o saque.
          </p>

          {/* SUBHEAD */}
          <h2 style={{ fontSize:24, fontWeight:900, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.01em', lineHeight:1.25, fontFamily:'Georgia, serif' }}>
            O fator anonimato e a aceitação no público feminino
          </h2>

          <p style={{ marginBottom:18 }}>
            O que mais tem chamado atenção no Brasil, segundo relatos de usuárias e análises de mercado, é a forma como a plataforma trata a questão do anonimato. Em outras plataformas de monetização de conteúdo, a privacidade é tratada como configuração opcional — uma chave que se liga ou desliga, mas que não muda a lógica fundamental de operação, que ainda exige da creator algum grau de exposição pública para atrair compradores.
          </p>

          <p style={{ marginBottom:18 }}>
            Na FootPriv, o anonimato é estrutural. A creator não cria perfil público, não usa nome real, não vincula redes sociais externas e nunca tem sua identidade revelada para os compradores. A operação completa — do cadastro ao recebimento — acontece dentro do próprio aplicativo, sem qualquer ponto de contato com a vida pública da usuária. Marido, família, amigos, colegas de trabalho não têm como descobrir o uso da plataforma a partir de qualquer rastreamento externo.
          </p>

          <p style={{ marginBottom:18 }}>
            Esse desenho técnico responde a uma demanda específica do mercado brasileiro. Em pesquisas de comportamento digital realizadas em 2025 e 2026, mulheres brasileiras de classes B e C apontaram repetidamente a "exposição pública" como o principal obstáculo para tentar geração de renda online. A FootPriv parece ter sido um dos primeiros aplicativos a abordar essa dor de forma estrutural — não como funcionalidade adicional, mas como base do produto.
          </p>

          <h2 style={{ fontSize:24, fontWeight:900, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.01em', lineHeight:1.25, fontFamily:'Georgia, serif' }}>
            Modelo de assinatura e taxas
          </h2>

          <p style={{ marginBottom:18 }}>
            Para acessar as funcionalidades completas do aplicativo — sistema de leilão, painel de ofertas e base internacional de compradores — a usuária paga uma assinatura mensal. O valor, segundo a empresa, foi calibrado para o poder de compra do mercado brasileiro e é significativamente menor do que mensalidades de softwares profissionais ou de outras plataformas internacionais semelhantes.
          </p>

          <p style={{ marginBottom:18 }}>
            Relatos de usuárias ativas indicam que a assinatura tende a se pagar nas primeiras vendas, frequentemente já na primeira semana de uso. Não há, segundo a FootPriv, taxa adicional de cadastro, retenção sobre saques ou cobranças escondidas. A única dedução aplicada após cada venda é uma taxa padrão de processamento sobre o valor leiloado.
          </p>

          <h2 style={{ fontSize:24, fontWeight:900, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.01em', lineHeight:1.25, fontFamily:'Georgia, serif' }}>
            Verificação e maioridade
          </h2>

          <p style={{ marginBottom:18 }}>
            O aplicativo opera com verificação de identidade obrigatória e atende exclusivamente maiores de 18 anos. Segundo informações oficiais da plataforma, o escopo é estritamente restrito a fotos de pés, sendo qualquer outra natureza de conteúdo automaticamente removida pelo sistema. As transações, asseguram os responsáveis, são reguladas e legalmente válidas tanto no Brasil quanto nos países onde os compradores estão cadastrados.
          </p>

          <p style={{ marginBottom:18 }}>
            A FootPriv não divulga publicamente números de faturamento ou comissão sobre transações, mas confirmou que mantém escritório de operações no Brasil para atendimento e suporte às usuárias brasileiras, em horário comercial e em português. Há também documentação completa, em português, sobre termos de uso, política de privacidade e procedimentos de saque.
          </p>

          <h2 style={{ fontSize:24, fontWeight:900, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.01em', lineHeight:1.25, fontFamily:'Georgia, serif' }}>
            Por que a propagação está sendo rápida
          </h2>

          <p style={{ marginBottom:18 }}>
            Analistas de mercado digital apontam três fatores que ajudam a explicar a velocidade de adesão da FootPriv no Brasil. O primeiro é técnico: o sistema de leilão automatizado, com conversão cambial em tempo real, é tecnicamente sofisticado e raramente visto em plataformas de creators. A maioria opera com preços fixos ou modelos de assinatura mensal, considerados mais simples e menos atrativos do ponto de vista da vendedora.
          </p>

          <p style={{ marginBottom:18 }}>
            O segundo fator é de produto. A decisão de tratar o anonimato como requisito — e não como configuração ajustável — resolve uma fricção cultural específica do mercado brasileiro, fricção que nenhum concorrente havia endereçado de forma estrutural até então.
          </p>

          <p style={{ marginBottom:18 }}>
            O terceiro fator é de timing. A plataforma chegou ao Brasil em um momento de alta histórica na busca por geração de renda digital, com mulheres liderando essa busca, mas resistindo aos modelos baseados em exposição pública das plataformas tradicionais. Especialistas chamam esse alinhamento entre produto e mercado de "product-market fit" — quando o que a tecnologia entrega coincide com o que o mercado precisa, gerando crescimento rápido com baixo custo de aquisição.
          </p>

          <p style={{ marginBottom:30 }}>
            Para conhecer detalhes oficiais sobre o cadastro, taxas vigentes e termos de uso, o site da plataforma pode ser acessado diretamente em <a href={LINK_FOOTPRIV} target="_blank" rel="noopener" style={{ color:RED, textDecoration:'underline', fontWeight:700 }}>footpriv.com</a>.
          </p>

          {/* AVISO */}
          <div style={{ borderTop:'1px solid '+LINE, paddingTop:18, fontSize:12, color:INK_MUTE, lineHeight:1.7, fontStyle:'italic', marginTop:30, fontFamily:'system-ui, sans-serif' }}>
            <strong>Aviso editorial:</strong> Reportagem produzida com fontes públicas e relatos de usuárias. Plataforma exclusiva para maiores de 18 anos. Resultados financeiros variam conforme dedicação, demanda e condições do leilão. Verifique sempre os termos atualizados no site oficial.
          </div>

        </div>

        {/* FOOTER */}
        <div style={{ marginTop:40, paddingTop:24, borderTop:'1px solid '+LINE, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16, fontSize:12, color:INK_MUTE, fontFamily:'system-ui, sans-serif' }}>
          <div>© 2026 Diário do Interior · Notícias e Economia do Interior Paulista</div>
        </div>

      </article>

      <style>{`
        @media (max-width: 768px) {
          .menu-d { display: none !important; }
          h1 { font-size: 28px !important; }
          h2 { font-size: 20px !important; }
        }
      `}</style>
    </div>
  );
}
