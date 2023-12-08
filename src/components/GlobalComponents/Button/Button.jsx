import React from "react";
import classes from "./Button.module.scss";
import Cookies from 'js-cookie';

const Button = ({ children, transparent, shadowFree }) => {
  const lang = Cookies.get('i18next');
  return (
        <a href="#platform" className={`${classes.button} ${transparent ? classes.buttonTransparent : ""} ${shadowFree ? classes.shadowFree : ""}`}>
            <span>{children}</span>
        </a>
  );
};

export default Button;
