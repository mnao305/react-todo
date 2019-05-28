import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import InputForm from './components/InputForm'

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: '0', name: 'hoge', check: false },
    { id: '1', name: 'fuga', check: false }
  ])

  const addTodo = (data: any) => {
    setTodos(prevState => {
      return [...prevState, { id: `${Date.now()}`, name: data, check: false }]
    })
  }

  const deleteTodo = (deleteID: string) => {
    console.log(deleteID)

    const index = todos.findIndex(e => {
      return e.id === deleteID
    })
    console.log(index)

    setTodos(prevState => {
      prevState.splice(index, 1)

      return [...prevState]
    })
  }

  const checkChange = (id: string) => {
    const index = todos.findIndex(e => {
      return e.id === id
    })

    setTodos(prevState => {
      prevState[index].check = !prevState[index].check
      return [...prevState]
    })
  }

  return (
    <div className="App">
      <Header />
      <InputForm addTodo={addTodo} />
      <TodoList
        checkChange={checkChange}
        deleteTodo={deleteTodo}
        todos={todos}
      />
    </div>
  )
}

export default App
