import React from "react";
import Registration from "../Registration/Registration";
import classes from "./Footer.module.scss";
import logo from "../../../assets/img/logo-home.svg";
import icon1 from "../../../assets/img/icon-address.svg";
import icon2 from "../../../assets/img/icon-phone.svg";
import icon3 from "../../../assets/img/icon-support.svg";
import {Trans, useTranslation} from "react-i18next";

const Footer = ({fill, enjoy}) => {
    const {t} = useTranslation();
    const {hostname} = document.location;
    return (
        <div>
            <div className="container">
                <div className={classes.disclaimer}>
                    <p className={classes.disclaimerTitle}>
                        Disclaimer:
                    </p>
                    <p>
                        Trade Verse is an innovative trading platform that enables you to buy and sell a variety of
                        financial assets, including stocks, bonds, and cryptocurrencies. Our aim is to provide a
                        reliable and user-friendly service, but it's important to recognize the inherent risks
                        involved in trading.
                        <br/>When using Trade Verse, it is crucial that you take full responsibility for your
                        financial decisions. We cannot be held accountable for any losses you may incur. Before
                        engaging in any trades, it is essential to thoroughly assess your financial situation and
                        objectives. If needed, consult a qualified financial advisor to ensure informed
                        decision-making.
                        <br/>Please be aware that Trade Verse does not offer investment advice or recommendations, and
                        we cannot guarantee the accuracy, completeness, or reliability of the information or data on
                        our platform. Past performance of financial instruments is not indicative of future results,
                        and market conditions can change rapidly and unexpectedly.
                        <br/>Furthermore, while we strive to maintain a smooth-running platform, Trade Verse may
                        experience occasional system downtime, outages, or technical issues that could hinder your
                        trading activity or access to your account. Although we make every effort to provide
                        continuous and error-free service, we cannot guarantee it.
                        <br/>By using the Trade Verse platform, you agree to indemnify and hold us, as well as our
                        affiliates, officers, directors, employees, and agents, harmless from any claims, damages,
                        losses, liabilities, and expenses arising from your use of our platform.
                        <br/>Prior to using our platform, it is imperative that you carefully read and understand
                        the specific terms and conditions outlined by Trade Verse.
                    </p>
                </div>
            </div>
            <footer className={`${classes.footer}`}>
                <div className={`container ${classes.footer__container}`}>

                    <div className={classes.contacts}>
                        <div className={classes.contacts__item}>
                            <img className={classes.contacts__icon} src={icon1} alt=""/>
                            <h3 className={classes.contacts__label}>LEGAL ADDRESS:</h3>
                            <p className={classes.contacts__text}>Rue du Marché 7, 1204 Genève, Switzerland</p>
                        </div>

                        <div className={classes.contacts__item}>
                            <img className={classes.contacts__icon} src={icon2} alt=""/>
                            <h3 className={classes.contacts__label}>Phone number:</h3>
                            <a className={classes.contacts__text} href="tel:46843737067"
                               target="_blank">+46843737067</a>
                        </div>

                        <div className={classes.contacts__item}>
                            <img className={classes.contacts__icon} src={icon3} alt=""/>
                            <h3 className={classes.contacts__label}>SUPPORT SERVICE:</h3>
                            <a className={classes.contacts__text} href={`mailto:support@${hostname}`}
                               target="_blank">SUPPORT@SWISSGAP.COM</a>
                        </div>
                    </div>

                    <div className={classes.footer__registration}>
                        <Registration></Registration>
                    </div>

                    <div className={classes.logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <div className={classes.docs}>
                        <a href="/docs/TERMS_&_CONDITIONS.pdf" target="_blank">
                            Terms & Conditions
                        </a>
                        <a href="/docs/PRIVACY_POLICY.pdf" target="_blank">
                            Privacy policy
                        </a>
                        <a href="/docs/AML_POLICY.pdf" target="_blank">
                            AML policy
                        </a>
                        <p className={classes.rights}>
                            Trade Verse © 2023. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
