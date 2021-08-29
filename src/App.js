import React, { Component } from "react";
import Stores from "./Stores.jsx";
import storesarr from "./stores";

export default class App extends Component {
  state = {
    stores: storesarr,
  };
updateItem=()=>{
  this.setState({
    stores: ['new element', ...this.state.stores]
  })
}

handleChange=(event)=>{
  this.setState({
    item: event.target.value

  })
}

  render() {
    return (
      <div>
        <h1>Add New Item</h1>
        <form>
          <label htmlFor="Item">Item: </label>
          <input type="text" id="Item" valuse={this.state.Item} onChange={this.handleChange}/>
          <br></br>
          <label htmlFor="location">Location: </label>
          <input type="text" id="location" /><br></br>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" valuse={this.state.name} onChange={this.handleChange}/><br></br>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" valuse={this.state.name} onChange={this.handleChange}/><br></br>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" valuse={this.state.name} onChange={this.handleChange}/><br></br>
          <button onClick={this.updateItem}>Add New Item</button>
        </form>
        <h1>Shop Shop Shop</h1>
        <div className="storeList">
          {this.state.stores.map((i) => {
            return (
              <div>
                Item: {i.item}
                <br></br>
                Brand: {i.brand}
                <br></br>
                Units: {i.units}
                <br></br>
                Quantity: {i.quantity}
                <br></br>
                <br></br>
              </div>
            );
          })}

          {/* <Stores store={this.state}/> */}
        </div>
        <br></br>
      </div>
    );
  }
}
