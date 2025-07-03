import { createAsyncThunk } from "@reduxjs/toolkit"



export const fetchUsers = createAsyncThunk("userData", async (num="") => {
      let res = await fetch(`https://fakestoreapi.com/products/${num}`)
     return await res.json()
})


export const extraReducers = (builder)=>{
        builder.addCase(fetchUsers.pending, (state, action)=>{
            state.loading = true
        }),
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
            state.loading=false;
        }),
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = true
        })
    }