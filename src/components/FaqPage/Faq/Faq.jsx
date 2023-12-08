import React, {useLayoutEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import FaqTabs from '../FaqTabs/FaqTabs';
import classes from "./Faq.module.scss";

import bg from "../../../assets/img/AboutPage/bg-faq.png";

gsap.registerPlugin(ScrollTrigger);

const faqTabs = [
    {
        title: 'How do I create an account on Trade Verse?',
        text: 'Creating an account on Trade Verse is quick and easy. Simply visit our website and click on the "Sign Up" button. Follow the prompts to provide the required information, including your name, email address, and password. Once you\'ve completed the registration process, you can log in to your account and start trading.',
    },
    {
        title: 'What financial instruments can I trade on Trade Verse?',
        text: 'Trade Verse offers a wide range of financial instruments for trading, including stocks, forex, commodities, indices, and cryptocurrencies. You can choose from thousands of assets across different markets and sectors, providing you with diverse investment opportunities.',
    },
    {
        title: 'How can I deposit funds into my Trade Verse account?',
        text: 'To deposit funds into your Trade Verse account, log in to your account and navigate to the "Deposit" section. Select your preferred payment method, enter the desired amount, and follow the instructions to complete the transaction. We support various payment options, including bank transfers, credit/debit cards, and e-wallets.',
    },
    {
        title: 'Is my personal and financial information secure on Trade Verse?',
        text: 'Yes, protecting your personal and financial information is our top priority. Trade Verse employs advanced security measures, including encryption and multi-factor authentication, to ensure the safety and confidentiality of your data. We comply with industry regulations and best practices to provide a secure trading environment.',
    },
    {
        title: 'Can I access Trade Verse on mobile devices?',
        text: 'Yes, Trade Verse is fully optimized for mobile trading. You can access our platform through your smartphone or tablet by visiting our website or downloading our mobile app from the App Store or Google Play Store. Enjoy seamless trading on the go, anytime and anywhere.',
    }
];

const Faq = () => {
    const main = useRef();

    return (
        <section className={`${classes.faq}`} ref={main}>
            <img className={`${classes.faq__bg}`} src={ bg } alt=""/>
            <div className={`container ${classes.faq__container}`}>
                <header className={`${classes.faq__header}`}>
                    <h1 className={`${classes.faq__titleMega}`}>FAQs</h1>
                    <h2 className={`${classes.faq__title}`}>Learn more about trading with Trade Verse</h2>
                </header>
                <FaqTabs tabs={ faqTabs }></FaqTabs>
            </div>
        </section>
    )
}

export default Faq;