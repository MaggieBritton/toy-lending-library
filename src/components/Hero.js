import React, { Component } from 'react';

class Hero extends Component {
    render () {
        return (
            <div className="hero">
                <img className="hero-image" src="assets/siteImages/heroTrain.jpg" />
                <div className="hero-text">
                    <h1>Toy Lending Library</h1>
                    <p>Welcome to the premier toy lending library of Big City, USA. We have served this community for over 25 years and helped generations of children through play.</p>
                </div>  
            </div>
        );
    }
}


export default Hero;
