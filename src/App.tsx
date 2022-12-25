import React, {useEffect, useState} from 'react';
import {Layout} from "./layout";
import {Dashboard} from "./pages/dashboard";
import {Route, Routes} from "react-router-dom";
import Day from "./pages/day/Day";
import Navigations from "./components/navigations/Navigations";
import {useActions, useAppSelector} from "./hooks";
import {weatherApi} from "./store/weather/weather.api";
import {IWeather} from "./models/IWeather";
import {SerializedError} from "@reduxjs/toolkit";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";


function App() {
    const {location} = useAppSelector(state => state.location)
    const [weather] = weatherApi.useLazyFetchWeatherQuery()
    const [weatherItems, setWeatherItem] = useState<IWeather | undefined>(undefined)
    const [error, setError]= useState<undefined | SerializedError | FetchBaseQueryError>(undefined)

    const data = async () => {
        const result = await weather(location).unwrap();
        setWeatherItem(result);
    };

    useEffect(() => {
        data().catch(error => setError(error));
    }, [location]);

    return (
        <Layout>
            <Navigations/>
            <Routes>
                <Route path="/" element={<Dashboard weatherItem={weatherItems} error={error}/>}/>
                <Route path="/day/:id" element={<Day weatherItem={weatherItems} error={error}/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
