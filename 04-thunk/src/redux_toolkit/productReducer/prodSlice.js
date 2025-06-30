
import { createSlice } from "@reduxjs/toolkit"




const prodSlice = createSlice({
    name:"products",
    initialState:{
        loading:true,
        error:false,
        product:null,
    },
    reducers:{
        allProd:(state, action) =>{
            state.product = action.payload
        }
    }
})

export const prodReducer = prodSlice.reducer
export const {allProd} = prodSlice.actions
