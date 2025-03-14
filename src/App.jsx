import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import "./App.css";
function App() {
  return (
    <>
      <h1 className="text-3xl text-center font-bold text-white">
 Todo Using Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
