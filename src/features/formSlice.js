import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : "namein",
    age : 14
}

const formSlice = createSlice ({
    name: "form",
    initialState,
    reducers : {
        formsubmit : (state, action)=> {
            state.name = action.payload.name
            state.age=action.payload.age
        }
    }

})

export default formSlice.reducer
export const {formsubmit} = formSlice.actions