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
                    key: '8FPUAH2LS3UV8KJ6S8P7C6S6X',
                    unitGroup: 'metric',
                    contentType: 'json'
                }
            })
        })
    })
})

export const { useLazyFetchWeatherQuery } = weatherApi;
