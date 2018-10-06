import React from 'react';
import { Text } from 'react-konva';
import { KonvaImage } from '../common/KonvaImage';
import di from '../images/di.png';
import ting from '../images/ting.png';
import word from '../images/word.png';

export class Front extends React.Component {
  render() {
    return (
      <React.Fragment>
        <KonvaImage image={ting} x="-30" y="-30" width="250" height="280"/>
        <KonvaImage image={di} x={window.innerWidth - 200} y={window.innerHeight - 300} width="240" height="300" />
        <KonvaImage image={word} x="90" y="100" width="250" height="50" />
      </React.Fragment>
    );
  }
}