import React, { Component } from 'react';
import './App.css';

import { todos } from './todos.json';
import Form from './components/Form';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }

  removeTodo(index){
    console.log(index);
    if (window.confirm('Are you sure you want to delete this card??')){
    this.setState({
      todos: this.state.todos.filter((e,i)=>{
        return i !== index 
      })
    })
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i)=>{
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.bandName}</h3>
              <span className="badge badge-pill badge-danger ml-2">
              {todo.image}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.gender}</mark></p>
            </div>
            <div className="card-footer">
              <button
              className="btn btn-danger"
              onClick={this.removeTodo.bind(this, i)}>
              Delete
              </button>

            </div>
          </div>
        </div>  
      )
    })
    
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
          
          <span className="badge badge.pill badge-light ml-2">
          </span>
          </a>          
        </nav>
        <div className="container">
          <div className="row mt-4">
            <Form onAddTodo={this.handleAddTodo}/>
          </div>
        </div> 
        <div className="container">
          <div className="row mt-4">
            { todos }
          </div>
        

        </div>
        </div>
      
    );
  }
}


