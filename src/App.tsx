import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: 'タスク1',
      isCompleted: false
    },
    {
      id: 2,
      task: 'タスク2',
      isCompleted: false
    }
  ])

  return (
    <>
      <div className='container'>
        <div className="input-area">
          <input placeholder="TODOを入力" />
          <button>追加</button>
        </div>

        <div className="incomplete-area">
          <h2 className="title">TODO</h2>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <label>
                  <input type='checkbox' />
                  <span>{todo.task}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <button>完了タスクの削除</button>
      </div>
    </>
  )
}

export default App
