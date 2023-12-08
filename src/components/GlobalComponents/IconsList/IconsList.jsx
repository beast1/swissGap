import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classes from "./IconsList.module.scss";

gsap.registerPlugin(ScrollTrigger);

const IconsList = ({ data, textNoWrap }) => {
    const main = useRef();

    useLayoutEffect(() => {
        if (document.documentElement.clientWidth > 1220) {
            const ctx = gsap.context((self) => {
                const element = self.selector('.gsap-icon-1');
                gsap.fromTo(element, {
                    y: 50,
                }, {
                    y: 0,
                    duration: 1.3,
                    transformOrigin: "bottom",
                    scrollTrigger: {
                        trigger: '.gsap-trigger',
                    }
                });
            }, main);
            return () => ctx.revert();
        }
    }, []);

    useLayoutEffect(() => {
        if (document.documentElement.clientWidth > 1220) {
            const ctx = gsap.context((self) => {
                const element = self.selector('.gsap-icon-2');
                gsap.fromTo(element, {
                    y: 50,
                }, {
                    y: 0,
                    delay: .1,
                    duration: 1.3,
                    transformOrigin: "bottom",
                    scrollTrigger: {
                        trigger: '.gsap-trigger',
                    }
                });
            }, main);
            return () => ctx.revert();
        }
    }, []);

    useLayoutEffect(() => {
        if (document.documentElement.clientWidth > 1220) {
            const ctx = gsap.context((self) => {
                const element = self.selector('.gsap-icon-3');
                gsap.fromTo(element, {
                    y: 50,
                }, {
                    y: 0,
                    delay: .2,
                    duration: 1.3,
                    transformOrigin: "bottom",
                    scrollTrigger: {
                        trigger: '.gsap-trigger',
                    }
                });
            }, main);
            return () => ctx.revert();
        }
    }, []);

    useLayoutEffect(() => {
        if (document.documentElement.clientWidth > 1220) {
            const ctx = gsap.context((self) => {
                const element = self.selector('.gsap-icon-4');
                gsap.fromTo(element, {
                    y: 50,
                }, {
                    y: 0,
                    delay: .3,
                    duration: 1.3,
                    transformOrigin: "bottom",
                    scrollTrigger: {
                        trigger: '.gsap-trigger',
                    }
                });
            }, main);
            return () => ctx.revert();
        }
    }, []);

    useLayoutEffect(() => {
        if (document.documentElement.clientWidth > 1220 && data.length === 5) {
            const ctx = gsap.context((self) => {
                const element = self.selector('.gsap-icon-5');
                gsap.fromTo(element, {
                    y: 50,
                }, {
                    y: 0,
                    delay: .4,
                    duration: 1.3,
                    transformOrigin: "bottom",
                    scrollTrigger: {
                        trigger: '.gsap-trigger',
                    }
                });
            }, main);
            return () => ctx.revert();
        }
    }, []);

    return (
        <ul className={`${classes.iconList}`} ref={main}>
            {data.map((item, index) => {
                return (
                    <li className={`gsap-icon-${index+1} ${classes.iconList__cell}`}>
                        <div className={`${classes.iconList__cellImg}`}>
                            <img src={ item.img } alt=""/>
                        </div>
                        <p className={`${classes.iconList__descr} ${textNoWrap ? "textNoWrap" : ""}`}>{ item.text }</p>
                    </li>
                );
            })}
            <li className="gsap-trigger" style={{position: "absolute", bottom: 200, visibility: "hidden"}}></li>
        </ul>
    )
}

export default IconsList;