import React from 'react';
import classes from "./Numbers.module.scss";

import icon1 from "../../../assets/img/main/img-avatar-1.png";
import icon2 from "../../../assets/img/main/img-avatar-2.png";
import icon3 from "../../../assets/img/main/icon-btcx.svg";
import icon4 from "../../../assets/img/main/icon-bitcoin.svg";
import bg from "../../../assets/img/main/bg-numbers.png";
import Button from "../../GlobalComponents/Button/Button";
import imgBrand1 from "../../../assets/img/main/img-quote-1.png";
import imgBrand2 from "../../../assets/img/main/img-quote-2.png";
import imgBrand3 from "../../../assets/img/main/img-quote-3.png";
import imgBrand4 from "../../../assets/img/main/img-quote-4.png";
import imgBrand5 from "../../../assets/img/main/img-quote-5.png";
import imgBrand6 from "../../../assets/img/main/img-quote-6.png";
const Numbers = () => {
    return (
        <section className={`${classes.numbers}`}>
            <div className={`container ${classes.numbers__container}`}>
                <blockquote className={`${classes.numbers__item}`}>
                    <img className={`${classes.numbers__avatar}`} src={icon1} alt=""/>
                    <h3 className={`${classes.numbers__author}`}>RICHARD BRANSON</h3>
                    <b className={`${classes.numbers__position}`}>BILLIONAIRE FOUNDER & OWNER OF VIRGIN GROUP</b>
                    <p className={`${classes.numbers__text}`}>...Changes in new technology always represent a huge shift in the way we live, and cryptocurrency is about to hit its stride. When it does, a lot of people are going to make a lot of money. When the Swissgap released, I’ll be investing and I expect the ROI to equal some of my more profitable previous investments!...</p>
                </blockquote>

                <blockquote className={`${classes.numbers__item}`}>
                    <img className={`${classes.numbers__avatar}`} src={icon2} alt=""/>
                    <h3 className={`${classes.numbers__author}`}>PETER THIEL</h3>
                    <b className={`${classes.numbers__position}`}>Billionaire founder of PayPal, First Investor inFacebook, Technology Entrepreneur & investor</b>
                    <p className={`${classes.numbers__text}`}>Swissgap making big waves with their new Algorithm. It’s amazing idea that really works</p>
                </blockquote>
            </div>
            <div className={`${classes.numbers__controls}`}>
                <Button>Get started now</Button>
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

                <li className={`${classes.banner__brandsItem}`}>
                    <img className={`${classes.banner__brandsImg}`} src={ imgBrand5 } width="224" height="81" alt=""/>
                </li>

                <li className={`${classes.banner__brandsItem}`}>
                    <img className={`${classes.banner__brandsImg}`} src={ imgBrand6 } width="224" height="81" alt=""/>
                </li>
            </ul>
        </section>
    )
}

export default Numbers;
