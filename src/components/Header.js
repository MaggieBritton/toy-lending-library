import React, { Component } from 'react';
import Banner from './Banner';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isNavOpen: false, 
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
    return (
      <React.Fragment>
          <Banner />
          <Navbar light sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand href="/" className="brand-text">TLL</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home" onClick={window.innerWidth < 768 ? this.toggleNav : undefined }>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/toys" onClick={window.innerWidth < 768 ? this.toggleNav : undefined }>Toys</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/about" onClick={window.innerWidth < 768 ? this.toggleNav : undefined }>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/signup" onClick={window.innerWidth < 768 ? this.toggleNav : undefined }>Sign Up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contact" onClick={window.innerWidth < 768 ? this.toggleNav : undefined }>Contact</NavLink>
                            </NavItem>
                        </Nav>
                        <Button onClick={this.toggleModal}className="btn ml-auto" color="warning">Login</Button>
                    </Collapse>
                </div>
            </Navbar>
            
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader className="login-header" toggle={this.toggleModal}><span className="login-header-text">Login</span></ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" innerRef={input => this.username = input} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="passord">Password</Label>
                            <Input type="password" id="password" name="password" innerRef={input => this.password = input} />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember" innerRef={input => this.remember = input} />
                                Remember me
                            </Label>
                        </FormGroup>
                        <div className="mt-2">
                            <Button type="submit" value="submit" color="warning">Login</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>   
      </React.Fragment>
    )
  }
}

export default Header;