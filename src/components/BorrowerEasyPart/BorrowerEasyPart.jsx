import React from "react";
import styles from "./BorrowerEasyPart.module.css";
import { NavLink } from "react-router-dom";
import divider from "../../assets/images/dots_divider.svg";
/**/
import easy1 from "../../assets/images/easy_section/easy-1.svg";
import easy2 from "../../assets/images/easy_section/easy-2.svg";
import easy3 from "../../assets/images/easy_section/easy-3.svg";
import easy4 from "../../assets/images/easy_section/easy-4.svg";

const BorrowerEasyPart = (props) => {
  return (
    <>
      <div className={styles.identifyingBenefits}>
        <div className={styles.blockTitle}>
          <h2 className={styles.blockTitle_title}>Проще простого!</h2>
          <span className={styles.requireText}>
            Чтобы получить кредит, вы должны соответствовать следующим
            требованиям
          </span>
        </div>
        <div className={styles.selectedAdvantages__info}>
          <div className={styles.info_items}>
            <div className={styles.item}>
              <div className={styles.circle}>
                <div className={styles.marker}>01</div>
                <img src={easy4} alt="Img" />
              </div>
              <h4>Наличие банковской карты</h4>
            </div>
            <div className={styles.item}>
              <div className={styles.circle}>
                <div className={styles.marker}>02</div>
                <img src={easy3} alt="Img" />
              </div>
              <h4>Возраст от 21 до 65 лет</h4>
            </div>
            <div className={styles.item}>
              <div className={styles.circle}>
                <div className={styles.marker}>03</div>
                <img src={easy2} alt="Img" />
              </div>
              <h4>Паспорт и ИНН</h4>
            </div>
            <div className={styles.item}>
              <div className={styles.circle}>
                <div className={styles.marker}>04</div>
                <img src={easy1} alt="Img" />
              </div>
              <h4>Телефон и email</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wayToDream}>
        <div className={styles.wayToDream__infoBlock}>
          <div className={styles.blockTitle}>
            <h2>
              <span className={styles.greenTitleText}>FINHUB</span> — ваш путь к
              мечте
            </h2>
            <img className={styles.divider} src={divider} alt="" />
          </div>
          <p className={styles.blockText}>
            FINHUB поддерживает всех, кто движется к своей мечте, к своим целям.
            Мы знаем, как сложно достигать результатов, каких усилий стоит
            результат, и что цена успеха не исчисляется в деньгах. Для нас
            важно, чтобы каждый кредит, который получен благодаря нашей
            платформе, давал вам возможность приблизится к своей цели, перейти
            на новый рубеж, стать лучше чем вчера и не останавливаться на
            достигнутом
          </p>
          <div className={styles.joinBtns}>
            <button className={styles.getCreditBtn}>
              <NavLink to={"/auth"}>Получить кредит</NavLink>
            </button>
            <button className={styles.becomeInvestor}>
              <NavLink to={"/investor"}>Стать инвестором</NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BorrowerEasyPart;
