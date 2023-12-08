import React, {useRef, useState} from 'react';
import Button from '../../GlobalComponents/Button/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import classes from "./Vision.module.scss";
import icon1 from "../../../assets/img/FaqPage/img-vision-1.png";
import icon2 from "../../../assets/img/FaqPage/img-vision-2.png";
import icon3 from "../../../assets/img/FaqPage/img-vision-3.png";
import bg from "../../../assets/img/FaqPage/bg-vision.png";

const data = [
    {
        img: icon1,
        title: "Our ExtraSlider",
        descr: "Through the introduction of new trading and financial products, the development of deeper client relationships, and the expansion of our core product offering into new and existing markets, we are steadily enhancing our position as a multi-asset fintech firm over time."
    },
    {
        img: icon2,
        title: "Our Purpose",
        descr: "TradeVerse works across platforms, gadgets, and borders to give our customers dependable and simple access to financial opportunities."
    },
    {
        img: icon3,
        title: "Our Values",
        descr: "We continually aim for excellence in both our staff and our products. Our users are guaranteed the best-in-class trading service thanks to cutting-edge proprietary technology and a customer-centric attitude."
    }
];

const Vision = () => {
    const sliderVision = useRef();
    const [current, setCurrent] = useState(0);
    const [slideIn, setSlideIn] = useState(0);
    const [slideOut, setSlideOut] = useState(0);
    const length = data.length;
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <section className={`pt ${classes.vision}`}>
            <div className={`container ${classes.vision__container}`}>
                <h2 className={`${classes.vision__title}`}>Objectives & Vision</h2>
                <div className={`slider --vision btnAnchor ${classes.vision__list}`} ref={sliderVision}>
                    <button className="btnLeft" onClick={prevSlide}></button>
                    <button className="btnRight" onClick={nextSlide}></button>
                    {data.map((item, index) => {
                        return (
                            <section className={`decoAngleContainer ${index === current ? 'slide active slide-in-tr' : 'slide'} ${slideIn ? "slide-in-tr" : ""} ${slideOut ? "slide-out-tl" : ""} ${classes.vision__item}`}>
                                <div className={`decoAngleTop`}></div>
                                <div className={`decoAngleBottom`}></div>
                                <img className={`${classes.vision__itemIcon}`} src={ item.img } alt=""/>
                                <h3 className={`${classes.vision__itemTitle}`}>{ item.title }</h3>
                                <p className={`${classes.vision__itemDescr}`}>{ item.descr }</p>
                            </section>
                        )
                    })
                    }
                </div>
            </div>
            <div className={`${classes.vision__bgWrap}`}>
                <img className={`${classes.vision__bg}`} src={ bg } alt=""/>
            </div>
        </section>
    )
}

export default Vision;