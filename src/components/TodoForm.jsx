import React, { useState, useContext } from "react";
import UseContext from "../context/UseContext";

function TodoForm() {
    const [todoText, setTodoText] = useState("");

    const { addTodo } = useContext(UseContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!todoText.trim()) return;

        addTodo(todoText);
        setTodoText("");
    };

    return (
        <form className="flex" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write Todo..."
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />

            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;