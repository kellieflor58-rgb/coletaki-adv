import PageClient from './PageClient';

export const metadata = {
  title: 'Como faturo R$ 3,5 a R$ 6 mil em casa sendo ponto de coleta · Café com Dicas',
  description: 'Saí da CLT em junho do ano passado, virei Uber, queimei reserva. Em janeiro descobri o modelo de ponto de coleta de marketplaces. Em 4 meses estabilizei minha renda entre R$ 3,5 e R$ 6 mil.',
  icons: {
    icon: '/cafe-favicon.png',
    apple: '/cafe-apple.png',
  },
};

export default function Page() {
  return <PageClient />;
}
