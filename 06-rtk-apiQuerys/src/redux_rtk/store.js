

import { dummyApi } from "./dummyReducer/dummyApi";
import { prodReducer } from "./ProductReducer/prodSlice";
import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./usersReducers/usersSlice";

export const store = configureStore({
    reducer:{
        prod:prodReducer,
        users:usersReducer,
        [dummyApi.reducerPath]:dummyApi.reducer
    },
    middleware:(gt) => gt().concat(dummyApi.middleware)
})