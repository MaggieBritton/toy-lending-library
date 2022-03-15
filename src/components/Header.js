import React, { Component } from 'react';
import Banner from './Banner';
import Title from './Title';

export default class Header extends Component {
    constructor(props) {
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
    return (
      <React.Fragment>
          <Banner />
          <Title />

          
      </React.Fragment>
    )
  }
}
