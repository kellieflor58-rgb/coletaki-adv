'use client';

import React from 'react';
import { ArrowRight, Check, Shield, Clock } from 'lucide-react';

const RED = '#C4170C';
const RED_DARK = '#9A1208';
const RED_LIGHT = '#FEF2F2';
const INK = '#1a1a1a';
const INK_SOFT = '#4a4a4a';
const INK_MUTE = '#6B7280';
const LINE = '#E5E7EB';
const YELLOW = '#FFC700';
const GREEN = '#16a34a';
const GREEN_SOFT = '#dcfce7';

const IMAGEM_HERO = 'https://i.pinimg.com/736x/d5/c1/b5/d5c1b510c3c53e23a0ba06a44235ce93.jpg';
const FOTO_AUTOR = 'https://media.licdn.com/dms/image/v2/D4D03AQEcZc_WGkcu7g/profile-displayphoto-scale_400_400/B4DZkRAeUnGkAg-/0/1756926962727?e=2147483647&v=beta&t=wuS4qcfeklxK1C8kXVF8qubvgpHUzu9rLo-BFViGai0';

const MENU = ['Home','Matérias','Economia','Cidades','Oportunidades'];

export default function Page() {
  const ir = () => window.open('https://coletaki.com', '_blank');
  const data = new Date().toLocaleDateString('pt-BR', { day:'2-digit', month:'long', year:'numeric' });

  return (
    <div style={{ background:'#fff', minHeight:'100vh', fontFamily:'Georgia, "Times New Roman", serif', color:INK }}>
      
      {/* TOP BAR */}
      <div style={{ background:RED, color:'#fff', padding:'8px 0', fontSize:11, textAlign:'center', letterSpacing:'0.05em', fontFamily:'Inter, sans-serif' }}>
        DIÁRIO DO INTERIOR · NOTÍCIAS DA REGIÃO · {data.toUpperCase()}
      </div>

      {/* HEADER */}
      <div style={{ borderBottom:'1px solid '+LINE, background:'#fff', padding:'18px 0' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 20px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div>
            <div style={{ fontSize:28, fontWeight:900, color:RED, letterSpacing:'-0.02em', lineHeight:1 }}>DIÁRIO DO INTERIOR</div>
            <div style={{ fontSize:10, color:INK_MUTE, marginTop:4, fontFamily:'Inter, sans-serif', letterSpacing:'0.1em' }}>JORNALISMO DE VERDADE · DESDE 1987</div>
          </div>
          <div style={{ display:'flex', gap:18, fontSize:13, fontFamily:'Inter, sans-serif', fontWeight:500 }}>
            {MENU.map((m,i)=>(<a key={i} style={{ color:i===4?RED:INK_SOFT, textDecoration:'none', cursor:'pointer' }}>{m}</a>))}
          </div>
        </div>
      </div>

      {/* CATEGORIA */}
      <div style={{ maxWidth:760, margin:'30px auto 0', padding:'0 20px', fontFamily:'Inter, sans-serif' }}>
        <div style={{ display:'flex', gap:10, alignItems:'center', marginBottom:18, fontSize:11, letterSpacing:'0.08em', fontWeight:700 }}>
          <span style={{ background:RED, color:'#fff', padding:'4px 12px', borderRadius:3 }}>OPORTUNIDADES</span>
          <span style={{ color:INK_MUTE }}>· RENDA EXTRA · 8 min de leitura</span>
        </div>
      </div>

      {/* HEADLINE */}
      <div style={{ maxWidth:760, margin:'0 auto', padding:'0 20px' }}>
        <h1 style={{ fontSize:46, fontWeight:900, lineHeight:1.1, letterSpacing:'-0.02em', margin:'0 0 18px' }}>
          R$ 3 a R$ 6 mil por mês sem sair de casa e sem chefe?
          <br/>
          <span style={{ color:RED }}>Coletaki chegou no Brasil em 2026 mudando vidas.</span>
        </h1>
        <p style={{ fontSize:18, color:INK_SOFT, lineHeight:1.55, margin:'0 0 24px', fontStyle:'italic' }}>
          Nova rede de pontos de coleta de marketplaces está transformando garagens, áreas de serviço e cômodos vazios em fonte de renda recorrente — sem CNPJ, sem vendedor, e sem precisar sair pra entregar nada.
        </p>

        {/* AUTOR */}
        <div style={{ display:'flex', alignItems:'center', gap:12, paddingBottom:20, borderBottom:'1px solid '+LINE, marginBottom:24, fontFamily:'Inter, sans-serif' }}>
          <img src={FOTO_AUTOR} alt="Mariana Soares" style={{ width:44, height:44, borderRadius:'50%', objectFit:'cover' }} />
          <div>
            <div style={{ fontSize:14, fontWeight:700, color:INK }}>Mariana Soares</div>
            <div style={{ fontSize:12, color:INK_MUTE }}>Editoria de Oportunidades · Publicado em {data}</div>
          </div>
        </div>

        {/* IMAGEM HERO */}
        <div style={{ marginBottom:30 }}>
          <img src={IMAGEM_HERO} alt="Ponto de coleta Coletaki" style={{ width:'100%', borderRadius:6, display:'block' }} />
          <p style={{ fontSize:12, color:INK_MUTE, marginTop:8, fontStyle:'italic', fontFamily:'Inter, sans-serif' }}>
            Cresce o número de brasileiros que transformaram um cômodo da casa em ponto de coleta — gerando renda variável que pode passar dos R$ 5 mil mensais.
          </p>
        </div>

        {/* CORPO MATERIA */}
        <div style={{ fontSize:18, lineHeight:1.75, color:INK_SOFT }}>
          
          <p style={{ marginBottom:20 }}>
            <strong style={{ color:INK }}>Em fevereiro de 2026, uma operação silenciosa começou a se espalhar pelo Brasil.</strong> Sem propaganda na TV, sem outdoors caros, sem campanha em redes sociais. Apenas o boca a boca de pessoas comuns que descobriram uma forma diferente de ganhar dinheiro: virar ponto de coleta da <strong>Coletaki</strong>, uma nova rede que conecta marketplaces como Shopee, Mercado Livre e Pegaki a moradores que cedem um espaço da casa para armazenar pacotes.
          </p>

          <p style={{ marginBottom:20 }}>
            O modelo é simples e — para muita gente — quase bom demais pra ser verdade: você cadastra sua residência, recebe os pacotes que chegam pelo veículo parceiro, armazena por algumas horas (ou até um dia), e devolve para o entregador que passa para distribuir aos clientes finais. Em alguns casos, é o próprio destinatário que vai até seu endereço retirar.
          </p>

          <p style={{ marginBottom:30 }}>
            <strong style={{ color:INK }}>O detalhe que faz a diferença</strong>: você não sai de casa pra entregar. Não atende cliente em loja. Não emite nota. Não precisa de CNPJ. Recebe por pacote armazenado — e a remuneração mensal varia entre R$ 1.200 (regiões menores) e mais de R$ 7.000 (centros urbanos com alta demanda).
          </p>

          {/* BOX DESTAQUE */}
          <div style={{ background:RED_LIGHT, borderLeft:'4px solid '+RED, padding:'22px 24px', margin:'30px 0', borderRadius:'0 6px 6px 0' }}>
            <div style={{ fontSize:11, fontWeight:800, color:RED, letterSpacing:'0.08em', marginBottom:8, fontFamily:'Inter, sans-serif' }}>
              EM POUCAS PALAVRAS
            </div>
            <div style={{ fontSize:20, fontWeight:700, color:INK, lineHeight:1.4, fontFamily:'Georgia, serif' }}>
              "Você empresta um espaço da sua casa, recebe os pacotes, e ganha por cada um armazenado. Sem entregar, sem vender, sem CNPJ."
            </div>
          </div>

          {/* COMO FUNCIONA */}
          <h2 style={{ fontSize:28, fontWeight:900, color:INK, margin:'40px 0 20px', letterSpacing:'-0.01em', lineHeight:1.2 }}>
            Como funciona na prática
          </h2>

          <p style={{ marginBottom:20 }}>
            A Coletaki opera com um modelo descentralizado de logística urbana. Em vez de manter armazéns gigantes e funcionários CLT, a empresa monta uma rede de pontos espalhados pelos bairros das cidades — geralmente em residências comuns, garagens ou pequenos comércios.
          </p>

          <p style={{ marginBottom:20 }}>
            Cada ponto recebe os pacotes da sua microrregião em uma janela única: das <strong>08h às 14h</strong>, de segunda a sábado. Esse é o compromisso obrigatório do ponto — alguém precisa estar disponível no local nesse horário (pode ser o titular, cônjuge, familiar ou pessoa de confiança previamente cadastrada).
          </p>

          <p style={{ marginBottom:30 }}>
            Durante esse período, o veículo parceiro passa duas a três vezes para deixar pacotes novos e recolher os que já têm rota de saída. Os clientes que escolheram a modalidade "pickup" também aparecem no endereço para retirar seus produtos diretamente — pagando antes pelo marketplace, sem dinheiro envolvido no ponto.
          </p>

          {/* BOX STATS */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:14, margin:'30px 0' }}>
            {[
              { v:'R$ 1.200', t:'a R$ 2.000', d:'Regiões com baixa demanda' },
              { v:'R$ 2.000', t:'a R$ 4.000', d:'Bairros com fluxo médio' },
              { v:'R$ 4.000+', t:'a R$ 7.000+', d:'Centros e regiões quentes' },
            ].map((s,i)=>(
              <div key={i} style={{ background:'#FAFAFA', border:'1px solid '+LINE, borderRadius:6, padding:'18px 14px', textAlign:'center', fontFamily:'Inter, sans-serif' }}>
                <div style={{ fontSize:22, fontWeight:900, color:RED, letterSpacing:'-0.02em' }}>{s.v}</div>
                <div style={{ fontSize:13, color:INK_SOFT, fontWeight:700, marginBottom:6 }}>{s.t}</div>
                <div style={{ fontSize:11, color:INK_MUTE, lineHeight:1.4 }}>{s.d}</div>
              </div>
            ))}
          </div>

          {/* HISTÓRIA */}
          <h2 style={{ fontSize:28, fontWeight:900, color:INK, margin:'40px 0 20px', letterSpacing:'-0.01em', lineHeight:1.2 }}>
            "Não imaginei que daria certo tão rápido"
          </h2>

          <p style={{ marginBottom:20 }}>
            Edileuza Ramos, 47 anos, mãe de três filhos, foi uma das primeiras a se cadastrar quando a Coletaki abriu a operação no interior. Moradora de um bairro residencial, ela vinha tentando vender bolos pela vizinhança sem muito sucesso quando uma amiga mandou o link da empresa.
          </p>

          <p style={{ marginBottom:20 }}>
            "Eu desconfiei. Achei que era pirâmide, que ia ter que pagar alguma taxa absurda, comprar produto pra revender, alguma coisa assim. Mas era exatamente o que a página dizia: cadastro online, videochamada de meia hora com um consultor pra validar minha garagem, e em duas semanas eu já estava operando."
          </p>

          <p style={{ marginBottom:20 }}>
            No primeiro mês completo, ela faturou <strong>R$ 2.430</strong>. No segundo, com a movimentação aumentando, passou de <strong>R$ 3.800</strong>. Em datas como Black Friday e Natal, a remuneração saltou para mais de <strong>R$ 5.000</strong> em um único mês.
          </p>

          <p style={{ marginBottom:30 }}>
            "O melhor é que eu não preciso sair de casa. Meu marido trabalha fora, mas eu fico aqui das 8 às 14 normalmente. Já estava em casa mesmo. Agora isso virou dinheiro entrando todo mês."
          </p>

          {/* QUEM PODE */}
          <h2 style={{ fontSize:28, fontWeight:900, color:INK, margin:'40px 0 20px', letterSpacing:'-0.01em', lineHeight:1.2 }}>
            Quem pode virar ponto de coleta
          </h2>

          <p style={{ marginBottom:20 }}>
            O perfil mais comum é de mulheres entre 35 e 60 anos, donas de casa ou em busca de complemento de renda, que moram em residências térreas ou apartamentos com área de serviço. Mas o cadastro é aberto a qualquer pessoa que atenda três requisitos básicos:
          </p>

          <ul style={{ marginBottom:30, paddingLeft:24, lineHeight:1.9 }}>
            <li><strong>Espaço mínimo</strong> de 1m² em local seco e coberto (garagem, área de serviço, depósito);</li>
            <li><strong>Alguém disponível</strong> das 08h às 14h de segunda a sábado para receber pacotes;</li>
            <li><strong>Acessibilidade</strong> ao endereço para que o veículo parceiro consiga estacionar e descarregar.</li>
          </ul>

          <p style={{ marginBottom:30 }}>
            Não há restrição por idade, gênero ou histórico profissional. Pessoas aposentadas, desempregadas, autônomas e até quem já tem outra renda principal podem operar como ponto de coleta — o modelo é compatível com outras atividades.
          </p>

          {/* COMO COMEÇAR */}
          <h2 style={{ fontSize:28, fontWeight:900, color:INK, margin:'40px 0 20px', letterSpacing:'-0.01em', lineHeight:1.2 }}>
            Como começar
          </h2>

          <p style={{ marginBottom:20 }}>
            O processo é integralmente online e leva até 14 dias entre o cadastro inicial e o início da operação. Não existem taxas escondidas. O único custo do processo é a <strong>videochamada de validação com um consultor</strong>, no valor único de <strong>R$ 65,00</strong> — pagos via PIX no ato do agendamento.
          </p>

          <p style={{ marginBottom:20 }}>
            Esse valor cobre o tempo do consultor, a análise técnica do local pela câmera e a orientação personalizada. Se o local precisar de ajustes (reorganização, separação de espaço, melhoria de acesso), o ponto tem direito a até <strong>3 novas videochamadas SEM custo adicional</strong> em até 60 dias para mostrar as adaptações.
          </p>

          <p style={{ marginBottom:30 }}>
            A inscrição é feita diretamente no site oficial da empresa, onde também é possível verificar se a sua região já está aberta para novos pontos de coleta — algumas cidades têm fila de espera.
          </p>

          {/* CTA */}
          <div style={{ background:'linear-gradient(135deg, #EE4D2D 0%, #D63A1B 100%)', borderRadius:10, padding:'30px 24px', textAlign:'center', margin:'40px 0', color:'#fff', fontFamily:'Inter, sans-serif' }}>
            <div style={{ fontSize:11, fontWeight:800, letterSpacing:'0.1em', opacity:0.9, marginBottom:8 }}>
              VERIFIQUE A DISPONIBILIDADE NA SUA REGIÃO
            </div>
            <div style={{ fontSize:24, fontWeight:900, marginBottom:8, letterSpacing:'-0.01em' }}>
              Acesse coletaki.com
            </div>
            <div style={{ fontSize:14, opacity:0.95, marginBottom:20 }}>
              Informe seu CEP e descubra em segundos se sua cidade tem demanda ativa.
            </div>
            <button onClick={ir} style={{ background:'#fff', color:'#D63A1B', border:'none', padding:'14px 30px', borderRadius:6, fontSize:15, fontWeight:800, cursor:'pointer', display:'inline-flex', alignItems:'center', gap:8 }}>
              Verificar minha região <ArrowRight size={18} />
            </button>
            <div style={{ fontSize:11, opacity:0.85, marginTop:14 }}>
              ✓ Cadastro 100% online &nbsp;·&nbsp; ✓ Sem CNPJ &nbsp;·&nbsp; ✓ Contrato direto com a Coletaki
            </div>
          </div>

          {/* CONCLUSÃO */}
          <h2 style={{ fontSize:28, fontWeight:900, color:INK, margin:'40px 0 20px', letterSpacing:'-0.01em', lineHeight:1.2 }}>
            Por que esse modelo funciona
          </h2>

          <p style={{ marginBottom:20 }}>
            O crescimento dos marketplaces no Brasil — Shopee, Mercado Livre, Pegaki, e em breve Magalu — gerou um gargalo logístico no chamado "last mile" (última milha). Os armazéns centrais ficam longe das casas dos compradores, e os entregadores perdem horas em rotas longas com poucos pacotes por viagem.
          </p>

          <p style={{ marginBottom:20 }}>
            A solução da Coletaki é descentralizar: ao invés de um único depósito atendendo uma cidade inteira, dezenas de pontos pequenos atendem cada bairro. O entregador faz rotas curtas, com muitos pacotes, em pouco tempo. O marketplace economiza em frete. O cliente recebe mais rápido. E o morador que cedeu o espaço da casa fatura por isso.
          </p>

          <p style={{ marginBottom:20 }}>
            É um modelo que beneficia todos os elos — e por isso vem se espalhando rapidamente. A previsão da Coletaki é fechar 2026 com mais de 5.000 pontos ativos em 24 estados brasileiros.
          </p>

          <p style={{ marginBottom:40 }}>
            <strong style={{ color:INK }}>Para quem tem espaço sobrando, alguém em casa pela manhã e quer uma renda extra recorrente sem precisar virar vendedor ou entregador — a oportunidade é real.</strong>
          </p>

          {/* CTA FINAL */}
          <div style={{ borderTop:'2px solid '+INK, paddingTop:20, marginTop:40 }}>
            <p style={{ fontSize:13, color:INK_MUTE, fontStyle:'italic', marginBottom:16, fontFamily:'Inter, sans-serif' }}>
              Conteúdo informativo. As informações apresentadas baseiam-se em entrevistas com pontos de coleta ativos e dados públicos da Coletaki em 2026.
            </p>
            <button onClick={ir} style={{ width:'100%', background:RED, color:'#fff', border:'none', padding:'18px', borderRadius:6, fontSize:16, fontWeight:800, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:8, fontFamily:'Inter, sans-serif' }}>
              Quero ver se minha região tem demanda <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* RODAPE */}
      <div style={{ background:'#1a1a1a', color:'#fff', padding:'40px 20px 30px', marginTop:60, fontFamily:'Inter, sans-serif' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', textAlign:'center' }}>
          <div style={{ fontSize:22, fontWeight:900, color:RED, letterSpacing:'-0.02em', marginBottom:6 }}>DIÁRIO DO INTERIOR</div>
          <div style={{ fontSize:10, color:'#888', marginBottom:20, letterSpacing:'0.08em' }}>JORNALISMO DE VERDADE · DESDE 1987</div>
          <div style={{ fontSize:11, color:'#666', lineHeight:1.6 }}>
            © 2026 Diário do Interior · Todos os direitos reservados<br/>
            Conteúdo informativo. Para informações oficiais consulte coletaki.com
          </div>
        </div>
      </div>
    </div>
  );
}
