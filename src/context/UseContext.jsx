import react from "react";

    const UseContext = react.createContext(
        todos[
            {
                id:1,
                name:"xyz",
                is_checked : false
            }
            
        ],
        addTodo= (name)=>{},
        updateTodo=(id,name)=>{},
        deleteTodo=(id)=>{},

    )
    
export default UseContext;
