import React from "react";
import styles from "./BorrowerSuccesNotInMoneyPart.module.css";
import divider from "../../assets/images/dots_divider.svg";
import { NavLink } from "react-router-dom";

const BorrowerSuccesNotInMoneyPart = (props) => {
  return (
    <>
      <div className={styles.succesNotInMoneyPart}>
        <div className={styles.container}>
          <div className={styles.title_row}>
            <h2 className={styles.slider_title_text}>
              <span className={styles.greenText}>Успех&nbsp;</span> не
              исчисляется в деньгах
            </h2>
          </div>
          <img className={styles.divider} src={divider} alt="" />
          <p>
            Мы считаем, что деньги не должны быть самой целью, но их важно
            правильно использовать как инструмент для самореализации. Ведь у
            каждого из нас есть амбиции и силы, чтобы их воплотить. Главное
            увидеть возможность и вовремя ею воспользоваться.
          </p>

          <div className={styles.joinBtns}>
            <button className={styles.takeCreditBtn}>
              <NavLink to={"/auth"}>Получить кредит</NavLink>
            </button>
            <button className={styles.becomeInvestorBtn}>
              <NavLink to={"/investor"}>Стать инвестором</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BorrowerSuccesNotInMoneyPart;
