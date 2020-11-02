import React from "react";
import styles from "./InvestorSection3.module.css";

const InvestorSection3 = (props) => {
  return (
    <>
      <div className={styles.section3}>
        <div className={styles.investorAdvantages}>
          <div className={styles.container}>
            <div className={styles.advantages_title}>
              <h2>Преимущества инвестировать с FINHUB</h2>
            </div>
            <div className={styles.bricks}>
              <div className={styles.brick}>
                <div className={styles.brick_img}>
                  <img src={""} alt="" />
                </div>
                <span className={styles.brick_title}>Высокая доходность</span>
                <span className={styles.etc}>подробнее</span>
              </div>
              <div className={styles.brick}>
                <div className={styles.brick_img}>
                  <img src={""} alt="" />
                </div>
                <span className={styles.brick_title}>
                  Диверсификация рисков
                </span>
                <span className={styles.etc}>подробнее</span>
              </div>
              <div className={styles.brick}>
                <div className={styles.brick_img}>
                  <img src={""} alt="" />
                </div>
                <span className={styles.brick_title}>Низкий порог входа</span>
                <span className={styles.etc}>подробнее</span>
              </div>
              <div className={styles.brick}>
                <div className={styles.brick_img}>
                  <img src={""} alt="" />
                </div>
                <span className={styles.brick_title}>
                  Гарантии для инвесторов
                </span>
                <span className={styles.etc}>подробнее</span>
              </div>
              <div className={styles.brick}>
                <div className={styles.brick_img}>
                  <img src={""} alt="" />
                </div>
                <span className={styles.brick_title}>Свобода и комфорт</span>
                <span className={styles.etc}>подробнее</span>
              </div>
              <div className={styles.brick}>
                <div className={styles.brick_img}>
                  <img src={""} alt="" />
                </div>
                <span className={styles.brick_title}>Взаимная выгода</span>
                <span className={styles.etc}>подробнее</span>
              </div>
              <div className={styles.brick}>
                <div className={styles.brick_img}>
                  <img src={""} alt="" />
                </div>
                <span className={styles.brick_title}>Полное покрытие</span>
                <span className={styles.etc}>подробнее</span>
              </div>
              <div className={styles.brick}>
                <div className={styles.brick_img}>
                  <img src={""} alt="" />
                </div>
                <span className={styles.brick_title}>Как мы зарабатываем?</span>
                <span className={styles.etc}>подробнее</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.howToBecomeInvestor}>
          <div className={styles.container}>
            <div className={styles.howBecome_title}>
              <h4>Как стать инвестором ?</h4>
            </div>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.step_img}>
                  <div className={styles.marker}>
                    <span>01</span>
                  </div>
                  <img src="" alt="" />
                </div>
                <span>Возьмите карточку</span>
              </div>
              <div className={styles.step}>
                <div className={styles.step_img}>
                  <div className={styles.marker}>
                    <span>02</span>
                  </div>
                  <img src="" alt="" />
                </div>
                <span>Включите компьютер</span>
              </div>
              <div className={styles.step}>
                <div className={styles.step_img}>
                  <div className={styles.marker}>
                    <span>03</span>
                  </div>
                  <img src="" alt="" />
                </div>
                <span>Зайдите на finhub.ua</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorSection3;
