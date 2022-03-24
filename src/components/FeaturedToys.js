import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardDeck, Button, CardImgOverlay } from 'reactstrap';

const RenderFeaturedToys = ({inventoryItems}) => {
    

    return(
        <div className="row">{inventoryItems.map(item => 
            <div className="col-xs-12 col-sm-6 col-lg-3">
                <Card className="featuredToy-card mb-3" key={item.id}>
                    <CardImg id="featuredToy-image" className="featuredToy-image" top src={item.image} alt={item.name} />
                    <CardImgOverlay id="featuredToy-overlay" className="featuredToy-overlay text-center">
                        <div className="featuredToy-allText">
                            <CardTitle tag="h4" className="featuredToy-title">{item.name}</CardTitle>
                            <CardText className="featuredToy-text">
                                {item.category}
                                <br />
                                ages {item.age.join(", ")}
                            </CardText>
                            <Button className="featuredToy-btn">View Details</Button>
                        </div>
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
                    <h2 className="text-center my-5">Featured Toys</h2>
                </div>
            </div>
            <RenderFeaturedToys inventoryItems={props.inventoryItems} />
        </div>    
    );
}

export default FeaturedToys;