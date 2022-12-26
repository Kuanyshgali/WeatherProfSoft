import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IWeather} from "../../models/IWeather";

export const weatherApi = createApi({
    reducerPath: 'weather/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline'
    }),
    endpoints: build => ({
        fetchWeather: build.query<IWeather, string>({
            query: (location: string) => ({
                url: `/${location}` + '/next7days',
                params: {
                    key: 'FRCVDGSMJKPZ8FUNQ684D482Q',
                    unitGroup: 'metric',
                    contentType: 'json'
                }
            })
        })
    })
})

export const { useLazyFetchWeatherQuery } = weatherApi;
