import React, { Component } from 'react';
import volunteers_one from '../../resources/volunteers_one.jpg';

class Carousel extends Component {
  render() {
    return (
      <div>
        <div
        style={{
          background: `url(${volunteers_one})`,
          height: `1000px`
          }}
        >
        </div>
      </div>
    )
  }
}
export default Carousel