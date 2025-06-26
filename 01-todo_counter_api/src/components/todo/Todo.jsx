  import React, { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { todoActions } from "../../reduxToolkit/todoToolkit/todoSlice";
  import TodoList from "./TodoList";

  const Todo = () => {
    const [todo, setTodo] = useState("");

    const todoList = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    console.log(todoList);

    return (
      <>
      <div className="max-w-7xl border  mx-auto my-10 p-10 shadow-2xl rounded-2xl ">
      <h1 className="text-2xl font-bold text-center mb-7">Todo-app</h1>
          <div className="flex justify-center">
        <div className="flex gap-2 ">
          <input
            className="border rounded-2xl "
             value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
          />
          <button
            onClick={() => { dispatch(todoActions.addTodo(todo));
               setTodo("");
            }}
            
            className="border bg-black text-white rounded-2xl py-3 px-5"
          >
            Add
          </button>
        </div>
</div>
        <TodoList />
      </div>
   
       </>
    );
     
      
  };

  export default Todo;
