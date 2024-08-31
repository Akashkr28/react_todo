import './App.css'
import TodoList from './component/TodoList/TodoList'
import AddTodo from './component/AddTodo/AddTodo'
import { useEffect, useState } from 'react'
import TodoContext from './context/TodoContext';

function App() {

  const [todos, setTodos] = useState([ ]);


  return (
    <>
    <TodoContext.Provider value={{todos, setTodos}}>
      <AddTodo/>     
      <TodoList/>
    </TodoContext.Provider>
    </>
  )
}

export default App
