import React from 'react';

const WhatIs = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-xs-12 col-lg-6">
                    <img className="whatIs-image" src="assets/siteImages/TLLBearSquare.jpg" alt="Teddy bear wearing aviator goggles and scarf." />
                </div>
                <div className="col-xs-12 col-lg-6 my-lg-auto">
                    <h2 className="whatIs-text">What is a Toy Lending Library?</h2>
                    <p className="whatIs-text">
                    A toy lending library is simply a library that lends <em>toys</em> rather than books. Many children are accustomed to checking books out of a library, reading them for a few weeks, and then returning them for others to enjoy. While some parents may worry that their children will become too attached to the lending library's toys to return them, we find over and over that children love being able to explore new toys, and returning old ones is no problem.   
                    </p>
                    <p className="whatIs-text">
                    If you have ever bought a new toy for your child only to have the toy enjoyed for a week and then cast aside, a membership to TLL may be just the solution you are looking for. Borrowing toys means that your child can explore many different interests without the toys or games becoming a permanent fixture in your home. You can check out large or expensive toys that you may not have the budget to purchase or room to store. And it's good for the environment, too.    
                    </p>
                </div>
            </div>   
        </div>
    );
}

export default WhatIs;