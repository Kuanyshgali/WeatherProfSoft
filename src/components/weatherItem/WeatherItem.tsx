import React, {FC} from 'react';
import {IDay} from "../../models/IWeather";
import styles from './weatherItem.module.scss'
import {useNavigate} from "react-router-dom";

interface WeatherItemProps{
    day: IDay
    index: number
}

const WeatherItem: FC<WeatherItemProps> = ({day, index}) => {
    const navigate = useNavigate()

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        navigate(`/day/${index}`)
    }

    const options: any = {month: 'short', day: 'numeric', weekday: 'short'};
    const splitDate: string[] = day.datetime.split('-')
    const date = new Date(Date.UTC(Number(splitDate[0]), Number(splitDate[1]), Number(splitDate[2]))).toLocaleString("en-US", options)


    return (
        <div className={styles.container} onClick={clickHandler}>
            <div className={styles.temp_block}>
                <div className={styles.temp_block__icon_temp}>
                    <img src={require('../../assets/icons/icon_temperature.png')} className={styles.temp_block__icon}/>
                    <p className={styles.temp_block__temp}> {day.temp}°C</p>
                </div>
                <img src={require(`../../assets/icons/${day.icon}.png`)} className={styles.temp_block__icon_weather}/>
            </div>

            <p className={styles.date}> {date} </p>

            <div className={styles.features}>
                <div  className={styles.features__property}>
                    <p className={styles.features__title}>Humidity</p>
                    <p className={styles.features__value}>{day.humidity} %</p>
                </div>
                <div className={styles.features__property}>
                    <p className={styles.features__title}>Visiblity</p>
                    <p className={styles.features__value}>{day.visibility} km</p>
                </div>
                <div className={styles.features__property}>
                    <p className={styles.features__title}>Air Pressure</p>
                    <p className={styles.features__value}>{day.pressure} hPa</p>
                </div>
                <div className={styles.features__property}>
                    <p className={styles.features__title}>Wind</p>
                    <p className={styles.features__value}>{day.windspeed} mph</p>
                </div>
            </div>



        </div>
    );
};

export default WeatherItem;