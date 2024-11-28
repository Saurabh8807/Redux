import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    counter:0
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.counter+=1
        },
        decrement:(state,action)=>{
            state.counter-=1
        },
        reset:(state,action)=>{
            state.counter=0
        },
        increamentByAmount:(state,action)=>{
            state.counter+=action.payload
        }
    }
})


export const {increment,decrement,reset,increamentByAmount}=counterSlice.actions

export default counterSlice.reducer;