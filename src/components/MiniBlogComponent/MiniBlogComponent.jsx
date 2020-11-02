import React from "react";
import styles from "./MiniBlogComponent.module.css";
import blogDemo from "../../assets/images/blog_demo_img.svg";

const MiniBlogComponent = (props) => {
  return (
    <>
      <div className={styles.miniBlog}>
        <div className={styles.container}>
          <div className={styles.title_row}>
            <h2 className={styles.slider_title_text}>
              <span className={styles.greenText}>FINHUB&nbsp;</span> — блог
            </h2>
          </div>
          <div className={styles.postsRow}>
            <div className={styles.post}>
              <img src={blogDemo} alt="" />
              <h5>Преимущества кредитования в Finhub</h5>
              <p>
                В частности, убеждённость некоторых оппонентов влечет за собой
                процесс внедрения и модернизации существующих финансовых и
                административных условий.
              </p>
              <span className={styles.date}>2020-02-03</span>
            </div>

            <div className={styles.post}>
              <img src={blogDemo} alt="" />
              <h5>Преимущества кредитования в Finhub</h5>
              <p>
                В частности, убеждённость некоторых оппонентов влечет за собой
                процесс внедрения и модернизации существующих финансовых и
                административных условий.
              </p>
              <span className={styles.date}>2020-02-03</span>
            </div>

            <div className={styles.post}>
              <img src={blogDemo} alt="" />
              <h5>Преимущества кредитования в Finhub</h5>
              <p>
                В частности, убеждённость некоторых оппонентов влечет за собой
                процесс внедрения и модернизации существующих финансовых и
                административных условий.
              </p>
              <span className={styles.date}>2020-02-03</span>
            </div>

            <div className={styles.post}>
              <img src={blogDemo} alt="" />
              <h5>Преимущества кредитования в Finhub</h5>
              <p>
                В частности, убеждённость некоторых оппонентов влечет за собой
                процесс внедрения и модернизации существующих финансовых и
                административных условий.
              </p>
              <span className={styles.date}>2020-02-03</span>
            </div>
          </div>
          <div className={styles.goToBlogBtn}>
            <button> Перейти в блог</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniBlogComponent;
