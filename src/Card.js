import React, { Component } from 'react';

class Card extends Component {
  render() {
    const mon = this.props
    let cardStyle = {backgroundColor: 'gray'}
    switch(mon.type){
      case 'fire':{cardStyle = {backgroundColor: '#fe7500'}} break
      case 'water': {cardStyle = {backgroundColor: "#6a87f3"}} break 
      case 'grass': {cardStyle = {backgroundColor: "#53d34e"}} break  
      case 'thunder': {cardStyle = {backgroundColor: "#e3c260"}} break 
      case 'psychic': {cardStyle = {backgroundColor: "#ff2482"}} break
      case 'ice': {cardStyle = {backgroundColor: "#b282f2"}} break 
    }

    //const [{image, name, price, type}]=this.props.pokemon
    return (
      <div className="listItem"  style={cardStyle}>
        <h3><img src={mon.image}/></h3>
        <h3 className="listItem__name">{mon.name}</h3>
        <h3 className="listItem__name">{mon.type}</h3>
        <div className="listItem__price">
         <div className="listItem__priceTxt">{mon.price}</div>
        </div>
      </div>
    );  
  }
}

export default Card;

