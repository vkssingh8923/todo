import React, { Component } from "react";

export default class TodoItem extends Component {
  
  render() {
    const {title,handleDelete,handleEdit} =this.props;
  return <li>
      <h1>{title}</h1>
      <button onClick={handleDelete} >X</button>
      <button onClick={handleEdit}>Edit</button>
    </li>;
  }
}
