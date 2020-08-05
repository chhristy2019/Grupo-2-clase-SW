import React, {Component} from 'react';
import Page from '../../Page';
import './servicio2.css';


import {obtenerServicio} from './actions';

import { NavLink } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { setSessionStorage, getSessionStorage } from '../../../utilities/axios';

export default class extends Component{
    constructor(){
      super();
      this.state = JSON.parse(getSessionStorage("servicio_state")) || {
       servicio: [],
       hasMore : true,
       pageStart: 0  
      }

    }

      componentWillUnmount(){
        setSessionStorage('servicio_state', JSON.stringify(this.state));
      }

      async componentDidMount(){
         try{
              let servicio = await obtenerServicio();
              this.setState({...this.state, servicio: servicio});
          }catch(e){
              console.log(e);
          }
      }

      render(){
          const servicioListItem = this.state.servicio.map((o) =>{
         return (<div key={o._id} className="listItem">
      <b>{o.nombreservicio} {o.descripcion}</b><NavLink to={`/servicio/${o._id}`}><FaArrowAltCircleRight color="black" size= "1.5em"/></NavLink>
         </div>)
          });
          return(
        <Page
        showHeader={true}
        showFooter={true}
        title={"Servicios"}
        auth={this.props.auth}
      >
          <section className="listholder">
          
              {servicioListItem}

        
          </section>
          </Page>
          );
      }
    }