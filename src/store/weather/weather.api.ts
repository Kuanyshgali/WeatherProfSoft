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
                url: `/${location}` + '/last7days',
                params: {
                    key: 'PMMVBLAEV72K7MNHMEMDXMQ8X',
                    unitGroup: 'metric'
                }
            })
        })
    })
})

export const { useLazyFetchWeatherQuery } = weatherApi;
