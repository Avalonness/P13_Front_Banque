import React from 'react';
import HeroComposant from '../../Composant/Hero/hero.composant';
import FeatureComposant from '../../Composant/Feature/feature.composant';
import ChatIcon from '../../Shares/img/icon-chat.png';
import MoneyIcon from '../../Shares/img/icon-money.png';
import SecurityIcon from '../../Shares/img/icon-security.png';

function AcceuilLayout() {
  return (
    <main>
      <HeroComposant />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureComposant
          iconSrc={ChatIcon}
          altText="Chat Icon"
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureComposant
          iconSrc={MoneyIcon}
          altText="Money Icon"
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureComposant
          iconSrc={SecurityIcon}
          altText="Security Icon"
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  );
}

export default AcceuilLayout;