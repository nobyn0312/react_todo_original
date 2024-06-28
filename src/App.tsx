import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // todoそのもの
  const [todoItem,setTodoItem] =useState("");

  // todoの配列
  const [todos, setTodos] = useState([{id:1,task:'タスク1'}])

  const onChangeText = (event) => {
    setTodos(event.target.value);
  };

  const onSubmit =(e:any)=>{
    e.preventDefault()
    console.log(e.target.value)

    console.log("テスト")
  }

  return (
    <>
      <div className='container'>

        <div className="input-area">
        <form>
            <input
             type="text"
            id="name" name="name"
              onChange={(e)=>onChangeText(e)} />
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
