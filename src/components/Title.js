import React from 'react';
import { Button } from 'reactstrap';

const Title = () => {
    return (
        <div className="title-container">
            <h1 className='title-text'>TLL</h1>
            <Button className="login-btn" size="sm">Login</Button>
        </div>
    );
}

export default Title;