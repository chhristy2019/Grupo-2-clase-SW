import React, { Component } from 'react';
import {Switch, BrowserRouter as Router} from 'react-router-dom';
import PRoute from './utilities/privateroutes';
import NRoute from './utilities/normalroutes';

import {setJWT, getLocalStorage, setLocalStorage, setUnAuthInterceptor} from './utilities/axios';

import './App.css';


import Home from './components/Content/Home';
import SignIn from './components/Content/SignIn';
import Login from './components/Content/Login';
import Encuesta from './components/Content/Encuesta';
import Servicio from './components/Content/Servicio/servicio';
import servicios from './components/Content/Servicio/servicios';
import producto from './components/Content/Producto/producto';
import productos from './components/Content/Producto/productos';
import agregarservicio from './components/Content/Servicio/agregarservicio';
import agregarproducto from './components/Content/Producto/agregarproducto';

export default class extends Component{
  constructor(){
    super();
    this.state = {
      user: getLocalStorage('user')|| {},
      jwt: getLocalStorage('jwt') || "",
      isLogged:false,
      loadingBackend:false
    }
    if(this.state.jwt !== ""){
      setJWT(this.state.jwt);
      this.state.isLogged = true;
    }
    this.setLogginData = this.setLogginData.bind(this);
    this.setLoggoutData = this.setLoggouData.bind(this);

    setUnAuthInterceptor(this.setLoggouData)
  }
  componentDidMount(){
    this.setState({"loadingBackend":true});
  }
  setLogginData(user, jwt){
    this.setState({
     ...this.state,
     user:user,
     jwt:jwt,
     isLogged:true,
    },
    () => {
      setLocalStorage('jwt', jwt);
      setLocalStorage('user', user);
      setJWT(jwt);}
    );
  }
  setLoggouData(){
    if(this.state.loadingBackend){
      this.setState(
      {
        ...this.state,
      user:"",
      jwt:"",
      isLogged:false,
      },
     ()=>{setJWT('')}
    )
  }else{
    this.state ={
      ...this.state,
      user:"",
      jwt:"",
      isLogged: false,
    }
    setJWT('')
  }
}
render() {
  if (!this.state.loadingBackend){
    return (<div className="splash"> ...Loading </div>)
  }
  const auth = {
    isLogged : this.state.isLogged,
    login: this.setLogginData,
    logout: this.setLoggouData,
  }
  return (   
    <Router>
      <Switch>
      <NRoute path="/" component={Home} exact auth={auth}/>
      <NRoute path="/signin" component={SignIn} exact auth={auth}/>
      <NRoute path="/login" component={Login} exact auth={auth}/>
      
      <NRoute path="/encuesta" component={Encuesta} exact auth={auth}/>
      <NRoute path="/Servicio" component={Servicio} exact auth={auth}/>
      <NRoute path="/servicio/:id" component={servicios} exact auth={auth}/>
      <NRoute path="/Producto" component={producto} exact auth={auth}/>
      <NRoute path="/producto/:id" component={productos} exact auth={auth}/>

      <PRoute path="/Servicio" component={Servicio} exact auth={auth}/>
      <PRoute path="/servicio/:id" component={servicios} exact auth={auth}/>
      <PRoute path="/Producto" component={producto} exact auth={auth}/>
      <PRoute path="/producto/:id" component={productos} exact auth={auth}/>
      <PRoute path="/agregarservicio" component={agregarservicio} exact auth={auth}/>
      <PRoute path="/agregarproducto" component={agregarproducto} exact auth={auth}/>
      
      
      </Switch> 
    </Router>
    
    
  );
}

}