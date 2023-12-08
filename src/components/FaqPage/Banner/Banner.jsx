import React, {useLayoutEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Button from '../../GlobalComponents/Button/Button';
import classes from "./Banner.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
    const main = useRef();

    useLayoutEffect(() => {
        if (document.documentElement.clientWidth > 1220) {
            const ctx = gsap.context((self) => {
                const element = self.selector('.gsap-img');
                gsap.fromTo(element, {
                    x: 80,
                    scale: .9,
                    scrollTrigger: {
                        trigger: element,
                    },
                }, {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.3,
                    transformOrigin: "bottom"
                });
            }, main);
            return () => ctx.revert();
        }
    }, []);

    useLayoutEffect(() => {
        if (document.documentElement.clientWidth > 1220) {
            const ctx = gsap.context((self) => {
                const element = self.selector('.gsap-content');
                gsap.fromTo(element, {
                    y: -80,
                    scale: .9,
                    scrollTrigger: {
                        trigger: element,
                    },
                }, {
                    y: 0,
                    scale: 1,
                    duration: 1.3,
                    transformOrigin: "top"
                });
            }, main);
            return () => ctx.revert();
        }
    }, []);

    return (
        <section className={`pt ${classes.banner}`} ref={main}>
            <div className={`container ${classes.banner__container}`}>
                <div className="gsap-content">
                    <h1 className={`font-40 ${classes.banner__title}`}>About Us</h1>
                    <p className={`font-16 ${classes.banner__descr}`}>
                        At Trade Verse, we believe that everyone deserves access to the global financial markets. Our user-friendly interface, advanced trading features, and comprehensive educational resources cater to both novice and experienced traders. Whether you're looking to invest in stocks, trade forex, or explore the world of cryptocurrencies, Trade Verse is your trusted partner in the pursuit of financial success.
                        <br/><br/>
                        Our team of seasoned industry professionals, technology experts, and financial analysts is dedicated to providing you with a seamless trading experience. We continuously strive to enhance our platform's performance, security, and reliability to ensure that you can trade with confidence and peace of mind.
                    </p>
                </div>
                <div className={classes.banner__imgWrap}>
                    {/*<img src={ imgBanner } className={`gsap-img ${classes.banner__img}`} alt=""/>*/}
                </div>
            </div>
        </section>
    )
}

export default Banner;