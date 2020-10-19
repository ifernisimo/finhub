import React from "react";
import styles from "./HeaderComponent.module.css";
import { NavLink } from "react-router-dom";
import CalculatorBorrowComponent from "../CalculatorBorrowComponent/CalculatorBorrowComponent";

const HeaderComponent = (props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          LOGO
          <img src="#" alt="" />
        </div>
        <nav className={styles.headerNavigation}>
          <NavLink to={"/"}>Инвестор</NavLink>
          <NavLink to={"/"}>Как это работает?</NavLink>
          <NavLink to={"/"}>Помощь</NavLink>
          <NavLink to={"/"}>Контакты</NavLink>
          <NavLink to={"/"}>Блог</NavLink>
        </nav>
        <div className={styles.callmeBtn}>
          <button>0 800 700 600</button>
        </div>
        <div className={styles.authIcon}>{/*Auth Component*/}</div>
        <div className="language-switch">
          <select name="languageSwitcher" id="">
            <option value={"UA"}>UA</option>
            <option value={"RU"}>RU</option>
          </select>
        </div>
      </header>

      <CalculatorBorrowComponent />
    </div>
  );
};

export default HeaderComponent;