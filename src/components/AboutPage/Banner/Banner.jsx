import React from 'react';
import classes from "./Banner.module.scss";


const Banner = () => {
    return (
        <section className={`pt ${classes.banner}`}>
            <div className={`container ${classes.banner__container}`}>
                <header className={`${classes.banner__header}`}>
                    <h1 className={`${classes.banner__titleMega}`}>About Us</h1>
                    <p className={`${classes.banner__descr}`}>TradeVerse is a global multi-asset fintech group operating proprietary technology-based trading platforms. TradeVerse offers customers a range of trading products, including Contracts for Difference (“CFDs”) and Share dealing, and in the United States, TradeVerse US offers futures trading.</p>
                </header>
                <section className={`${classes.banner__textfield}`}>
                    <div className={`${classes.banner__speach}`}>
                        <h2 className={`${classes.banner__title}`}>Who We Are</h2>
                        <p className={`${classes.banner__descr}`}>The TradeVerse trading platform is offered by TradeVerse Ltd, a UK based company with its main offices located in the city of London. The company is authorised and regulated by the Financial Conduct Authority (FCA) to offer Contracts For Difference (CFD). The company is a rapidly growing CFD provider in Europe and Asia and currently offers its portfolio of over 1000 instruments to over a million clients.</p>
                    </div>

                    <div className={`${classes.banner__speach}`}>
                        <h2 className={`${classes.banner__title}`}>Client Money</h2>
                        <p className={`${classes.banner__descr}`}>When you open an account,TradeVerse UK Ltd will hold your funds on a segregated basis, in accordance with the Financial Conduct Authority's client money rules.</p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Banner;