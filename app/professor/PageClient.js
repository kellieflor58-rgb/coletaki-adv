'use client';

import React from 'react';
import { BookOpen, Sparkles, Printer, Users } from 'lucide-react';

const ORANGE = '#FF6B35';
const ORANGE_DARK = '#E5562C';
const ORANGE_SOFT = '#FFF4ED';
const INK = '#1F2937';
const INK_SOFT = '#374151';
const INK_MUTE = '#6B7280';
const LINE = '#FFE5D4';
const PAPER_WARM = '#FFFBF7';

const FOTO_MIRIAM = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face';
const FOTO_SALA = '/atividade-pdf-x.jpg';
const FOTO_ATIVIDADE = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&h=600&fit=crop';
const FOTO_APP = 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=900&h=600&fit=crop';
const LINK_APP = 'https://genioustea.com';

function Link({ children }) {
  return <a href={LINK_APP} style={{ color: ORANGE_DARK, fontWeight: 700, textDecoration: 'underline' }}>{children}</a>;
}

function Para({ children }) {
  return <p style={{ fontSize: 17.5, lineHeight: 1.8, color: INK_SOFT, marginBottom: 24 }}>{children}</p>;
}

function H2({ children }) {
  return <h2 style={{ fontSize: 28, fontWeight: 800, color: ORANGE_DARK, margin: '48px 0 20px', letterSpacing: '-0.02em', lineHeight: 1.3 }}>{children}</h2>;
}

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
        <div style={{ height: '100%', width: scroll + '%', background: ORANGE, transition: 'width 0.1s' }} />
      </div>

      <header style={{ background: '#fff', borderBottom: '1px solid ' + LINE, position: 'sticky', top: 3, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/professor" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: ORANGE, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <BookOpen size={22} />
            </div>
            <div>
              <div style={{ fontSize: 21, fontWeight: 800, color: ORANGE_DARK, letterSpacing: '-0.02em', lineHeight: 1 }}>Blog da Miriam</div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', color: INK_MUTE, marginTop: 5, textTransform: 'uppercase' }}>professora · educação especial</div>
            </div>
          </a>
          <nav style={{ display: 'flex', gap: 30 }} className="menu-d">
            <a href="#" style={{ fontSize: 13, color: INK_SOFT, textDecoration: 'none', fontWeight: 600 }}>Posts</a>
            <a href="#" style={{ fontSize: 13, color: INK_SOFT, textDecoration: 'none', fontWeight: 600 }}>Recursos</a>
            <a href="#" style={{ fontSize: 13, color: INK_SOFT, textDecoration: 'none', fontWeight: 600 }}>Sobre</a>
          </nav>
        </div>
      </header>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '60px 28px 100px' }}>

        <div style={{ textAlign: 'center', marginBottom: 14 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: ORANGE_SOFT, color: ORANGE_DARK, padding: '6px 16px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            📚 Pra Professoras · 9 min de leitura
          </div>
        </div>

        <h1 style={{ fontSize: 44, fontWeight: 800, color: INK, letterSpacing: '-0.025em', lineHeight: 1.1, textAlign: 'center', marginBottom: 24 }} className="h1-main">
          <span style={{ color: ORANGE }}>Pare de baixar PDF genérico</span> da internet para seus alunos autistas. Comece a usar isto.
        </h1>

        <p style={{ fontSize: 19, color: INK_SOFT, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, margin: '0 auto 36px' }}>
          Sou professora de educação especial há 18 anos. Em 2022 eu atendia 9 alunos autistas em 4 turmas. Hoje atendo 37 — porque os pais pediram pra escola. Te conto o que mudou no meu trabalho, e a ferramenta que devolveu o tempo que eu não tinha.
        </p>

        <img src={FOTO_SALA} alt="Atividade de PDF genérico marcado com X vermelho" style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 40, fontStyle: 'italic' }}>É exatamente esse tipo de PDF genérico que eu parei de usar. Te explico por quê.</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 50 }}>
          <img src={FOTO_MIRIAM} alt="Miriam Sales" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '3px solid ' + ORANGE }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: INK }}>Miriam Sales</div>
            <div style={{ fontSize: 12, color: INK_MUTE }}>professora de educação especial · mãe da Helena</div>
          </div>
        </div>

        <p style={{ fontSize: 21, color: INK, marginBottom: 24 }}><strong>Oi, colega.</strong></p>

        <Para>Sou a Miriam, 42 anos, professora de educação especial há 18.</Para>

        <Para>Em 2022, eu tinha 9 alunos autistas divididos em 4 turmas. Eram turmas bem montadas, eu dava o meu melhor. Hoje, em 2026, atendo 37 crianças no espectro. Não foi porque a escola cresceu — foi porque, nos últimos dois anos, eu mudei o jeito de trabalhar. E os pais começaram a perceber.</Para>

        <Para>Quero te contar o que mudou. Não vou romantizar, não vou vender mágica. Vou falar como uma colega que já passou por onde você provavelmente está agora.</Para>

        <H2>A dor que eu carregava — e que você talvez também carregue</H2>

        <Para>Por 16 anos eu fiz o que era possível com o que tinha. Apostila padrão da rede pública. Atividade de pintar e ligar. PDF do Pinterest. Recorte de revista plastificado. Material avulso comprado do meu próprio bolso no fim do mês. <strong>Aquilo me consumia.</strong></Para>

        <Para>Eu chegava em casa às sete da noite e ainda passava mais três horas planejando aula. No fim de semana inteiro, mais oito horas. E quando segunda-feira chegava, eu não tinha certeza se o material ia <em>realmente</em> servir pra cada aluno — porque cada um deles é um universo. <strong>Eu trabalhava muito e dormia mal, com a sensação constante de estar devendo.</strong></Para>

        <Para>E o pior não era o cansaço meu. Era o que isso causava nas crianças. <strong>Quando você entrega material genérico pra uma criança autista, ela não engata.</strong> O Davi, de 7 anos, ficava 5 minutos olhando pro papel sem entender o que era pra fazer. A Helena terminava em meio minuto e travava sem ter pra onde ir. O Caio resistia, se irritava, jogava o lápis no chão. A Manu nem segurava o lápis direito.</Para>

        <Para>Eu via aqueles olhinhos esperando de mim algo que servisse. <strong>E eu não tinha como entregar.</strong> Não por falta de empenho. Por falta de ferramenta.</Para>

        <H2>O que ninguém te conta sobre fazer "o básico"</H2>

        <Para>Tem uma verdade incômoda que poucas pessoas dizem em alto e bom som: <strong>professora de educação especial que só faz o básico não está agregando o que essas crianças precisam.</strong> O básico — apostila padrão, atividade igual pra todo mundo, planejamento improvisado — pode até ocupar o tempo de aula, mas não desenvolve.</Para>

        <Para>A criança autista não precisa de qualquer atividade. Ela precisa da atividade <strong>certa</strong>, no <strong>nível certo</strong>, no <strong>momento certo</strong>. Tem que estimular sem sobrecarregar. Tem que desafiar sem frustrar. Tem que vir na linguagem que aquela criança específica entende — visual, auditiva, motora, lúdica. <strong>Cada perfil é único, e o material precisa acompanhar isso.</strong></Para>

        <Para>Quando eu tratava todos meus 9 alunos do mesmo jeito, eu estava, na prática, deixando de tratar. Aquilo me machucava como profissional e como ser humano. Mas eu não sabia outra forma.</Para>

        <H2>O que mudou foi ter uma ferramenta de verdade</H2>

        <Para>Uma colega da escola, a Renata, me indicou o <Link>GeniousTea</Link>. Foi com desconfiança que eu testei. Já tinha visto tanta promessa furada que minha primeira reação foi <em>"mais um app".</em> Mas usei por uma semana, e em sete dias entendi que tinha encontrado o que faltava na minha rotina.</Para>

        <Para>O GeniousTea foi <strong>desenvolvido com base científica</strong> — tem fonoaudiólogas, psicopedagogas e terapeutas ocupacionais por trás da criação dos materiais. Não é um app feito por programador que viu nicho. As atividades têm propósito pedagógico claro, com progressão de dificuldade pensada pra estimular a <strong>neuroplasticidade cerebral</strong> de criança no espectro. Cada coisa ali tem razão de ser.</Para>

        <H2>Como eu organizo minhas 4 turmas dentro do app</H2>

        <Para>A primeira coisa que fiz foi cadastrar minhas turmas, cada uma com nome próprio: "Turma das Estrelas" (fundamental I da manhã), "Turma do Sol" (alfabetização da tarde), "Turma da Lua" (pré-escola da manhã) e "Turma Arco-Íris" (turma de inclusão multisseriada).</Para>

        <Para>Dentro de cada turma, eu cadastro os alunos um por um. Pra cada aluno preencho <strong>nome, idade, gênero, nível de suporte (1, 2 ou 3), áreas que precisam ser trabalhadas</strong> (matemática, alfabetização, leitura, escrita, comunicação, comportamento, motricidade) e o estágio atual em cada uma. <strong>Cada criança tem perfil individual, separado dos outros, com histórico próprio.</strong> Não se mistura.</Para>

        <Para>Pra quem atende várias turmas como eu, isso é libertador. Eu entro na Turma das Estrelas e vejo só os alunos dela. Filtro por nível de suporte. Comparo evolução entre crianças com perfil parecido. <strong>Nunca mais precisei abrir caderninho ou planilha do Excel pra lembrar quem é quem.</strong></Para>

        <H2>O que o app faz que economiza minhas horas de planejamento</H2>

        <img src={FOTO_APP} alt="Tela do app GeniousTea" style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>O painel onde gerencio meus 37 alunos divididos por turma.</p>

        <Para>Aqui vem a parte que mudou minha vida prática: o app <strong>gera as atividades automaticamente</strong> pra cada perfil cadastrado. Não preciso mais procurar, garimpar, baixar, adaptar. Eu abro o app, escolho o aluno, escolho a área que quero trabalhar — e o sistema me devolve um material personalizado, no nível certo, com base no histórico de evolução daquela criança.</Para>

        <Para>E o melhor de tudo: <strong>cada atividade vem em PDF pronto pra imprimir, com um único clique.</strong> Cliquei, abriu o PDF, mandei pra impressora. Em segundos tenho o material individual de cada aluno da semana inteira na minha mão.</Para>

        <Para>Faz a conta comigo: antes eu gastava 12 horas por semana entre planejamento, busca de material e adaptação. <strong>Hoje gasto 40 minutos.</strong> O resto do tempo eu uso pra observar mais cada criança em sala, conversar com os pais, descansar, viver. E o resultado pedagógico melhorou — não piorou.</Para>

        <H2>Como funciona no meu dia a dia</H2>

        <Para>Toda segunda de manhã eu abro o app, vejo a trilha sugerida pra cada aluno baseada no desempenho da semana anterior, e mando imprimir. <strong>Em 15 minutos eu tenho 37 atividades individuais prontas pra semana.</strong></Para>

        <Para>Em sala, distribuo: o Davi recebe atividade de pareamento visual (figura com figura). A Helena recebe um exercício de sílabas. O Caio recebe sequência numérica. A Manu recebe atividade motora com pontilhado. Cada um faz exatamente o que precisa fazer naquele momento.</Para>

        <Para>E aqui vem a função que mais usei nos últimos meses: <strong>se uma criança não responde à atividade, eu não fico travada</strong>. Entro no perfil dela no app, ajusto o nível pra baixo, e o sistema me devolve uma versão mais simples — algo que ela consiga fazer pra retomar a confiança. Conforme ela responde, o nível sobe automaticamente. <strong>Isso é o que estimula a neuroplasticidade: pequenos desafios sucessivos, no ritmo de cada criança.</strong></Para>

        <H2>O histórico que me dá clareza real sobre cada criança</H2>

        <Para>Pra mim, isso aqui é ouro. O app guarda o histórico completo de cada aluno — quando começou, em que nível estava, quanto tempo levou pra dominar cada habilidade, em que área avança rápido, em que área trava.</Para>

        <Para>Hoje eu sei, sem precisar consultar nada:</Para>

        <Para>
          <strong style={{ color: ORANGE_DARK }}>·</strong> O Davi avança rápido em pareamento visual e trava em sequência. Estimulo mais visual com ele.<br/>
          <strong style={{ color: ORANGE_DARK }}>·</strong> A Helena ama jogos de letra e som. Por ali ela aprende qualquer coisa.<br/>
          <strong style={{ color: ORANGE_DARK }}>·</strong> O Caio é um gênio em matemática mas resiste à escrita. Uso números pra introduzir letras.<br/>
          <strong style={{ color: ORANGE_DARK }}>·</strong> A Manu ainda tá no motor fino, mas avançou muito em 4 meses.
        </Para>

        <Para>Essa clareza sobre <strong>pontos fortes e pontos a desenvolver</strong> de cada criança é o tipo de informação que toda professora de inclusão precisa ter — e dificilmente consegue construir só com caderno e memória. O app organiza isso pra mim. Em qualquer momento eu abro e vejo.</Para>

        <H2>Eu enxergo cada criança como ela é — e mostro isso pros pais</H2>

        <Para>O ganho que ninguém me tinha contado antes: <strong>com o histórico organizado, eu consigo dar feedback de verdade pros pais</strong>. Não aquela conversa genérica de "tá indo bem". Eu sento com a família e digo:</Para>

        <Para><em>"Olha, o Davi tá demonstrando muita reação a estímulo sonoro. Responde a música, bate o pé no ritmo, sorri quando ouve melodia. Pode ser uma porta de entrada importante. Tenta colocar música em casa nos momentos de tensão, vê se ajuda na regulação. E se tiverem como, vale pensar em musicalização."</em></Para>

        <Para>Esse tipo de observação muda o jogo. Os pais saem da reunião com uma direção concreta — não com uma frase vaga. Eles entendem que o filho tem inclinações, força, caminho. E podem continuar o trabalho em casa. <strong>O desenvolvimento de uma criança autista não para no portão da escola — começa lá e continua em casa.</strong></Para>

        <Para>Pra Helena, indiquei leitura de história antes de dormir, virou rotina. Pro Caio, mostrei que ele tinha fascínio por números e a mãe começou a usar isso no supermercado. Pra Manu, sugeri massinha como exercício de motricidade caseiro.</Para>

        <Para>É por isso que os pais viraram meus aliados. Eles começaram a indicar a escola pra outros pais. <strong>Não porque eu sou genial — porque eu tenho informação real sobre cada filho deles.</strong> E informação muda uma criança de lugar.</Para>

        <H2>O que mudou nos meus alunos em 6 meses</H2>

        <img src={FOTO_ATIVIDADE} alt="Material em PDF separado por aluno" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>Os materiais individuais que separo por aluno no início da semana — todos vindos do app.</p>

        <Para>Não vou dar número bonito, vou contar o que vi:</Para>

        <Para>O Davi, que não verbalizava, hoje aponta pra figura quando eu pergunto. Pra quem trabalha com TEA sabe que é avanço gigante.</Para>

        <Para>A Helena tá lendo palavrinha de 3 sílabas. No início era impossível mantê-la em atividade por mais de 2 minutos.</Para>

        <Para>O Caio aceitou fazer escrita pela primeira vez em janeiro — porque a atividade veio amarrada num problema de matemática.</Para>

        <Para>A Manu segura o lápis sozinha agora. Antes precisava da minha mão por cima.</Para>

        <Para>E o mais importante pra mim: <strong>eu não tô mais esgotada</strong>. Eu durmo. Tenho tempo pra família. Pro meu próprio descanso. E ensino melhor que nunca.</Para>

        <H2>Por que tô compartilhando isso</H2>

        <Para>Não escrevi esse texto porque alguém me pediu. Escrevi porque, em 18 anos de profissão, nunca tive uma ferramenta que me deixasse trabalhar com a dignidade que essas crianças merecem. Tive que descobrir tarde demais — e isso me incomoda.</Para>

        <Para>Se você cuida de criança no espectro autista e ainda tá apenas com PDF da internet e apostila padrão, eu te peço uma coisa: <strong>dá uma olhada</strong>. Não custa nada criar conta no <Link>GeniousTea</Link>. Cadastra um aluno, gera uma atividade, imprime. Vê na prática se faz sentido pra sua realidade.</Para>

        <Para>Não é mágica. Não substitui sua experiência, seu vínculo com a criança, sua intuição de educadora. Mas <strong>te devolve o tempo</strong> que você não tem — e te dá a profundidade que sua sala precisa.</Para>

        <div style={{ background: ORANGE, color: '#fff', borderRadius: 16, padding: 40, marginTop: 50, textAlign: 'center' }}>
          <Sparkles size={32} color="#fff" style={{ margin: '0 auto 12px', display: 'block' }} />
          <h3 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
            Quer dar uma olhada?
          </h3>
          <p style={{ fontSize: 15, opacity: 0.95, lineHeight: 1.6, margin: '0 0 26px', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            Cria sua conta, cadastra seus alunos, gera as atividades. Sem cartão de crédito. Sem prazo de teste.
          </p>
          <a href={LINK_APP} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: ORANGE_DARK, padding: '15px 36px', borderRadius: 10, textDecoration: 'none', fontWeight: 800, fontSize: 15, letterSpacing: '-0.01em' }}>
            Conhecer o GeniousTea →
          </a>
          <div style={{ fontSize: 11, opacity: 0.85, marginTop: 18 }}>cadastro grátis · atividades em PDF · base científica</div>
        </div>

        <H2>Pra fechar</H2>

        <Para>Se você quiser trocar uma ideia sobre como você trabalha com seus alunos autistas, me chama nos comentários ou no Instagram. Adoro conversar com outras professoras.</Para>

        <Para><em>Com carinho,<br/>Miriam.</em></Para>

        <div style={{ textAlign: 'center', marginTop: 60, paddingTop: 36, borderTop: '1px solid ' + LINE }}>
          <img src={FOTO_MIRIAM} alt="Miriam Sales" style={{ width: 92, height: 92, borderRadius: '50%', objectFit: 'cover', border: '4px solid ' + ORANGE, marginBottom: 16 }} />
          <div style={{ fontSize: 18, fontWeight: 800, color: INK }}>Miriam Sales</div>
          <div style={{ fontSize: 13, color: INK_MUTE, marginTop: 4 }}>Professora há 18 anos · mãe da Helena · escrevendo pra quem ensina.</div>
        </div>

      </article>

      <footer style={{ background: ORANGE_DARK, color: '#fff', padding: '40px 24px', textAlign: 'center', marginTop: 60 }}>
        <div style={{ fontSize: 13, opacity: 0.85 }}>Blog da Miriam · Educação Especial · Conteúdo independente</div>
        <div style={{ fontSize: 11, opacity: 0.7, marginTop: 6 }}>Este é um conteúdo opinativo. O GeniousTea é mencionado conforme experiência real.</div>
      </footer>

      <style>{`
        .menu-d { display: flex; }
        @media (max-width: 768px) {
          .menu-d { display: none !important; }
          .h1-main { font-size: 28px !important; }
        }
      `}</style>

    </div>
  );
}
