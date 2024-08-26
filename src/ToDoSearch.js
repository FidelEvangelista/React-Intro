import React from 'react';
import './TodoSearch.css';
import { ToDoContext } from './TodoContext';

function TodoSearch() {
  // const [searchValue, setSearchValue] = React.useState('');
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(ToDoContext);

  return (
    <input className='TodoSearch' placeholder="Buscar ToDo "
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value)
      }}
    />
  )
}

export { TodoSearch }

// rfce = CREA COMPONENTE REAC 