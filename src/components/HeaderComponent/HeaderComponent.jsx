import React from "react";
import styles from "./HeaderComponent.module.css";
import { NavLink } from "react-router-dom";
import CalculatorBorrowComponent from "../CalculatorBorrowComponent/CalculatorBorrowComponent";
/* IMAGES */
import logotype from "../../assets/images/logo.svg";
import call from "../../assets/images/Call_icon.svg";
import profileIcon from "../../assets/images/profile_icon.svg";

const HeaderComponent = (props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logotype} alt="Logotype" />
        </div>
        <nav className={styles.headerNavigation}>
          <NavLink to={"/investor"}>Инвестор</NavLink>
          <NavLink to={"/howitworks"}>Как это работает?</NavLink>
          <NavLink to={"/help"}>Помощь</NavLink>
          <NavLink to={"/contacts"}>Контакты</NavLink>
          <NavLink to={"/blog"}>Блог</NavLink>
        </nav>
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
            <div>
              <img src={profileIcon} alt="Profile icon" />
            </div>
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
