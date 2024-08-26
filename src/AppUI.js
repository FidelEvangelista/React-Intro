import { ToDoCounter } from './ToDoCounter';
import { TodoSearch } from './ToDoSearch';
import { TodoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { TodosLoading } from './TodosLoading';
import { TodosError } from './TodosError';
import { EmptyTodos } from './EmptyTodos';
import { CreateTodoButtom } from './CreateTodoButtom';
import { ToDoContext } from './TodoContext';
import React from 'react';
import {Modal} from './Modal';
import {TodoForm} from './TodoForm';

function AppUI() {
    const {
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        } = React.useContext(ToDoContext);

    return (
        <>
            {/* <React.Fragment></React.Fragment> */}
            <ToDoCounter />
            <TodoSearch  />     
               
                    <TodoList>
                        {loading && <TodosLoading />}
                        {error && <TodosError />}
                        {(!loading && searchedTodos.length == 0) && <EmptyTodos />}

                        {searchedTodos.map(todo => (
                            <ToDoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))}
                    </TodoList>
               
            <CreateTodoButtom 
               setOpenModal={setOpenModal}
            />

{openModal &&(
 <Modal>
 {/* La funcionalidad de agregar TODO */}
  <TodoForm />
</Modal>
)}
           

        </>
    )
}

export { AppUI };