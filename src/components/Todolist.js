import React, { useState } from 'react';
import Todotable from './Todotable';

function Todolist() {
    const [todo, setTodo] = useState({desc: '', date: ''});
    const [todos, setTodos] = useState([]);
    
    const inputChanged = (e) => {
      setTodo({...todo, [e.target.name]: e.target.value});
      console.log(e.target.name)
    }

    const addTodo = (event) => {
      event.preventDefault();
      setTodos([todo,...todos]);
      setTodo('');
    }
    const deleteTodo = (line) => {
      setTodos(todos.filter((_,index) => index !== line));
    }

    return (
        <div className="App">
          <header className="App-header">
            Simple Todolist
          </header>

          <form onSubmit = {addTodo}>
          <legend>Add todo:</legend>
          <fieldset>
            Description: <input name="desc" type="text" value={todo.desc} onChange={inputChanged}></input>
            Date: <input name="date" type="date" value={todo.date} onChange={inputChanged}></input>
            <button onClick={addTodo}>Add</button>
            </fieldset>
          </form>
          <Todotable todos ={todos} deleteTodo={deleteTodo}/>
        </div>
      );
}

export default Todolist;