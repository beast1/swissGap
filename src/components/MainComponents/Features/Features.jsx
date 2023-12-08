import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import classes from "./Features.module.scss";
import Button from "../../GlobalComponents/Button/Button";

import icon1 from "../../../assets/img/main/img-features-1.png";
import icon2 from "../../../assets/img/main/img-features-2.png";
import icon3 from "../../../assets/img/main/img-features-3.png";
import icon4 from "../../../assets/img/main/img-features-4.png";
import icon5 from "../../../assets/img/main/img-features-5.png";
import icon6 from "../../../assets/img/main/img-features-6.png";
import bg from "../../../assets/img/main/bg-features.png";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const main = useRef();

    useLayoutEffect(() => {
        if (document.documentElement.clientWidth > 1220) {
            const ctx = gsap.context((self) => {
                const element = self.selector('.gsap-cell-1');
                gsap.fromTo(element, {
                    transform: "translate(-200px, -40px)",
                    scrollTrigger: {
                        trigger: self.selector(`.gsap-trigger`),
                    },
                }, {
                    transform: "translate(0)",
                    duration: 2,
                    transformOrigin: "top left"
                });
            }, main);
            return () => ctx.revert();
        }
    }, []);

    useLayoutEffect(() => {
        if (document.documentElement.clientWidth > 1220) {
            const ctx = gsap.context((self) => {
                const element = self.selector('.gsap-cell-2');
                gsap.fromTo(element, {
                    transform: "translate(-200px, 40px)",
                    scrollTrigger: {
                        trigger: self.selector(`.gsap-trigger`),
                    },
                }, {
                    transform: "translate(0)",
                    duration: 2,
                    transformOrigin: "top left"
                });
            }, main);
            return () => ctx.revert();
        }
    }, []);

    useLayoutEffect(() => {
        if (document.documentElement.clientWidth > 1220) {
            const ctx = gsap.context((self) => {
                const element = self.selector('.gsap-cell-3');
                gsap.fromTo(element, {
                    transform: "translate(200px, -40px)",
                    scrollTrigger: {
                        trigger: self.selector(`.gsap-trigger`),
                    },
                }, {
                    transform: "translate(0)",
                    duration: 2,
                    transformOrigin: "top left"
                });
            }, main);
            return () => ctx.revert();
        }
    }, []);

    useLayoutEffect(() => {
        if (document.documentElement.clientWidth > 1220) {
            const ctx = gsap.context((self) => {
                const element = self.selector('.gsap-cell-4');
                gsap.fromTo(element, {
                    transform: "translate(200px, 40px)",
                    scrollTrigger: {
                        trigger: self.selector(`.gsap-trigger`),
                    },
                }, {
                    transform: "translate(0)",
                    duration: 2,
                    transformOrigin: "top left"
                });
            }, main);
            return () => ctx.revert();
        }
    }, []);

    return (
        <section className={`${classes.features}`} ref={main}>
            <div className={`${classes.features__bgWrap}`}>
                <img className={`${classes.features__bg}`} src={ bg } alt=""/>
            </div>
            <div className="container">
                <div className={`gsap-trigger ${classes.features__trigger}`}></div>
                <div className={`custom-scrollbar ${classes.features__listWrap}`}>
                    <div className={`${classes.features__list}`}>
                        <section className={`gsap-cell-1 decoAngleContainer ${classes.features__item}`}>
                            <div className={`decoAngleTop`}></div>
                            <div className={`decoAngleBottom`}></div>
                            <img className={`${classes.features__itemIcon}`} src={ icon1 } alt=""/>
                            <p className={`${classes.features__itemDescr}`}>Fast and reliable order execution</p>
                        </section>

                        <section className={`decoAngleContainer ${classes.features__item}`}>
                            <div className={`decoAngleTop`}></div>
                            <div className={`decoAngleBottom`}></div>
                            <img className={`${classes.features__itemIcon}`} src={ icon2 } alt=""/>
                            <p className={`${classes.features__itemDescr}`}>No commissions and tight spreads</p>
                        </section>

                        <section className={`gsap-cell-3 decoAngleContainer ${classes.features__item}`}>
                            <div className={`decoAngleTop`}></div>
                            <div className={`decoAngleBottom`}></div>
                            <img className={`${classes.features__itemIcon}`} src={ icon3 } alt=""/>
                            <p className={`${classes.features__itemDescr}`}>Advanced analytical tools</p>
                        </section>

                        <section className={`gsap-cell-2 decoAngleContainer ${classes.features__item}`}>
                            <div className={`decoAngleTop`}></div>
                            <div className={`decoAngleBottom`}></div>
                            <img className={`${classes.features__itemIcon}`} src={ icon4 } alt=""/>
                            <p className={`${classes.features__itemDescr}`}>Leverage of up to 1:300</p>
                        </section>

                        <section className={`decoAngleContainer ${classes.features__item}`}>
                            <div className={`decoAngleTop`}></div>
                            <div className={`decoAngleBottom`}></div>
                            <img className={`${classes.features__itemIcon}`} src={ icon5 } alt=""/>
                            <p className={`${classes.features__itemDescr}`}>Real-time quotes</p>
                        </section>

                        <section className={`gsap-cell-4 decoAngleContainer ${classes.features__item}`}>
                            <div className={`decoAngleTop`}></div>
                            <div className={`decoAngleBottom`}></div>
                            <img className={`${classes.features__itemIcon}`} src={ icon6 } alt=""/>
                            <p className={`${classes.features__itemDescr}`}>Fast and secure withdrawals</p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features