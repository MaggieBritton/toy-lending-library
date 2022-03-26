import React from 'react';
import { Button } from 'reactstrap';
import InventoryCard from './InventoryCard';

const FeaturedToys = (props)=> {
    return(
        <div className="container-fluid featuredToys-bg">
            <div className="row">
                <div className="col">
                    <h2 className="text-center my-4">Featured Toys</h2>
                </div>
            </div>
            <InventoryCard inventoryItems={props.inventoryItems} />
            <div className="row">
                <div className="col text-center">
                    <Button className="button my-4">More Toys</Button>
                </div>
            </div>
        </div>    
    );
};

export default FeaturedToys;