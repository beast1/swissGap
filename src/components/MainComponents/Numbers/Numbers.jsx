import React from 'react';
import classes from "./Numbers.module.scss";

import icon1 from "../../../assets/img/main/icon-mastercard.svg";
import icon2 from "../../../assets/img/main/icon-visa.svg";
import icon3 from "../../../assets/img/main/icon-btcx.svg";
import icon4 from "../../../assets/img/main/icon-bitcoin.svg";
import bg from "../../../assets/img/main/bg-numbers.png";

const ListData = [
    {
        img: icon1
    },
    {
        img: icon2
    },
    {
        img: icon3
    },
    {
        img: icon4
    }
];

const Numbers = () => {
    return (
        <section className={`${classes.numbers}`}>
            <div className={`container`}>
                <header className={`${classes.numbers__header}`}>
                    <h2 className={`${classes.numbers__title}`}>Trade Verse offers multiple global payment methods</h2>
                </header>

                <ul className={`${classes.iconList}`}>
                    {ListData.map((item, index) => {
                        return (
                            <li className={`decoAngleContainer --small ${classes.iconList__cell}`}>
                                <div className="decoAngleTop"></div>
                                <div className="decoAngleBottom"></div>
                                <img className={`${classes.iconList__img}`} src={ item.img } alt=""/>
                            </li>
                        );
                    })}
                </ul>
                <img className={`${classes.numbers__bg}`} src={ bg } alt=""/>
            </div>
        </section>
    )
}

export default Numbers;