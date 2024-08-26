import React from 'react';
import './TodoCounter.css';
import { ToDoContext } from './TodoContext';

function ToDoCounter({total, complete}) {
  const {
    completedTodos,
    totalTodos ,
  } = React.useContext(ToDoContext);
  return (
    <h1 className='TodoCounter'>
        Has completado <span>{completedTodos} </span> 
         de <span>{totalTodos}</span> TODOs
        </h1>
  )
}

export {ToDoCounter} 

// rfce = CREA COMPONENTE REAC 