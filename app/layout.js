import './globals.css';

export const metadata = {
  title: 'Diário do Interior - Notícias e Economia do Interior Paulista',
  description: 'Jornalismo independente cobrindo economia, trabalho, oportunidades e tendências do interior paulista. Conteúdo editorial diário.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
