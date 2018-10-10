import React from 'react';
import { Rect } from 'react-konva';
import flowerLeft from '../images/flower-left.png';
import flowerRight from '../images/flower-right.png';
import { KonvaImage } from '../common/KonvaImage';

export class Middle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Rect
          fill="#D05A6E"
          width={window.innerWidth}
          height={window.innerHeight}
          name="bg-color"
        />
        <KonvaImage image={flowerLeft} x={10} y={window.innerHeight - 150} width={150} height={150} name="flower-left" />
        <KonvaImage image={flowerRight} x={window.innerWidth - 80} y={0} width={80} height={160} name="flower-right" />
      </React.Fragment>
    );
  }
}