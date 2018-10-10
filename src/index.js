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
    this.front = this.stage.find('.front')[0];
    this.middle = this.stage.find('.middle')[0];

    // front layer
    this.ting = this.front.find('.ting')[0];
    this.di = this.front.find('.di')[0];
    this.conti = this.front.find('.conti')[0];
    this.word = this.front.find('.word')[0];
    this.coupleGroup = new Konva.Group();
    this.coupleGroup.add(this.ting, this.di);
    this.front.add(this.coupleGroup);

    // middle layer
    const bgColor = this.middle.find('.bg-color')[0];
    const flowerLeft = this.middle.find('.flower-left')[0];
    const flowerRight = this.middle.find('.flower-right')[0];
    this.bgGroup = new Konva.Group();
    this.bgGroup.add(bgColor, flowerLeft, flowerRight);
    this.middle.add(this.bgGroup);
  }
  onDragStart = () => {
    this.word.visible(false);
    this.ting.moveToTop();
  };
  onDragEnd = () => {
    const xdiff = Math.abs(this.ting.x() - this.di.x());
    const ydiff = Math.abs(this.ting.y() - this.di.y());

    if (xdiff > 150 || ydiff > 20) {
      this.conti.visible(true);
    } else {
      this.conti.visible(false);
      this.ting.position({
        x: this.di.x() - 112,
        y: this.di.y() + 20
      });
      this.bgGroup.to({
        opacity: 0,
        duration: 3,
        easing: Konva.Easings.EaseIn
      });
      this.coupleGroup.to({
        opacity: 0,
        duration: 6,
        easing: Konva.Easings.EaseInOut
      });
      setTimeout(()=>{
        this.front.moveToBottom();
      }, 6000);
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
