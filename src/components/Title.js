import React from 'react';
import { Button } from 'reactstrap';

const Title = () => {
    return (
        <div className="container-fluid title-container">
            <div className="row">
                <div className="col-9 col-md-10 col-xl-11">
                    <h1 className='title-text'>TLL</h1>
                </div>
                <div className="col-3 col-md-2 col-xl-1">
                    <Button className="login-btn" size="sm">Login</Button>
                </div>
            </div>
        </div>
    );
}

export default Title;