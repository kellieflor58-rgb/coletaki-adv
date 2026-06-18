import PageClient from './PageClient';

export const metadata = {
  title: 'Caí no golpe do "trabalho em casa montando embalagens" e descobri o que realmente funciona · Café com Dicas',
  description: 'Comprei um kit de R$ 297 prometendo R$ 4 mil por mês montando embalagens em casa. Nunca chegou. Acabei descobrindo um modelo de logística residencial que funciona de verdade. Conto a história sem firula.',
  icons: {
    icon: '/cafe-favicon.png',
    apple: '/cafe-apple.png',
  },
};

export default function Page() {
  return <PageClient />;
}
