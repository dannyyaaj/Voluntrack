import React, { Component } from 'react';
import About from '../About/About';
import Carousel from '../Carousel/Carousel';
import PublicNav from '../PublicNav/PublicNav';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <PublicNav />
        <Carousel />
        <About />
      </div>
    )
  }
}
export default LandingPage