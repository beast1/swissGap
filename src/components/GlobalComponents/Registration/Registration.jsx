import React from "react";
import classes from "./Registration.module.scss";
import Button from '../Button/Button';
import Cookies from 'js-cookie';

const Registration = ({ children, transparent, shadowFree }) => {
  const lang = Cookies.get('i18next');
  return (
        <div className={`${classes.registration}`}>
            <h2 className={`${classes.registration__title}`}>Registration</h2>
            <div className={`${classes.formItem}`}>
                <label className={`${classes.formItem__label}`} htmlFor="firstName">First name</label>
                <input className={`${classes.formItem__input}`} type="text" id="firstName" placeholder="Elena"/>
            </div>

            <div className={`${classes.formItem}`}>
                <label className={`${classes.formItem__label}`} htmlFor="lastName">Last name</label>
                <input className={`${classes.formItem__input}`} type="text" id="lastName" placeholder="Pirson"/>
            </div>

            <div className={`${classes.formItem}`}>
                <label className={`${classes.formItem__label}`} htmlFor="email">Email</label>
                <input className={`${classes.formItem__input}`} type="email" id="email" placeholder="example.net@gmail.com"/>
            </div>

            <div className={`${classes.formItem}`}>
                <label className={`${classes.formItem__label}`} htmlFor="phone">Phone number</label>
                <input className={`${classes.formItem__input}`} type="number" id="phone"/>
                <small className={`${classes.formItem__small}`}>type it without country code</small>
            </div>

            <div className={`${classes.formItem} ${classes.formItemCheckbox}`}>
                <input className={`${classes.formItem__input}`} type="checkbox" id="agreement"/>
                <label className={`${classes.formItem__label}`} htmlFor="agreement">I accept <a href="#">rules and agree terms of service</a></label>
            </div>
            <h2 className={`${classes.registration__controls}`}>
                <Button>Create an account</Button>
            </h2>
        </div>
  );
};

export default Registration;
