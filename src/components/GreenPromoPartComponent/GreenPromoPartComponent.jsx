import React from "react";
import styles from "./GreenPromoPartComponent.module.css";
import promoGirl from "../../assets/images/green_promo_girl2.png";
import dotsDivider from "../../assets/images/dots_divider_white.svg";
import demoIcon from "../../assets/images/demo_ellips.svg";

const GreenPromoPartComponent = (props) => {
  return (
    <>
      <div className={styles.greenPromo}>
        <div className={styles.outerBanner}>
          <img className={styles.promoGirl} src={promoGirl} alt="" />
          <div className={styles.getMoneyBlock}>
            <div className={styles.getMoneyBlock_title}>
              <span className={styles.blueText}>FINHUB</span>
              <span className={styles.whiteText}>
                - кредиты онлайн на карту
              </span>
            </div>
            <img
              className={styles.divider}
              src={dotsDivider}
              alt="dots divider"
            />
            <p className={styles.getMoneyBlock_text}>
              FINHUB первый в Украине оператор взаимных кредитов — это когда
              люди, а не банки, дают займы тем, кому они необходимы. Такой
              подход дает нам возможность предлагать вам одни из самых низких
              ставок по кредитам в Украине.
            </p>
          </div>
        </div>

        <div className={styles.advantages}>
          <div className={styles.items_row}>
            <div className={styles.advantageItem}>
              <div className={styles.item}>
                <div className={styles.item_img_title}>
                  <img src={demoIcon} alt="" />
                  <span>Быстро</span>
                </div>
                <p>
                  Мы обрабатываем ваши заявки как можно быстрее, чтобы не
                  заставлять вас ждать.
                </p>
              </div>
            </div>
            <div className={styles.advantageItem}>
              <div className={styles.item}>
                <div className={styles.item_img_title}>
                  <img src={demoIcon} alt="" />
                  <span>Легко</span>
                </div>
                <p>
                  Только интернет и банковская карта — больше ничего не нужно,
                  для того чтобы получить кредит.
                </p>
              </div>
            </div>
            <div className={styles.advantageItem}>
              <div className={styles.item}>
                <div className={styles.item_img_title}>
                  <img src={demoIcon} alt="" />
                  <span>Честно</span>
                </div>
                <p>
                  Никаких скрытых платежей и акционных процентов. Ваш процент
                  будет только снижаться, после выплаты каждого кредита.
                </p>
              </div>
            </div>
            <div className={styles.advantageItem}>
              <div className={styles.item}>
                <div className={styles.item_img_title}>
                  <img src={demoIcon} alt="" />
                  <span>Понятно</span>
                </div>
                <p>
                  Точные расчеты по кредитным ставкам. Вы всегда точно знаете
                  условия вашего кредита.
                </p>
              </div>
            </div>
            <div className={styles.advantageItem}>
              <div className={styles.item}>
                <div className={styles.item_img_title}>
                  <img src={demoIcon} alt="" />
                  <span>Надёжно</span>
                </div>
                <p>
                  Мы используем последние технологии в защите данных наших
                  клиентов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreenPromoPartComponent;
