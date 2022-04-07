import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const ToyInfo = ({toy}) => {
    const { name, category, age, image, description, checkedOut } = toy;
    
    if(toy) {
        return (
            <div className="container my-4">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/toys">Toy Inventory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-4">
                        <img className="toyInfo-img mb-3" src={image} alt={name} />
                    </div>
                    <div className="col my-sm-auto">
                        <h1>{name}</h1>
                        <h4>category: {category}</h4>
                        <h4>age(s): {age.join(', ')}</h4>
                        <h4>status: {checkedOut === true ? 'checked out' : 'available'}</h4>
                        <h4>description:</h4>
                        <p>{description}</p>
                        
                    </div>
                </div>
            </div>
        );
    } else {
        return <div />;
    }  
 }

export default ToyInfo;
