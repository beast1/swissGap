import _ from "lodash";
import React, { useEffect, useState, useRef } from "react";
import classes from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import i18n from "i18next";
import { headerRoutes } from "../../../router";
import Button from "../Button/Button";
import $ from "jquery";
import logo from "../../../assets/img/logo-home.svg";

const languages = [
  { value: "ru", label: "RU" },
  { value: "en", label: "EN" },
  { value: "pl", label: "PL" },
  { value: "de", label: "DE" },
  { value: "it", label: "IT" },
  { value: "es", label: "ES" },
];

const Header = () => {
  const { t } = useTranslation();
  const [burgerOpened, setBurgerOpened] = useState(false);
  const { pathname } = useLocation();
  const { lang } = useParams();
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const setLocale = (lang) => {
    i18n.changeLanguage(lang);
    navigate(`/${lang}/${_.last(pathname.split("/"))}`);
  };

  useEffect(() => {
    const langs = _.dropRight(i18n.options.supportedLngs);
    if (lang === undefined || !langs.includes(lang)) {
      setLocale("en");
    }
  }, [pathname]);

  const listenScroll = () => {
    if (window.pageYOffset > 70) {
      $(headerRef.current).removeClass(classes.hideBg);
      $(headerRef.current).removeClass(classes.lightBg);
    } else {
      $(headerRef.current).addClass(classes.hideBg);
      $(headerRef.current).removeClass(classes.lightBg);
    }
  };

  useEffect(() => {
    listenScroll();
  }, [burgerOpened]);
  useEffect(() => {
    $(headerRef.current).removeClass(classes.lightBg);
    window.addEventListener("scroll", (event) => {
      listenScroll();
    });
    listenScroll();
  }, [pathname]);
  useEffect(() => {
    setBurgerOpened(false);
  }, [pathname]);
  useEffect(() => {
    if (burgerOpened) {
      $("body").addClass("lock");
    } else {
      $("body").removeClass("lock");
    }
  }, [burgerOpened]);
  useEffect(() => {
    if ($("body").hasClass("lock")) {
      $("body").removeClass("lock");
    }
  }, []);
  window.addEventListener("resize", (event) => {
    setBurgerOpened(false);
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div
      ref={headerRef}
      className={`${classes.header} ${burgerOpened && classes.headerActive} ${
        classes.hideBg
      } no-select`}
    >
      <div className={["container", classes.container].join(" ")}>
        <div className={classes.headerRow}>
          <div className={classes.headerRowLogo}>
            <Link to={`/${lang}/`} onClick={() => setBurgerOpened(false)}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={classes.headerRowLinks}>
            {headerRoutes.map((route) => (
              <Link
                key={route.id}
                to={`/${lang}/${route.path}`}
                className={`${
                  route.path === _.last(pathname.split("/")) &&
                  classes.linkActive
                }`}
              >
                {t(route.text)}
              </Link>
            ))}
          </div>
          <div className={classes.headerRowRight}>
            <div className={classes.langs}>
              <Dropdown
                options={languages}
                onChange={(e) => setLocale(e.value)}
                value={lang}
                placeholder="EN"
              />
            </div>
            <a href="https://user.vendigital.org/login" className={classes.login}>
              Login
            </a>
            <div
              onClick={() => setBurgerOpened((value) => !value)}
              className={`${classes.burger} ${
                burgerOpened && classes.burgerActive
              }`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.mobileMenu} ${
          burgerOpened && classes.mobileMenuActive
        }`}
      >
        <div className={classes.mobileContainer}>
          {headerRoutes.map((route) => (
            <Link
              key={route.id}
              to={`/${lang}/${route.path}`}
              className={`${
                route.path === _.last(pathname.split("/")) && classes.linkActive
              } ${classes.aLink}`}
              onClick={() => setBurgerOpened(false)}
            >
              {t(route.text)}
            </Link>
          ))}
          <div className={classes.btn}>
            <Button login>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
