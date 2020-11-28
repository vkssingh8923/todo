import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Item from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const {items,clearList,handleDelete,handleEdit} =this.props;
    return (
      <ul>
        <h3>List of items</h3>
        {items.map(item=>{return <TodoItem key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)}></TodoItem>})}
        <button type="submit">ClearList</button>
      </ul>
      );
  }
}
