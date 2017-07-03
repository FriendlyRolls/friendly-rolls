import React from 'react';

const Todo = ({todo, remove}) => {
  // Each Todo
  //REMOVE DOES NOT WORK
  return <li Onclick={todo.remove}>{todo.text}</li>;
}

const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<ul>{todoNode}</ul>);
}

export default TodoList;
