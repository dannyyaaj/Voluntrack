import React, { Component } from 'react';
import volunteers_three from '../../resources/volunteers_three.jpg';

class Carousel extends Component {
  render() {
    return (
        <div
        style={{
          background: `url(${volunteers_three})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "75vh",
          opacity: "0.7"
          }}
        >
        </div>
    )
  }
}
export default Carousel