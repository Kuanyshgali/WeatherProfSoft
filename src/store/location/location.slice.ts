import {createSlice} from "@reduxjs/toolkit";

//const state: string | null = localStorage.getItem('state')

interface locationState {
    location: string
}

const initialState: locationState = {
    location: 'Saratov'
//    location: state ? state : 'weather'

}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation(state, action) {
            if (action.payload) {
                state.location = action.payload
            }
        }
    }
})

const locationAction = locationSlice.actions
const locationReducer = locationSlice.reducer

export {locationSlice, locationAction, locationReducer}