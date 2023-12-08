import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import classes from "./Accounts.module.scss";
import Button from "../../GlobalComponents/Button/Button";

import icon1 from "../../../assets/img/main/img-accounts-1.png";
import icon2 from "../../../assets/img/main/img-accounts-2.png";
import icon3 from "../../../assets/img/main/img-accounts-3.png";
import bg from "../../../assets/img/main/bg-accounts.png";

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        img: icon1,
        title: "Discover Traders' Trends",
        descr: "Want to see what other traders are doing? Simply choose a trend to analyze and reveal the top 10 results based on TradeVerse traders’ activity."
    },
    {
        img: icon2,
        title: "Filter your way",
        descr: "Want to broaden your search even more? No problem - we've got you covered. Why from numerous filter combinations to get the results you need to empower your strategy."
    },
    {
        img: icon3,
        title: "Analyse the results",
        descr: "The results are sorted top to bottom and the visual scale shows the relative differences between them. Feel like trading? You can also open a Buy/Sell position right from the same screen."
    }
];

const Accounts = () => {
    const main = useRef();

    return (
        <section className={`${classes.accounts}`} ref={main}>
            <div className="container">
                <h2 className={`${classes.accounts__title}`}>Now the world is your oyster!</h2>
                <b className={`${classes.accounts__subtitle}`}>Navigation is simple</b>
                <p className={`${classes.accounts__descr}`}>Using your desktop? Just hover over the side-bar menu and you will see +Insights.</p>
                <div className={`${classes.accounts__list}`}>
                    {data.map((item) => {
                        return (
                            <section className={`decoAngleContainer ${classes.accounts__item}`}>
                                <div className={`decoAngleTop`}></div>
                                <div className={`decoAngleBottom`}></div>
                                <img className={`${classes.accounts__itemIcon}`} src={ item.img } alt=""/>
                                <h3 className={`${classes.accounts__itemTitle}`}>{ item.title }</h3>
                                <p className={`${classes.accounts__itemDescr}`}>{ item.descr }</p>
                            </section>
                        )
                        })
                    }
                </div>
            </div>
            <img className={`${classes.accounts__bg}`} src={ bg } alt=""/>
        </section>
    )
}

export default Accounts