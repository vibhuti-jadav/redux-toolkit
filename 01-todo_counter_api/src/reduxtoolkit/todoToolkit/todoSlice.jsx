import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addTodo:(state,action) =>{
            let obj={
                id:nanoid(),
                todo:action.payload
            }
            state.push(obj)
        },

        changeStatus: (state, action) => {
            const todo = state.find((ele) => ele.id == action.payload.id);
            if (todo) {
                todo.status = !todo.status;
            }
        },

        deleteTodo:(state,action) =>{
                return state.filter((ele)=>ele.id != action.payload.id)

        },
        editTodo: (state, action) => {
            const { id, newTodo } = action.payload;
            const todo = state.find((ele) => ele.id === id);
            if (todo) {
                todo.todo = newTodo;
            }
        }
        
    }
    
})

export const todoActions = todoSlice.actions
export const todoReducer = todoSlice.reducer 