import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import InventoryCard from './InventoryCard';

const FeaturedToys = (props)=> {
    
    //The button at the bottom of this component uses the useHistory hook to route to the /toys view.

    const history = useHistory();

    function handleClick(path) {
        history.push(path);
    }
    
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
                    <Button className="button my-4" onClick={()=> handleClick("/toys")}>More Toys</Button>
                </div>
            </div>
        </div>    
    );
};

export default FeaturedToys;