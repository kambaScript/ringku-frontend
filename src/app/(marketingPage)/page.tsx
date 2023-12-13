import { ModeToggle } from '@/components/mode-toggle';

import { ContainerMarketingPage } from './_components/container';
import { Header } from './_components/header';
import { Hero } from './_components/hero';

const MarketingPage = () => {
  return (
    <Hero>
      <ContainerMarketingPage>
        <Header />
        <h1>
          <ModeToggle />
        </h1>
      </ContainerMarketingPage>
    </Hero>
  );
};

export default MarketingPage;
