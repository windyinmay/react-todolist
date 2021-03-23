/*import React, { useState } from 'react';
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

export default Todolist;*/

import { AgGridReact } from 'ag-grid-react';
import React, { useState, useRef } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css'; 

function Todolist() {
  const [todo, setTodo] = useState({description: '', date: '', priority:''});
  const [todos, setTodos] = useState([]);

  const gridRef = useRef();

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = () => {
    if(gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex))
    } else {
      alert('Select row first');
    }
  }

  const columns= [
    { headerName: 'Description', field: 'description', sortable: true, filter: true, floatingFilter: true},
    { headerName: 'Date', field:'date', sortable: true, filter: true, floatingFilter: true},
    { headerName: 'Priority', field:'priority', sortable: true, filter: true, floatingFilter: true,
      cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'blue'}
    }
  ];

  return (
    <div>
      <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description}/>
      <input type="date" onChange={inputChanged} placeholder="Date" name="date" value={todo.date}/>
      <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority}/>
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteTodo}>Delete</button>
      <div className="ag-theme-material" style ={{width: '50%', height: '700px', margin: 'auto'}}>
          <AgGridReact
            ref={gridRef}
            onGridReady = {params => gridRef.current = params.api}
            rowSelection = 'single'
            columnDefs={columns}
            rowData={todos}
            animateRows={true}
          >
          </AgGridReact>
     </div>
     </div>
  );
}
export default Todolist;