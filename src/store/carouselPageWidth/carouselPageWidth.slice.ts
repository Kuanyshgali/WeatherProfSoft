import {createSlice} from "@reduxjs/toolkit";

//const state: string | null = localStorage.getItem('state')

interface widthState {
    width: number
}

const initialState: widthState = {
    width: 0
}

const widthSlice = createSlice({
    name: 'width',
    initialState,
    reducers: {
        setWidth(state, action) {
            if (action.payload) {
                state.width = action.payload
            }
        }
    }
})

const widthAction = widthSlice.actions
const widthReducer = widthSlice.reducer

export {widthSlice, widthAction, widthReducer}