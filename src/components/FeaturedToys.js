import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import InventoryCard from './InventoryCard';

const FeaturedToys = ({inventoryItems})=> {
    
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
            <div className="row">
                {inventoryItems.map((item, index) => {
                    if (inventoryItems.featured === false) return null;
                                
                    return (
                        <InventoryCard key={index} item={item}/>
                    )
                })}
            </div>
            <div className="row">
                <div className="col text-center">
                    <Button className="button my-4" onClick={()=> handleClick("/toys")}>More Toys</Button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedToys;
