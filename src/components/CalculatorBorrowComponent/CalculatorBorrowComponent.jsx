import React from "react";
import styles from "./CalculatorBorrowComponent.module.css";

import triangle from "../../assets/images/borrower_calcBlock_triangle.svg";
import CalculatorBorrower from "../CalculatorBorrower/CalculatorBorrower";

const CalculatorBorrowComponent = (props) => {
  return (
    <>
      <div className={styles.borrowerCalculator}>
        <div className={styles.leftBlock}>
          <img src={triangle} alt="background" />
          <span className={styles.leftBlockText}>
            Выгодные условия кредитования
          </span>
        </div>
        <div className={styles.calculator}>
          <CalculatorBorrower />
        </div>
      </div>
    </>
  );
};

export default CalculatorBorrowComponent;
