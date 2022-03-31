import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames'; 

class About extends Component {
    constructor (props) {
        super(props);

        this.toggle=this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row about-bg">
                        <div className="col my-auto">
                            <h1 className="text-center">About</h1>
                        </div>
                        <div className="col pr-0">
                            <img className="about-img" src="assets/siteImages/playBlocks.jpg" alt="Blocks with Letters Spelling Play"/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row my-4">
                        <div className="col">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis aliquam faucibus purus in massa tempor. Mi proin sed libero enim sed faucibus turpis. In tellus integer feugiat scelerisque varius morbi enim nunc. Aliquam ultrices sagittis orci a. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Morbi tincidunt augue interdum velit euismod. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Ultrices eros in cursus turpis massa tincidunt dui ut. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Posuere morbi leo urna molestie at.</p>
                            <p>Odio eu feugiat pretium nibh ipsum consequat nisl vel. Ultrices tincidunt arcu non sodales. Erat nam at lectus urna duis convallis convallis tellus id. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Facilisis gravida neque convallis a cras. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Non tellus orci ac auctor augue mauris augue. Ultrices neque ornare aenean euismod elementum. Suspendisse interdum consectetur libero id faucibus. Gravida dictum fusce ut placerat orci.</p>    
                        </div>
                    </div>
                    <div className="about-tab-container mb-4">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames("about-tab-navlink", { active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                  Mission  
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                  History  
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                >
                                    Volunteers  
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm={12}>
                                        <h3>Mission</h3>
                                        <hr />
                                        <Row>
                                            <Col sm={6} lg={4}>
                                                <img className="about-img mb-4"src="assets/siteImages/biking.jpg" alt="Child Biking" />
                                            </Col>
                                            <Col>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at erat. Vulputate ut pharetra sit amet aliquam id. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Pretium lectus quam id leo in vitae turpis massa sed. Gravida neque convallis a cras semper auctor neque vitae. Pellentesque id nibh tortor id aliquet lectus proin nibh. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm={12}>
                                        <h3>History</h3>
                                        <hr />
                                        <Row>
                                            <Col sm={6} lg={4}>
                                                <img className="about-img mb-4" src="assets/siteImages/playingInBallPit.jpg" alt="Child Playing in a Ball Pit" />
                                            </Col>
                                            <Col>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at erat. Vulputate ut pharetra sit amet aliquam id. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Pretium lectus quam id leo in vitae turpis massa sed. Gravida neque convallis a cras semper auctor neque vitae. Pellentesque id nibh tortor id aliquet lectus proin nibh. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <h3>Volunteers</h3>
                                <hr />
                                        <Row>
                                            <Col sm={6} lg={4}>
                                                <img className="about-img mb-4" src="assets/siteImages/playingUkulele.jpg" alt="Child Playing Ukulele" />
                                            </Col>
                                            <Col>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at erat. Vulputate ut pharetra sit amet aliquam id. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Pretium lectus quam id leo in vitae turpis massa sed. Gravida neque convallis a cras semper auctor neque vitae. Pellentesque id nibh tortor id aliquet lectus proin nibh. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. </p>
                                            </Col>
                                        </Row>
                            </TabPane>
                        </TabContent>
                    </div> 
                </div>
            </React.Fragment>
        );
    }
    
};

export default About;

/* Add:
tabs with info about the TLL (include photo in each tab view)

*/