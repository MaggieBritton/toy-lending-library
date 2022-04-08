import React, { useState } from 'react';
import InventoryCard from './InventoryCard';
import { Button } from 'reactstrap';

const Toys = ({ inventoryItems })=> {

    const [items, setItems] = useState(inventoryItems);

    const filterCategory = (category) => {
        const filteredCategoryResult = inventoryItems.filter(currentItem => {
            return currentItem.category === category;
        });
        setItems(filteredCategoryResult);
    }
    //filterAge function still isn't accessing age data because it's nested in its own array
    const filterAge = (age) => {
        const filteredAgeResult = inventoryItems.filter(currentItem => currentItem.age.includes(age));
        setItems(filteredAgeResult);
    }

    const filterStatus = (status) => {
        const filteredStatusResult = inventoryItems.filter(currentItem => {
            return currentItem.checkedOut === status;
        });
        setItems(filteredStatusResult);
    }

    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row toyInventory-bg">
                    <div className="col my-auto">
                        <h2 className="text-center">Toy Inventory</h2>
                    </div>
                    <div className="col  pr-0">
                        <img className="inventory-img" src="assets/siteImages/orangeDumpTruck.jpg" alt="Orange Metal Dump Truck"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3 mt-4">
                        <div className="filter-heading-div">
                            <h3 className="filter-heading">Filters</h3>
                            <Button outline color="danger" className="btn-sm filter-btn" onClick={()=>{setItems(inventoryItems)}}>clear all</Button>   
                        </div>
                        
                        
                        <h4 className="filter-heading">Category</h4>
                        <Button outline className="filter-btn" onClick={() => filterCategory('building')}>building</Button>
                        <Button outline className="filter-btn"onClick={() => filterCategory('dolls')}>dolls</Button>
                        <Button outline className="filter-btn" onClick={() => filterCategory('games')}>games</Button>
                        <Button outline className="filter-btn"onClick={() => filterCategory('pretend')}>pretend</Button>
                        <Button outline className="filter-btn" onClick={() => filterCategory('puzzles')}>puzzles</Button>
                        <Button outline className="filter-btn"onClick={() => filterCategory('outdoor')}>outdoor</Button>
                        <Button outline className="filter-btn" onClick={() => filterCategory('vehicles')}>vehicles</Button>

                        <h4 className="filter-heading">Age</h4>
                        <Button outline className="filter-btn" onClick={()=>{filterAge('0-3')}}>0-3</Button>
                        <Button outline className="filter-btn" onClick={()=>{filterAge('3-6')}}>3-6</Button>
                        <Button outline className="filter-btn" onClick={()=>{filterAge('6-9')}}>6-9</Button>
                        <Button outline className="filter-btn" onClick={()=>{filterAge('9-12')}}>9-12</Button>

                        <h4 className="filter-heading">Status</h4>
                        <Button outline className="filter-btn" onClick={()=>{filterStatus(false)}}>available</Button>
                        <Button outline className="filter-btn" onClick={()=>{filterStatus(true)}}>checked out</Button>


                    </div>
                    <div className="col">
                        <InventoryCard inventoryItems={items}/> 
                    </div>
                </div>
            </div> 
        </React.Fragment> 
    )
};


export default Toys;

/* 

To Do:
Add filters to Toy Inventory Page
Add animation to cards when hovered on (slight wiggle or scale?)

*/