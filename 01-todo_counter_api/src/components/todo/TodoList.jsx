import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../reduxToolkit/todoToolkit/todoSlice";

const TodoList = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  return (
    <> 
 
    <div>
      
      <div className="max-w-7xl  my-10 ">
        <table className="table-auto ms-35">

           <tr>
            <th className="px-20 py-2 border bg-blue-300">Todo</th>
            <th className="px-20 py-2 border bg-blue-300">status</th>
            <th className="px-20 py-2 border bg-blue-300">Edit</th>
            <th className="px-20 py-2 border bg-blue-300">Delete</th>
          </tr>  
     
       


          {todo?.map((ele) => (
            <tr key={ele.id} className="text-center ">
              <td className="p-2 border rounded-3 bg-blue-100">
                {editId === ele.id ? (
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full px-1 py-1 border rounded"
                  />
                ) : (
                  ele.todo
                )}
              </td>
              <td className="p-2 border rounded-3 bg-blue-100">
                <button
                  onClick={() =>
                    dispatch(todoActions.changeStatus({ id: ele.id }))
                  }
                >
                  {ele.status ? "✅" : "❌"}
                </button>
              </td>
              <td className="p-2 border rounded-3 bg-blue-100">
                {editId === ele.id ? (
                  <button
                    onClick={() => {
                      if (editText.trim()) {
                        dispatch(
                          todoActions.editTodo({
                            id: ele.id,
                            newTodo: editText,
                          })
                        );
                        setEditId(null);
                        setEditText("");
                      }
                    }}
                  >
                    💾
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditId(ele.id);
                      setEditText(ele.todo);
                    }}
                  >
                    ✏️
                  </button>
                )}
              </td>
              <td
                className="p-2 border rounded-3 bg-blue-100"
                onClick={() => dispatch(todoActions.deleteTodo({ id: ele.id }))}
              >
                <button>🗑️</button>
              </td>
            </tr>
        
          ))}
      
        </table>
      </div>
    </div>
    </>
   
  );
};

export default TodoList;
