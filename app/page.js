export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui', padding: 24, textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>Diário do Interior</h1>
        <p style={{ color: '#6B7280', marginBottom: 18 }}>Veja a matéria em destaque:</p>
        <a href="/advcoletaki" style={{ background: '#C4170C', color: '#fff', padding: '12px 20px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>
          Ler matéria sobre renda extra em Ribeirão Preto →
        </a>
      </div>
    </div>
  );
}
