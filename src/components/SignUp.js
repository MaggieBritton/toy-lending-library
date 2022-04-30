import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardGroup, CardSubtitle, Button, FormGroup, Row, Col } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpForm = () => {

    const phoneReg = /\d{10}/;
    const zipReg = /\d{5}/;

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                address: '',
                apartment: '',
                city: '',
                state: '',
                zip: '',
                phoneNum: '',
                email: '',
                child1Name: '',
                child1Age: '',
                child2Name: '',
                child2Age: '',
                child3Name: '',
                child3Age: '',
                membership: '',
                careAndUsePolicy: false,
                checkoutPolicy: false    
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .min(2, 'Must be at least 2 characters.')
                    .max(15, 'Must be 15 or fewer characters.')
                    .required('Required'),
                lastName: Yup.string()
                    .min(2, 'Must be at least 2 characters.')
                    .max(15, 'Must be 20 or fewer characters.')
                    .required('Required'),
                address: Yup.string()
                    .required('Required'),
                city: Yup.string()
                    .required('Required'),
                state: Yup.string()
                    .required('Required'),
                zip: Yup.string()
                    .matches(zipReg, 'Invalid ZIP Code.')
                    .required('Required'),
                phoneNum: Yup.string() 
                    .matches(phoneReg, 'Invalid Phone Number. Should contain only numbers.')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address.')
                    .required('Required'),
                child1Name: Yup.string()
                    .required('Required'),
                child1Age: Yup.number()
                    .required('Required'),
                membership: Yup.string()
                    .oneOf(["3-month Membership ($15)", "Yearly Membership ($50)"], "Invalid membership type.")
                    .required('Required'),
                careAndUsePolicy: Yup.boolean()
                    .oneOf([true], "You must agree to the Care and Use Policy.")
                    .required('Required'),
                checkoutPolicy: Yup.boolean()
                    .oneOf([true], "You must agree to the Checkout Policy.")
                    .required('Required')
            })}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm();
            }}
        >
            <Form>
                <Row form className="signup-form-row">
                    <Col>
                        <FormGroup>
                            <label htmlFor="firstName" className="signup-label col-xs-12">Parent/Guardian First Name</label>
                            <Field name="firstName" type="text" placeholder="First Name"
                            className="signup-field col-12"/>
                            <ErrorMessage name="firstName" className="signup-error">{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <label htmlFor="lastName" className="signup-label col-xs-12">Parent/Guardian Last Name</label>
                            <Field name="lastName" type="text" placeholder="Last Name"
                            className="signup-field col-12"/>
                            <ErrorMessage name="lastName" className="signup-error">{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                </Row>    
                <Row form className="signup-form-row">
                    <Col xs={8}>
                        <FormGroup>
                            <label htmlFor="address" className="signup-label col-xs-12">Address</label>
                            <Field name="address" type="text" placeholder="Address"
                            className="signup-field col-12"/>
                            <ErrorMessage name="address" className="signup-error">{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>   
                        </FormGroup>
                    </Col>
                    <Col xs={4}>
                        <FormGroup>
                            <label htmlFor="apartment" className="signup-label col-xs-12">Apt. (optional)</label>
                            <Field name="apartment" type="text" placeholder="Apt." 
                            className="signup-field col-12"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form className="signup-form-row">
                    <Col xs={6}>
                        <FormGroup>
                            <label htmlFor="city" className="signup-label col-xs-12">City</label>
                            <Field name="city" type="text" placeholder="City" className="signup-field col-12" />
                            <ErrorMessage name="city" className="signup-error">{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                    <Col xs={2}>
                        <FormGroup>
                            <label htmlFor="state" className="signup-label col-xs-12">State</label>
                            <Field as="select" name="state" className="signup-field col-12">
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
                            </Field>
                            <ErrorMessage name="state" className="signup-error">{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                    <Col xs={4}>
                        <FormGroup>
                            <label htmlFor="zip" className="signup-label col-xs-12">Zip code</label>
                            <Field name="zip" type="text" placeholder="Zip Code" 
                            className="signup-field col-12"/>
                            <ErrorMessage name="zip" className="signup-error">{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form className="signup-form-row">
                    <Col>
                        <FormGroup>
                            <label htmlFor="phoneNum" className="signup-label col-xs-12">Phone Number</label>
                            <Field name="phoneNum" type="tel" placeholder="2345556789"
                            className="signup-field col-12"/>
                            <ErrorMessage name="phoneNum" className="signup-error">{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <label htmlFor="email" className="signup-label col-xs-12">Email</label>
                            <Field name="email" type="email" placeholder="name@email.com"
                            className="signup-field col-12"/>
                            <ErrorMessage name="email" className="signup-error">{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form className="signup-form-row">
                    <Col xs={9}>
                        <FormGroup>
                            <label htmlFor="child1Name" className="signup-label col-xs-12">(1) Child's Full Name</label>
                            <Field name="child1Name" type="text" placeholder="Child's Name"
                            className="signup-field col-12" />
                            <ErrorMessage name="child1Name" className="signup-error">{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                    <Col xs={3}>
                        <FormGroup>
                            <label htmlFor="child1Age" className="signup-label col-xs-12">Age</label>
                            <Field name="child1Age" as="select" className="signup-field col-12">
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
                            </Field>
                            <ErrorMessage name="child1Age" className="signup-error">{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form className="signup-form-row">
                    <Col xs={9}>
                        <FormGroup>
                            <label htmlFor="child2Name" className="signup-label col-xs-12">(2) Child's Full Name (optional)</label>
                            <Field name="child2Name" type="text" placeholder="Child's Name"
                            className="signup-field col-12" />
                        </FormGroup>
                    </Col>
                    <Col xs={3}>
                        <FormGroup>
                            <label htmlFor="child2Age" className="signup-label col-xs-12">Age</label>
                            <Field name="child2Age" as="select" className="signup-field col-12">
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
                            </Field>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form className="signup-form-row">
                    <Col xs={9}>
                        <FormGroup>
                            <label htmlFor="child3Name" className="signup-label col-xs-12">(3) Child's Full Name (optional)</label>
                            <Field name="child3Name" type="text" placeholder="Child's Name"
                            className="signup-field col-12" />
                        </FormGroup>
                    </Col>
                    <Col xs={3}>
                        <FormGroup>
                            <label htmlFor="child3Age" className="signup-label col-xs-12">Age</label>
                            <Field name="child3Age"
                            as="select" className="signup-field col-12">
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
                            </Field>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form className="signup-form-row mb-4">
                    <Col>
                        <label htmlFor="membership" className="signup-label col-xs-12">Select your TLL membership plan.</label>
                        <Field name="membership" as="select" className="signup-field col-12">
                            <option disabled></option>
                            <option>3-month Membership ($15)</option>
                            <option>Yearly Membership ($50)</option>
                        </Field>
                        <ErrorMessage name="membership" className="signup-error">{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                    </Col>
                </Row>
                <Row form className="signup-form-row">
                    <Col>
                        <FormGroup className="checkbox-group">
                            <Field type="checkbox" name="careAndUsePolicy" className="checkbox" />{' '}
                            <label htmlFor="careAndUsePolicy" className="checkbox-label">I agree to check out age-appropriate toys for my child(ren) and supervise their play. I agree to take care of the toys and clean them with soap and water or a bleach wipe before returning them to TLL.</label>
                            <ErrorMessage name="careAndUsePolicy">{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form className="signup-form-row">
                    <Col>
                        <FormGroup className="checkbox-group">
                            <Field type="checkbox" name="checkoutPolicy" className="checkbox"/>{' '}
                            <label htmlFor="checkoutPolicy" className="checkbox-label">I agree that toys may be checked out for two weeks at a time with the possibility of one renewal, if there is not a hold already placed on the toy.
                            </label>
                            <ErrorMessage name="checkoutPolicy">{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <Button className="mt-3" type="submit" color="warning">
                                Sign Up
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Formik>
    );
}

const SignUp = () => {        
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
                    <div className="col-lg-8 offset-lg-2">
                        <p>There are two convenient ways to sign up for a TLL membership. Either visit our location in downtown Big City or select a plan below, fill out the sign-up form, and pay with PayPal.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <CardGroup>
                            <Card>
                                <CardBody className="text-center">
                                    <CardTitle><h4>3-Month Membership</h4></CardTitle>
                                    <CardSubtitle><strong>$15</strong></CardSubtitle>
                                    <CardText>New to the area? Not sure if a TLL membership is a good fit for your family? This three-month trial will give you ample time to decide if a yearly memebership is for you.</CardText>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody className="text-center">
                                    <CardTitle><h4>Yearly Membership</h4></CardTitle>
                                    <CardSubtitle><strong>$50</strong></CardSubtitle>
                                    <CardText>Take full advantage of our services with a yearly membership. Let your child(ren) explore our large selection of toys without making them a permanent fixure in your home.</CardText>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-8 offset-lg-2">
                        <h2>Sign-Up Form</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SignUp;