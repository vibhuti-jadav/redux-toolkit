import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reduxtoolkit/counterToolkit/counterSlice";
import { todoReducer } from "./reduxtoolkit/todoToolkit/todoSlice";

const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer
    }
})

export default store 