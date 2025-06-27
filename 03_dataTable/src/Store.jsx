import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "./reduxToolkit/dataReducer/dataSlice";


export const store = configureStore({
    reducer:{
        data:useReducer,    
    },
})