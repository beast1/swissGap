import React from "react";
import classes from './Loader.module.scss';

const Loader = ({ isLoading }) => {
    return (
        <div className={`${classes.loader} ${!isLoading && classes.hide}`}>
            <span className={classes.spinner}></span>
        </div>
    );
};

export default Loader;
