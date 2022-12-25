import React, {FC} from 'react';
import styles from './navigations.module.scss'
import {Link, useLocation} from "react-router-dom";

const Navigations: FC = () => {
    const weekToday = useLocation()
    const flag = weekToday.pathname == '/'

    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <img src={require('../../assets/icons/logo.png')} className={styles.logo__icon}/>
                <span className={styles.logo__title}>ProfSoft | Weather</span>
            </div>

            <nav className={styles.nav}>
                <p className={styles.nav__link + ` ${!flag ? styles.nav__link_week : ''}`}><Link to={'/'}>Week</Link>
                </p>
                <p className={styles.nav__link + ` ${flag ? styles.nav__link_today : ''}`}><Link
                    to={'/day/0'}>Today</Link></p>
            </nav>
        </nav>
    );
};

export default Navigations;