import React, { Component } from 'react';
import volunteers_three from '../../resources/volunteers_three.jpg';

class Carousel extends Component {
  render() {
    return (
      <div>
        <div
        style={{
          background: `url(${volunteers_three})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "1000px",
          width: "100%",
          opacity: "0.7"
          }}
        >
        </div>
      </div>
    )
  }
}
export default Carousel