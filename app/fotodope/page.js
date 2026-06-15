'use client';

import React from 'react';
import { Heart, Bookmark, Share2, Sparkles, Search, ArrowUpRight, Clock, MessageCircle } from 'lucide-react';

const PINK = '#EC4899';
const PINK_DARK = '#BE185D';
const PINK_LIGHT = '#FCE7F3';
const PINK_SOFT = '#FDF2F8';
const BLUSH = '#F9A8D4';
const ROSE_GOLD = '#F472B6';
const INK = '#1F1F1F';
const INK_SOFT = '#52525B';
const INK_MUTE = '#71717A';
const LINE = '#F4E4EC';
const CREAM = '#FFFBFA';

const LINK_FOOTPRIV = 'https://footpriv.com';
const FOTO_AUTOR = 'https://author-service-images-prod-us-east-1.publishing.aws.arc.pub/ajc/WULWJJ6MLJDLXA6YITE4S67434.png';
const HERO_IMG = '/footpriv-hero.jpg';

const MENU = ['Diário', 'Lifestyle', 'Trabalho & Renda', 'Achados', 'Bem-estar'];

export default function Page() {
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
    <div style={{ minHeight: '100vh', background: CREAM, color: INK, fontFamily: 'Georgia, "Times New Roman", serif' }}>
      {/* PROGRESS BAR */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 3, background: 'rgba(0,0,0,0.04)', zIndex: 100 }}>
        <div style={{ height: '100%', width: scroll + '%', background: 'linear-gradient(90deg, ' + PINK + ', ' + ROSE_GOLD + ')', transition: 'width 0.1s' }} />
      </div>

      {/* HEADER */}
      <header style={{ background: 'rgba(255,251,250,0.92)', backdropFilter: 'blur(16px)', borderBottom: '1px solid ' + LINE, position: 'sticky', top: 3, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* LOGO */}
          <a href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, ' + PINK + ', ' + ROSE_GOLD + ')', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(236,72,153,0.25)' }}>
              <Sparkles size={20} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: PINK_DARK, fontStyle: 'italic', lineHeight: 1 }}>Diário</div>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', color: INK_MUTE, marginTop: 2, fontFamily: 'system-ui, sans-serif' }}>DO INTERIOR</div>
            </div>
          </a>

          {/* MENU DESKTOP */}
          <nav style={{ display: 'flex', gap: 28 }} className="menu-d">
            {MENU.map(m => (
              <a key={m} href="#" style={{ fontSize: 13, fontWeight: 500, color: INK_SOFT, textDecoration: 'none', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.02em' }}>{m}</a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <Search size={18} color={INK_MUTE} style={{ cursor: 'pointer' }} />
            <button style={{ background: PINK, color: '#fff', border: 'none', padding: '8px 18px', borderRadius: 999, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'system-ui, sans-serif', boxShadow: '0 4px 12px rgba(236,72,153,0.3)' }}>Newsletter</button>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 920, margin: '0 auto', padding: '50px 28px 80px' }}>

        {/* CATEGORIA + DATA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28, fontFamily: 'system-ui, sans-serif' }}>
          <span style={{ background: PINK_LIGHT, color: PINK_DARK, padding: '6px 14px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>✨ Achados da semana</span>
          <span style={{ fontSize: 12, color: INK_MUTE }}>29 maio 2026</span>
          <span style={{ fontSize: 12, color: INK_MUTE, display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={11} /> 6 min</span>
        </div>

        {/* HEADLINE */}
        <h1 style={{ fontSize: 54, fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 20px', color: INK, fontStyle: 'italic' }}>
          Testei a <span style={{ color: PINK_DARK, fontWeight: 700 }}>FootPriv</span> e venho contar tudo, meninas
        </h1>

        <p style={{ fontSize: 21, color: INK_SOFT, lineHeight: 1.5, fontWeight: 400, margin: '0 0 36px', maxWidth: 720, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
          Hoje vou falar da FootPriv — a plataforma de venda anônima de foto do pé que tá explodindo nos grupos do zap. Como cheguei até ela, como foi o cadastro, quanto vendi no primeiro dia e o que vale a pena saber antes.
        </p>

        {/* AUTORA + ACTIONS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '22px 0', borderTop: '1px solid ' + LINE, borderBottom: '1px solid ' + LINE, marginBottom: 44 }}>
          <img src={FOTO_AUTOR} alt="Rosana" style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover', border: '3px solid ' + PINK_LIGHT }} />
          <div style={{ flex: 1, fontFamily: 'system-ui, sans-serif' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <span style={{ fontWeight: 700, fontSize: 15, color: INK }}>Rosana Sentinella</span>
              <span style={{ fontSize: 10, background: PINK, color: '#fff', padding: '3px 9px', borderRadius: 999, fontWeight: 800, letterSpacing: '0.05em' }}>✿ EDITORA</span>
            </div>
            <div style={{ fontSize: 13, color: INK_MUTE }}>Apaixonada por achados digitais que ninguém viu ainda</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <IconBtn icon={Heart} />
            <IconBtn icon={Bookmark} />
            <IconBtn icon={Share2} />
          </div>
        </div>

        {/* HERO IMG */}
        <div style={{ borderRadius: 24, overflow: 'hidden', marginBottom: 14, aspectRatio: '2/1', boxShadow: '0 20px 60px rgba(236,72,153,0.15)' }}>
          <img src={HERO_IMG} alt="FootPriv plataforma" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <p style={{ fontSize: 12, color: INK_MUTE, fontStyle: 'italic', marginBottom: 50, textAlign: 'center', fontFamily: 'Georgia, serif' }}>
          A FootPriv chegou ao Brasil e em pouco tempo virou pauta entre as mulheres
        </p>

        {/* CORPO DA MATÉRIA */}
        <article style={{ maxWidth: 680, margin: '0 auto', fontFamily: 'Georgia, "Times New Roman", serif' }}>

          {/* LEAD COM DROP CAP */}
          <p style={{ fontSize: 20, lineHeight: 1.8, color: INK_SOFT, marginBottom: 24 }}>
            <span style={{ float: 'left', fontSize: 86, lineHeight: 0.85, fontWeight: 700, color: PINK_DARK, marginRight: 14, marginTop: 8, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>E</span>
            ra uma terça-feira de tarde quando recebi um print no grupo das amigas. <em>"Vocês viram isso?"</em> — escreveu a Camila. Era um anúncio falando que mulheres tavam ganhando uns três mil reais por semana vendendo foto do pé.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 24 }}>
            Confesso que minha primeira reação foi rir. <em>"Camila, isso é golpe na cara, larga isso."</em> Mandei um áudio meio de deboche e segui minha vida.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 24 }}>
            Mas a coisa não parou. Dois dias depois, no grupo das mães da escola da minha filha, outra apareceu. <em>"Meninas, alguém aqui ouviu falar dessa tal FootPriv?"</em> Uma terceira, no grupo do trabalho. Uma quarta, em um grupo de pilates que eu nem lembro como entrei.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 40 }}>
            Foi aí que parei pra investigar de verdade. E o que descobri vale demais compartilhar com vocês.
          </p>

          {/* CITAÇÃO COM DESIGN */}
          <div style={{ position: 'relative', margin: '50px 0', padding: '30px 36px', background: PINK_SOFT, borderRadius: 20, borderLeft: '5px solid ' + PINK }}>
            <div style={{ position: 'absolute', top: -16, left: 28, fontSize: 64, color: PINK, fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</div>
            <p style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.5, color: PINK_DARK, fontStyle: 'italic', margin: 0, paddingTop: 6 }}>
              Quando o quarto grupo de WhatsApp em uma semana começa a falar do mesmo aplicativo, alguma coisa tá acontecendo. Vai por mim, meninas.
            </p>
          </div>

          {/* SECAO 1 */}
          <h2 style={{ fontSize: 36, fontWeight: 700, fontStyle: 'italic', color: INK, margin: '60px 0 24px', lineHeight: 1.2 }}>
            Como funciona, na prática
          </h2>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 20 }}>
            Vou te explicar como se eu tivesse mandando áudio no zap. Sem rodeio, sem termo técnico.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 20 }}>
            Você acessa o site da <a href={LINK_FOOTPRIV} target="_blank" rel="noopener" style={{ color: PINK_DARK, textDecoration: 'underline', fontWeight: 700 }}>FootPriv</a>, faz um cadastro super rápido (uns três minutinhos no máximo) e já pode enviar a primeira foto do pé. Sem espera longa, sem aprovação demorada, sem ficar pulando entre páginas chatas.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 20 }}>
            Aprovado o cadastro, você tá dentro. Aí é simples: tira uma foto do pé. Pode ser descalço, com meia, com esmalte, no quarto, no parquinho, na areia. <strong style={{ color: PINK_DARK }}>Só o pé.</strong> Sem rosto, sem corpo, sem mostrar nenhuma outra coisa.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 20 }}>
            Aqui é onde a coisa fica interessante: a foto entra em um sistema de <strong>leilão</strong>. Tem mais de 40 mil compradores cadastrados, espalhados por uns 60 países. Cada um faz a sua oferta em moeda local — dólar, euro, libra, peso, dirham — e o app converte tudo pra real automaticamente.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 40 }}>
            E não é tipo OLX, onde quem dá o maior lance ganha automático. <strong style={{ color: PINK_DARK }}>Você escolhe.</strong> Aceitou? O dinheiro cai na sua conta, em real, na hora.
          </p>

          {/* AD BANNER ROSA */}
          <div style={{ background: 'linear-gradient(135deg, ' + PINK_SOFT + ', ' + PINK_LIGHT + ')', borderRadius: 20, padding: 28, marginBottom: 60, position: 'relative', overflow: 'hidden', border: '1px solid ' + LINE }}>
            <div style={{ fontSize: 9, color: INK_MUTE, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 12, fontFamily: 'system-ui, sans-serif' }}>Publicidade</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ width: 60, height: 60, borderRadius: 16, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 900, fontSize: 24, color: PINK_DARK, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>✨</div>
              <div style={{ flex: 1, fontFamily: 'system-ui, sans-serif' }}>
                <div style={{ color: INK, fontWeight: 800, fontSize: 17, marginBottom: 4 }}>O Boticário Beauty Box</div>
                <div style={{ color: INK_SOFT, fontSize: 13 }}>Receba todo mês os produtos mais desejados</div>
              </div>
              <button style={{ background: PINK_DARK, color: '#fff', border: 'none', padding: '10px 18px', borderRadius: 999, fontWeight: 800, fontSize: 12, cursor: 'pointer', fontFamily: 'system-ui, sans-serif', whiteSpace: 'nowrap' }}>Eu quero</button>
            </div>
          </div>

          {/* SECAO 2 */}
          <h2 style={{ fontSize: 36, fontWeight: 700, fontStyle: 'italic', color: INK, margin: '60px 0 24px', lineHeight: 1.2 }}>
            O jeito esperto de quebrar a lógica antiga
          </h2>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 20 }}>
            Aqui é o ponto que me fez chorar de raiva, no bom sentido. Toda plataforma de monetização que eu já tinha visto — OnlyFans, Privacy, Patreon — funcionava no mesmo jogo: <strong>quanto maior o seu público, maior o seu ganho.</strong>
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 20 }}>
            E pra ter público, tinha que aparecer. Postar todo dia. Gravar reels. Responder DM. <strong>Tudo isso pra depois talvez conseguir vender alguma coisa.</strong> Quantas mulheres que eu conheço já desistiram de tentar renda extra online por causa disso? Várias.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 40 }}>
            Aí chega a <a href={LINK_FOOTPRIV} target="_blank" rel="noopener" style={{ color: PINK_DARK, textDecoration: 'underline', fontWeight: 700 }}>FootPriv</a> e vira a mesa. Em vez da creator ter que correr atrás do público, <strong>o app já tem o público pronto.</strong> A creator chega no app e já vende no primeiro dia.
          </p>

          {/* SECAO 3 */}
          <h2 style={{ fontSize: 36, fontWeight: 700, fontStyle: 'italic', color: INK, margin: '60px 0 24px', lineHeight: 1.2 }}>
            A questão do anonimato (que pra mim foi o ponto alto)
          </h2>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 20 }}>
            Ok, vou ser bem honesta agora. Essa parte aqui foi o que mais me pegou.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 20 }}>
            Em todos os outros apps que eu já vi, "anonimato" é tipo aquele filtro que você ativa no Insta. Tem lá a opção, você liga, mas no final do dia o aplicativo precisa que você apareça pra atrair compradores.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 20 }}>
            Na <a href={LINK_FOOTPRIV} target="_blank" rel="noopener" style={{ color: PINK_DARK, textDecoration: 'underline', fontWeight: 700 }}>FootPriv</a>, anonimato é a base do negócio. <strong>Você simplesmente não aparece.</strong> Em momento nenhum.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 40 }}>
            Pensei na minha tia, que é viúva e ficou com três filhos. Pensei na minha amiga separada que tem medo do ex saber da vida dela. Pensei na colega de trabalho que adoraria uma renda extra mas morre de medo de alguém da família comentar. <strong>Quanta mulher por aí precisa de algo que respeite a privacidade dela?</strong>
          </p>

          {/* CARD PONTO-CHAVE ROSA */}
          <div style={{ background: 'linear-gradient(135deg, ' + PINK_DARK + ', ' + PINK + ')', color: '#fff', borderRadius: 24, padding: 32, marginBottom: 60, position: 'relative', overflow: 'hidden', boxShadow: '0 20px 60px rgba(190,24,93,0.25)' }}>
            <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ fontSize: 11, fontWeight: 800, color: '#FFF', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14, fontFamily: 'system-ui, sans-serif', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Sparkles size={14} /> Ponto crítico
            </div>
            <div style={{ fontSize: 22, fontWeight: 400, fontStyle: 'italic', lineHeight: 1.5, position: 'relative', zIndex: 1 }}>
              Seu marido, namorado, mãe, sogra, vizinha, chefe, colega — <strong>nenhuma dessas pessoas vai descobrir, nem se quiser</strong>. O app foi pensado pra que ninguém da sua vida real nunca saiba o que tá rolando.
            </div>
          </div>

          {/* SECAO 4 - DEPOIS DE TESTAR */}
          <h2 style={{ fontSize: 36, fontWeight: 700, fontStyle: 'italic', color: INK, margin: '60px 0 24px', lineHeight: 1.2 }}>
            O que eu acho depois de testar
          </h2>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 20 }}>
            Pessoal, vou ser muito sincera com vocês. Hoje é o <strong style={{ color: PINK_DARK }}>quinto dia que eu tô usando a FootPriv</strong> — e até esse momento já consegui sacar <strong style={{ color: PINK_DARK }}>R$ 1.100</strong> direto na minha conta.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 20 }}>
            Não tô falando de promessa, de "potencial de ganho", nem de cifra inflada pra impressionar. É exatamente o que entrou na minha conta nesses primeiros cinco dias, testando o app sem pressa.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 20 }}>
            Comecei esse texto debochando da Camila no zap. Termino agora, depois de quase uma semana testando, com uma opinião que mudou completamente.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 20 }}>
            Eu juro de pés juntos que não tô ganhando um real a mais pra falar da <a href={LINK_FOOTPRIV} target="_blank" rel="noopener" style={{ color: PINK_DARK, textDecoration: 'underline', fontWeight: 700 }}>FootPriv</a> aqui. Cheguei nela pelo zap igual qualquer uma. Testei na pele. Saquei meu dinheiro. E vim escrever isso porque achei justo dividir com vocês.
          </p>

          <p style={{ fontSize: 19, lineHeight: 1.8, color: INK_SOFT, marginBottom: 40 }}>
            <strong>Não sei como vai ser nos próximos dias com esse boom todo da plataforma</strong> — pode ser que apareça mais gente do que vaga, pode ser que o leilão fique mais competitivo. O que sei é que hoje, no quinto dia, ainda tá rolando muito bem pra mim.
          </p>

          {/* CTA FINAL */}
          <div style={{ marginTop: 50, marginBottom: 50, padding: '40px 0', textAlign: 'center', borderTop: '1px solid ' + LINE, borderBottom: '1px solid ' + LINE }}>
            <p style={{ fontSize: 18, color: INK_SOFT, lineHeight: 1.7, marginBottom: 28, maxWidth: 580, margin: '0 auto 28px', fontStyle: 'italic' }}>
              Vou deixar aqui embaixo o link pra vocês acessarem a plataforma e darem uma olhada por conta própria. Não tenho nada a esconder — explorem, comparem, façam suas próprias conclusões.
            </p>
            <a href={LINK_FOOTPRIV} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg, ' + PINK + ', ' + ROSE_GOLD + ')', color: '#fff', padding: '16px 36px', borderRadius: 999, fontWeight: 800, fontSize: 15, textDecoration: 'none', boxShadow: '0 12px 30px rgba(236,72,153,0.35)', fontFamily: 'system-ui, sans-serif' }}>
              Acessar FootPriv <ArrowUpRight size={17} />
            </a>
          </div>

          {/* AVISO */}
          <div style={{ borderTop: '1px solid ' + LINE, paddingTop: 24, fontSize: 12, color: INK_MUTE, lineHeight: 1.7, fontStyle: 'italic', marginTop: 40, textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
            <strong>Aviso editorial:</strong> Qualquer menção a marcas reflete somente a experiência pessoal da autora, sem qualquer relação comercial.
          </div>

        </article>

        {/* SOBRE AUTORA */}
        <div style={{ marginTop: 80, background: PINK_SOFT, borderRadius: 28, padding: '42px 36px', display: 'flex', gap: 26, alignItems: 'center', border: '1px solid ' + LINE }}>
          <img src={FOTO_AUTOR} alt="Rosana" style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '4px solid #fff', boxShadow: '0 8px 24px rgba(236,72,153,0.15)' }} />
          <div style={{ flex: 1, fontFamily: 'system-ui, sans-serif' }}>
            <div style={{ fontSize: 11, color: PINK_DARK, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>✿ Quem escreveu</div>
            <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 8, color: INK, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>Rosana Sentinella</div>
            <div style={{ fontSize: 14, color: INK_SOFT, lineHeight: 1.6 }}>
              Editora do Diário do Interior. Apaixonada por descobertas digitais, achados que ninguém viu ainda, e tudo que pode fazer a vida da mulher brasileira mais leve. Mãe da Helena, esposa do João, escreve daqui pra vocês com muito carinho.
            </div>
          </div>
        </div>

        {/* DA MESMA AUTORA */}
        <div style={{ marginTop: 80 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 30 }}>
            <h3 style={{ fontSize: 30, fontWeight: 400, fontStyle: 'italic', letterSpacing: '-0.02em', color: INK, margin: 0 }}>
              ✿ <span style={{ color: PINK_DARK }}>Da mesma autora</span>
            </h3>
            <a href="#" style={{ fontSize: 13, color: PINK_DARK, textDecoration: 'none', fontWeight: 700, fontFamily: 'system-ui, sans-serif' }}>Ver tudo →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 22 }}>
            <CardBlog href="/advcoletaki" categoria="Trabalho & Renda" titulo="Como mulheres do interior estão ganhando R$ 3 a 6 mil sem sair de casa" data="17 maio 2026" minutos="5 min" cor1={PINK} cor2={ROSE_GOLD} />
            <CardBlog href="#" categoria="Lifestyle" titulo="A rotina matinal que mudou minha semana inteira (e não tem nada a ver com produtividade)" data="14 abril 2026" minutos="4 min" cor1={ROSE_GOLD} cor2={BLUSH} />
            <CardBlog href="#" categoria="Bem-estar" titulo="Por que parei de comparar minha vida com a das influencers do Instagram" data="14 março 2026" minutos="6 min" cor1={BLUSH} cor2={PINK_LIGHT} />
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ marginTop: 100, paddingTop: 40, borderTop: '1px solid ' + LINE, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, fontFamily: 'system-ui, sans-serif' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: INK_MUTE }}>
            <Sparkles size={14} color={PINK} /> 
            © 2026 Diário do Interior · Feito com carinho pra você
          </div>
          <div style={{ display: 'flex', gap: 20, fontSize: 12, color: INK_MUTE }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Sobre</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Newsletter</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacidade</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contato</a>
          </div>
        </div>

      </main>

      <style>{`
        @media (max-width: 768px) {
          .menu-d { display: none !important; }
          h1 { font-size: 36px !important; }
          h2 { font-size: 26px !important; }
        }
      `}</style>
    </div>
  );
}

function IconBtn({ icon: Icon }) {
  return (
    <button style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff', border: '1px solid #F4E4EC', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#BE185D', boxShadow: '0 2px 8px rgba(236,72,153,0.08)' }}>
      <Icon size={15} />
    </button>
  );
}

function CardBlog({ href, categoria, titulo, data, minutos, cor1, cor2 }) {
  return (
    <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
      <article style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1px solid #F4E4EC', cursor: 'pointer', boxShadow: '0 4px 14px rgba(236,72,153,0.06)' }}>
        <div style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg, ' + cor1 + ', ' + cor2 + ')', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Sparkles size={36} color="#fff" style={{ opacity: 0.5 }} />
        </div>
        <div style={{ padding: 22, fontFamily: 'system-ui, sans-serif' }}>
          <div style={{ fontSize: 10, fontWeight: 800, color: '#BE185D', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>{categoria}</div>
          <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35, color: '#1F1F1F', marginBottom: 14, letterSpacing: '-0.01em', fontFamily: 'Georgia, serif' }}>{titulo}</div>
          <div style={{ fontSize: 12, color: '#71717A', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span>{data}</span>
            <span>·</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={11} /> {minutos}</span>
          </div>
        </div>
      </article>
    </a>
  );
}
