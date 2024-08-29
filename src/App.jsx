import './App.css'
import TodoList from './component/TodoList/TodoList'

function App() {

  const todos = [
    {id: 1, text: 'todo 1', isFinished: true},
    {id: 2, text: 'todo 2', isFinished: false},
  ]

  return (
    <>
    <TodoList todos={todos}/>
    </>
  )
}

export default App
