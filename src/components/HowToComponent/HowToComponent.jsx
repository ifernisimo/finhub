import React from "react";
import styles from "./HowToComponent.module.css";
import dots from "../../assets/images/dots_divider.svg";

const HowToComponent = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.creditOnline}>
        <div className={styles.block}>
          <h4 className={styles.blockTitleText}>
            <span className={styles.blueText}> Как &nbsp;</span>
            <span className={styles.greenText}>получить</span>
            <span className={styles.blueText}> Кредит ?</span>
          </h4>
          <img className={styles.divider} src={dots} alt="" />
          <div className={styles.list}>
            <div className={styles.list_item}>
              <span>01</span>
              <p>
                <span>Заполните заявку</span>
                <br />
                Пройдите простой процесс регистрации, который занимает всего
                несколько минут. А при последующих обращениях вы сможете
                получить кредит в два клика.
              </p>
            </div>
            <div className={styles.list_item}>
              <span>02</span>
              <p>
                <span>Ожидайте решения</span>
                <br />
                Система автоматически принимает решение по вашему кредиту.
                Заявки обрабатываются как можно быстрее.
              </p>
            </div>
            <div className={styles.list_item}>
              <span>03</span>
              <p>
                <span>Поличите деньги</span>
                <br />
                Поcле прохождения проверки системой, деньги будут автоматически
                зачислены на вашу карту.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <h4 className={styles.blockTitleText}>
            <span className={styles.blueText}> Как &nbsp;</span>
            <span className={styles.greenText}>погасить</span>
            <span className={styles.blueText}> Кредит ?</span>
          </h4>
          <img className={styles.divider} src={dots} alt="" />
          <div className={styles.list}>
            <div className={styles.list_item}>
              <span>01</span>
              <p>
                <span>Личный кабинет</span>
                <br />
                Войдите в личный кабинет на сайте finhub.ua
              </p>
            </div>
            <div className={styles.list_item}>
              <span>02</span>
              <p>
                <span>Плановая сумма</span>
                <br />В личном кабинете Вы увидите плановую сумму к погашению и
                сможете выбрать карту для осуществления платежа
              </p>
            </div>
            <div className={styles.list_item}>
              <span>03</span>
              <p>
                <span>Оплатить картой</span>
                <br />
                Осуществить онлайн платёж со своей карты
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToComponent;
