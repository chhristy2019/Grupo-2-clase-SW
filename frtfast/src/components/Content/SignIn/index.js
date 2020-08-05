import React, { Component } from 'react';
import Page from '../../Page';
import {Redirect} from 'react-router-dom';
import { signin } from './actions';


export default class extends Component {
  constructor() {
    super();
    this.state = {
      email:'',
      password:'',
    }

    this.onClickButton = this.onClickButton.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }
  onTextChange(e){
    const {name, value} = e.target;
    this.setState({[name]:value});
  }
 

  async onClickButton(e) {
    try{
      let userData = await signin(this.state.email, this.state.password);
      alert("Usuario Registrado con Exito!");
      this.setState({ "redirectTo": true });
    }catch(e){
      alert("Error al iniciar sesión.");
    }
}
  render() {
    if(this.state.redirectTo){
      const tourl = (this.props.location.auth) ? this.props.auth: '/login';
      return(
        <Redirect to={tourl}/>
      )
    }
    return (
      <Page
        showHeader={true}
        showFooter={true}
        title={"Crear Cuenta"}
        auth={this.props.auth}
      >
        <label className="loginForm">   
        <label>Correo Electrónico</label>
        <input type="email" name="email" onChange={this.onTextChange} value={this.state.email} />
        <label>Password</label>
        <input type="password" name="password" onChange={this.onTextChange} value={this.state.password} />
        <button onClick={this.onClickButton}>Crear Cuenta</button>
        </label>
        
      </Page>
    )
  }
}