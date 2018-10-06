import React from 'react';
import { KonvaImage } from '../common/KonvaImage';
import bg from '../images/dt.jpeg';
import { calculateRatio } from './helper';

export class Background extends React.Component {
  // virtualImage is used to get the image size
  state = {
    width: 0,
    height: 0,
    x: 0,
    y: 0
  }

  componentDidMount() {
    const image = new window.Image();
    image.src = bg;
    image.onload = () => {
      this.setState(calculateRatio(image));
    };
  }

  render() {
    const { width, height, x, y } = this.state;
    return <KonvaImage image={bg} width={width} height={height} x={x} y={y}/>;
  }
}