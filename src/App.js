import React, { Component } from "react";
import uuid from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// showing vs-code github setup
class App extends Component {
  state = {
    items: [
      { id: 1, title: "this is first" },
      { id: 2, title: "this is second" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("change event caled");
    const text = e.target.value 
    this.setState({
        item:text,
    })
  
  };
  handleEdit = (id) => {
    console.log(`edit event caled ${id}`);
  };
  handleDelete = (id) => {
    console.log(`delete event caled ${id}`);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem ={
      id:this.state.id,
      title:this.state.item
    }
    const updateItem=[...this.state.items,newItem]
    this.setState({
      items:updateItem,
      item:"",
      id:uuid(),
      editItem:false
    },()=>{console.log(this.state);})
  };
  clearList = (e) => {
    console.log("delete called");
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="r1ow">
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              clearList={this.clearList}
              items={this.state.items}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
