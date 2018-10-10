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
        <KonvaImage image={ting} x={5} y={10} width={140} height={210} draggable={true} name="ting"/>
        <KonvaImage image={di} x={window.innerWidth - 90} y={window.innerHeight - 250} width={75} height={250} name="di"/>
        <KonvaImage image={word} x={70} y={220} width={250} height={70} name="word"/>
        <KonvaImage image={conti} x={50} y={50} width={200} height={40} name="conti" visible={false}/>
      </React.Fragment>
    );
  }
}