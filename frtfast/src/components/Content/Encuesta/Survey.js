import React, { Component } from 'react';
import './encuesta.css';

export default class extends Component {
  constructor() {
    super();
    this.state ={
        selectedOption :''
    }
    this.onvoteClick = this.onvoteClick.bind(this);
}
    onvoteClick(e){
    const {value} = e.target;
    console.log(value);
    this.setState(
        {...this.state, selectedOption: value}
    )
     this.props.rsmHandler(value);
    }
 
    
  render(){
  const {title} = this.props;
  
  var btns = (this.state.selectedOption == '') ? (<section>
    <button onClick={this.onvoteClick} className ="botones" name="btnS" value="Si">Si</button>
    <button onClick={this.onvoteClick} className ="botones" name="btnN" value="No">No</button>
    <button onClick={this.onvoteClick} className ="botones" name="btnP" value="Parcialmente">Parcialmente</button>
  </section>) : null;
  var surveyed = (this.state.selectedOption=='') ? null : (<strong>{this.state.selectedOption}</strong>)
    return (
      <section>
        <h3>{title}</h3>
        <section>
        {btns}
        {surveyed}
        </section>
      </section>
    )
  }
}
