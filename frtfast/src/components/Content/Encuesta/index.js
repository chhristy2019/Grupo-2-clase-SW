import React, {Component} from 'react';
import Page from '../../Page';
import {NavLink} from 'react-router-dom';
import {FaArrowCircleLeft} from 'react-icons/fa'

import './encuesta.css';
import Survey from './Survey';
export default class extends Component {
   constructor(){
     super();
     this.state = {
       countSi:0,
       countNo:0,
       countParcialmente:0
     }
     this.addToCounter = this.addToCounter.bind(this);
   }
    addToCounter(vote){
      const keyStr = 'count' + vote;
      const value = this.state[keyStr]+ 1;
      this.setState(
        {...this.state, [keyStr]:value}
      )
    }
  
  render(){
  return(
    <Page
    title= "Encuesta de Satisfacción"
    showHeader={true}
    showFooter={false}
    auth={this.props.auth}
    >
      
      <h3 className="titulo">Seleccione la opción:</h3>
      
        <Survey className="letras2"  rsmHandler={this.addToCounter} title="¿La aplicación cumplió con sus expectativas?"></Survey>
        <Survey className="letras2" rsmHandler={this.addToCounter} title="¿Encontró lo que buscaba?"></Survey>
        <Survey className="letras2" rsmHandler={this.addToCounter} title="¿Recomendaría la aplicación?"></Survey>
        <Survey className="letras2" rsmHandler={this.addToCounter} title="¿Le resultó fácil acceder al contenido?"></Survey>
        <Survey className="letras2" rsmHandler={this.addToCounter} title="¿Usaría de nuevo la aplicación?"></Survey>
       
       <section>
          <p className="letras2" >Si: {this.state.countSi}</p>
          <p className="letras2" >No: {this.state.countNo}</p>
          <p className="letras2" >Parcialmente: {this.state.countParcialmente}</p>
        </section>
        
        
        <NavLink to="/"><FaArrowCircleLeft color= "gold" size="2.5em"></FaArrowCircleLeft></NavLink>
      </Page>
    );
  }
}
