import './globals.css';
import { Suspense } from 'react';
import PostHogProvider from '../components/PostHogProvider';

export const metadata = {
  title: 'Diário do Interior - Notícias e Economia do Interior Paulista',
  description: 'Jornalismo independente cobrindo economia, trabalho, oportunidades e tendências do interior paulista.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <Suspense fallback={null}>
          <PostHogProvider>{children}</PostHogProvider>
        </Suspense>
      </body>
    </html>
  );
}
