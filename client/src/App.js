function App() {
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