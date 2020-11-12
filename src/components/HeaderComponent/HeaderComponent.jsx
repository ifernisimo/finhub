import React from "react";
import styles from "./HeaderComponent.module.css";
/*NPM Scrollable anchor*/
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
/**/
/*I18n LOCALIZATION*/
import { I18nProvider, LOCALES } from "../../i18n";
import { FormattedMessage } from "react-intl";
/**/
import { NavLink } from "react-router-dom";
/* IMAGES */
import logotype from "../../assets/images/logo.svg";
import call from "../../assets/images/Call_icon.svg";
import profileIcon from "../../assets/images/profile_icon.svg";

import profileIconWhite from "../../assets/images/profile_icon_white.svg";

const HeaderComponent = (props) => {
  configureAnchors({ offset: 0, scrollDuration: 2000 });
  console.log(props);
  return (
    <I18nProvider locale={LOCALES[props.language]}>
      <ScrollableAnchor id={"credits"}>
        <div className={styles.container}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <NavLink to={"/"}>
                <img src={logotype} alt="Logotype" />
              </NavLink>
            </div>
            <nav className={styles.headerNavigation}>
              <NavLink to={"/investor"}>
                <FormattedMessage id={"HeaderNavItem1_investor"} />
              </NavLink>
              <NavLink to={"/howitworks"}>
                <FormattedMessage id={"HeaderNavItem2_investor"} />
              </NavLink>
              <NavLink to={"/help"}>
                <FormattedMessage id={"HeaderNavItem3_investor"} />
              </NavLink>
              <NavLink to={"/contacts"}>
                <FormattedMessage id={"HeaderNavItem4_investor"} />
              </NavLink>
              <NavLink to={"/blog"}>
                <FormattedMessage id={"HeaderNavItem5_investor"} />
              </NavLink>
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
              <div onClick={() => props.setLanguage("RUSSIAN")}>
                {props.language === "RUSSIAN" ? (
                  <span className={styles.activeLanguage}>RU</span>
                ) : (
                  <span>RU</span>
                )}
              </div>
              /
              <div onClick={() => props.setLanguage("UKRAINIAN")}>
                {props.language === "UKRAINIAN" ? (
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
      </ScrollableAnchor>
    </I18nProvider>
  );
};

export default HeaderComponent;
