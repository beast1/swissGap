import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import classes from "./Features.module.scss";
import Button from "../../GlobalComponents/Button/Button";

import icon1 from "../../../assets/img/main/img-features-1.png";
import icon2 from "../../../assets/img/main/img-features-2.png";
import icon3 from "../../../assets/img/main/img-features-3.png";
import icon4 from "../../../assets/img/main/img-features-4.png";
import icon5 from "../../../assets/img/main/img-features-5.png";
import icon6 from "../../../assets/img/main/img-features-6.png";
import bg from "../../../assets/img/main/bg-features.png";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const main = useRef();

    return (
        <section className={`${classes.features}`} ref={main}>
            <div className="container">
                <div className={`${classes.features__list}`}>
                    <section className={`${classes.features__item}`}>
                        <b className={`${classes.features__itemStep}`}>Step 1</b>
                        <h3 className={`${classes.features__itemTitle}`}>FILL IN THE FORM</h3>
                        <p className={`${classes.features__itemDescr}`}>Once your registration is accepted, you will automatically become the newest member of Swissgap. Be sure to generate a secure code so that no one can hack your account!</p>
                    </section>

                    <section className={`${classes.features__item}`}>
                        <b className={`${classes.features__itemStep}`}>Step 2</b>
                        <h3 className={`${classes.features__itemTitle}`}>FUND YOUR ACCOUNT</h3>
                        <p className={`${classes.features__itemDescr}`}>Like any business, you need working capital to get started. So to start profiting with The  Swissgap, you must invest any amount you desire of $500 or more.</p>
                    </section>

                    <section className={`${classes.features__item}`}>
                        <b className={`${classes.features__itemStep}`}>Step 3</b>
                        <h3 className={`${classes.features__itemTitle}`}>WAIT FOR A CALLBACK AND YOU ARE DONE</h3>
                        <p className={`${classes.features__itemDescr}`}>After payment, our manager will call you and provide you with the high-income algorithm. Enjoy accurate hands-free trading with our award-winning algorithm. You can also set up manual trading if you prefer to trade on your own.</p>
                    </section>
                </div>
                <div className={`${classes.features__controls}`}>
                    <Button>Get started now</Button>
                </div>
            </div>
        </section>
    )
}

export default Features
