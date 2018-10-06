import React from 'react';
import { Image } from 'react-konva';

export class KonvaImage extends React.Component {
  state = {
    image: null
  };

  componentDidMount() {
    const image = new window.Image();
    image.src = this.props.image;
    image.onload = () => {
      // setState will redraw layer
      this.setState({
        image: image
      });
    };
  };

  render() {
    return <Image {...{...this.props, image: this.state.image}}/>;
  }
}