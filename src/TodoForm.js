import React from "react";
import './TodoForm.css';
import { ToDoContext } from "./TodoContext";


function TodoForm() {
const {
    addTodo,
    setOpenModal,
} = React.useContext(ToDoContext);

const onSubmit = (event) =>{
  event.preventDefault();
  addTodo(newTodoValue);
   setOpenModal(false);
}

const onCancel = (event) => {
  event.preventDefault();
   setOpenModal(false);
}

const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

const [newTodoValue, setNewTodoValue] = React.useState('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Estudiar media hora de Ingles"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                    className="TodoForm-button--cancel"
                     onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button--add"
                    onClick={onSubmit}
                >Agregar</button>
            </div>

        </form>
    );
}

export { TodoForm };





// import React from 'react';
// import { TodoContext } from '../TodoContext';
// import './TodoForm.css';

// function TodoForm() {
//     const { addTodo, setOpenModal, } = React.useContext(TodoContext); 
//     const [newTodoValue, setNewTodoValue] = React.useState(''); 
//     const onSubmit = (event) => { event.preventDefault(); addTodo(newTodoValue); setOpenModal(false); }; 
//     const onCancel = () => { setOpenModal(false); }; 
//     const onChange = (event) => { setNewTodoValue(event.target.value); }; 

//     return (
//     <form onSubmit={onSubmit}><label>Esribe tu nuevo TODO</label><textarea
//         placeholder="Cortar cebolla para el almuerzo"
//         value={newTodoValue}
//         onChange={onChange} />
//         <div className="TodoForm-buttonContainer">
//             <button
//             type="button"
//             className="TodoForm-button TodoForm-button--cancel"
//             onClick={onCancel}>Cancelar</button>
//             <button
//                 type="submit"
//                 className="TodoForm-button TodoForm-button--add">Añadir</button>
//                 </div>
//                 </form>
//             );
// }

// export { TodoForm }