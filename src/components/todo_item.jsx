import { useContext, useState } from "react";
import react from react;
import UseContext from "../context/UseContext";

function todo_item(){
    const [todo,setTodo] = useState({})

    {todos,addTodo,updateTodo,deleteTodo} = useContext(UseContext);

    addTodo=(name)={
        todo{
            id : Date.now(),
            name : name,
            is_checked : false

        }
        
    }
    return()
}