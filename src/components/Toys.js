import React from 'react';
import InventoryCard from './InventoryCard';

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
            <InventoryCard inventoryItems={props.inventoryItems}/> 
        </div>  
    )
};


export default Toys;

/* 

To Do:
Add filters to Toy Inventory Page
Extract <Card> into its own component that Featured Toys and Toys (Inventory) share
Code individual toy pages
Code About Us, Sign Up, Contact pages
Add animation to cards when hovered on (slight wiggle or scale?)

*/