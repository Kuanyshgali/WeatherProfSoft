import React, {FC} from 'react';
import styles from './hour.module.scss'
import {IHours} from "../../models/IWeather";

interface HourProps {
    hour: IHours
}

const Hour: FC<HourProps> = ({hour}) => {
    const time: string[] = hour.datetime.split(':')

    return (
        <div className={styles.container}>
            <div className={styles.hour}>
                <p className={styles.hour__time}>{time[0]}:{time[1]} {Number(time[0]) < 12 ? 'am' : 'pm'}</p>
                <img src={require(`../../assets/icons/${hour.icon}.png`)} alt={'Image not found'}
                     className={styles.hour__icon}/>
                <p className={styles.hour__temp}>{hour.temp}°</p>
            </div>
        </div>

    );
};

export default Hour;