import './CreateTodoButton.css';

function CreateTodoButtom({ setOpenModal }) {
  return (
    <button className='CreateTodoButton'
    onClick={() => { setOpenModal(state => !state); }}>+</button>
  )
}

export {CreateTodoButtom};


// import './CreateTodoButton.css'; function CreateTodoButton({ setOpenModal }) {
//   return (<button
//     className="CreateTodoButton"
//     onClick={() => { setOpenModal(state => !state); }}>+</button>
//   );
// }
// export { CreateTodoButton };