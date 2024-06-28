import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState('');//追加したタスクを一時的に保持するステート

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


  const onSubmit =(e:any)=>{
    e.preventDefault()
    console.log(e.target.value)

    console.log("テスト")
  }

  return (
    <>
      <div className='container'>

        <div className="input-area">

          <form onSubmit={onSubmit}>
            <input
              id='task'
              name='task'
              value={task}
              onChange={(e) => {
                setTask(e.target.value)
              }} />
            <button>追加</button>
          </form>

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
