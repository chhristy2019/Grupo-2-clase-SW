import React, { Component } from 'react';
import Page from '../../Page';
import {Redirect} from 'react-router-dom';


import { login } from './actions';
import './login.css';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      email:'',
      password:'',
      redirectTo:false
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
      let userData = await login(this.state.email, this.state.password);
      const {jwt} = userData;
      delete userData.jwt;
      this.setState({ "redirectTo": true }, () => { this.props.auth.login(userData, jwt);});
    }catch(e){
      alert("Error al iniciar sesión.");
    }
}
  
  render() {
    if(this.state.redirectTo){
      const tourl = (this.props.location.state) ? this.props.location.state.from.pathname: '/';
      return(
        <Redirect to={tourl}/>
      )
    }
    return (
      <Page
        showHeader={true}
        showFooter={true}
        title={"Iniciar Sesión"}
        auth={this.props.auth}
      >
        <label className="loginForm"> 
        <label>Correo Electrónico</label>
        <input type="email" name="email" onChange={this.onTextChange} value={this.state.email} />
        <label>Password</label>
        <input type="password" name="password" onChange={this.onTextChange} value={this.state.password} />
        <button onClick={this.onClickButton}>Iniciar Sesión</button>
        </label>
     
     
      </Page>
    
    )
  }
}