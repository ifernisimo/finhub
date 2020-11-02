import React from "react";
import styles from "./InvestorSection2.module.css";
import divider from "../../assets/images/dots_divider.svg";
import InvestorMoneyCounter from "../InvestorMoneyCounter/InvestorMoneyCounter";

const InvestorSection2 = (props) => {
  return (
    <>
      <div className={styles.section2}>
        <div className={styles.container}>
          <div className={styles.blockText}>
            <h4>Как работают деньги ?</h4>
            <img src={divider} alt="" />
            <p>
              Вы наверняка уже знакомы с традиционными депозитами, биржами и
              займами — но ищете более перспективные альтернативы? Попробуйте
              Р2Р-кредитование с FINHUB!
            </p>
          </div>

          <div className={styles.moneySlider}>
            <InvestorMoneyCounter />
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorSection2;
