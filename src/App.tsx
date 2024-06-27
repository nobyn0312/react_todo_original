import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todoState,setTodoState]=useState([])
    const [inputValue, setInputValue] = useState<string>('');


  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value=(event.target.value)
    setInputValue(value)
    console.log(inputValue);
};

const addTask =()=>{
  const newTask =[]
  console.log('タスク追加')


}

  return (
    <>
    <div className='container'>
     <h1>Todoアプリ</h1>

     <section className='inputArea'>
      <input type="text" placeholder='タスクを入力' onChange={onChange}/>
      <button onClick={addTask}>作成</button>
     </section>


     <section className='inComplete'>
      <p>未完了タスク</p>

      <ul>
        <li>Todo1</li>
      </ul>
     </section>


     <section className='Complete'>
      <p>完了済みタスク</p>

      <ul>
        <li>Todo2</li>
      </ul>

     </section>

    </div>
    </>
  )
}

export default App
