import PageClient from './PageClient';

export const metadata = {
  title: 'Era entregador da Shopee, gastava R$ 1.000 em combustível. Hoje sou ponto de coleta e ganho mais sem rodar · Café com Dicas',
  description: 'Dois anos entregando para a Shopee na rua, faturando R$ 3 mil brutos mas gastando R$ 1.000 só em combustível. Conheci o outro lado da operação pegando pacotes em pontos residenciais. Hoje eu sou o ponto, e ganho mais sem rodar um metro.',
  icons: {
    icon: '/cafe-favicon.png',
    apple: '/cafe-apple.png',
  },
};

export default function Page() {
  return <PageClient />;
}
