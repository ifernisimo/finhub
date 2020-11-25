import React from "react";
import styles from "./BlogPage.module.css";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponentContainer from "../../components/HeaderComponent/HeaderComponentContainer";

import demoImg from "../../assets/images/blog_demo_img.svg";

const BlogPage = (props) => {
  //TODO: Когда будет созданы API на DAL уровне и серве нужно создать контейнер над этой компонентой в которой прокинуть данные при помощи thunk (который нужно написать) который тянет данные с API (который нужно также прописать) а потом просто взять кусок конструкции 1 блог поста и подставить полученные данные с пропсов
  //TODO: И навешать onClick на пост который будет парсить урл и подставлять для перехода на конкретный пост /post компоненты BlogInsidePage

  return (
    <>
      <HeaderComponentContainer />
      <div className={styles.container}>
        <div className={styles.blog}>
          <div className={styles.blogTitle}>
            <div className={styles.subtitle}>
              <span>главная / блог</span>
            </div>
            <div className={styles.title}>
              <h1>Блог</h1>
            </div>
          </div>

          <div className={styles.blogWall}>
            <div className={styles.blog_post}>
              <div className={styles.post_img}>
                <img src={demoImg} alt="" />
              </div>
              <span className={styles.postTitle}>
                Преимущества кредитования в Finhub
              </span>
              <span className={styles.description}>
                В частности, убеждённость некоторых оппонентов влечет за собой
                процесс внедрения и модернизации существующих финансовых и
                административных условий.
              </span>
              <span className={styles.date}>2020-02-03</span>
            </div>
            <div className={styles.blog_post}>
              <div className={styles.post_img}>
                <img src={demoImg} alt="" />
              </div>
              <span className={styles.postTitle}>
                Преимущества кредитования в Finhub
              </span>
              <span className={styles.description}>
                В частности, убеждённость некоторых оппонентов влечет за собой
                процесс внедрения и модернизации существующих финансовых и
                административных условий.
              </span>
              <span className={styles.date}>2020-02-03</span>
            </div>
            <div className={styles.blog_post}>
              <div className={styles.post_img}>
                <img src={demoImg} alt="" />
              </div>
              <span className={styles.postTitle}>
                Преимущества кредитования в Finhub
              </span>
              <span className={styles.description}>
                В частности, убеждённость некоторых оппонентов влечет за собой
                процесс внедрения и модернизации существующих финансовых и
                административных условий.
              </span>
              <span className={styles.date}>2020-02-03</span>
            </div>
            <div className={styles.blog_post}>
              <div className={styles.post_img}>
                <img src={demoImg} alt="" />
              </div>
              <span className={styles.postTitle}>
                Преимущества кредитования в Finhub
              </span>
              <span className={styles.description}>
                В частности, убеждённость некоторых оппонентов влечет за собой
                процесс внедрения и модернизации существующих финансовых и
                административных условий.
              </span>
              <span className={styles.date}>2020-02-03</span>
            </div>
            <div className={styles.blog_post}>
              <div className={styles.post_img}>
                <img src={demoImg} alt="" />
              </div>
              <span className={styles.postTitle}>
                Преимущества кредитования в Finhub
              </span>
              <span className={styles.description}>
                В частности, убеждённость некоторых оппонентов влечет за собой
                процесс внедрения и модернизации существующих финансовых и
                административных условий.
              </span>
              <span className={styles.date}>2020-02-03</span>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default BlogPage;
