import React from 'react';
import { KonvaImage } from '../common/KonvaImage';
import di from '../images/di.png';
import ting from '../images/ting.png';
import word from '../images/word.png';
import conti from '../images/continue.png';

export class Front extends React.Component {
  render() {
    return (
      <React.Fragment>
        <KonvaImage image={ting} x={-30} y={-30} width={250} height={280} draggable={true} name="ting"/>
        <KonvaImage image={di} x={window.innerWidth - 200} y={window.innerHeight - 300} width={240} height={280} name="di"/>
        <KonvaImage image={word} x={90} y={100} width={250} height={50} name="word"/>
        <KonvaImage image={conti} x={50} y={50} width={200} height={40} name="conti" visible={false}/>
      </React.Fragment>
    );
  }
}