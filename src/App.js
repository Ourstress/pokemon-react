import React, { Component } from "react";
import Card from "./Card";
import getPokemons from "./pokemonData"

// const pokemon = {
//   name: "Charmander",
//   type: "fire",
//   price: 20,
//   image: "https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
// };

class App extends Component {
  constructor(props) {
    super(props);
    const data = getPokemons()
    this.state = ({pokemon:data, value:""})
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    let pokemons = getPokemons()
    let {value} = event.target
    let filteredMons = pokemons.filter(a=> {return a.name.toLowerCase().includes(value.toLowerCase())})
    this.setState({pokemon:filteredMons});
  }

  render() {
    //const {value, pokemon} = this.state
   // let filteredMons = pokemon.filter(a=> {return a.name.toLowerCase().includes(value.toLowerCase())})
  
    return (
      <div className="wrapper">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" onChange={this.handleChange} />
          </label>
        </form>
        <div className="list">
          {this.state.pokemon.length>0 && this.state.pokemon.map(mon => <Card image={mon.image} name={mon.name} type={mon.type} price={mon.price} />)}
          {this.state.pokemon.length===0 && <p>Oops, no such pokemon!</p>}
        </div>
      </div>
    );
  }
}

export default App;
