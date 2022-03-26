import React from 'react';
import InventoryCard from './InventoryCard';
import { Button } from 'reactstrap';

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
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3 mt-4 ml-2">
                    <div className="filter-heading-div mr-2">
                        <h3 className="filter-heading">Filters</h3>
                        <a>clear all</a>   
                    </div>
                    
                    
                    <h4 className="filter-heading">Category</h4>
                    <Button outline className="filter-btn">building</Button>
                    <Button outline className="filter-btn">dolls</Button>
                    <Button outline className="filter-btn">games</Button>
                    <Button outline className="filter-btn">pretend</Button>
                    <Button outline className="filter-btn">puzzles</Button>
                    <Button outline className="filter-btn">outdoor</Button>
                    <Button outline className="filter-btn">vehicles</Button>

                    <h4 className="filter-heading">Age</h4>
                    <Button outline className="filter-btn">0-3</Button>
                    <Button outline className="filter-btn">3-6</Button>
                    <Button outline className="filter-btn">6-9</Button>
                    <Button outline className="filter-btn">9-12</Button>

                    <h4 className="filter-heading">Availability</h4>
                    <Button outline className="filter-btn">available</Button>
                    <Button outline className="filter-btn">checked out</Button>


                </div>
                <div className="col">
                    <InventoryCard inventoryItems={props.inventoryItems}/> 
                </div>
            </div>
            
        </div>  
    )
};


export default Toys;

/* 

To Do:
Add filters to Toy Inventory Page
Code individual toy pages
Code About Us, Sign Up, Contact pages
Add animation to cards when hovered on (slight wiggle or scale?)

*/