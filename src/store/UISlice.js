import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    collection: false,
    inputCollection: false,
    status: 'No Collection'
}

const UiSlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        toggle(state) {
            state.inputCollection = true
            state.status = ''
        },
        switch(state) {
            state.collection = true
            state.inputCollection = false
        }
    }
})

export const UiActions = UiSlice.actions;

export default UiSlice;