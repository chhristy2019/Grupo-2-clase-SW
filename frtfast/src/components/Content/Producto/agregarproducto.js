import React, {Component} from 'react';
import Page from '../../Page';
import {Redirect} from 'react-router-dom'

import './producto1.css';
import {obtenerNuevoProducto} from './actions';

export default class extends Component{
    constructor(){
        super();
        this.state = {
            nombreempresa:'',
            nombreproducto:'',
            descripcion:'',
            precio:'',
            horario:'',
            contacto:'',
            redirectTo: false
        }
        
        this.onClickButton = this.onClickButton.bind(this);
        this.onTextchange = this.onTextchange.bind(this);
    }

    onTextchange(e){
        const {name ,value } = e.target;
        this.setState({[name]:value})

    }

    async onClickButton(e) {
        try{
          let userData = await obtenerNuevoProducto(this.state.nombreempresa, this.state.nombreproducto, this.state.descripcion, this.state.precio, this.state.horario, this.state.contacto);
          console.log(userData);
          alert("Producto Agregado!");
          this.setState({ "redirectTo": true });
        }catch(e){
          alert("Error al agregar producto!");
        }
    }
    render(){
        if(this.state.redirectTo){
            const tourl = (this.props.location.state)? this.props.location.state.from.pathname:'/producto';
            return(
                <Redirect to ={tourl}/>
            )
        }
        return(
            <Page 
            showHeader = {true}
            showFooter = {true}    
            title={"Creando Producto"}
            auth = {this.props.auth}
            >
             
         
             <label className = "aggp">
                <label>Nombre de la empresa: </label>
                <input type = "nombreempresa" name="nombreempresa" onChange ={this.onTextchange}value={this.state.nombreempresa}></input>
                <label>Nombre del Producto: </label>
                <input type = "nombreproducto" name="nombreproducto" onChange ={this.onTextchange}value={this.state.nombreproducto}></input>
                <label>Descripción: </label>
                <input type = "descripcion" name="descripcion" onChange ={this.onTextchange}value={this.state.descripcion}></input>
                <label>Precio: </label>
                <input type = "precio" name="precio" onChange ={this.onTextchange}value={this.state.precio}></input>
                <label>Horario de Atención: </label>
                <input type = "horario" name="horario" onChange ={this.onTextchange}value={this.state.horario}></input>
                <label>Contacto: </label>
                <input type = "contacto" name="contacto" onChange ={this.onTextchange}value={this.state.contacto}></input>
            
            <button onClick = {this.onClickButton}>Agregar Producto</button>
            </label>
            </Page>
        );

    }
    
}