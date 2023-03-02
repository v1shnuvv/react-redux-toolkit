import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count1 : 1,
    count2 : 10
}

const counterSlice = createSlice({
    name : "counter",
    initialState: initialState,
    reducers : {
        increment : (state, action)=>{
            state.count1 = state.count1 + 1
        },
        decrement : (state, action)=>{
            state.count1 = state.count1 - 1
        },
        incrementby10 : (state, action)=>{
            state.count2 = state.count2 + 10
        }
    }
})

export default counterSlice.reducer
export const {increment} = counterSlice.actions
export const {decrement, incrementby10} = counterSlice.actions