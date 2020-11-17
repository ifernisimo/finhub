import React from "react";
import styles from "./InvestorSection3.module.css";
import adv1 from "../../assets/images/advantages/advantages_01.svg";
import adv2 from "../../assets/images/advantages/advantages_02.svg";
import adv3 from "../../assets/images/advantages/advantages_03.svg";
import adv4 from "../../assets/images/advantages/advantages_04.svg";
import adv5 from "../../assets/images/advantages/advantages_05.svg";
import adv6 from "../../assets/images/advantages/advantages_06.svg";
import adv7 from "../../assets/images/advantages/advantages_07.svg";
import adv8 from "../../assets/images/advantages/advantages_08.svg";
import become1 from "../../assets/images/howtobecome/become.svg";
import become2 from "../../assets/images/howtobecome/become_1.svg";
import become3 from "../../assets/images/howtobecome/become_2.svg";

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
                <img src={adv1} alt="" />

                <span className={styles.brick_title}>Высокая доходность</span>
              </div>
              <div className={styles.brick}>
                <img src={adv2} alt="" />

                <span className={styles.brick_title}>
                  Диверсификация рисков
                </span>
              </div>
              <div className={styles.brick}>
                <img src={adv3} alt="" />

                <span className={styles.brick_title}>Низкий порог входа</span>
              </div>
              <div className={styles.brick}>
                <img src={adv4} alt="" />
                <span className={styles.brick_title}>
                  Гарантии для инвесторов
                </span>
              </div>
              <div className={styles.brick}>
                <img src={adv5} alt="" />
                <span className={styles.brick_title}>Свобода и комфорт</span>
              </div>
              <div className={styles.brick}>
                <img src={adv6} alt="" />

                <span className={styles.brick_title}>Взаимная выгода</span>
              </div>
              <div className={styles.brick}>
                <img src={adv7} alt="" />

                <span className={styles.brick_title}>Полное покрытие</span>
              </div>
              <div className={styles.brick}>
                <img src={adv8} alt="" />

                <span className={styles.brick_title}>Как мы зарабатываем?</span>
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
                  <img src={become1} alt="" />
                </div>
                <span>Возьмите карточку</span>
              </div>
              <div className={styles.step}>
                <div className={styles.step_img}>
                  <div className={styles.marker}>
                    <span>02</span>
                  </div>
                  <img src={become2} alt="" />
                </div>
                <span>Включите компьютер</span>
              </div>
              <div className={styles.step}>
                <div className={styles.step_img}>
                  <div className={styles.marker}>
                    <span>03</span>
                  </div>
                  <img src={become3} alt="" />
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
