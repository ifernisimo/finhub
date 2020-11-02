import React from "react";
import styles from "./InvestorSection4.module.css";
import quotes from "../../assets/images/quotesBlueIcon.svg";

const InvestorSection4 = (props) => {
  return (
    <>
      <div className={styles.whereCanInvest}>
        <div className={styles.container}>
          <div className={styles.blockHeadTitleDescription}>
            <div className={styles.blockHead_title}>
              <h2>Куда вложить деньги в Украине?</h2>
            </div>
            <div className={styles.blockHead_description}>
              <span>
                <img className={styles.quotes} src={quotes} alt="" />
                Если человеку, даже с минимальным заработком, задать вопрос:
                «Куда вложить деньги в Украине?», он ответит: «В доллары». Это
                действительно один из самых распространённых вариантов, ведь
                гривна сегодня обесценена настолько, насколько это возможно. В
                последние годы стали актуальными ещё несколько способов, как
                правильно вложить деньги и заработать:
              </span>
            </div>
          </div>

          <div className={styles.wall}>
            <div className={styles.wall_column}>
              <div className={styles.wall_item}>
                <h3>Криптовалюта</h3>
                <p>
                  Вложения в биткоины – выгодный источник дохода для тех, кто
                  вовремя понял систему и сумел просчитать риски. Это
                  универсальная для всех стран валюта, которая растёт в цене и
                  позволяет вкладчикам значительно улучшать материальное
                  положение.
                </p>
              </div>
              <div className={styles.wall_item}>
                <h3>Финансовые</h3>
                <span>
                  Связаны с вложением средств в ценные бумаги: векселя, акции,
                  права собственности на земельный участок и многое другое.
                </span>
                <p>
                  Связаны с вложением средств в ценные бумаги: векселя, акции,
                  права собственности на земельный участок и многое другое.
                </p>
              </div>
            </div>
            <div className={styles.wall_column}>
              <div className={styles.wall_item}>
                <h3>Форекс</h3>
                <span>
                  Крупный международный рынок валюты, предлагающий возможность
                  краткосрочных, а также долгосрочных вложений.
                </span>
                <p>
                  Важно разобраться в том, какие есть финансовые инструменты.
                  Существует классификации, зная которые будет проще осуществить
                  выгодное вложение денег в Украине. На основе того, что из себя
                  представляет объект инвестирования, выделяют такие виды
                  вложений:
                </p>
              </div>
              <div className={styles.wall_item}>
                <h3>Венчурные инвестиции</h3>

                <p>
                  Значит, те, которые направлены на перспективу: открытия,
                  изобретения, разработку новых технологий.
                </p>
              </div>
            </div>
            <div className={styles.wall_column}>
              <div className={styles.wall_item}>
                <h3>Реальные инвестиции</h3>

                <p>
                  Деньги вносятся в реально существующие объекты, например,
                  недвижимость.
                </p>
              </div>
              <div className={styles.wall_item}>
                <h3>Спекулятивные инвестии</h3>

                <p>
                  Пусть это слово не вызывает никаких негативных ассоциаций. Оно
                  означает заработок на перепродажах.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorSection4;
