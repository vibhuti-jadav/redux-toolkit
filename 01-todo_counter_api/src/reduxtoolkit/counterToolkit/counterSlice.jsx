import { createSlice } from "@reduxjs/toolkit";


let initialState = {count:0}

const counterSlice = createSlice({

    name:"counter",
    initialState,

    reducers:{
        inCount:(state ,action)=>{
        state.count++;
    },
        deCount:(state,action) =>{
        state.count--;
    }
    }
    

})

export const {inCount,deCount} = counterSlice.actions
export const counterReducer = counterSlice.reducer 