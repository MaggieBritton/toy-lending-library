import React, { useState } from 'react';
import InventoryCard from './InventoryCard';
import { Button } from 'reactstrap';

const Toys = ({ inventoryItems })=> {
    const [filterAge, setFilterAge] = useState(null)
    const [filterStatus, setFilterStatus] = useState(false)
    const [filterCategory, setFilterCategory] = useState(null)

    const resetFilter = () => {
        setFilterAge(null)
        setFilterStatus(false)
        setFilterCategory(null)
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
                          <Button outline color="danger" className="btn-sm filter-btn" onClick={()=>resetFilter()}>clear all</Button>
                      </div>

                      <h4 className="filter-heading">Category</h4>
                      <button
                        className={`filter-btn btn ${filterCategory === "building" ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setFilterCategory('building')}>
                          building
                      </button>
                      <button
                        className={`filter-btn btn ${filterCategory === "dolls" ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setFilterCategory('dolls')}>
                          dolls
                      </button>
                      <button
                        className={`filter-btn btn ${filterCategory === "games" ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setFilterCategory('games')}>
                          games
                      </button>
                      <button
                        className={`filter-btn btn ${filterCategory === "pretend" ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setFilterCategory('pretend')}>
                          pretend
                      </button>
                      <button
                        className={`filter-btn btn ${filterCategory === "puzzles" ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setFilterCategory('puzzles')}>
                          puzzles
                      </button>
                      <button
                        className={`filter-btn btn ${filterCategory === "outdoor" ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setFilterCategory('outdoor')}>
                          outdoor
                      </button>
                      <button
                        className={`filter-btn btn ${filterCategory === "vehicles" ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setFilterCategory('vehicles')}>
                          vehicles
                      </button>

                      <h4 className="filter-heading">Age</h4>
                      <button
                        className={`filter-btn btn ${filterAge === "0-3" ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setFilterAge('0-3')}>
                          0-3
                      </button>
                      <button
                        className={`filter-btn btn ${filterAge === "3-6" ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setFilterAge('3-6')}>
                          3-6
                      </button>
                      <button
                        className={`filter-btn btn ${filterAge === "6-9" ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setFilterAge('6-9')}>
                          6-9
                      </button>
                      <button
                        className={`filter-btn btn ${filterAge === "9-12" ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setFilterAge('9-12')}>
                          9-12
                      </button>

                      <h4 className="filter-heading">Status</h4>
                      <button
                        className={`filter-btn btn ${filterStatus === false ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setFilterStatus(false)}>
                          Available
                      </button>
                      <button
                        className={`filter-btn btn ${filterStatus === true ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setFilterStatus(true)}>
                          Checked Out
                      </button>
                  </div>
                  <div className="col">
                      <div className="row">
                          {inventoryItems.map((item, index) => {
                              if (filterStatus !== item.checkedOut) return null
                              if (filterCategory !== null && filterCategory !== item.category) return null
                              if (filterAge !== null && !item.age.includes(filterAge)) return null

                              return (
                                <InventoryCard key={index} item={item}/>
                              )
                          })}
                      </div>
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
