import React, { Component } from 'react';
import TodoForm from '../../Components/TodoForm/index.jsx'
import TodoList from '../../Components/TodoList/index.jsx'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './styles.less'

// Todo Id
window.id = 0;
class TodoApp extends Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
  }
  // Add todo handler
  addTodo(val){
    // Assemble data
    const todo = {text: val, id: window.id++}
    // Update data
    this.state.data.push(todo);
    // Update state
    this.setState({data: this.state.data});
  }
  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter
    this.setState({data: remainder});
  }

  render(){
    // Render JSX
    return (
      <div>
        What is going to happen?
        <TodoForm addTodo={this.addTodo.bind(this)}/>
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default TodoApp;
