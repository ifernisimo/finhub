import React from "react";
import dots from "../../assets/images/dots_divider.svg";
import styles from "./BorrowerTakeCreditOnlineComponent.module.css";

const BorrowerTakeCreditOnlineComponent = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.creditOnline}>
          <div className={styles.block}>
            <span className={styles.lightPreText}>
              Взять кредит на карту онлайн
            </span>
            <h4 className={styles.blockTitleText}>
              <span className={styles.blueText}> Взять кредит онлайн -</span>
              <span className={styles.greenText}>
                &nbsp;просто и выгодно с FINHUB.
              </span>
            </h4>
            <img className={styles.divider} src={dots} alt="" />
            <div className={styles.list}>
              <div className={styles.list_item}>
                <span>01</span>
                <p>
                  Рассчитайте стоимость ежемесячных выплат, воспользовавшись
                  калькулятором платежей.
                </p>
              </div>
              <div className={styles.list_item}>
                <span>02</span>
                <p>
                  Рассчитайте стоимость ежемесячных выплат, воспользовавшись
                  калькулятором платежей.
                </p>
              </div>
              <div className={styles.list_item}>
                <span>03</span>
                <p>
                  Рассчитайте стоимость ежемесячных выплат, воспользовавшись
                  калькулятором платежей.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.block}>
            <span className={styles.lightPreText}>
              Взять кредит на карту онлайн
            </span>
            <h4 className={styles.blockTitleText}>
              <span className={styles.blueText}> Взять кредит онлайн -</span>
              <span className={styles.greenText}>
                &nbsp;просто и выгодно с FINHUB.
              </span>
            </h4>
            <img className={styles.divider} src={dots} alt="" />
            <p>
              Выплачивая каждый раз кредит вовремя, вы улучшаете свою кредитную
              историю и повышаете ваш кредитный рейтинг.
            </p>
            <br />
            <p>
              Тем самым вы становитесь надежным партнером для нас и для
              инвесторов, что дает нам возможность снижать процентную ставку
              специально для ва
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BorrowerTakeCreditOnlineComponent;
