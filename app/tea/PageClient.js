'use client';

import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const ORANGE = '#FF6B35';
const ORANGE_DARK = '#E5562C';
const ORANGE_SOFT = '#FFF4ED';
const INK = '#1F2937';
const INK_SOFT = '#374151';
const INK_MUTE = '#6B7280';
const LINE = '#FFE5D4';
const PAPER_WARM = '#FFFBF7';

const FOTO_MIRIAM = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face';
const FOTO_ALUNA = 'https://images.unsplash.com/photo-1597413545419-4013431dbfec?w=900&h=600&fit=crop';
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
          <a href="/tea" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: ORANGE, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Heart size={22} fill="#fff" />
            </div>
            <div>
              <div style={{ fontSize: 21, fontWeight: 800, color: ORANGE_DARK, letterSpacing: '-0.02em', lineHeight: 1 }}>Blog da Miriam</div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', color: INK_MUTE, marginTop: 5, textTransform: 'uppercase' }}>professora · mãe · educação especial</div>
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
            💛 Educação Especial · 10 min de leitura
          </div>
        </div>

        <h1 style={{ fontSize: 44, fontWeight: 800, color: INK, letterSpacing: '-0.025em', lineHeight: 1.1, textAlign: 'center', marginBottom: 24 }} className="h1-main">
          O app que mudou a forma como eu atendo <span style={{ color: ORANGE }}>crianças no espectro</span>, em sala e em casa
        </h1>

        <p style={{ fontSize: 19, color: INK_SOFT, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, margin: '0 auto 36px' }}>
          Sou professora do ensino pedagógico há 18 anos e mãe de uma criança no espectro. Encontrei uma ferramenta que personaliza as atividades pelo perfil de cada criança — e quero compartilhar tudo o que aprendi.
        </p>

        <img src={FOTO_ALUNA} alt="Criança fazendo atividade pedagógica" style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 40, fontStyle: 'italic' }}>Minha filha fazendo uma das atividades do app. O sorriso dela diz tudo.</p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: 50 }}>
          <img src={FOTO_MIRIAM} alt="Miriam Sales" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '3px solid ' + ORANGE }} />
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: INK }}>Miriam Sales</div>
            <div style={{ fontSize: 12, color: INK_MUTE }}>professora de educação especial · mãe da Helena</div>
          </div>
        </div>

        <p style={{ fontSize: 21, color: INK, marginBottom: 24 }}><strong>Oi, gente.</strong></p>

        <Para>Esse texto é pra duas pessoas: <strong>a mãe que descobriu há pouco que o filho está no espectro</strong> e ainda não sabe por onde começar, e <strong>a professora que tem alunos autistas em sala e sente que falta material adequado pra eles</strong>. Eu já fui as duas. E sei o quanto a gente fica perdida nessas horas.</Para>

        <Para>Eu sou a Miriam, tenho 42 anos, dou aula no ensino pedagógico há 18 anos. Há quatro anos minha filha Helena foi diagnosticada no espectro autista, e desde então minha vida profissional e pessoal se misturaram de um jeito que eu nunca imaginei. Hoje quero te contar sobre o app que tem ajudado tanto a mim quanto às minhas colegas — e às mães que conheço através da escola.</Para>

        <H2>O que mudou no meu trabalho depois do diagnóstico da Helena</H2>

        <Para>Antes do diagnóstico da minha filha, eu já dava aula pra crianças autistas. Achava que sabia o que estava fazendo. Lia, me atualizava, ia em curso, fazia o que dava. Mas tem uma diferença gigante entre <strong>ensinar uma criança autista por 4 horas por dia</strong> e <strong>viver com uma 24 horas por dia.</strong></Para>

        <Para>Quando a Helena recebeu o diagnóstico, eu percebi que a maior parte dos materiais que eu usava em sala era <strong>genérica demais</strong>. Apostila padrão, atividade de pintar, ligar pontos. Funcionava pra alguns alunos e não funcionava pra outros — e eu não entendia bem o porquê. Em casa com a Helena foi pior: comprei livro, baixei PDF de grupo de Facebook, imprimi atividade do Pinterest. Tudo dava certo por uns dias e depois ela perdia o interesse.</Para>

        <Para>Foi aí que eu entendi que o problema não era a Helena. Nem meus alunos. <strong>O problema era que a maioria dos materiais não considera o perfil específico de cada criança</strong> — idade, grau de suporte, área de interesse, ritmo de evolução. Cada uma é única, e o material precisa acompanhar isso.</Para>

        <H2>Como cheguei no GeniousTea</H2>

        <Para>Foi uma colega da escola que me contou. A Renata trabalha com a turma de inclusão e tinha começado a usar um app novo, ainda pouco conhecido, chamado <Link>GeniousTea</Link>. Ela me disse que era diferente porque <strong>as atividades se adaptavam ao perfil da criança</strong> — você cadastra idade, gênero, grau de autismo, e o app monta o caminho de aprendizagem.</Para>

        <Para>Eu confesso que achei estranho. <em>"Mais um app, Miriam, calma."</em> Mas ela insistiu pra eu testar com a Helena em casa antes de levar pra sala. Foi o que eu fiz.</Para>

        <img src={FOTO_APP} alt="Tela do GeniousTea no celular" style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>O cadastro da Helena no app. Foi o que mudou tudo.</p>

        <H2>O que faz esse app ser diferente</H2>

        <Para>A primeira coisa que ele pede é o <strong>perfil completo da criança</strong>. Não é só nome e idade. Tem o gênero, o nível de suporte (1, 2 ou 3), as áreas que você quer trabalhar (matemática, escrita, leitura, alfabetização, comunicação, comportamento, rotina) e o estágio atual em cada uma. Eu fiz o cadastro da Helena com calma, sem pressa, respondendo cada item com sinceridade.</Para>

        <Para>Quando terminei, o app montou uma <strong>trilha de atividades personalizada</strong> só pra ela. Não era a mesma coisa que aparecia na conta da Renata pro filho dela. Era diferente — porque a Helena é diferente.</Para>

        <Para>E o detalhe que me ganhou de vez: <strong>os níveis de dificuldade vão crescendo conforme a criança avança</strong>. Quando a Helena dominou um exercício, o app passou pra próxima etapa automaticamente. Sempre dentro da capacidade dela, sempre desafiando um pouquinho mais. Isso é exatamente o que a gente busca em educação especial — estimular a <strong>neuroplasticidade cerebral</strong>, criar conexões novas a partir de pequenos desafios consistentes.</Para>

        <Para>Não é por acaso. O <Link>GeniousTea</Link> foi <strong>desenvolvido com base em estudos científicos</strong> sobre desenvolvimento infantil e intervenção pedagógica em crianças com TEA. Não é um app feito por programador qualquer que viu o nicho — tem fonoaudióloga, psicopedagoga e terapeuta ocupacional envolvidos na criação dos materiais. Dá pra sentir quando você usa.</Para>

        <H2>Os primeiros 30 dias com a Helena</H2>

        <Para>Eu fiz combinado com ela: 15 minutos por dia, depois do almoço. Sem cobrança, sem nota, sem comparar com ninguém. Era nosso momento.</Para>

        <Para>Na primeira semana ela fez atividade de associação de figura (gato, cachorro, bola) e quebra-cabeça simples. Coisa que ela já fazia, mas no app aparece de um jeito mais colorido, com som, com movimento. Ela engatou.</Para>

        <Para>Na segunda semana o app subiu o nível: começou a pedir pra ela contar quantos objetos tinha na tela, depois somar dois conjuntos pequenos. A Helena resistiu — mas como o app vai de pouquinho em pouquinho, ela conseguiu. <strong>Foi a primeira vez que ela contou até cinco sozinha.</strong> Eu chorei.</Para>

        <Para>No fim do primeiro mês, ela já tinha aprendido o alfabeto inteiro (com música, repetição visual e jogos de associação) e tava começando a juntar sílabas. <strong>Em 30 dias.</strong> Coisas que a gente tinha tentado em casa por meses, com material avulso, sem conseguir manter o engajamento.</Para>

        <H2>Levei pra sala de aula</H2>

        <img src={FOTO_ATIVIDADE} alt="Material pedagógico imprimível" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>Algumas das atividades em PDF que eu uso com meus alunos.</p>

        <Para>Depois de ver o resultado em casa, comecei a usar com os alunos autistas da minha turma. Cada um tem o próprio cadastro, com perfil específico. <strong>O que serve pro Davi não serve pro Caio. O que serve pro Caio não serve pra Helena.</strong> E o app entende isso.</Para>

        <Para>Outra coisa que ajuda demais é que <strong>os PDFs são atualizados frequentemente</strong>. As atividades não ficam datadas. Toda semana entra coisa nova, sempre alinhada ao perfil cadastrado. Eu imprimo o material da semana, levo pra escola, e tenho atividade nova pra cada criança sem precisar gastar horas planejando.</Para>

        <Para>Pra quem é professora e tem turma de inclusão, isso é ouro. <strong>Você sabe o quanto a gente penava pra adaptar conteúdo na correria do dia a dia.</strong></Para>

        <H2>O que outras mães e professoras têm me dito</H2>

        <Para>Comecei a indicar o app pras mães da escola, depois pras minhas colegas educadoras. Em três meses já tenho mais de 20 famílias usando, e o retorno é unânime: <strong>o que faz diferença é a personalização.</strong> Cada criança tem seu caminho, e o app respeita isso.</Para>

        <Para>Tem mãe que me contou que o filho dela falou a primeira frase completa depois de começar com o app. Tem professora que reorganizou a rotina da sala porque conseguiu sentar com cada aluno autista por uns 10 minutos, com material específico pra ele.</Para>

        <Para>Eu não tô dizendo que é mágica — porque não é. <strong>Não substitui terapeuta, fonoaudióloga, psicopedagoga.</strong> Mas complementa de um jeito que eu nunca tinha visto antes. E o melhor: as crianças <em>gostam</em>. Pedem pra fazer mais.</Para>

        <H2>Como vocês podem testar</H2>

        <Para>O site é <Link>genioustea.com</Link>. Você faz o cadastro, preenche o perfil da criança com calma, e o app monta a trilha automaticamente. Não precisa ser professora pra usar — tem mãe sem formação pedagógica que tá conseguindo aplicar tranquilamente.</Para>

        <Para>Sei que parece propaganda. Mas eu não recomendaria se não tivesse usado com a minha filha primeiro. Hoje ela tem 6 anos e tá alfabetizada. Quatro anos atrás, no dia do diagnóstico, eu não imaginava que isso seria possível tão cedo.</Para>

        <div style={{ background: ORANGE, color: '#fff', borderRadius: 16, padding: 40, marginTop: 50, textAlign: 'center' }}>
          <Sparkles size={32} color="#fff" style={{ margin: '0 auto 12px', display: 'block' }} />
          <h3 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
            Conheça o GeniousTea
          </h3>
          <p style={{ fontSize: 15, opacity: 0.95, lineHeight: 1.6, margin: '0 0 26px', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            Atividades pedagógicas personalizadas para crianças no espectro, desenvolvidas com base científica. Pra mães, professoras, e qualquer pessoa que cuida.
          </p>
          <a href={LINK_APP} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: ORANGE_DARK, padding: '15px 36px', borderRadius: 10, textDecoration: 'none', fontWeight: 800, fontSize: 15, letterSpacing: '-0.01em' }}>
            Quero conhecer o app →
          </a>
          <div style={{ fontSize: 11, opacity: 0.85, marginTop: 18 }}>cadastro grátis · personalização imediata</div>
        </div>

        <H2>Pra fechar</H2>

        <Para>Se você é mãe e ainda tá no choque do diagnóstico, respira. Sua criança vai aprender. Vai evoluir. Vai te surpreender. Tem ferramentas hoje que não existiam quando a Helena foi diagnosticada — e o <Link>GeniousTea</Link> é uma delas.</Para>

        <Para>Se você é professora e tá lendo isso, eu te entendo. O sistema cobra muito da gente, e a gente faz milagre com pouco. Ter um material que se adapta ao aluno em vez de obrigar o aluno a se adaptar ao material muda tudo.</Para>

        <Para>Qualquer dúvida, me chama nos comentários ou no Instagram. Eu respondo todas as mães e educadoras que me procuram. Tô aqui.</Para>

        <Para><em>Com carinho,<br/>Miriam.</em></Para>

        <div style={{ textAlign: 'center', marginTop: 60, paddingTop: 36, borderTop: '1px solid ' + LINE }}>
          <img src={FOTO_MIRIAM} alt="Miriam Sales" style={{ width: 92, height: 92, borderRadius: '50%', objectFit: 'cover', border: '4px solid ' + ORANGE, marginBottom: 16 }} />
          <div style={{ fontSize: 18, fontWeight: 800, color: INK }}>Miriam Sales</div>
          <div style={{ fontSize: 13, color: INK_MUTE, marginTop: 4 }}>Professora há 18 anos · mãe da Helena · escrevendo pra quem precisa.</div>
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
