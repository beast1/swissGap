import React from 'react';
import classes from "./Banner.module.scss";
import Button from "../../GlobalComponents/Button/Button";

import bg from "../../../assets/img/MarketsPage/bg-banner.jpg";

const Banner = () => {
    return (
        <section className={`pt ${classes.banner}`}>
            <div className={`container ${classes.banner__container}`}>
                <h1 className={`${classes.banner__titleMega}`}>Exploring Markets</h1>
                <h2 className={`${classes.banner__title}`}>Your Path to Success</h2>
                <div className={`${classes.banner__controls}`}>
                    <Button>Start Now</Button>
                </div>
            </div>
            <div className={`${classes.banner__bgWrap}`}>
                <img className={`${classes.banner__bg}`} src={ bg } alt=""/>
            </div>
        </section>
    )
}

export default Banner;