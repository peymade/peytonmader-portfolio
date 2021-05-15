/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import ill2 from "assets/img/ill/ill-2.svg";
import piano from "assets/img/theme/piano.png"
import salmon from "assets/img/theme/salmon.png"
import purplePiano from "assets/img/theme/purplePiano.png"
import smile from "assets/img/theme/smile3.png"





// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Peyton's Portfolio{" "}
                        {/* <span>completed with examples</span> */}
                      </h1>
                      <p className="lead text-white">
                        I am excited about empowering young women to get involved with coding. I am also excited about the intersection of art and technology, particularly generative art. Check out some of my recent projects below.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                            <div className="card-portfolio-image">
                            {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                            
                            <img className="headerMim"
                                alt="..."
                                // height="90px"
                                src={piano}
                              />
                              
                            {/* </a> */}
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Piano Interface
                          </h6>
                          <p className="description mt-3">
                            This piano interface, made during CodeFellows 201 project week, allows users to play a virtual piano and record and play back custom chords. 
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="secondary"
                            href="https://201digitaldingos.github.io/pianoInterface/index.html"
                          >
                            View Project
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="card-portfolio-image">
                            {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                            
                            <img className="headerMim"
                                alt="..."
                                src={salmon}
                              />
                              
                            {/* </a> */}
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Cookie Stand
                          </h6>
                          <p className="description mt-3">
                            Salmon Cookies was developed during CodeFellows 201 to practice CSS styling and rendering data using JavaScript to add items to the DOM.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="secondary"
                            href="https://peymade.github.io/cookie-stand/"
                          >
                            View Project
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            301 Project
                          </h6>
                          <p className="description mt-3">
                            What the project does, when it was made.
                          </p>
                          <div>
                            <Badge color="danger" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              CSS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="secondary"
                            href="#pablo"
                          >
                            View Project
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={purplePiano}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h3>Featured Project: <b>Piano Interface</b></h3>
                    <p>
                      Working together with my team over the course of a week, we created a virtual piano that spans 3 octaves and lets musicians, students, and educators play the piano on the go. The feature I worked on most was the instrument slider, which allows users to play a whole different set of sounds: piano, synth, or drums.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h3>Featured Project: <b>Cookie Stand</b></h3>
                    <p>
                      This site was my first attempt at building out the CSS based on a wireframe I made beforehand, which ended up being a wonderful experience. I enjoy working with vanilla CSS, and I like the flexibility that it provides. This second page in this site allows a user to enter data, which it then renders to a table.
                    </p>
                  </div>
                </Col>
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={salmon}
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={smile}
                      top
                    />
                    {/* <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>

                    </blockquote> */}
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <h3>My Background</h3>
                    <p className="lead">
                    My name is Peyton Mader, and I have taken the past year off from college to pursue songwriting and software development. At school I am studying computer science, music, and psychology. 
                    </p>
                    <p>
                    I have a liberal arts background, which has given me the ability to nurture this wide-ranging intellectual curiosity as well as an ability to pick up new concepts quickly. I make a great addition to any team that not only works with software development, but also overlaps with the humanities, sciences, and arts. 
                    </p>
                    <p>
                    I’ve found it really empowering to see how similar software development can be to something like music composition- you just have to have the tools, and then you can make really anything you could dream of. So, my goal is to give people software applications and help them make their own that will let them create beautiful things and put those things out into the world. 
                    </p>
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

        
          {/* <Download /> */}
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
