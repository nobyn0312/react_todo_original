import { useState } from 'react'
import './App.css'

function App() {

  const [inputValue, setInputValue] = useState("");

  const [todos,setTodos] = useState<Todo[]>([]);

  // todoのタイプを定義
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  // 関数系
  // eventの型：HTMLInputElement
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setInputValue(e.target.value);
  };

  const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const newTodo:Todo ={
      inputValue:inputValue,
      id:todos.length,
      checked:false
    }
    setTodos([newTodo,...todos])
    setInputValue("")
  }

  const handleEdit = (id: number, newValue: string) => {
    const newTodos = todos.map(todo =>
      todo.id === id ? { ...todo, inputValue: newValue } : todo
    );
    setTodos(newTodos);
  }

  const handleCheck = (id: number,checked:boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked  = !checked
      }
      return todo;
    });
    setTodos(newTodos);
  };

  // 削除
  const handleDelete=(id:number,checked:boolean)=>{
    console.log(id)
    const newTodos = todos.filter((todo)=>todo.id !== id)

    if(checked === true){
      setTodos(newTodos)
    }else{
      return
    }


  }

  return (
    <>
      <div className='container'>

        <h1>Todo</h1>
        <div className="input-area">
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
            type="text"
            onChange={(e) => handleChange(e)}
            className='input'/>
           <input type='submit' value="作成"/>
          </form>
        </div>

        <div className="incomplete-area">
          <ul>
            {todos.map((todo)=>
              <li key={todo.id}>
                <input type="checkbox"  onChange={() => handleCheck(todo.id,todo.checked)} className='checkbox'/>
              <input
                type="text"
                disabled={todo.checked}
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                value={todo.inputValue}
                className='input' />

                <button onClick={()=>handleDelete(todo.id,todo.checked)}>削除</button>
            </li>
            )}
          </ul>
        </div>

        </div>
    </>
  )
}

export default App
