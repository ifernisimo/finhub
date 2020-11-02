import React from "react";
import styles from "./InvestorSection1.module.css";
import triangle from "../../assets/images/investor_triangle.svg";
import { NavLink } from "react-router-dom";

const InvestorSection1 = (props) => {
  return (
    <>
      <div className={styles.sectionOne}>
        <div className={styles.container}>
          <div className={styles.firstBlock}>
            <span className={styles.leftBlockText}>
              Куда вложить деньги в Украине ?
            </span>
            <button className={styles.becomeInvestor}>
              <NavLink to={"/auth"}>CТАТЬ ИНВЕСТОРОМ</NavLink>
            </button>
          </div>
          <div className={styles.imgSide}>
            <img src={triangle} alt="background" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorSection1;
