import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardGroup, CardSubtitle, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            address: '',
            apartment: '',
            city: '',
            state: '',
            zip: '',
            child1Name: '',
            child1Age: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        //below console.log and alert simply verify that the form is working
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
        //below setState clears form inputs after submit
        this.setState({
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            contactType: 'By Email',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        });
    }

    validate(firstName, lastName, phoneNum, email) {

        const errors = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 characters or fewer.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 characters or fewer.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers.';
        }

        const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
        if (this.state.touched.email && !emailReg.test(email)) {
            errors.email = 'Invalid email.';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    render () {
        
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);
        
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
                    <div className="row">
                        <div className="col">
                        <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstName" md={2}>Parent/Guardian First Name</Label>
                                    <Col md={10} lg={8}>
                                        <Input required type="text" id="firstName" name="firstName" placeholder="First Name"
                                        value={this.state.firstName}
                                        invalid={errors.firstName}
                                        onBlur={this.handleBlur("firstName")}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.firstName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastName" md={2}>Parent/Guardian Last Name</Label>
                                    <Col md={10} lg={8}>
                                        <Input required type="text" id="lastName" name="lastName" placeholder="Last Name"
                                        value={this.state.lastName}
                                        invalid={errors.lastName}
                                        onBlur={this.handleBlur("lastName")}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.lastName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="address" md={2}>Address</Label>
                                    <Col md={10} lg={8}>
                                        <Input required type="text" id="address" name="address" placeholder="Address" value={this.state.address} onChange={this.handleInputChange}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="apartment" md={2}>Apartment (optional)</Label>
                                    <Col md={10} lg={8}>
                                        <Input type="text" id="apartment" name="apartment" placeholder="Apartment (optional)" value={this.state.apartment} onChange={this.handleInputChange}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="city" md={2}>City</Label>
                                    <Col md={10} lg={8}>
                                        <Input required type="text" id="city" name="city" placeholder="City" value={this.state.city} onChange={this.handleInputChange}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="state" md={2}>State</Label>
                                    <Col md={4}>
                                        <Input required type="select" id="state" name="state" value={this.state.state} onChange={this.handleInputChange}>
                                            <option>AL</option>
                                            <option>AK</option>
                                            <option>AZ</option>
                                            <option>AR</option>
                                            <option>CA</option>
                                            <option>CO</option>
                                            <option>CT</option>
                                            <option>DE</option>
                                            <option>DC</option>
                                            <option>FL</option>
                                            <option>GA</option>
                                            <option>HI</option>
                                            <option>ID</option>
                                            <option>IL</option>
                                            <option>IN</option>
                                            <option>IA</option>
                                            <option>KS</option>
                                            <option>KY</option>
                                            <option>LA</option>
                                            <option>ME</option>
                                            <option>MD</option>
                                            <option>MA</option>
                                            <option>MI</option>
                                            <option>MN</option>
                                            <option>MS</option>
                                            <option>MO</option>
                                            <option>MT</option>
                                            <option>NE</option>
                                            <option>NV</option>
                                            <option>NH</option>
                                            <option>NJ</option>
                                            <option>NM</option>
                                            <option>NY</option>
                                            <option>NC</option>
                                            <option>ND</option>
                                            <option>OH</option>
                                            <option>OK</option>
                                            <option>OR</option>
                                            <option>PA</option>
                                            <option>RI</option>
                                            <option>SC</option>
                                            <option>SD</option>
                                            <option>TN</option>
                                            <option>TX</option>
                                            <option>UT</option>
                                            <option>VT</option>
                                            <option>VA</option>
                                            <option>WA</option>
                                            <option>WV</option>
                                            <option>VI</option>
                                            <option>WY</option>
                                        </Input>
                                    </Col>
                                    <Label htmlFor="zip" md={2}>Zip code</Label>
                                    <Col md={4}>
                                        <Input required type="text" id="zip" name="zip" placeholder="Zip Code" value={this.state.zip} onChange={this.handleInputChange}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="phoneNum" md={2}>Phone Number</Label>
                                    <Col md={10} lg={8}>
                                        <Input required type="tel" id="phoneNum" name="phoneNum" placeholder="Phone Number"
                                        value={this.state.phoneNum}
                                        invalid={errors.phoneNum}
                                        onBlur={this.handleBlur("phoneNum")}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.phoneNum}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10} lg={8}>
                                        <Input type="email" id="email" name="email" placeholder="Email"
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.email}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="child1Name" md={2}>Child 1 Name</Label>
                                    <Col md={10}>
                                        <Input required type="text" id="child1Name" name="child1Name" placeholder="Child 1 Name" value={this.state.child1Name} onChange={this.handleInputChange}>
                                        </Input>
                                    </Col>
                                    <Label htmlFor="child1Age" md={2}>Child 1 Age</Label>
                                    <Col md={10}>
                                        <Input required type="text" id="child1Age" name="child1Age" value={this.state.child1Age} onChange={this.handleInputChange}>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="warning">
                                            Submit
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
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
radio buttons with plan selection (3-month or 1-year)

*/