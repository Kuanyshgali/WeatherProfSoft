import React, {FC, useEffect, useState} from "react";
import styles from './dashboard.module.scss'
import WeatherItem from "../../components/weatherItem/WeatherItem";
import {weatherApi} from "../../store/weather/weather.api";
import {useActions, useAppSelector} from "../../hooks";
import Carousel from "../../components/carousel";
import {IWeather} from "../../models/IWeather";
import {SerializedError} from "@reduxjs/toolkit";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";

interface DashboardProps {
    weatherItem: IWeather | undefined,
    error: undefined | SerializedError | FetchBaseQueryError
}

const Dashboard: FC<DashboardProps> = ({weatherItem, error}) => {

    const {setLocation} = useActions()
    const [locationHelper, setLocationHelper] = useState<string>('')

    const search = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setLocation(locationHelper)
        setLocationHelper('')
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <form action={'#'}>
                    <input
                        type={"text"}
                        placeholder="Search location"
                        value={locationHelper}
                        onChange={e => setLocationHelper(e.target.value)}
                        className={styles.top__input}
                    />
                    <button onClick={search} type={"submit"} className={styles.top__button}>Search</button>
                </form>

                {weatherItem && !error && (
                    <div className={styles.top__address}>
                        <p>{weatherItem.address}</p>
                        <img src={require('../../assets/icons/icon_location.png')} alt={'Image not found'}
                             className={styles.top__img}/>
                    </div>
                )}
            </div>


            <div className={styles.items}>
                {weatherItem && !error && (
                    <Carousel>
                        {weatherItem.days.map((day, index) =>
                            <Carousel.Page key={day.datetime}>
                                <WeatherItem
                                    day={day}
                                    index={index}/>
                            </Carousel.Page>)
                        }
                    </Carousel>
                )}
            </div>

            {error && (
                <div className={styles.error}>
                    Invalid location name
                </div>
            )}

        </div>
    )
}

export {Dashboard}