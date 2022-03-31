import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardGroup, CardSubtitle, Button  } from 'reactstrap';

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        };
    }

    render () {
        return (
            <React.Fragment>    
                <div className="container-fluid">
                    <div className="row signup-bg">
                        <div className="col my-auto">
                            <h1 className="text-center">Sign Up</h1>
                        </div>
                        <div className="col pr-0">
                            <img className="signup-img" src="assets/siteImages/buildingBlockTower.jpg" alt="Two Children Building a Block Tower"/>
                        </div>
                    </div>
                </div>
                <div className="container my-4">
                    <div className="row">
                        <div className="col">
                            <p>There are two convenient ways to sign up for a TLL membership. Either visit our location in downtown Big City or select a plan below, fill out the sign-up form, and pay with PayPal.</p>
                        </div>
                    </div>
                    <div className="row">
                        <CardGroup>
                            <Card>
                                <CardBody className="text-center">
                                    <CardTitle><h4>3-Month Membership</h4></CardTitle>
                                    <CardSubtitle><strong>$15</strong></CardSubtitle>
                                    <CardText>New to the area? Not sure if a TLL membership is a good fit for your family? This three-month trial will give you ample time to decide if a yearly memebership is for you.</CardText>
                                    <Button>Select</Button>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody className="text-center">
                                    <CardTitle><h4>Yearly Membership</h4></CardTitle>
                                    <CardSubtitle><strong>$50</strong></CardSubtitle>
                                    <CardText>Take full advantage of our services with a yearly membership. Let your child(ren) explore our large selection of toys without making them a permanent fixure in your home.</CardText>
                                    <Button>Select</Button>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SignUp;

/* 
Create a sign-up form including the following:
first name
last name
address
phone number
email
first names and ages of children
checkbox to agree with policy about toy use, care, and cleaning 
checkbox to agree with policy about length of checkout and possible renewal of items

*/