import React from 'react';
import { Card, CardImg, CardTitle, CardText, Button, CardImgOverlay } from 'reactstrap';

const RenderToys = ({inventoryItems}) => {
    

    return(
        <div className="row mt-4">{inventoryItems.map(item => 
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

const Toys = (props)=> {
    return(
        <div className="container-fluid">
            <div className="row toyInventory-bg">
                <div className="col my-auto">
                    <h2 className="text-center">Toy Inventory</h2>
                </div>
                <div className="col">
                    <img className="inventory-img" src="assets/siteImages/orangeDumpTruck.jpg" alt="Orange Metal Dump Trucklk"/>
                </div>
            </div>
            <RenderToys inventoryItems={props.inventoryItems} />
        </div>    
    );
};


export default Toys;

/* 

To Do:
Add filters to Toy Inventory Page
Extract <Card> into its own component that Featured Toys and Toys (Inventory) share
Code individual toy pages
Code About Us, Sign Up, Contact pages

*/