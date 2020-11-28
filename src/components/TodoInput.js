import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const {item,handleChange,handleSubmit,editItem} = this.props
    return <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <input type="text" value={item} onChange={handleChange}/>
          <button type="submit" > Add Item </button>
        </form>
    </div>
  }
}
