import React, { useEffect, useState } from "react";
import classes from './Tabs.module.scss';
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    force3D: true,
});

const Tabs = ({tabs}) => {
    const { t } = useTranslation();
    const [ current, setCurrent ] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            if (document.documentElement.clientWidth > 1220) {
                gsap.fromTo('#assetsFeaturesImageRef', {
                    scale: 0.9,
                    y: 50,
                }, {
                    scale: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: '#assetsFeaturesBodyRef',
                        end: '+=400px',
                        scrub: 3,
                    }
                });
            }
        }, 300);
    }, []);
    return (
        <div className={classes.tabs}>
            {tabs.map((tab, index) =>
                <div
                    key={index}
                    className={`${classes.tab} ${current === index && classes.tabActive}`}
                    onClick={() => setCurrent(index)}
                >
                    <h4 className={[classes.tabTitle, 'font-20'].join(' ')}>
                        {tab.title}
                    </h4>
                    <p className={[classes.tabText, 'font-16'].join(' ')}>
                        {tab.text}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Tabs;
