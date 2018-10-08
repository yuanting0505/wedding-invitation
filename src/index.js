import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer } from 'react-konva';
import { Background } from './components/BackgroundLayer';
import { Front } from './components/FrontLayer';
import { Middle } from './components/MiddleLayer';
import './index.css';

class App extends Component {
  onDragStart = () => {
    // hide the info when starts to drag
    const front = this.stage.find('.front')[0];
    front.find('.word').visible(false);
    this.ting = front.find('.ting')[0];
    this.ting.moveToTop();
    this.di = front.find('.di')[0];
    this.conti = front.find('.conti')[0];
  };
  onDragEnd = () => {
    const xdiff = Math.abs(this.ting.x() - this.di.x());
    const ydiff = Math.abs(this.ting.y() - this.di.y());
    if (xdiff > 20 || ydiff > 20) {
      this.conti.visible(true);
    } else {
      this.conti.visible(false);
      this.ting.position({
        x: this.di.x()-6,
        y: this.di.y()
      });
    }
    this.stage.draw();
  };
  render() {
    return (
      <Stage
      width={window.innerWidth} 
      height={window.innerHeight} 
      onDragStart={this.onDragStart}
      onDragEnd={this.onDragEnd}
      ref={node => {
        this.stage = node._stage;
      }}>
        <Layer name="background">
          <Background />
        </Layer>
        <Layer name="middle">
          <Middle />
        </Layer>
        <Layer name="front">
          <Front />
        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById('root'));
