import React from 'react';
import { Row, Button } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    
    const phoneReg = /\d{10}/;
    
    return (
        <Formik
            initialValues={{
              firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                contactType: 'By Email',
                message: ''  
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
                phoneNum: Yup.string() 
                    .matches(phoneReg, 'Invalid Phone Number. Should contain only numbers.')
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address.')
                    .required('Required') 
            })}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm({ values: '' });
            }}
        >
            <Form>
                <Row form className="contact-form-row">
                    <label htmlFor="firstName" className="contact-label col-12">First Name</label>
                    <Field name="firstName" type="text" placeholder="First Name" className="contact-field col-12" />  
                    <ErrorMessage name="firstName" >
                        {msg => <div className="contact-error">{msg}</div>}
                    </ErrorMessage>      
                </Row>
                
                <Row form className="contact-form-row">
                    <label htmlFor="lastName" className="contact-label col-12">Last Name</label>
                    <Field name="lastName" type="text" placeholder="Last Name"  className="contact-field col-12" />
                    <ErrorMessage name="lastName" >
                        {msg => <div className="contact-error">{msg}</div>}
                    </ErrorMessage> 
                </Row>
                
                <Row form className="contact-form-row">
                    <label htmlFor="phoneNum" className="contact-label col-12">Phone Number</label>
                    <Field name="phoneNum" type="text" placeholder="2345556789" className="contact-field col-12" />
                    <ErrorMessage name="phoneNum" >
                        {msg => <div className="contact-error">{msg}</div>}
                    </ErrorMessage> 
                </Row>
                
                <Row form className="contact-form-row">
                    <label htmlFor="email" className="contact-label col-12">Email</label>
                    <Field name="email" type="email" placeholder="name@email.com" className="contact-field col-12" />
                    <ErrorMessage name="email" >
                        {msg => <div className="contact-error">{msg}</div>}
                    </ErrorMessage> 
                </Row>
                
                <Row form className="contact-form-row">
                    <label htmlFor="contactType" className="contact-label col-12">Contact Preference</label>
                    <Field as="select" name="contactType" className="contact-field col-12">
                        <option value="By Email">By Email</option>
                        <option value="By Phone">By Phone</option>
                    </Field>
                </Row>
                
                <Row form className="contact-form-row">
                    <label htmlFor="message" className="contact-label col-12">Message</label>
                    <Field as="textarea" name="message" rows="10" className="contact-field col-12" />
                </Row>
                

                <Button className="contact-button btn btn-warning" type="submit">Submit</Button>

            </Form>
        </Formik>
    );
}

const Contact = () => {  
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
                <div className="row mt-4 mb-4">
                    <div className="col-12 col-md-4 mb-3">
                        <div className="row">
                            <div className="col col-md-12">
                            <address>
                                <strong>Toy Lending Library</strong> <br />
                                123 Playthings Boulevard <br />
                                Big City, USA <br />
                                <a className="contact-link" href="tel:+15635556789">Phone: (563) 555-6789</a><br />
                                <a className="contact-link"  href="mailto:info@toylendinglibrary.com">Email: info@toylendinglibrary.com</a>
                        </address>
                            </div>
                            <div className="col col-md-12">
                                <strong>Hours of Operation:</strong>
                                <ul className="contact-hours">
                                    <li>Tues. 3:30&ndash;6:00 pm</li>
                                    <li>Wed. 3:30&ndash;6:00 pm</li>
                                    <li>Sat. 10:00 am&ndash;2:00 pm</li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                    <div className="col col-md-8">
                        <div className="map-responsive">    
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.726934036243!2d-91.40376728460414!3d40.41489967936527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e73a524c7371e9%3A0x68b6789884604064!2s123%20Boulevard%20Rd%2C%20Keokuk%2C%20IA%2052632!5e0!3m2!1sen!2sus!4v1648492940586!5m2!1sen!2sus" title="Toy Lending Library location map" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div> 
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-xs-12 col-lg-8">
                        <h2>Contact Us</h2>
                        <p>Please let us know if you have any questions! We will get back to you via email or phone as soon as we can.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-lg-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;