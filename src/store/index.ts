import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {weatherApi} from "./weather/weather.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {locationReducer} from "./location/location.slice";
import {widthReducer} from "./carouselPageWidth/carouselPageWidth.slice";
//import {blogReducer} from "./weather/weather.slice";

const rootReducer = combineReducers({
    [weatherApi.reducerPath]: weatherApi.reducer,
    location: locationReducer,
    width: widthReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(weatherApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
