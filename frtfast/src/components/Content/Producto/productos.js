import React, {Component} from 'react';
import Page from '../../Page';
import {FaArrowCircleLeft} from 'react-icons/fa'
import './producto2.css';

import {obtenerProductosById} from './actions';
import { NavLink } from 'react-router-dom';

export default class extends Component{
    constructor(){
      super();
      this.state = {
        productos: {},
 
      loading: true,   
      }
    }
    async componentDidMount(){
      const id = this.props.match.params.id;
      let productos = await obtenerProductosById(id);
      this.setState({
      ...this.state,
        productos:productos
      });
    }
      render(){    
        const nombreproducto = this.state.productos.nombreproducto || 'Not Found';
        const{nombreempresa:nmb, nombreproducto:np, descripcion:desc, precio, horario, contacto} = this.state.productos;
        return(
        <Page
        
        showHeader={true}
        showFooter={false}
        title={nombreproducto}
        auth={this.props.auth}
      >
         <div className="letras">
        <div>Nombre de la empresa: {nmb} </div>
        <div>Nombre del Producto: {np} </div>
        <div>Descripción: {desc} </div>
        <div>Precio: {precio} </div>
        <div>Horario de Atención: {horario} </div>
        <div>Contacto: {contacto} </div>
      
         </div> 
         <NavLink to="/producto"><FaArrowCircleLeft color= "gold" size="2.5em"></FaArrowCircleLeft></NavLink>
         
          </Page>
          );
      }
    }