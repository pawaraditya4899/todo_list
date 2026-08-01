import "./App.css";
import { useState,useContext} from "react";
import UseContext from "./context/UseContext";
import TodoForm from "./components/TodoForm";
import Todo_item from "./components/Todo_item";

function App() {

    const [todos, setTodos] = useState([]);

    const addTodo = (txt) => {
        setTodos((prev) => [
            ...prev,
            {
                id: Date.now(),
                name: txt,
                completed: false,
            },
        ]);
    };

    const updateTodo = (id, txt) => {
        setTodos((prev) =>
            prev.map((ele) =>
                ele.id === id
                    ? { ...ele, name: txt }
                    : ele
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) =>
            prev.filter((ele) => ele.id !== id)
        );
    };

    return (
        <UseContext.Provider
            value={{ todos, addTodo, updateTodo, deleteTodo }}
        >
            <TodoForm />

            {todos.map((ele) => (
                <Todo_item
                    key={ele.id}
                    todo={ele}
                />
            ))}
        </UseContext.Provider>
    );
}

export default App;