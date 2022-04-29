import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardGroup, CardSubtitle, Button, FormGroup, Label, Row, Col } from 'reactstrap';
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
                resetForm({ values: '' });
                // document.getElementById("careAndUsePolicy").checked = false;
                // document.getElementById("checkoutPolicy").checked = false;
            }}
        >
            <Form>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label htmlFor="firstName">Parent/Guardian First Name</Label>
                            <Field name="firstName" type="text" placeholder="First Name"
                            />
                            <ErrorMessage>{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label htmlFor="lastName">Parent/Guardian Last Name</Label>
                            <Field name="lastName" type="text" placeholder="Last Name"
                            />
                            <ErrorMessage>{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                </Row>    
                <Row form>
                    <Col xs={8}>
                        <FormGroup>
                            <Label htmlFor="address">Address</Label>
                            <Field name="address" type="text" placeholder="Address"
                            />
                            <ErrorMessage>{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>   
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label htmlFor="apartment">Apt. (optional)</Label>
                            <Field name="apartment" type="text" placeholder="Apt." 
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xs={6}>
                        <FormGroup>
                            <Label htmlFor="city">City</Label>
                            <Field name="city" type="text" placeholder="City" />
                            <ErrorMessage>{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label htmlFor="state">State</Label>
                            <Field as="select" name="state">
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
                            <ErrorMessage>{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label htmlFor="zip">Zip code</Label>
                            <Field name="zip" type="text" placeholder="Zip Code" 
                            />
                            <ErrorMessage>{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label htmlFor="phoneNum">Phone Number</Label>
                            <Field name="phoneNum" type="tel"  placeholder="Phone Number"
                            />
                            <ErrorMessage>{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Field name="email" type="email"  placeholder="Email"
                            />
                            <ErrorMessage>{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xs={9}>
                        <FormGroup>
                            <Label htmlFor="child1Name">(1) Child's Full Name</Label>
                            <Field name="child1Name" type="text"   placeholder="Child's Name"
                            />
                            <ErrorMessage>{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                    <Col xs={3}>
                        <FormGroup>
                            <Label htmlFor="child1Age">Age</Label>
                            <Field name="child1Age"  type="select">
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
                <Row form>
                    <Col xs={9}>
                        <FormGroup>
                            <Label htmlFor="child2Name">(2) Child's Full Name (optional)</Label>
                            <Field name="child2Name" type="text"  placeholder="Child's Name"
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={3}>
                        <FormGroup>
                            <Label htmlFor="child2Age">Age</Label>
                            <Field name="child2Age" type="select">
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
                <Row form>
                    <Col xs={9}>
                        <FormGroup>
                            <Label htmlFor="child3Name">(3) Child's Full Name (optional)</Label>
                            <Field name="child3Name" type="text"   placeholder="Child's Name"
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={3}>
                        <FormGroup>
                            <Label htmlFor="child3Age">Age</Label>
                            <Field name="child3Age"
                            type="select">
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
                <Row form>
                    <Col>
                        <Label htmlFor="membership">Select your TLL membership plan.</Label>
                        <Field name="membership"
                        type="select">
                            <option disabled></option>
                            <option>3-month Membership ($15)</option>
                            <option>Yearly Membership ($50)</option>
                        </Field>
                    </Col>
                </Row>
                <Row form className="mt-3">
                    <Col>
                        <FormGroup check>
                            <Field type="checkbox" name="careAndUsePolicy" />{' '}
                            <Label htmlFor="careAndUsePolicy" >I agree to check out age-appropriate toys for my child(ren) and supervise their play. I agree to take care of the toys and clean them with soap and water or a bleach wipe before returning them to TLL.</Label>
                            <ErrorMessage>{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form className="mt-3">
                    <Col>
                        <FormGroup check>
                            <Field type="checkbox" name="checkoutPolicy" />{' '}
                            <Label htmlFor="checkoutPolicy">I agree that toys may be checked out for two weeks at a time with the possibility of one renewal, if there is not a hold already placed on the toy.
                            </Label>
                            <ErrorMessage>{msg => <div className="signup-error">{msg}</div>}</ErrorMessage>
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