import React from "react";
import UseContext from "./UseContext";

const TodoContext = (props) => {
    return (
        <UseContext.Provider value={props.children}>
            {props.children}
        </UseContext.Provider>
    );
};

export default TodoContext;