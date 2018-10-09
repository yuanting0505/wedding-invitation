import React from 'react';
import { Rect } from 'react-konva';

export class Middle extends React.Component {
  render() {
    return (
        <Rect
        fill="#F8C3CD"
        width={window.innerWidth}
        height={window.innerHeight}
      />
    );
  }
}