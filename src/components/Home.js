import React, { Component } from 'react';
import Hero from './Hero';
import WhatIs from './WhatIs';
import BecomeAMember from './BecomeAMember';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
          <Hero />
          <WhatIs />
          <BecomeAMember />
      </React.Fragment>

    );
  }
}

export default Home;
