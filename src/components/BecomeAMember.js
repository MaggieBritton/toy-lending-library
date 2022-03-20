import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const BecomeAMember = () => {
    return(
        <div className="container-fluid py-5 become-bg text-center">
            <div className="row">
                <div className="col">
                    <h4>Would you like to become a part of the TLL family?</h4>
                    <h4>Become a member today!</h4>
                    <Link to='/signup'><Button className="button">Sign Up</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default BecomeAMember;