import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classes from "./Advantages.module.scss";

import imgGirl from "../../../assets/img/main/img-girl.png";
import imgBuilding from "../../../assets/img/main/img-building.png";

gsap.registerPlugin(ScrollTrigger);

const Advantages = () => {
    const main = useRef();

    return (
        <section className={`${classes.advantages}`} ref={main}>
            <section className={`${classes.support}`}>
                <div className={`container ${classes.support__container}`}>
                    <div className={`${classes.support__bannerContent}`}>
                        <h2 className={`${classes.support__title}`}>Introducing Insights</h2>
                        <div className={`${classes.support__checkListsWrap}`}>
                            <ul className={`${classes.support__checkList}`}>
                                <li className={`${classes.support__checkItem}`}>
                                    Uncover a universe of exclusive trading data in the palm of your hand.
                                </li>
                                <li className={`${classes.support__checkItem}`}>
                                    Harness the wisdom of the crowd to empower your trading strategy.
                                </li>
                                <li className={`${classes.support__checkItem}`}>
                                    Analyze trends and see what other TradeVerse traders are doing.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${classes.support__deco}`}>
                        <img className={`${classes.support__imgGirl}`} src={ imgGirl } alt=""/>
                        <img className={`${classes.support__imgBuilding}`} src={ imgBuilding } alt=""/>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Advantages;