import React, {useEffect, useLayoutEffect, useRef} from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import classes from './Banner.module.scss';
import { useTranslation } from "react-i18next";
import Button from "../../GlobalComponents/Button/Button";
import bg from '../../../assets/img/AccountTypesPage/img-assets-banner.png';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
    const { t } = useTranslation();
    const main = useRef();

    return (
        <section className={classes.bannerWrap} ref={main}>
            <div className="container">
                <div className={classes.banner}>
                    <div className={`gsap-content ${classes.content}`}>
                        <h1 className={`${classes.title}`}>
                            Account Types
                        </h1>
                        <b className={`${classes.subtitle}`}>
                            Choose the Perfect Plan for Your Trading Journey
                        </b>
                        <Button>Start Now</Button>
                    </div>
                </div>
            </div>
            <img id="assetBannerCoin" className={classes.images__bg} src={bg} alt=''/>
        </section>
    );
};

export default Banner;