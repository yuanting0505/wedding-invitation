import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect } from 'react-konva';
import { Background } from './components/BackgroundLayer';
import { KonvaImage } from './common/KonvaImage';
import { Front } from './components/FrontLayer';
import texture from './images/texture.png';
import './index.css';

class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Background />
        </Layer>
        <Layer>
          <Rect
            fill="#CB4042"
            opacity="0.99"
            width={window.innerWidth}
            height={window.innerHeight}
          />
        </Layer>
        <Layer>
          <Front />
        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById('root'));
