import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import classes from "./Why.module.scss";
import Button from "../../GlobalComponents/Button/Button";

import icon1 from "../../../assets/img/MarketsPage/icon-markets-1.svg";
import icon2 from "../../../assets/img/MarketsPage/icon-markets-2.png";
import icon3 from "../../../assets/img/MarketsPage/icon-markets-3.svg";
import bg from "../../../assets/img/main/bg-accounts.png";

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        icon: icon1,
        title: "Protected & secure",
        descr: "Your data is safe and your funds are kept in segregated bank accounts, in accordance with regulatory requirements."
    },
    {
        icon: icon2,
        title: "Professional support",
        descr: "Get around-the-clock dedicated customer service in multiple languages."
    },
    {
        icon: icon3,
        title: "Regulated",
        descr: "Licensed and regulated by a variety of global leading regulators."
    }
];

const Why = () => {
    const main = useRef();

    return (
        <section className={`${classes.why}`} ref={main}>
            <div className="container">
                <h2 className={`${classes.why__title}`}>Why TradeVerse?</h2>
                <div className={`${classes.why__list}`}>
                    {data.map((item, index) => {
                        return (
                            <section key={index} className={`decoAngleContainer ${classes.why__item}`}>
                                <div className={`decoAngleTop`}></div>
                                <div className={`decoAngleBottom`}></div>
                                <img className={`${classes.why__itemIcon}`} src={ item.icon } alt=""/>
                                <h3 className={`${classes.why__itemTitle}`}>{ item.title }</h3>
                                <p className={`${classes.why__itemDescr}`}>{ item.descr }</p>
                            </section>
                        )
                        })
                    }
                </div>
            </div>
            <div className={`${classes.why__line}`}>
                <div className={`${classes.why__dot}`}></div>
                <div className={`${classes.why__dot}`}></div>
                <div className={`${classes.why__dot}`}></div>
            </div>
        </section>
    )
}

export default Why