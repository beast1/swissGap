import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import classes from "./Accounts.module.scss";
import Button from "../../GlobalComponents/Button/Button";

import icon1 from "../../../assets/img/main/img-cover-1.jpg";
import icon2 from "../../../assets/img/main/img-cover-2.jpg";
import icon3 from "../../../assets/img/main/img-cover-3.jpg";
import bg from "../../../assets/img/main/bg-accounts.png";

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        img: icon1,
        title: "Duis aute irure dolor in reprehenderit.",
        date: "October 2021",
        views: 1279
    },
    {
        img: icon2,
        title: "Duis aute irure dolor in reprehenderit.",
        date: "October 2021",
        views: 1279
    },
    {
        img: icon3,
        title: "Duis aute irure dolor in reprehenderit.",
        date: "October 2021",
        views: 1279
    }
];

const Accounts = () => {
    const main = useRef();

    return (
        <section className={`${classes.accounts}`} ref={main}>
            <div className="container">
                <header className={`${classes.accounts__header}`}>
                    <b className={`${classes.accounts__subtitle}`}><b>Most read</b> articles in Forbs</b>
                    <b className={`${classes.accounts__subtitle}`}><b>Highly trending</b> topic</b>
                </header>
                <div className={`${classes.accounts__list}`}>
                    {data.map((item) => {
                        return (
                            <section className={`${classes.accounts__item}`}>
                                <img className={`${classes.accounts__itemIcon}`} src={ item.img } alt=""/>
                                <h3 className={`${classes.accounts__itemTitle}`}>{ item.title }</h3>
                                <p className={`${classes.accounts__itemDate}`}>{ item.date }</p>
                                <p className={`${classes.accounts__itemViews}`}><b>{ item.views }</b> Views</p>
                            </section>
                        )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Accounts
