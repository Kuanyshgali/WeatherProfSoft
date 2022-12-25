export interface IHours {
    datetime: string,
    temp: number,
    icon: string,
    conditions: string,
}

export interface IDay {
    datetime: string,
    temp: number,
    visibility: number,
    humidity: number,
    pressure: number,
    windspeed: number,
    hours: IHours[],
    icon: string
}


export interface IWeather {
    address: string;
    days: IDay[];
}