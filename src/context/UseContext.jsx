import react from "react";

    const UseContext = react.createContext(
        {todos :[
            {
                id:1,
                name:"xyz",
                completed : false
            }
            
        ],
        addTodo : (txt)=>{},
        updateTodo :(id,txt)=>{},
        deleteTodo :(id)=>{},}

    )
    
export default UseContext;
