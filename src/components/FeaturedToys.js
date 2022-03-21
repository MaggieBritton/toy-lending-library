import React from 'react';
import { Card, CardImg } from 'reactstrap';

const RenderFeaturedToys = ({inventoryItems}) => {
        return(
            <div>{inventoryItems.map(item => 
                <Card key={item.id}>
                    <CardImg src={item.image} alt={item.name} />
                </Card> )}
            </div>
        );
}

const FeaturedToys = (props)=> {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="text-center">Featured Toys</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <RenderFeaturedToys inventoryItems={props.inventoryItems} />
                </div>
            </div>
        </div> 
        
    );
}

export default FeaturedToys;