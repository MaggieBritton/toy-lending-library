import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
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
                    <Button className="button my-4"><Link>More Toys</Link></Button>
                </div>
            </div>
        </div>    
    );
};

export default FeaturedToys;

/*

Read article on linking to another part of the page using a Reactstrap Button and React Router Dom using Hooks
*/