import { useState , useEffect } from 'react';
const API_BASE =  "http://localhost:3001";

function App() {
  const [todos,setTodos]=useState([]);
  const [popupActive,setPopupActive]=useState(false);
  const [newTodo,setNewTodo]=useState("");

  useEffect( ()=>{
    GetTodos();
  },[] );

  const GetTodos = ()=>{
    fetch(API_BASE + "/todos")
    .then(res =>res.json())
    .then( data => setTodos(data))
    .then(err => console.error("Error : " , err));
  }

  return (
    <div className="App">
      <h1>Welcome, buddy!</h1>
      <h3>TASKS :</h3>
      <div className="todos">
        <div className="todo">
          <div className="checkbox"></div>
          <div className="text">Get Bread</div>
          <div className="delete-todo ">x</div>
        </div>
        <div className="todo is-complete">
          <div className="checkbox"></div>
          <div className="text">Get Bread</div>
          <div className="delete-todo ">x</div>
        </div>
      </div>
    </div>
  );
}

export default App;


<div className="todos">
        <div className="todo">
            <div className="checkbox"></div>

            <div className="text">Get Bread</div>

            <div className="delete-todo ">x</div>
          </div>
          <div className="todo">
            <div className="checkbox"></div>

            <div className="text">Get Bread</div>

            <div className="delete-todo ">x</div>
          </div>
        </div>