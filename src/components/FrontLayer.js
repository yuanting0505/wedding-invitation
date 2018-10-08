import React from 'react';
import { KonvaImage } from '../common/KonvaImage';
import di from '../images/di2.png';
import ting from '../images/ting2.png';
import word from '../images/word.png';
import conti from '../images/continue.png';

export class Front extends React.Component {
  render() {
    return (
      <React.Fragment>
        <KonvaImage image={ting} x={-50} y={-100} width={400} height={450} draggable={true} name="ting"/>
        <KonvaImage image={di} x={window.innerWidth - 270} y={window.innerHeight - 400} width={390} height={450} name="di"/>
        <KonvaImage image={word} x={120} y={150} width={250} height={50} name="word"/>
        <KonvaImage image={conti} x={50} y={50} width={200} height={40} name="conti" visible={false}/>
      </React.Fragment>
    );
  }
}