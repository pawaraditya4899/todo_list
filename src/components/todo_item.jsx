import React, { useContext, useState } from "react";
import UseContext from "../context/UseContext";

const Todo_item = ({ todo }) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.name);

    const { updateTodo, deleteTodo } = useContext(UseContext);

    const editTodo = () => {
        updateTodo(todo.id, todoMsg);
    };

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                checked={todo.completed}
            />

            <input
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable
                        ? "border-black/10 px-2"
                        : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
            />

            <button
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    }

                    setIsTodoEditable((prev) => !prev);
                }}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>

            <button onClick={() => deleteTodo(todo.id)}>
                ❌
            </button>
        </div>
    );
};

export default Todo_item;