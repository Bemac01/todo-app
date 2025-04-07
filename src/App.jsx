import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"
import './Fanta.css'


function App() {

  let todos =[
    {input: 'Go to National library', completed: true},
    {input: 'Study on how to use React js', completed: false},
    {input: 'Build Apps with what I learned', completed: false},
    {input: 'Go Home and be happy', completed: false},
  ]


  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput />
    </>
  )
}

export default App
