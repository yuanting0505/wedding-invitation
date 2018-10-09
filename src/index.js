import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer } from 'react-konva';
import { Background } from './components/BackgroundLayer';
import { Front } from './components/FrontLayer';
import { Middle } from './components/MiddleLayer';
import './index.css';

class App extends Component {
  componentDidMount() {
    const front = this.stage.find('.front')[0];
    this.ting = front.find('.ting')[0];
    this.di = front.find('.di')[0];
    this.conti = front.find('.conti')[0];
    this.word = front.find('.word')[0];
    this.bgColor = this.stage.find('.middle')[0];
  }
  onDragStart = () => {
    this.word.visible(false);
    this.ting.moveToTop();
  };
  onDragEnd = () => {
    const xdiff = Math.abs(this.ting.x() - this.di.x());
    const ydiff = Math.abs(this.ting.y() - this.di.y());
    console.log(xdiff)
    console.log(ydiff)

    if (xdiff > 150 || ydiff > 20) {
      this.conti.visible(true);
    } else {
      this.conti.visible(false);
      this.ting.position({
        x: this.di.x() - 112,
        y: this.di.y() + 20
      });
      this.bgColor.to({
        opacity: 0,
        duration: 2,
        easing: Konva.Easings.EaseIn
      });
      this.ting.to({
        opacity: 0,
        duration: 3,
        easing: Konva.Easings.EaseOut
      });
      this.di.to({
        opacity: 0,
        duration: 3,
        easing: Konva.Easings.EaseOut
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
