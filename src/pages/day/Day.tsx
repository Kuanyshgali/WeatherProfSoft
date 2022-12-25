import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {weatherApi} from "../../store/weather/weather.api";
import {IHours, IWeather} from "../../models/IWeather";
import styles from './day.module.scss'
import Hour from "../../components/hour/Hour";
import {useActions, useAppSelector} from "../../hooks";
import {SerializedError} from "@reduxjs/toolkit";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";

interface DayProps {
    weatherItem: IWeather | undefined,
    error: undefined | SerializedError | FetchBaseQueryError
}

const Day: FC<DayProps> = ({weatherItem, error}) => {
    const {id} = useParams<string>()
    const [hours, setHours] = useState<IHours[] | null>(null)


    const find = () => {
        return weatherItem ? weatherItem.days[Number(id)].hours : null
    }

    useEffect(() => {
        if (weatherItem) {
            const weather = find()
            setHours(weather)
        }
    }, [weatherItem])

    return (
        <div className={styles.container}>
            {hours && hours.map(hour => <Hour key={hour.datetime} hour={hour}/>)}
        </div>
    )
};

export default Day;