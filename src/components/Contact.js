import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row contact-bg">
                    <div className="col my-auto">
                        <h1 className="text-center">Contact</h1>
                    </div>
                    <div className="col pr-0">
                        <img className="contact-img" src="assets/siteImages/confusedBunnySquare.jpg" alt="Confused Bunny"/>
                    </div>
                </div>
                <div className="row">
                    <div class="col">
                        <Form>
                            
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;