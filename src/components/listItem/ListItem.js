import { useEffect, useState } from 'react';
import ListTodo from '../listToto/ListTodo';
import './ListItem.css'

function ListItem() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title :'task 1'
    },
    {
      id: 2,
      title :'task 2'
    }
  ]);
  const [newTodos, setNewTodos] = useState('');

  // useEffect(() => {
  //   console.log('todo list')
  //   return () => {
  //     console.log('cleanUp code')
  //   }
  // })

  const addBtn = () => {
    setTodos([...todos , {id : todos.length +1, title: newTodos}])
  }

  const deleteBtn = (todoId) => {
    let newTodo = todos.filter(todo => todo.id !== todoId)
    setTodos(newTodo)
  }
    return (
      <div className="container">
        <h1 style={{ fontSize: "42px", marginLeft: "20px", marginTop: "20px" }}>
          List Item :
        </h1>
        <hr />
        <div>
          <input
            type="text" onChange={(e) => setNewTodos (e.target.value)}
            className="mt-2 bg-slate-200 outline-none rounded-md py-2 px-3 w-80 mx-3"
          />
          <button className="bg-slate-200 p-2 rounded-md px-3 hover:bg-slate-400" onClick={addBtn}>
            <strong>Add</strong>
          </button>
        </div> 
        {todos.map(todo => (
          <ListTodo key={todo.id} {...todo} remove={() => deleteBtn(todo.id)} />
        ))}
      </div>
    );
}
export default ListItem; 