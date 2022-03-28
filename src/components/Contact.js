import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, Button, FormFeedback } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
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

    render() {
        
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);
        
        return(
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row contact-bg">
                        <div className="col my-auto">
                            <h1 className="text-center">Contact</h1>
                        </div>
                        <div className="col pr-0">
                            <img className="contact-img" src="assets/siteImages/confusedBunnySquare.jpg" alt="Confused Bunny"/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-12 col-md-4 mb-3">
                            <address>
                                    <strong>Toy Lending Library</strong> <br />
                                    123 Playthings Boulevard <br />
                                    Big City, USA <br />
                                    <a className="contact-link" href="tel:+15635556789">Phone: (563) 555-6789</a><br />
                                    <a className="contact-link"  href="mailto:toylendinglibrary@email.com">Email: toylendinglibrary@email.com</a>
                            </address>
                        </div>
                        <div className="col col-md-8">
                            <div className="map-responsive">    
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.726934036243!2d-91.40376728460414!3d40.41489967936527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e73a524c7371e9%3A0x68b6789884604064!2s123%20Boulevard%20Rd%2C%20Keokuk%2C%20IA%2052632!5e0!3m2!1sen!2sus!4v1648492940586!5m2!1sen!2sus" title="Toy Lending Library location map" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Contact Us</h2>
                            <p>Please let us know if you have any questions! We will get back to you via email or phone as soon as we can.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
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
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
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
                                    <Label htmlFor="contactType" md={2}>Contact Preference</Label>
                                    <Col md={10} lg={8}>
                                        <Input type="select" id="contactType" name="contactType"
                                                value={this.state.contactType}
                                                onChange={this.handleInputChange}>
                                            <option>By Email</option>
                                            <option>By Phone</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="message" md={2}>Message</Label>
                                    <Col md={10} lg={8}>
                                        <Input type="textarea" id="message" name="message" rows="10"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
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

export default Contact;