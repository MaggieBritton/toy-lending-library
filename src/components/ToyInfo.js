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
                        <p className="toyInfo-text">category: {category}</p>
                        <p className="toyInfo-text">age(s): {age.join(', ')}</p>
                        <p className="toyInfo-text">status: {checkedOut === true ? 'checked out' : 'available'}</p>
                        <p className="toyInfo-text">description: {description}</p>
                        
                    </div>
                </div>
            </div>
        );
    } else {
        return <div />;
    }  
 }

export default ToyInfo;
