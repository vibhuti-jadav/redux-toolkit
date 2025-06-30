import { configureStore } from "@reduxjs/toolkit";
import { prodReducer } from "./productReducer/prodSlice";
import { usersReducer } from "./usersReducer/userSlice";

export const store = configureStore({
    reducer:{
        prod:prodReducer,
        users:usersReducer
    }
})