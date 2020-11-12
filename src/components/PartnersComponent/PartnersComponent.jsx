import React from "react";
/*NPM Scrollable anchor*/
import ScrollableAnchor from "react-scrollable-anchor";
/**/
import styles from "./PartnersComponent.module.css";
import demoImg from "../../assets/images/partners_demo.svg";
import demoCircle from "../../assets/images/demo_photo.svg";
const PartnersComponent = (props) => {
  return (
    <>
      <ScrollableAnchor id={"partners"}>
        <div className={styles.ourPartners}>
          <div className={styles.container}>
            <div className={styles.logoBlock}>
              <h2>Наши партнёры</h2>
              <div className={styles.logo_row}>
                <img src={demoImg} alt="" />
                <img src={demoImg} alt="" />
                <img src={demoImg} alt="" />
                <img src={demoImg} alt="" />
              </div>
              <div className={styles.logo_row}>
                <img src={demoImg} alt="" />
                <img src={demoImg} alt="" />
                <img src={demoImg} alt="" />
                <img src={demoImg} alt="" />
              </div>
            </div>
            <div className={styles.advantages}>
              <h4>
                <span className={styles.greenText}>Преимущества</span>&nbsp;
                быть партнёром
              </h4>
              <div className={styles.adv_container}>
                <div className={styles.adv_row}>
                  <div className={styles.advantage_item}>
                    <div className={styles.circleIcon}>
                      <img
                        src={demoCircle}
                        alt=""
                        className={styles.item_img}
                      />
                    </div>

                    <p className={styles.item_text}>
                      Успешная западная модель кредитования теперь и в Украине!
                    </p>
                  </div>
                  <div className={styles.advantage_item}>
                    <div className={styles.circleIcon}>
                      <img
                        src={demoCircle}
                        alt=""
                        className={styles.item_img}
                      />
                    </div>
                    <p className={styles.item_text}>
                      Более низкий процент по кредиту — всего 0,37% в день
                    </p>
                  </div>
                </div>
                <div className={styles.adv_row}>
                  <div className={styles.advantage_item}>
                    <div className={styles.circleIcon}>
                      <img
                        src={demoCircle}
                        alt=""
                        className={styles.item_img}
                      />
                    </div>
                    <p className={styles.item_text}>
                      Никаких отделений и очередей, все онлайн
                    </p>
                  </div>
                  <div className={styles.advantage_item}>
                    <div className={styles.circleIcon}>
                      <img
                        src={demoCircle}
                        alt=""
                        className={styles.item_img}
                      />
                    </div>
                    <p className={styles.item_text}>
                      Отсутствие справки о доходах
                    </p>
                  </div>
                </div>

                <div className={styles.adv_row}>
                  <div className={styles.advantage_item}>
                    <div className={styles.circleIcon}>
                      <img
                        src={demoCircle}
                        alt=""
                        className={styles.item_img}
                      />
                    </div>
                    <p className={styles.item_text}>
                      Никаких отделений и очередей, все онлайн
                    </p>
                  </div>
                  <div className={styles.advantage_item}>
                    <div className={styles.circleIcon}>
                      <img
                        src={demoCircle}
                        alt=""
                        className={styles.item_img}
                      />
                    </div>
                    <p className={styles.item_text}>
                      Отсутствие справки о доходах
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    </>
  );
};

export default PartnersComponent;
