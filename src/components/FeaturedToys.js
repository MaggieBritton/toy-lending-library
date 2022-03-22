import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardDeck, Button } from 'reactstrap';

const RenderFeaturedToys = ({inventoryItems}) => {
    
    return(
        <div className="row">{inventoryItems.map(item => 
            <div className="col-xs-12 col-sm-6 col-lg-3">
                <Card className="featuredToy-card mb-3" key={item.id}>
                    <CardImg className="featuredToy-image" top src={item.image} alt={item.name} />
                    <CardImgOverlay className="featuredToy-overlay text-center">
                        <CardTitle className="featuredToy-title">{item.name}</CardTitle>
                        <CardText className="featuredToy-text">
                            {item.category}
                            <br />
                            ages {item.age}
                        </CardText>
                        <Button className="featuredToy-btn">View Details</Button>
                    </CardImgOverlay>
                </Card> 
            </div>)}
        </div>
    );
};

const FeaturedToys = (props)=> {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="text-center">Featured Toys</h2>
                </div>
            </div>
            <RenderFeaturedToys inventoryItems={props.inventoryItems} />
        </div>    
    );
}

export default FeaturedToys;