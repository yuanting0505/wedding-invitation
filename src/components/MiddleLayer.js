import React from 'react';
import { Rect } from 'react-konva';

export class Middle extends React.Component {
  render() {
    return (
        <Rect
        fill="#CB4042"
        opacity={0.98}
        width={window.innerWidth}
        height={window.innerHeight}
      />
    );
  }
}