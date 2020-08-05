import React, {Component} from 'react';
import Page from '../../Page';

import './home.css';
import {getServicio, getPrivateServicio, getProducto, getPrivateProducto} from './actions';
export default class extends Component{
    constructor(){
        super();
        this.state= {
    
        }
        this.onClickButton = this.onClickButton.bind(this);
    }
    onClickButton(e){
        this.setState({click:(this.state.click + 1)});
    }
    async componentDidMount(){
     try{
     let apiReturns = await getServicio();
     let apiReturns1 = await getProducto();
     console.log(apiReturns.data, apiReturns1.data); 
    let pApiReturn = await getPrivateServicio();
    let pApiReturn1 = await getPrivateProducto();
    console.log(pApiReturn.data, pApiReturn1.data);  
     }catch (e){
     console.log(e);
     }

    }

    
    render(){
        return(
     <Page   
     showHeader={true}
     showFooter = {true}
      title={"Fast Business Network"}
      auth={this.props.auth}
      > 
      </Page>
        )
    }
 }
