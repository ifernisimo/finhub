import React from "react";
import styles from "./BlogPage.module.css";
import InnerHeaderComponent from "../../components/InnerHeaderComponent/InnerHeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const BlogPage = () => {
  return (
    <>
      <InnerHeaderComponent />
      <div className="blogPage">
        <h1>Блог</h1>
        <div className="headNews">
          <img src="" alt="Картинка" />
          <div className="headNewsText">
            <h4>
              2. Погашать кредит в кабинете можно в 2 клика — достаточно выбрать
              карту и ввести сумму платежа. Процессинговая комиссия нашего
              партнера TAS Link за перевод — всего 5%
            </h4>
            <span>26 июля</span>
            <p>
              Каждому человеку хотелось бы, чтобы денежные проблемы обходили его
              стороной. Однако есть множество незапланированных ситуаций,
              которые нарушают размеренное течение жизни. С некоторыми
              получается справиться самостоятельно, отложив на потом какие-то
              приобретения. Для остальных есть сервис частных займов FINHUB.{" "}
            </p>
          </div>
        </div>
        <div className={styles.newsBoard}>
          <div className={styles.post}>
            <img src="" alt="post img" />
            <h5>
              Как измениться потребительская корзина Украины с нового года?
            </h5>
            <span>3 февраля</span>
          </div>
          <div className={styles.post}>
            <img src="" alt="post img" />
            <h5>
              Как измениться потребительская корзина Украины с нового года?
            </h5>
            <span>3 февраля</span>
          </div>
          <div className={styles.post}>
            <img src="" alt="post img" />
            <h5>
              Как измениться потребительская корзина Украины с нового года?
            </h5>
            <span>3 февраля</span>
          </div>
          <div className={styles.post}>
            <img src="" alt="post img" />
            <h5>
              Как измениться потребительская корзина Украины с нового года?
            </h5>
            <span>3 февраля</span>
          </div>
          <div className={styles.post}>
            <img src="" alt="post img" />
            <h5>
              Как измениться потребительская корзина Украины с нового года?
            </h5>
            <span>3 февраля</span>
          </div>
          <div className={styles.post}>
            <img src="" alt="post img" />
            <h5>
              Как измениться потребительская корзина Украины с нового года?
            </h5>
            <span>3 февраля</span>
          </div>
          <div className={styles.post}>
            <img src="" alt="post img" />
            <h5>
              Как измениться потребительская корзина Украины с нового года?
            </h5>
            <span>3 февраля</span>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default BlogPage;
