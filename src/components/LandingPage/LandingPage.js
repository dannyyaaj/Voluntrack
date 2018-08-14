import React, { Component } from 'react';
import About from '../About/About';
import Carousel from '../Carousel/Carousel';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <About />
      </div>
    )
  }
}
export default LandingPage