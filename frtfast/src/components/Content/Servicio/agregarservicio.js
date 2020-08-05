import React, {Component} from 'react';
import Page from '../../Page';
import {Redirect} from 'react-router-dom'

import './servicio1.css';
import {obtenerNuevoServicio} from './actions';

export default class extends Component{
    constructor(){
        super();
        this.state = {
            nombreempresa:'',
            nombreservicio:'',
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
            let userData = await obtenerNuevoServicio(this.state.nombreempresa, this.state.nombreservicio, this.state.descripcion, this.state.precio, this.state.horario, this.state.contacto);
            console.log(userData);
            alert("Servicio Agregado!");
          this.setState({ "redirectTo": true });
        }catch(e){
          alert("Error al agregar servicio!");
        }
    }
    render(){
        if(this.state.redirectTo){
            const tourl = (this.props.location.state)? this.props.location.state.from.pathname:'/servicio';
            return(
                <Redirect to ={tourl}/>
            )
        }
        return(
            <Page 
            showHeader = {true}
            showFooter = {true}    
            title={"Creando Servicio"}
            auth = {this.props.auth}
            >
             
                <label className = "agg">
                <label>Nombre de la empresa: </label>
                <input type = "nombreempresa" name="nombreempresa" onChange ={this.onTextchange}value={this.state.nombreempresa}></input>
                <label>Nombre del Servicio: </label>
                <input type = "nombreservicio" name="nombreservicio" onChange ={this.onTextchange}value={this.state.nombreservicio}></input>
                <label>Descripción: </label>
                <input type = "descripcion" name="descripcion" onChange ={this.onTextchange}value={this.state.descripcion}></input>
                <label>Precio: </label>
                <input type = "precio" name="precio" onChange ={this.onTextchange}value={this.state.precio}></input>
                <label>Horario de Atención: </label>
                <input type = "horario" name="horario" onChange ={this.onTextchange}value={this.state.horario}></input>
                <label>Contacto: </label>
                <input type = "contacto" name="contacto" onChange ={this.onTextchange}value={this.state.contacto}></input>
           
                 <button onClick = {this.onClickButton}>Agregar Servicio</button>
            </label>
            </Page>
        );

    }
    
}