import React from 'react';
import Hero from './Hero';
import FeaturedToys from './FeaturedToys';
import WhatIs from './WhatIs';
import BecomeAMember from './BecomeAMember';

const Home = (props) => {
    return (
      <React.Fragment>
          <Hero />
          <FeaturedToys inventoryItems = {props.inventoryItems} />
          <WhatIs />
          <BecomeAMember />
      </React.Fragment>
    );
}

export default Home;
