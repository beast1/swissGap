import React, {useRef, useState} from 'react';
import Button from '../../GlobalComponents/Button/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import classes from "./MarketSlider.module.scss";
import icon1 from "../../../assets/img/MarketsPage/icon-slider-1.png";
import icon2 from "../../../assets/img/MarketsPage/icon-slider-2.png";
import icon3 from "../../../assets/img/MarketsPage/icon-slider-3.png";

const data = [
    {
        img: icon1,
        title: "Trade on 60+ Forex Pairs With Leverage",
        descr: "Trade forex with up to 1:300 leverage. With as little as 100 $ you can gain the effect of 30 000 $ capital!"
    },
    {
        img: icon2,
        title: "Advanced Trading Tools",
        descr: "Use our trading tools such as Stop Loss, Stop Limit and Guaranteed Stop to limit losses and lock in profits. Get FREE real-time forex quotes and set indicators to easily analyze charts."
    },
    {
        img: icon3,
        title: "Easy Account Opening",
        descr: "Apply for an account in a few minutes, practice trading with our FREE unlimited Account Types until you're ready to move to the next level."
    }
];

const MarketSlider = () => {
    const sliderMarket = useRef();
    const [current, setCurrent] = useState(0);
    const length = data.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <section className={`${classes.market}`}>
            <div className={`container ${classes.market__container}`}>
                <div className={`slider --vision --adaptive btnAnchor ${classes.market__list}`} ref={sliderMarket}>
                    <div className="sliderControls">
                        <button className="btnLeft" onClick={prevSlide}></button>
                        <button className="btnRight" onClick={nextSlide}></button>
                    </div>
                    {data.map((item, index) => {
                        return (
                            <section key={index} className={`decoAngleContainer ${index === current ? 'slide active slide-in-tr' : 'slide'} ${classes.market__item}`}>
                                <div className={`decoAngleTop`}></div>
                                <div className={`decoAngleBottom`}></div>
                                <img className={`${classes.market__itemIcon}`} src={ item.img } alt=""/>
                                <h3 className={`${classes.market__itemTitle}`}>{ item.title }</h3>
                                <p className={`${classes.market__itemDescr}`}>{ item.descr }</p>
                            </section>
                        )
                    })
                    }
                </div>
            </div>
        </section>
    )
}

export default MarketSlider;