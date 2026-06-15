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

const MENU = ['Home','Matérias','Economia','Cidades','Oportunidades'];

const LINK_CADASTRO = 'https://cadastro-coletaki.vercel.app';

export default function Page() {
  const ir = () => window.open(LINK_CADASTRO, '_blank');
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
            <a href="/" style={{ textDecoration:'none', color:'inherit' }}>
              <div style={{ fontSize:22, fontWeight:900, color:INK, letterSpacing:'-0.03em' }}>
                Diário do Interior<span style={{ color:RED }}>.</span>
              </div>
            </a>
            <nav style={{ display:'flex', gap:22 }} className="menu-desk">
              {MENU.map(m => <a key={m} href="#" style={{ fontSize:13, fontWeight:600, color:INK_SOFT, textDecoration:'none' }}>{m}</a>)}
            </nav>
          </div>
          <div style={{ fontSize:11, color:INK_MUTE, fontWeight:600, textTransform:'capitalize' }}>{hoje}</div>
        </div>
      </header>

      <article style={{ maxWidth:760, margin:'0 auto', padding:'36px 20px 60px' }}>

        <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:18, fontSize:11, fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase' }}>
          <span style={{ color:RED_DARK }}>ECONOMIA</span>
          <span style={{ color:INK_MUTE }}>›</span>
          <span style={{ color:INK_MUTE }}>OPORTUNIDADE · RENDA EXTRA</span>
        </div>

        <h1 style={{ fontSize:36, fontWeight:900, color:INK, lineHeight:1.15, letterSpacing:'-0.025em', margin:'0 0 16px' }}>
          De R$ 3 a R$ 6 mil por mês trabalhando em casa, com CPF e sem chefe: como milhares de brasileiros estão usando um cantinho de casa pra gerar renda
        </h1>

        <p style={{ fontSize:18, color:INK_SOFT, lineHeight:1.55, margin:'0 0 24px', fontWeight:500 }}>
          Operação descentralizada de logística para grandes marketplaces vem se espalhando pelo Brasil. Quem tem um espaço pequeno em casa pode se cadastrar pelo CPF, sem CNPJ, sem investimento inicial, sem experiência prévia.
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
        </div>

        <div style={{ borderRadius:6, overflow:'hidden', marginBottom:8 }}>
          <img src={IMAGEM_HERO} alt="Pessoa organizando pacotes em casa" style={{ width:'100%', display:'block' }} />
        </div>
        <div style={{ fontSize:11, color:INK_MUTE, marginBottom:28, fontStyle:'italic' }}>
          Operação em casa: pequenos espaços viraram pontos oficiais de coleta para grandes marketplaces no Brasil.
        </div>

        <div style={{ fontSize:17, color:INK, lineHeight:1.75 }}>

          <p style={{ marginBottom:18 }}>
            Marcos acorda às 7h, toma café, e por volta das 8h já está com o portão da garagem entreaberto recebendo o primeiro entregador. Sandra, na sala dos fundos do imóvel onde mora com a família, separa os pacotes que chegaram no dia anterior em três pequenos baldes plásticos rotulados: "Mercado Livre", "Shopee" e "Amazon". Em outra cidade, na zona norte, Patrícia organiza envelopes pardos sobre uma mesa improvisada no quartinho que antes guardava o material de limpeza.
          </p>

          <p style={{ marginBottom:18 }}>
            São três pessoas diferentes, em três regiões do país, que nunca se viram. Mas todas fazem parte de uma mesma rede silenciosa que vem crescendo em ritmo acelerado no Brasil: a de pontos residenciais de coleta para os maiores marketplaces do mercado de e-commerce nacional.
          </p>

          <p style={{ marginBottom:18 }}>
            A operação não é nova — já existe formalmente desde 2022 — mas, segundo dados de mercado, vem ganhando tração consistente nos últimos meses. O modelo é simples e atende a uma dor real das plataformas: quanto mais espalhada a malha de pontos de coleta, mais barato e rápido o sistema entrega pacotes pequenos no Brasil.
          </p>

          <p style={{ marginBottom:18 }}>
            Para a pessoa física que abre o ponto, o desenho também é direto. Não exige CNPJ. Não exige investimento financeiro inicial. Não exige experiência prévia com logística, com tecnologia ou com vendas. O que se pede é apenas um espaço fechado e seguro em casa, uma rotina mínima de horários disponíveis para receber entregadores e a abertura de cadastro pelo CPF.
          </p>

          <h2 style={{ fontSize:24, fontWeight:900, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.015em', lineHeight:1.25 }}>
            Como o sistema funciona, na prática
          </h2>

          <p style={{ marginBottom:18 }}>
            O ponto de coleta opera dentro de uma operação maior, gerida pela Coletaki — empresa intermediária que faz a ponte entre os marketplaces e as casas dos cadastrados em todo o país. Funciona assim: ao longo do dia, motoboys e entregadores parceiros dos grandes marketplaces deixam pacotes destinados a moradores próximos. O ponto residencial recebe esses pacotes, confere a integridade da embalagem, registra a entrega no app e armazena tudo até que o destinatário final retire.
          </p>

          <p style={{ marginBottom:18 }}>
            Cada pacote recebido e devidamente registrado gera uma comissão fixa para o operador do ponto. O modelo é por unidade — não por hora, não por mês. Quanto mais pacotes o ponto consegue receber e despachar, maior a receita.
          </p>

          <p style={{ marginBottom:18 }}>
            Pontos ativos em capitais e cidades médias brasileiras vêm apresentando, segundo dados divulgados pela própria Coletaki em comunicação com cadastrados, uma média mensal entre R$ 3 mil e R$ 6 mil por ponto operacional. O número varia conforme a localização da residência (regiões mais densas tendem a receber mais pacotes), a disponibilidade de horário do operador e a regularidade no atendimento.
          </p>

          <div style={{ background:RED_LIGHT, border:'1px solid '+LINE, borderLeft:'4px solid '+RED, padding:'18px 22px', margin:'24px 0', borderRadius:'0 6px 6px 0' }}>
            <div style={{ fontSize:11, color:RED_DARK, fontWeight:800, letterSpacing:'0.05em', textTransform:'uppercase', marginBottom:8 }}>Em números</div>
            <div style={{ fontSize:15, color:INK, lineHeight:1.6 }}>
              Mais de <strong>800 pontos</strong> ativos já operam em capitais brasileiras. A faixa média de rendimento mensal está entre <strong>R$ 3 mil e R$ 6 mil por operador</strong>. O cadastro é feito 100% pelo CPF, sem necessidade de CNPJ.
            </div>
          </div>

          <h2 style={{ fontSize:24, fontWeight:900, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.015em', lineHeight:1.25 }}>
            Quem pode se cadastrar
          </h2>

          <p style={{ marginBottom:18 }}>
            O cadastro está aberto para qualquer pessoa física maior de 18 anos, com CPF regular e que tenha em casa um espaço fechado disponível para receber e guardar pacotes pequenos. Não precisa ser uma sala dedicada — pode ser um quartinho, uma garagem coberta, uma área de serviço, um cantinho próximo à porta principal. O importante é que seja um local seguro, fechado a chave, onde nem moradores nem visitantes acessem livremente os pacotes armazenados.
          </p>

          <p style={{ marginBottom:18 }}>
            Não é necessário ter conhecimento técnico em logística, em e-commerce ou em uso de aplicativos. A Coletaki oferece treinamento gratuito ao cadastrado — em geral, com cerca de quatro horas de duração — explicando passo a passo o funcionamento técnico e operacional do ponto. Após o treinamento, o operador opera com autonomia, sempre com suporte da equipe central caso surjam dúvidas.
          </p>

          <p style={{ marginBottom:18 }}>
            Para quem vive da própria casa, é mãe ou pai em tempo integral, está aposentado, é cuidador familiar ou simplesmente busca uma renda complementar sem se deslocar todos os dias, o modelo costuma se encaixar com facilidade. O esforço diário é compatível com a rotina doméstica: recebimento de pacotes em janelas pré-definidas de horário, registro no app, organização e entrega aos destinatários no momento em que vêm retirar.
          </p>

          <div style={{ borderRadius:6, overflow:'hidden', margin:'30px 0 8px' }}>
            <img src={IMG_2} alt="Pacotes organizados em espaço residencial" style={{ width:'100%', display:'block' }} />
          </div>
          <div style={{ fontSize:11, color:INK_MUTE, marginBottom:30, fontStyle:'italic' }}>
            O modelo exige um espaço fechado em casa para armazenar os pacotes recebidos com segurança.
          </div>

          <h2 style={{ fontSize:24, fontWeight:900, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.015em', lineHeight:1.25 }}>
            Parece simples — e é. Mas tem regras
          </h2>

          <p style={{ marginBottom:18 }}>
            A operação tem três regras claras que o cadastrado precisa respeitar. A primeira é a do espaço fechado: pacotes nunca podem ficar expostos em área aberta da residência. Tem que ser um local trancado, separado, de acesso restrito ao operador.
          </p>

          <p style={{ marginBottom:18 }}>
            A segunda regra é a da integridade. O operador é responsável pela conservação dos pacotes recebidos. Caixas amassadas, envelopes rasgados ou conteúdo extraviado podem comprometer a operação do ponto e gerar advertências ou cancelamento do cadastro. Por isso, recebimento, registro e armazenamento têm que ser feitos com atenção.
          </p>

          <p style={{ marginBottom:18 }}>
            A terceira regra é a dos horários. Cada ponto define no momento do cadastro quais dias da semana e em quais janelas de horário estará disponível para receber pacotes e atender retiradas. Esses horários precisam ser cumpridos. Não é necessário trabalhar todo dia — quem prefere operar apenas de segunda a sexta, das 14h às 18h, por exemplo, pode escolher esse formato. Mas, uma vez definido, é o compromisso.
          </p>

          <h2 style={{ fontSize:24, fontWeight:900, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.015em', lineHeight:1.25 }}>
            Quanto custa para começar
          </h2>

          <p style={{ marginBottom:18 }}>
            Zero. O modelo da Coletaki não cobra taxa de adesão, mensalidade ou qualquer outra forma de pagamento ao cadastrado. O custo da empresa fica por conta do percentual da comissão sobre cada pacote — modelo de negócio chamado de "cobrança por sucesso", em que a Coletaki só ganha quando o operador também ganha.
          </p>

          <p style={{ marginBottom:18 }}>
            Não há contrato exclusivo, multa por desistência ou cláusula de fidelidade. O cadastrado pode encerrar o ponto a qualquer momento, sem qualquer ônus, bastando avisar a central com antecedência razoável.
          </p>

          <h2 style={{ fontSize:24, fontWeight:900, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.015em', lineHeight:1.25 }}>
            Como fazer o cadastro
          </h2>

          <p style={{ marginBottom:18 }}>
            O processo de inscrição é totalmente digital e leva, em média, três minutos. O interessado acessa o site oficial da Coletaki, informa o CEP da residência para verificação de cobertura do programa, preenche dados básicos como nome, CPF, endereço completo, telefone para contato e detalhes do espaço disponível em casa (tamanho aproximado, tipo de cômodo, horários previstos de operação).
          </p>

          <p style={{ marginBottom:18 }}>
            Concluída essa etapa, o cadastro é encaminhado para análise interna. Se aprovado, o candidato é contatado por um consultor da Coletaki — por telefone ou videochamada — para alinhar detalhes finais e agendar o treinamento operacional. O treinamento, conforme já citado, dura cerca de quatro horas no total e cobre todo o passo a passo técnico e prático do dia a dia do ponto.
          </p>

          <p style={{ marginBottom:18 }}>
            Após o treinamento, o ponto entra em operação. Os primeiros pacotes começam a chegar em geral nos primeiros sete a quinze dias após a ativação, com volume crescente nas semanas seguintes conforme a base de marketplaces conecta o ponto ao sistema de distribuição local.
          </p>

          <div style={{ background:'#FFFBEA', border:'1px solid #FDE68A', borderLeft:'4px solid '+YELLOW, padding:'20px 22px', margin:'32px 0', borderRadius:'0 6px 6px 0' }}>
            <div style={{ fontSize:14, color:INK, lineHeight:1.6, marginBottom:14 }}>
              <strong>Para fazer o cadastro como ponto de coleta Coletaki:</strong>
            </div>
            <button onClick={ir} style={{ background:RED, color:'#fff', border:'none', padding:'12px 22px', borderRadius:6, fontSize:14, fontWeight:800, cursor:'pointer', display:'inline-flex', alignItems:'center', gap:8, fontFamily:'inherit' }}>
              Iniciar cadastro pela Coletaki <ArrowRight size={15} />
            </button>
          </div>

          <h2 style={{ fontSize:24, fontWeight:900, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.015em', lineHeight:1.25 }}>
            Por que essa oportunidade está crescendo
          </h2>

          <p style={{ marginBottom:18 }}>
            Analistas do setor de logística apontam que o crescimento dessa modalidade no Brasil é reflexo direto de dois fatores: o aumento exponencial do volume de pequenos pacotes oriundos do e-commerce nacional e internacional (com forte presença de plataformas asiáticas que vendem itens de baixo valor unitário) e a saturação dos modelos centralizados de logística, que não conseguem escalar com a velocidade que o mercado demanda.
          </p>

          <p style={{ marginBottom:18 }}>
            A solução, segundo especialistas, passa pela capilaridade — ou seja, ter pontos pequenos e próximos do destinatário final em vez de centros de distribuição grandes e distantes. A Coletaki é uma das empresas brasileiras que está apostando nessa abordagem, e o reflexo aparece no crescimento mensal de pontos ativos.
          </p>

          <p style={{ marginBottom:18 }}>
            Para o cadastrado pessoa física, o efeito prático desse momento de mercado é simples: o volume de pacotes destinados aos pontos vem crescendo ao longo de 2025 e 2026, o que tende a elevar a receita média dos operadores ativos.
          </p>

          <div style={{ borderRadius:6, overflow:'hidden', margin:'30px 0 8px' }}>
            <img src={IMG_3} alt="Entregador deixando pacotes em ponto residencial" style={{ width:'100%', display:'block' }} />
          </div>
          <div style={{ fontSize:11, color:INK_MUTE, marginBottom:30, fontStyle:'italic' }}>
            Capilaridade da malha logística é o que vem permitindo a expansão da operação pelo país.
          </div>

          <h2 style={{ fontSize:24, fontWeight:900, color:INK, marginTop:36, marginBottom:14, letterSpacing:'-0.015em', lineHeight:1.25 }}>
            O que considerar antes de se cadastrar
          </h2>

          <p style={{ marginBottom:18 }}>
            Antes da inscrição, é importante avaliar três pontos. Primeiro, se o espaço disponível em casa atende aos requisitos básicos: ambiente fechado, com chave, separado da circulação cotidiana da família. Segundo, se há disponibilidade real de horário para atender o fluxo de entregadores e destinatários — não precisa ser o dia todo, mas precisa ser uma janela definida e cumprida. Terceiro, se a região onde mora tem cobertura do programa, o que é verificado automaticamente pelo CEP no início do cadastro.
          </p>

          <p style={{ marginBottom:18 }}>
            Quem reúne esses três pontos costuma se cadastrar e operar com tranquilidade. Quem não tem o espaço adequado, ou quem busca uma renda extra sem qualquer compromisso de horário, talvez encontre dificuldades — e nesses casos o ideal é avaliar com cuidado antes de iniciar.
          </p>

          <p style={{ marginBottom:30 }}>
            Para mais informações sobre o programa, condições de operação e disponibilidade na sua região, o cadastro inicial pode ser feito diretamente pelo site da Coletaki.
          </p>

          <div style={{ borderTop:'1px solid '+LINE, paddingTop:18, fontSize:12, color:INK_MUTE, lineHeight:1.7, fontStyle:'italic', marginTop:30 }}>
            <strong>Aviso editorial:</strong> Reportagem produzida com fontes públicas e comunicação direta com a empresa Coletaki. Resultados financeiros variam conforme localização, dedicação e demanda regional. Verifique sempre os termos atualizados no site oficial antes de qualquer cadastro.
          </div>

        </div>

        <div style={{ marginTop:40, paddingTop:24, borderTop:'1px solid '+LINE, fontSize:12, color:INK_MUTE, fontFamily:'system-ui, sans-serif' }}>
          © 2026 Diário do Interior · Notícias e Economia do Interior Paulista
        </div>

      </article>

      <style>{`
        @media (max-width:640px){.menu-desk{display:none !important}}
      `}</style>
    </div>
  );
}
