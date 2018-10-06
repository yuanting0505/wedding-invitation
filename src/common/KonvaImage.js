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
    let props = {image: this.state.image};
    if (this.props.width) {
      props.width = this.props.width;
    }
    if (this.props.height) {
      props.height = this.props.height;
    }
    if (this.props.x) {
      props.x = this.props.x;
    }
    if (this.props.y) {
      props.y = this.props.y;
    }
    return <Image {...props}/>;
  }
}