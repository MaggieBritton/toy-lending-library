import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardGroup, CardSubtitle, Button, Form, FormGroup, Label, Input, Row, Col, FormFeedback } from 'reactstrap';

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
            child2Name: '',
            child2Age: '',
            child3Name: '',
            child3Age: '',
            careAndUsePolicy: false,
            checkoutPolicy: false,
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false, 
                zip: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

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
            address: '',
            apartment: '',
            city: '',
            state: '',
            zip: '',
            child1Name: '',
            child1Age: '',
            child2Name: '',
            child2Age: '',
            child3Name: '',
            child3Age: '',
            careAndUsePolicy: false,
            checkoutPolicy: false,
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false, 
                zip: false
            }
        });
    }

    validate(firstName, lastName, phoneNum, email, zip) {

        const errors = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            zip: ''
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

        const zipReg = /\d{5}/;
        if (this.state.touched.zip && !zipReg.test(zip)) {
            errors.zip = 'Invalid zip code.';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    render () {
        
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email, this.state.zip);
        
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
                                <Row form>
                                    <Col>
                                        <FormGroup>
                                            <Label htmlFor="firstName">Parent/Guardian First Name</Label>
                                            <Input required type="text" id="firstName" name="firstName" placeholder="First Name"
                                            value={this.state.firstName}
                                            invalid={errors.firstName}
                                            onBlur={this.handleBlur("firstName")}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.firstName}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label htmlFor="lastName">Parent/Guardian Last Name</Label>
                                            <Input required type="text" id="lastName" name="lastName" placeholder="Last Name"
                                            value={this.state.lastName}
                                            invalid={errors.lastName}
                                            onBlur={this.handleBlur("lastName")}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.lastName}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                </Row>    
                                <Row form>
                                    <Col xs={8}>
                                        <FormGroup>
                                            <Label htmlFor="address">Address</Label>
                                            <Input required type="text" id="address" name="address" placeholder="Address" value={this.state.address} onChange={this.handleInputChange} 
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label htmlFor="apartment">Apt. (optional)</Label>
                                            <Input type="text" id="apartment" name="apartment" placeholder="Apt." value={this.state.apartment} onChange={this.handleInputChange} 
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col xs={6}>
                                        <FormGroup>
                                            <Label htmlFor="city">City</Label>
                                            <Input required type="text" id="city" name="city" placeholder="City" value={this.state.city} onChange={this.handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label htmlFor="state">State</Label>
                                            <Input required type="select" id="state" name="state" value={this.state.state} onChange={this.handleInputChange}>
                                                <option disabled></option>
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
                                                <option>WI</option>
                                                <option>WY</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label htmlFor="zip">Zip code</Label>
                                            <Input required type="text" id="zip" name="zip" placeholder="Zip Code" value={this.state.zip} invalid={errors.zip}
                                            onBlur={this.handleBlur("zip")} onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.zip}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col>
                                        <FormGroup>
                                            <Label htmlFor="phoneNum">Phone Number</Label>
                                            <Input required type="tel" id="phoneNum" name="phoneNum" placeholder="Phone Number"
                                            value={this.state.phoneNum}
                                            invalid={errors.phoneNum}
                                            onBlur={this.handleBlur("phoneNum")}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.phoneNum}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup>
                                            <Label htmlFor="email">Email</Label>
                                            <Input type="email" id="email" name="email" placeholder="Email"
                                            value={this.state.email}
                                            invalid={errors.email}
                                            onBlur={this.handleBlur("email")}
                                            onChange={this.handleInputChange} />
                                            <FormFeedback>{errors.email}</FormFeedback>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col xs={9}>
                                        <FormGroup>
                                            <Label htmlFor="child1Name">(1) Child's Full Name</Label>
                                            <Input required type="text" id="child1Name" name="child1Name" placeholder="Child's Name" value={this.state.child1Name} onChange={this.handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={3}>
                                        <FormGroup>
                                            <Label htmlFor="child1Age">Age</Label>
                                            <Input required type="select" id="child1Age" name="child1Age" value={this.state.child1Age} onChange={this.handleInputChange}>
                                                <option disabled></option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col xs={9}>
                                        <FormGroup>
                                            <Label htmlFor="child2Name">(2) Child's Full Name (optional)</Label>
                                            <Input type="text" id="child2Name" name="child2Name" placeholder="Child's Name" value={this.state.child2Name} onChange={this.handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={3}>
                                        <FormGroup>
                                            <Label htmlFor="child2Age">Age</Label>
                                            <Input type="select" id="child2Age" name="child2Age" value={this.state.child2Age} onChange={this.handleInputChange}>
                                                <option disabled></option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col xs={9}>
                                        <FormGroup>
                                            <Label htmlFor="child3Name">(3) Child's Full Name (optional)</Label>
                                            <Input type="text" id="child3Name" name="child3Name" placeholder="Child's Name" value={this.state.child3Name} onChange={this.handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={3}>
                                        <FormGroup>
                                            <Label htmlFor="child3Age">Age</Label>
                                            <Input type="select" id="child3Age" name="child3Age" value={this.state.child3Age} onChange={this.handleInputChange}>
                                                <option disabled></option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col>
                                        <FormGroup check>
                                            <Label check>
                                                <Input required type="checkbox" id="careAndUsePolicy" name="careAndUsePolicy" value={this.state.careAndUsePolicy} onChange={this.handleInputChange} />{' '}
                                                I agree to check out age-appropriate toys for my child(ren) and supervise their play. I agree to take care of the toys and clean them with soap and water or a bleach wipe before returning them to TLL.
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col>
                                        <FormGroup check>
                                            <Label check>
                                                <Input required type="checkbox" id="checkoutPolicy" name="checkoutPolicy" value={this.state.checkoutPolicy} onChange={this.handleInputChange} />{' '}
                                                I agree that toys may be checked out for two weeks at a time with the possibility of one renewal, if there is not a hold already placed on the toy.
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col>
                                        <Button type="submit" color="warning">
                                                Sign Up
                                        </Button>
                                    </Col>
                                </Row>
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
how do I make the checkboxes uncheck when the form is reset?
radio buttons with plan selection (3-month or 1-year)

*/