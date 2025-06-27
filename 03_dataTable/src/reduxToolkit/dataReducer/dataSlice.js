import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    data:[],
    sortBy:null,
    sortDirection:'asc'
};

const userSlice = createSlice({

    name:'data',
    initialState,
    reducers:{
        sortUsersByField : (state , action)=>{
            const field = action.payload;

            if(state.sortBy === field){
                state.sortDirection = state.sortDirection ==='asc' ?'desc' :'asc';
            }
            else
            {
                state.sortBy =field;
                state.sortDirection ='asc';
            }

            state.data.sort((a,b)=>{
                const valA =a[field];
                const valB =b[field];

                if(typeof valA === 'string'){
                    return state.sortDirection === 'asc' ? valA.localeCompare(valB) :valB.localeCompare(valA);
                }

                return state.sortDirection === 'asc' ? valA-valB :valB-valA;
            })
        }
    }
})

export const {sortUsersByField} = userSlice.actions;

export const useReducer =userSlice.reducer;