
import React from "react";
import { useLocalStorage } from "../useLocalStorage";

const ToDoContext = React.createContext();

function TodoProvider({children}) {
      //let parsedTodos = JSON.parse(localStorageTodos);
  const {item: todos,
    saveItems:saveTodos,
    loading,
    error
   } = useLocalStorage('TODOS_V1', []);
 const [searchValue, setSearchValue] = React.useState('');
 const [openModal, setOpenModal] = React.useState(false);

 //Estados derivados
 const completedTodos = todos.filter(todo => todo.completed).length;
 const totalTodos = todos.length;

 // React.useEffect(() => {
 //   console.log('Log 2');
 // });

 //PARA USAR useEffect se mandan 2 parametros, primero una funcion en este caso una anonima
 // segundo un array, en esta caso es un vacio lo que quiere decir que solo se ejecutará una vez
 // si el array tiene un valor por ejemplo un componente, se validara el cambio de estado del dicho
 // y en base al cambio se volvera a ejectuar el useEffect

 // React.useEffect(() => {
 //   console.log('Log otrooo');
 // } ,[]);

  const searchedTodos = todos.filter(
   (todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
   }
  );

  const addTodo = (text) => {
    const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false
      });

     saveTodos(newTodos);
  }

   const completeTodo = (text) => {
     const newTodos = [...todos];
     const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
     ); 
     newTodos[todoIndex].completed = true;
     saveTodos(newTodos);
   };

   const deleteTodo = (text) => {
     const newTodos = [...todos];
     const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
     );
     newTodos.splice(todoIndex, 1);
     saveTodos(newTodos);
   };

  console.log('los usuarios buscan ToDos de ' + searchValue);

    return(
        <ToDoContext.Provider value={
          {
            loading,
            error,
            completedTodos,
            totalTodos,
           addTodo,
           setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
          }
        }>
        {children}
        </ToDoContext.Provider>
    );
}

export {ToDoContext, TodoProvider};