import React, {Component} from 'react';
import Page from '../../Page';
import {FaArrowCircleLeft} from 'react-icons/fa'


import './servicio2.css';

import {obtenerServiciosById} from './actions';
import { NavLink } from 'react-router-dom';

export default class extends Component{
    constructor(){
      super();
      this.state = {
       servicios: {},
 
      loading: true,   
      }
    }
    async componentDidMount(){
      const id = this.props.match.params.id;
      let servicios = await obtenerServiciosById(id);
      this.setState({
      ...this.state,
        servicios:servicios
      });
    }

      render(){    
        const nombreservicio = this.state.servicios.nombreservicio || 'Not Found';
        const{nombreempresa:nmb, nombreservicio:nb, descripcion, precio, horario, contacto} = this.state.servicios;
        return(
        <Page
        
        showHeader={true}
        showFooter={true}
        title={nombreservicio}
        auth={this.props.auth}
      >
        <div className="letras1">
          
        
        <div>Nombre de la empresa: {nmb} </div>
        <div>Nombre del Servicio: {nb} </div>
        <div>Descripción: {descripcion} </div>
        <div>Precio: {precio} </div>
        <div>Horario de Atención: {horario} </div>
        <div>Contacto: {contacto}</div>
          
         </div> 
         <NavLink to="/servicio"><FaArrowCircleLeft color= "gold" size="2.5em"></FaArrowCircleLeft></NavLink>
          </Page>
          );
      }
    }