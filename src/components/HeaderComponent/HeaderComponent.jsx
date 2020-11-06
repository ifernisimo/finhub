import React from "react";
import styles from "./HeaderComponent.module.css";
import { NavLink } from "react-router-dom";
import CalculatorBorrowComponent from "../CalculatorBorrowComponent/CalculatorBorrowComponent";
/* IMAGES */
import logotype from "../../assets/images/logo.svg";
import call from "../../assets/images/Call_icon.svg";
import profileIcon from "../../assets/images/profile_icon.svg";

import profileIconWhite from "../../assets/images/profile_icon_white.svg";

const HeaderComponent = (props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <NavLink to={"/"}>
            <img src={logotype} alt="Logotype" />
          </NavLink>
        </div>
        <nav className={styles.headerNavigation}>
          <NavLink to={"/investor"}>Инвестор</NavLink>
          <NavLink to={"/howitworks"}>Как это работает?</NavLink>
          <NavLink to={"/help"}>Помощь</NavLink>
          <NavLink to={"/contacts"}>Контакты</NavLink>
          <NavLink to={"/blog"}>Блог</NavLink>
        </nav>
        <div className={styles.burgerNav_container}>
          <nav className={styles.nav}>
            <input
              className={styles.nav__check}
              type="checkbox"
              id="showmenu"
            />
            <label className={styles.nav__showmenu} htmlFor="showmenu">
              &#9776;
            </label>
            <label className={styles.nav__back} htmlFor="showmenu"></label>
            <ul className={styles.menu}>
              <div className={styles.authIconBurger}>
                <NavLink to={"/authorization"}>
                  <img src={profileIconWhite} alt="Profile icon" />
                </NavLink>
              </div>

              <li>
                <NavLink to={"/investor"}>Инвестор</NavLink>
              </li>
              <li>
                <NavLink to={"/howitworks"}>Как это работает?</NavLink>
              </li>
              <li>
                <NavLink to={"/help"}>Помощь</NavLink>
              </li>
              <li>
                <NavLink to={"/contacts"}>Контакты</NavLink>
              </li>

              <li>
                <NavLink to={"/blog"}>Блог</NavLink>
              </li>

              <div className={styles.callmeBtnBurger}>
                <a href="tel:0800233221">
                  <img src={call} alt="Call" />
                  0&nbsp;800&nbsp;233&nbsp;221
                </a>
              </div>
            </ul>
          </nav>
        </div>

        <div className={styles.callmeBtn}>
          <a href="tel:0800233221">
            <img src={call} alt="Call" />
            0&nbsp;800&nbsp;233&nbsp;221
          </a>
        </div>

        <div className={styles.language_switch}>
          <div onClick={() => props.setLanguage("RU")}>
            {props.language === "RU" ? (
              <span className={styles.activeLanguage}>RU</span>
            ) : (
              <span>RU</span>
            )}
          </div>
          /
          <div onClick={() => props.setLanguage("UA")}>
            {props.language === "UA" ? (
              <span className={styles.activeLanguage}>UA</span>
            ) : (
              <span>UA</span>
            )}
          </div>
        </div>
        <div className={styles.authIcon}>
          <NavLink to={"/authorization"}>
            <img src={profileIcon} alt="Profile icon" />
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
