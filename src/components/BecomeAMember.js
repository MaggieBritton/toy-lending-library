import React from 'react';
import { Button } from 'reactstrap';


const BecomeAMember = () => {
    return(
        <div className="container-fluid py-5 become-bg text-center">
            <div className="row">
                <div className="col">
                    <h4>Would you like to become a part of the TLL family?</h4>
                    <h4>Become a member today!</h4>
                    <Button className="button">Sign Up</Button>
                </div>
            </div>
        </div>
    );
}

export default BecomeAMember;