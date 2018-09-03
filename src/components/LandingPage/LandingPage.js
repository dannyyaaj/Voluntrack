import React, { Component } from 'react';
import About from '../About/About';
import Carousel from '../Carousel/Carousel';
import PublicNav from '../Nav/PublicNav';
import { Row, Col } from 'react-material-responsive-grid';

class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs4={4} md={12} lg={12}>
            <PublicNav />
          </Col>
        </Row>
        <Row>
          <Col xs4={4} md={12} lg={12}>
            <Carousel />
          </Col>
        </Row>
        <Row>
          <Col xs4={4} md={12} lg={12}>
            <About />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default LandingPage