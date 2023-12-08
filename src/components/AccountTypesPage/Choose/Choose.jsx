import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import classes from "./Choose.module.scss";
import Button from "../../GlobalComponents/Button/Button";

import bgCity from "../../../assets/img/AccountTypesPage/img-choose-city.jpg";
import imgGirl from "../../../assets/img/AccountTypesPage/img-choose-girl.png";

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        title: "Zero commission",
        descr: "Invest in stocks and ETFs, all commission-free. No margin interest or short selling fees for intra-day trading."
    },
    {
        title: "Advanced charting tools",
        descr: "Trend following and pattern recognition with detailed drawings, indicators, and technical signals."
    },
    {
        title: "Customizable layout",
        descr: "Customize your own layout, with more than 55+ indicators & 63+ technical signals."
    },
    {
        title: "Trade during extended hours",
        descr: "Extended trading hours from 4 AM ET to 8 PM ET."
    }
];

const Choose = () => {
    const main = useRef();

    return (
        <section className={`${classes.choose}`} ref={main}>
            <div className={`container ${classes.choose__container}`}>
                <h2 className={`${classes.choose__title}`}>Why Choose Us?</h2>
                <div className={`${classes.choose__list}`}>
                    {data.map((item) => {
                        return (
                            <section className={`decoAngleContainer ${classes.choose__item}`}>
                                <div className={`decoAngleTop`}></div>
                                <div className={`decoAngleBottom`}></div>
                                <h3 className={`${classes.choose__itemTitle}`}>{ item.title }</h3>
                                <p className={`${classes.choose__itemDescr}`}>{ item.descr }</p>
                            </section>
                        )
                        })
                    }
                </div>
            </div>
            <div className={`${classes.choose__bgWrap}`}>
                <img className={`${classes.choose__bg}`} src={ bgCity } alt=""/>
                <div className={`${classes.choose__containerGirl}`}>
                    <img className={`${classes.choose__imgGirl}`} src={ imgGirl } alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Choose