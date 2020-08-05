import React, {Component} from 'react';
import Page from '../../Page';

import './producto2.css';

import {obtenerProducto} from './actions';
import { NavLink } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { setSessionStorage, getSessionStorage } from '../../../utilities/axios';

export default class extends Component{
    constructor(){
      super();
      this.state = JSON.parse(getSessionStorage("producto_state")) || {
       producto: [],
       hasMore : true,
       pageStart: 0
   
      }

      }

      componentWillUnmount(){
        setSessionStorage('producto_state', JSON.stringify(this.state));
      }

      async componentDidMount(){
         try{
              let producto = await obtenerProducto();
              this.setState({...this.state, producto: producto});
          }catch(e){
              console.log(e);
          }
      }
     
      render(){
          const productoListItem = this.state.producto.map((o) =>{
         return (<div key={o._id} className="listItem">
      <b>{o.nombreproducto} {o.descripcion}</b><NavLink to={`/producto/${o._id}`}><FaArrowAltCircleRight color="black" size= "1.5em"/></NavLink>
         </div>)
          });
          return(
        <Page
        showHeader={true}
        showFooter={true}
        title={"Productos"}
        auth={this.props.auth}
      >
          <section className="listholder">
          
              {productoListItem}
        
          </section>
          </Page>
          );
      }
    }