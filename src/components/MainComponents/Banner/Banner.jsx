import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classes from "./Banner.module.scss";
import Button from '../../GlobalComponents/Button/Button';

import imgBrand1 from "../../../assets/img/main/img-brands-1.png";
import imgBrand2 from "../../../assets/img/main/img-brands-2.png";
import imgBrand3 from "../../../assets/img/main/img-brands-3.png";
import imgBrand4 from "../../../assets/img/main/img-brands-4.png";
import bgMain from "../../../assets/img/main/bg-banner-main.png";
import imgCenterPlatform from "../../../assets/img/main/img-banner-center-platform.png";
import imgLeftPlatform from "../../../assets/img/main/img-banner-left-platform.png";
import imgRightPlatform from "../../../assets/img/main/img-banner-right-platform.png";
import imgWindows from "../../../assets/img/main/img-banner-block-1.png";
import imgApple from "../../../assets/img/main/img-banner-block-2.png";
import imgTesla from "../../../assets/img/main/img-banner-block-3.png";
import imgAmazon from "../../../assets/img/main/img-banner-block-4.png";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
    const main = useRef();

    return (
        <section className={`${classes.banner}`} ref={main}>
            <div className={`gsap-banner container ${classes.banner__container}`}>
                <b className={`${classes.banner__preTitle}`}>Join Us and Start Getting Profit form day one  with Swissgap !</b>
            </div>
            <ul className={`${classes.banner__brands}`}>
                <li className={`${classes.banner__brandsItem}`}>
                    <img className={`${classes.banner__brandsImg}`} src={ imgBrand1 } width="210" height="116" alt=""/>
                </li>

                <li className={`${classes.banner__brandsItem}`}>
                    <img className={`${classes.banner__brandsImg}`} src={ imgBrand2 } width="309" height="81" alt=""/>
                </li>

                <li className={`${classes.banner__brandsItem}`}>
                    <img className={`${classes.banner__brandsImg}`} src={ imgBrand3 } width="274" height="81" alt=""/>
                </li>

                <li className={`${classes.banner__brandsItem}`}>
                    <img className={`${classes.banner__brandsImg}`} src={ imgBrand4 } width="224" height="81" alt=""/>
                </li>
            </ul>
        </section>
    )
}

export default Banner;