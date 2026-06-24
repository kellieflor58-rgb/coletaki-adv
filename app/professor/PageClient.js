'use client';

import React from 'react';
import { Heart, Sparkles, BookOpen, TrendingUp } from 'lucide-react';

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
          <span style={{ color: ORANGE }}>Pare de baixar PDF genérico</span> da internet pros seus alunos autistas — eu também fazia isso, e descobri algo melhor
        </h1>

        <p style={{ fontSize: 19, color: INK_SOFT, lineHeight: 1.6, textAlign: 'center', maxWidth: 600, margin: '0 auto 36px' }}>
          Professora de educação especial há 18 anos. Há dois anos eu tinha 9 alunos. Hoje tenho 37 — porque os próprios pais começaram a procurar por mim. Vou contar o que mudou, e o app que me deu o controle real do desenvolvimento de cada criança.
        </p>

        <img src={FOTO_SALA} alt="Sala de aula com material pedagógico" style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
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

        <Para>Em 2022, eu tinha 9 alunos autistas divididos em 4 turmas. Eram turmas bem montadas, eu dava o meu melhor. Hoje, em 2026, atendo 37 crianças no espectro.</Para>

        <Para>Esse texto é pra dividir com vocês um pouco do que mudou no caminho, principalmente sobre o material que eu uso em sala. Porque eu já passei muito tempo baixando PDF aleatório da internet, plastificando recorte de revista, comprando apostila no fim do mês. Hoje eu trabalho diferente. Vale a conversa.</Para>

        <H2>Fazer o básico não é mais o suficiente</H2>

        <Para>A verdade é dura, mas precisa ser dita: <strong>professora de educação especial que só faz o básico — apostila padrão, recorta-cola, atividade genérica — não tá agregando o que essas crianças precisam.</strong> Cada criança no espectro tem um caminho único de desenvolvimento. Tratar todas igual é, no fundo, deixar de tratar.</Para>

        <Para>Em 2024, eu tinha 9 alunos com 9 diagnósticos diferentes. Davi de 7 anos, nível 2, ainda não verbalizava. Helena de 6, nível 1, em alfabetização. Caio de 9, nível 2, fixação em números. Manu de 5, nível 1, dificuldade motora. E mais cinco. <strong>Cada um precisava de um caminho diferente</strong> — e eu não tinha como entregar isso sozinha.</Para>

        <Para>Aí você abre a apostila padrão da rede e percebe: <em>"isso não vai servir pra nenhum deles"</em>. Começa a recortar, adaptar, imprimir extra, plastificar. Gasta o fim de semana inteiro. E na hora da aula o Davi não engata, o Caio terminou em 5 minutos e quer mais, e a Manu não conseguiu nem segurar o lápis. A gente sente que tá fazendo o máximo, mas sabe que não tá entregando o que cada um precisa. <strong>Não é falta de empenho. É falta de ferramenta.</strong></Para>

        <H2>Como o GeniousTea entrou na minha rotina</H2>

        <Para>Uma colega minha, a Renata, me indicou o <Link>GeniousTea</Link>. Ela disse que era um app pensado especificamente pra <strong>professoras de educação especial</strong>, com material adaptado pra crianças no espectro. Achei mais um app — mas decidi testar primeiro com minha filha em casa antes de levar pra sala.</Para>

        <Para>Em dois dias eu já sabia que ia adotar com a turma. Cadastrei meus 9 alunos no app, um por um. Pra cada criança preencho <strong>idade, gênero, nível de suporte (1, 2 ou 3), e em quais áreas ela precisa evoluir</strong> — matemática, alfabetização, leitura, escrita, comunicação, comportamento, rotina. O app monta um caminho personalizado pra cada perfil.</Para>

        <img src={FOTO_APP} alt="Painel do GeniousTea com os alunos cadastrados" style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>O painel dos meus 9 alunos cadastrados, cada um com seu perfil individual.</p>

        <H2>Como funciona no meu dia a dia</H2>

        <Para>De manhã, antes da aula, eu abro o app e vejo a trilha de cada aluno pro dia. Imprimo o PDF da atividade individual de cada um. <strong>Não preciso mais sentar pra planejar de zero</strong> — o app já considerou o desempenho da semana passada e propôs o próximo passo.</Para>

        <Para>Quando chego em sala, distribuo: o Davi recebe atividade de pareamento visual (figura com figura). A Helena recebe sílabas. O Caio recebe sequência numérica até 50. A Manu recebe atividade motora com pontilhado. Tudo personalizado, tudo no nível certo de cada um.</Para>

        <Para>E aqui vem a parte que eu mais gosto: <strong>se uma criança não reage à atividade, eu não fico travada</strong>. Entro no app, ajusto o nível pra baixo no perfil dela, e o app já me devolve uma atividade mais simples — algo que ela consiga fazer pra retomar a confiança. Depois vai subindo aos poucos, conforme ela responde. Isso é o que estimula a <strong>neuroplasticidade</strong> — pequenos desafios sucessivos no ritmo certo.</Para>

        <H2>O histórico de cada aluno</H2>

        <Para>Pra mim, isso aqui é ouro: o app guarda o <strong>histórico completo de cada criança</strong>. Quando ela começou, em que nível estava, quanto tempo levou pra dominar cada habilidade, em que área ela tá mais forte, em que área tá travando.</Para>

        <Para>Hoje eu sei, sem precisar consultar caderninho, que:</Para>

        <Para>
          <strong style={{ color: ORANGE_DARK }}>·</strong> O Davi avança rápido em pareamento visual mas trava em sequência. Estimulo mais visual com ele.<br/>
          <strong style={{ color: ORANGE_DARK }}>·</strong> A Helena ama jogos de letra e som. Por ali ela aprende qualquer coisa.<br/>
          <strong style={{ color: ORANGE_DARK }}>·</strong> O Caio é um gênio em matemática mas resiste à escrita. Uso números pra introduzir letras.<br/>
          <strong style={{ color: ORANGE_DARK }}>·</strong> A Manu ainda tá no motor fino, mas avançou muito em 4 meses.
        </Para>

        <Para>Essa clareza dos <strong>pontos fortes e pontos a desenvolver</strong> de cada criança eu nunca tive antes. Tava sempre na cabeça, sempre achando que ia esquecer. Agora tá registrado, organizado, com gráfico de evolução.</Para>

        <H2>Conduzindo o estímulo certo, no momento certo</H2>

        <img src={FOTO_ATIVIDADE} alt="Material em PDF impresso pra cada aluno" style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 14, marginBottom: 12 }} />
        <p style={{ fontSize: 12, color: INK_MUTE, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>As atividades impressas que eu separo por aluno no início da semana.</p>

        <Para>O <Link>GeniousTea</Link> foi <strong>desenvolvido com base em estudos científicos</strong> sobre desenvolvimento infantil e intervenção pedagógica em crianças com TEA. Tem fonoaudióloga, psicopedagoga e terapeuta ocupacional na construção dos materiais. Dá pra sentir quando você usa — cada atividade tem propósito pedagógico claro, não é só "pintar o desenho".</Para>

        <Para>Em sala, isso vira poder. Quando o Caio termina rápido e quer mais, eu já tenho a próxima atividade pronta — no nível dele, na área dele. Quando a Manu trava, eu ajusto o nível e ela continua. Quando o Davi responde positivamente a algo novo, eu marco no app e o sistema entende esse padrão pra propor mais coisas parecidas.</Para>

        <Para>Eu deixei de ser uma professora que <em>tenta</em> e passei a ser uma professora que <strong>conduz com intenção</strong>.</Para>

        <H2>O que mudou nos meus alunos em 6 meses</H2>

        <Para>Não vou dar dado bonito, vou contar o que eu vi:</Para>

        <Para>O Davi, que não verbalizava nada, hoje aponta pra figura quando eu pergunto. Foi sutil, mas pra quem trabalha com TEA sabe que é gigante.</Para>

        <Para>A Helena tá lendo palavrinha de 3 sílabas. No início era impossível mantê-la em atividade por mais de 2 minutos.</Para>

        <Para>O Caio aceitou fazer escrita pela primeira vez em janeiro — porque a atividade veio amarrada num problema de matemática.</Para>

        <Para>A Manu segura o lápis sozinha agora. Antes precisava de minha mão por cima.</Para>

        <Para>E o mais importante: <strong>eu não tô mais esgotada no domingo</strong>. Meu planejamento da semana toda demora 40 minutos no app. Antes era 4 horas no fim de semana e mais 1 hora todas as noites.</Para>

        <H2>Eu enxergo cada criança como ela é — e mostro isso pros pais</H2>

        <Para>Esse pra mim é o ganho que ninguém me contou antes: <strong>com o histórico de cada aluno organizado no app, eu finalmente consigo dar feedback de verdade pros pais</strong>. Não aquela conversa genérica de "tá indo bem, evoluindo aos pouquinhos". Eu sento com a família e digo:</Para>

        <Para><em>"Olha, o Davi tá demonstrando muita reação a estímulo sonoro. Ele responde a música, bate o pé no ritmo, sorri quando ouve melodia. Pode ser uma porta de entrada importante. Tenta colocar música em casa nos momentos de tensão, vê se ajuda na regulação. E se tiverem como, vale pensar em musicalização."</em></Para>

        <Para>Esse tipo de observação <strong>muda tudo</strong>. Os pais saem da reunião com uma direção concreta — não com uma frase vaga. Eles entendem que o filho deles tem inclinações, tem força, tem caminho. E eles podem incentivar isso em casa. <strong>O desenvolvimento de uma criança autista não para no portão da escola</strong> — começa lá e continua em casa.</Para>

        <Para>Pra Helena, eu indiquei que ela respondia muito bem a leitura de história antes de dormir — virou rotina na casa dela. Pro Caio, mostrei que ele tinha fascínio por números e a mãe começou a usar isso no supermercado. Pra Manu, a fisioterapia caseira com massinha trouxe avanço incrível na motricidade.</Para>

        <Para>É por isso que os pais viraram meus aliados. <strong>Eles me indicam pra outros pais.</strong> Não porque eu sou genial — porque eu tenho informação real sobre cada filho deles. E informação é o que muda uma criança de lugar.</Para>

        <H2>Por que tô compartilhando isso</H2>

        <Para>Sei que professora de educação especial é resistente a indicação de app — porque a gente já testou muita coisa que prometia e entregou pouco. Eu também era assim. Só comecei a usar porque foi indicação de colega que confio.</Para>

        <Para>Se você cuida de crianças no espectro e ainda está só com PDF da internet, vale dar uma olhada. Não é mágica, mas economiza horas de planejamento e dá clareza sobre cada criança.</Para>

        <div style={{ background: ORANGE, color: '#fff', borderRadius: 16, padding: 40, marginTop: 50, textAlign: 'center' }}>
          <Sparkles size={32} color="#fff" style={{ margin: '0 auto 12px', display: 'block' }} />
          <h3 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 14px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
            Quer dar uma olhada?
          </h3>
          <p style={{ fontSize: 15, opacity: 0.95, lineHeight: 1.6, margin: '0 0 26px', maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            O site do GeniousTea. Você cria conta, cadastra seus alunos e o app monta o material. Sem cartão de crédito.
          </p>
          <a href={LINK_APP} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#fff', color: ORANGE_DARK, padding: '15px 36px', borderRadius: 10, textDecoration: 'none', fontWeight: 800, fontSize: 15, letterSpacing: '-0.01em' }}>
            Quero testar com meus alunos →
          </a>
          <div style={{ fontSize: 11, opacity: 0.85, marginTop: 18 }}>cadastro grátis · materiais imediatos · base científica</div>
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
