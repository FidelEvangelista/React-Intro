import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
   
  React.useEffect(() =>{
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
       }else{
           parsedItem = JSON.parse(localStorageItem);
           setItem(parsedItem);
       }
      
       setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 2000);
  
  }, []);
    
    
  
     const saveItems = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
  
      setItem(newItem);
     };
  
     return {item, saveItems, loading, error};
  }
export { useLocalStorage };



// const defaultTodos = [
//   {text: 'Cortar Cebollas', completed: true},
//   {text: 'Tomar Curso React', completed: false},
//   {text: 'Crear Base de datos', completed: false},
//   {text: 'Crear clases models Reflection', completed: true},
//   {text: 'Usar estados derivados', completed: true}
// ];

//     localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
