import React, {useEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import classes from "./ExtraSlider.module.scss";
import Button from "../../GlobalComponents/Button/Button";

import icon1 from "../../../assets/img/MarketsPage/img-extra-1.png";
import icon2 from "../../../assets/img/MarketsPage/img-extra-2.png";
import icon3 from "../../../assets/img/MarketsPage/img-extra-3.png";
import icon4 from "../../../assets/img/MarketsPage/img-extra-4.png";
import bgStatic from "../../../assets/img/MarketsPage/img-extra-static-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

const data = [
    {
        top: 500,
        left: 355,
        icon: icon1,
        title: "Trade Commodity CFDs",
        descr: "Trade a variety of popular commodity CFDs with leverage. Gold, Oil and Silver are all available on our leading trading platform.",
        subtitle: "Trading Commodities With Leverage",
        subdescr: "Commodities CFDs are available for trading at TradeVerse with up to 1:150 leverage. You can start trading with as little as 250 $ to gain the effect of 15 000 $ capital!"
    },
    {
        top: -250,
        left: -55,
        icon: icon2,
        title: "Trade Index CFDs",
        descr: "Trade the most popular Indices around the world like USA 500, US-TECH 100 and France 40 with leverage.",
        subtitle: "Trade Indices With Leverage",
        subdescr: "Magnify the size of your trades without committing large amounts of capital. Leverage of up to 1:150 allows you to start trading CFDs with as little as 250 $ to gain the effect of 15 000 $ capital!"
    },
    {
        top: -320,
        left: 355,
        icon: icon3,
        title: "Buy or Sell Cryptocurrency CFDs",
        descr: "Trade the world's most popular cryptocurrencies with leverage and 24/71 availability: Bitcoin | Ethereum | Cardano | Polygon",
        subtitle: "Trade Cryptocurrencies with Leverage",
        subdescr: "Trade cryptocurrencies with up to 1:5 leverage. You can start with as little as 250 $ to gain the effect of 500 $ capital!"
    },
    {
        top: -350,
        left: -55,
        icon: icon4,
        title: "Trade Share CFDs",
        descr: "TradeVerse trading platform allows you to trade shares from all popular markets such as the USA, UK, Germany and more, with leverage and low spreads. Using our advanced trading tools, you can also control your profits and losses.",
        subtitle: "Trade Popular Shares",
        subdescr: "Trade shares CFDs such as Meta, Apple, Microsoft and Alphabet. Take advantage of falling or rising markets by opening Sell or Buy positions."
    }
];

const ExtraSlider = () => {
    const sliderExtra = useRef();
    const switherRef = useRef();
    const switherStartRef = useRef();
    const switherBgRef = useRef();
    const [current, setCurrent] = useState(0);
    const length = data.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    useEffect(() => {
        gsap.timeline().to(switherRef.current, {
            position: 'fixed',
            // transform: 'translateY(30px)',
            opacity: 1,
            zIndex: 12,
            scrollTrigger: {
                trigger: switherStartRef.current,
                start: "top bottom",
                toggleActions: "play none none reset",
            },
        });
    }, []);

    useEffect(() => {
        gsap.timeline().to(switherBgRef.current, {
            position: 'fixed',
            top: 0,
            // transform: 'translateY(30px)',
            opacity: 1,
            zIndex: 2,
            scrollTrigger: {
                trigger: switherStartRef.current,
                start: "top bottom",
                toggleActions: "play none none reset",
            },
        });
    }, []);

    useEffect(() => {
        gsap.fromTo(".slide0", {left: 355}, {
            left: 0, duration: 2, scrollTrigger: {
                trigger: ".gsap-trigger-slide0",
                start: "bottom",
                markers: true,
                toggleActions: "play none reverse none"
            }
        })
    }, []);

    useEffect(() => {
        gsap.fromTo(".slide0 .gsap-animated-img", {opacity: 1}, {
            opacity: 1, duration: 1, scrollTrigger: {
                trigger: ".gsap-trigger-slide0",
                start: "bottom",
                markers: true,
                toggleActions: "play none reverse none"
            }
        })
    }, []);

    useEffect(() => {
        gsap.fromTo(".slide1", {left: -55}, {
            left: 0, duration: 1, scrollTrigger: {
                trigger: ".gsap-trigger-slide1",
                start: "bottom",
                markers: true
            }
        })
    }, []);

    useEffect(() => {
        gsap.fromTo(".slide1 .gsap-animated-img", {transform: "translate(100px, 0)"}, {
            transform: "translate(0, 0)", duration: 1, scrollTrigger: {
                trigger: ".gsap-trigger-slide1",
                start: "bottom",
                markers: true,
                toggleActions: "play none reverse none"
            }
        })
    }, []);

    useEffect(() => {
        gsap.fromTo(".slide2", {left: 355}, {
            left: 0, duration: 2, scrollTrigger: {
                trigger: ".gsap-trigger-slide2",
                start: "bottom",
                markers: true
            }
        })
    }, []);

    useEffect(() => {
        gsap.fromTo(".slide3", {left: -55}, {
            left: 0, duration: 1, scrollTrigger: {
                trigger: ".gsap-trigger-slide3",
                start: "bottom",
                markers: true
            }
        })
    }, []);

    return (
        <section className={`${classes.extra}`}>
            <div className={`gsap-trigger ${classes.extra__decoForeground}`} ref={switherRef}></div>
            <div className={`gsap-start ${classes.extra__decoForegroundStart}`} ref={switherStartRef}></div>
            <div className={`gsap-trigger ${classes.extra__decoBackground}`} ref={switherBgRef}></div>

            <div className={`container ${classes.extra__container}`}>
                <div className={`gsap-start slider --vision --adaptive btnAnchor ${classes.extra__list}`}
                     ref={sliderExtra}>
                    {data.map((item, index) => {
                        return (
                            <section key={index}
                                     className={`decoAngleContainer ${index === current ? 'slide active slide-in-tr' : 'slide'} slide${index} ${classes.extra__item}`}
                                     style={{left: `${item.left}px`}}>
                                <div className={`gsap-trigger-slide${index} ${classes.extra__itemTrigger}`} style={{top: `${item.top}px`}}></div>
                                <div className={`decoAngleTop`}></div>
                                <div className={`decoAngleBottom`}></div>
                                <img className={`gsap-animated-img ${classes.extra__itemIcon}`} src={item.icon} alt=""/>
                                <h3 className={`${classes.extra__itemTitle}`}>{item.title}</h3>
                                <p className={`${classes.extra__itemDescr}`}>{item.descr}</p>
                                <h4 className={`${classes.extra__itemSubtitle}`}>{item.title}</h4>
                                <p className={`${classes.extra__itemDescr}`}>{item.descr}</p>
                                <div className={`${classes.extra__itemControls}`}>
                                    <Button>Start Now</Button>
                                </div>
                            </section>
                        )
                    })
                    }
                    <div className="sliderControls">
                        <button className="btnLeft" onClick={prevSlide}></button>
                        <button className="btnRight" onClick={nextSlide}></button>
                    </div>
                </div>
            </div>
            {/*<div className={`${classes.extra__bgWrap}`}>*/}
            {/*    <img className={`${classes.extra__staticBg}`} src={ bgStatic } alt=""/>*/}
            {/*</div>*/}
        </section>
    )
}

export default ExtraSlider;