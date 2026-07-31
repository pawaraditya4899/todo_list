import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UseContext from './context/UseContext';
import UseContextProvidrer from './context/UseContextProvider'

function App() {

  const [todos,setTodos]= useState("");
  const [isTextEditabe,setIsTextEditable] = useState("");

  const {addTodo,updateTodo,deleteTodo} = UseContext();
   
  const addTodo =(txt)=>{
    setTodos((prev)=>[...prev,{ id:DataTransfer.now(),name:txt,completed:false}]);
  }
  
  const updateTodo =(id,txt)=>{
    setTodos((prev)=>(prev.map((ele)=> ele.id === id ? {...ele,name:txt}:ele)))
  }
  const  deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((ele)=> ele.id !== id ? ele : ""));
  }

  return (
      <UseContext.Provider value={todos,addTodo,updateTodo,deleteTodo}>
        <Todo_bar />
        <Todo_item todo={todos} />
        
      </UseContext.Provider>
  );
}

export default App;
