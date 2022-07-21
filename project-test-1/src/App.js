import './App.css';
import { useState } from "react";


function App() {
  const [todoList, setTodoList] = useState([])
  const [form, setForm] = useState({
    todo: '',
    status: false
  })

  const resetInput = () => {
    setForm({
      todo: '',
      status: false
    })
  }
  
  const handleChange = (e) => {
    setForm({
      todo: e.target.value,
      status: false
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      form
    ])
    resetInput()
  }

  const handleCheck = (index) => {
      const newTodo = todoList.map((e, i) => {
        if(i === index) {
          return {
            todo: e.todo,
            status: true
          }
        } else {
          return e
        }
      })
      setTodoList(newTodo)
  }

  return (
    <div>
      <div className='jumbotron'>
        <h1 className='font-bold text-4xl mb-7 text-white'>Todo List App</h1>
        {/* {JSON.stringify(form)} */}
        <form className='form' method='post' onSubmit={handleSubmit}>
            <input type="text" name="todo" value={form.todo} onChange={handleChange} placeholder='Todo..'/>
            <button className='ml-4 font-semibold text-white btn-submit' type="submit">Submit</button>
        </form>
      </div>
      <div className='content'>
        {todoList.map((e, i) => {
            return (
            <div key={i} className='card'>
              <div className='action'>
                <input type="checkbox" checked={e.status?true:false} onChange= {() => handleCheck(i)}/>
              </div>
              <div className='text'>
                {e.todo}
              </div>
              <div className='button-action'>
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
            )
        })
      }
        
      </div>
    </div>
  );
}

export default App;
