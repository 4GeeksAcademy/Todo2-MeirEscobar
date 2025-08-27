import React, {useState, useEffect} from 'react';

const ToDo = () => {

  //usestate valor de input
  const [inputValue, setInputValue] = useState("");

  //usestate valor de lista
  const [todos, setTodos] = useState([])

  //funcion string de input
  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }

  //Añadir el Valor de input a la lista todos y reiniciar el Valor de input.
  const handleOnClick = () => {
    setTodos([...todos, inputValue])
    setInputValue("")
  }

  //Borrar el contenido de Index y actualizar todos.
  const handleDelete = (index) => {
    const updateTodos = todos.filter((tarea, i) => i !== index)
    setTodos(updateTodos)
  }

  //Escucha Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter"){
      handleOnClick();
    }
  }
  return (
    <div className='container'>
      <h2>To do</h2>
      <div className='container-input'>
        <input type="text" value={inputValue} onChange={handleOnChange} onKeyDown={handleKeyDown}/>
        <button className='btn-add' onClick={handleOnClick}>Add</button>
      </div>
      <ul>
        {
          todos.length > 0 ? todos.map((todo, index) => {
            return (
              <li key={index}>
                {todo} <button className='btn-delete' onClick={() => { handleDelete(index) }}>Delete</button>
              </li>
            )
          })
            :
            <p>No hay tareas aún</p>
        }
      </ul>
    </div>
  )
}

function App() {
    return (
        <div className='App'>
            <ToDo />
        </div>
    );
}

export default App;
