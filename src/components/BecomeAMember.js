import React from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';


const BecomeAMember = () => {
    
    const history = useHistory();

    function handleClick(path) {
        history.push(path);
    }
    
    return(
        <div className="container-fluid py-4 become-bg text-center">
            <div className="row">
                <div className="col">
                    <h3>Would you like to become a part of the TLL family?
                    <br /> Become a member today!</h3>
                    <Button className="button mt-2" onClick={()=> handleClick("/signup")}>Sign Up</Button>
                </div>
            </div>
        </div>
    );
}

export default BecomeAMember;