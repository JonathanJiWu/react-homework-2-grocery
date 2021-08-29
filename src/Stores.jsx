import React, { Component } from "react";

export default class Stores extends Component {
  render() {
    return (
      <div>
        <ul>
          <ul>{this.props.store.storeName}</ul>
          <ul>{this.props.store.location}</ul>
        </ul>
      </div>
    );
  }
}
