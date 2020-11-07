import React from "react";
import styles from "./BlogInsidePage.module.css";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponentContainer from "../../components/HeaderComponent/HeaderComponentContainer";
import arrow from "../../assets/images/blogInside_arrow.svg";
import demoImg from "../../assets/images/blogInside_img.jpg";
import { NavLink } from "react-router-dom";
import BlogInsideSlider from "../../components/BlogInsideSlider/BlogInsideSlider";

const BlogInsidePage = () => {
  return (
    <>
      <HeaderComponentContainer />

      <div className={styles.container}>
        <div className={styles.postPage}>
          <div className={styles.post_title}>
            <span className={styles.route}>
              главная / блог / Преимущества кредитования в Finhub
            </span>
            <button className={styles.backToBlog}>
              <img src={arrow} alt="" />
              <NavLink to={"/blog"}>
                <span>все публикации</span>
              </NavLink>
            </button>

            <h1>Преимущества кредитования в Finhub</h1>
          </div>

          <div className={styles.post_img}>
            <img src={demoImg} alt="" />
            <span className={styles.date}>2020-02-03</span>
          </div>

          <h4>
            Денежные вклады в какие-либо проекты – прекрасный способ улучшить
            свое финансовое положение.
          </h4>
          <div className={styles.postText}>
            <p>
              С другой стороны, всегда есть риск лишиться и процентов, и вклада.
              Именно поэтому, если вы новичок, вам понадобится помощь при
              инвестировании.
            </p>
            <p>
              Варианты такой помощи тесно связаны с выбранным объектом для
              вклада. Например, если вы решили профинансировать новый бизнес,
              полезной информацией, которая поможет сделать верный выбор, станет
              анализ рынка и оценка окупаемости инвестиций. Если ваша цель стать
              трейдером, понадобится консультация при инвестировании от
              проверенного брокера. В случае с беттингом помощью будут обзоры и
              прогнозы спортивных экспертов Тем, кто решит открывать депозит в
              банке, консалтинговые услуги окажут сотрудники отделений
              финучреждений.
            </p>
            Они познакомят вас с линейкой продуктов, нормативной информацией,
            помогут подобрать вклад, максимально соответствующий вашему запросу.
            Выбрав для себя равноправное кредитование на Finhub, вы также
            получите помощь для инвестирования. В вашем распоряжении будут
            результаты скоринга заявок заемщиков и процентные ставки.{" "}
            <p>
              Сопоставляя риски дефолта с прогнозируемой прибылью, вы сможете
              выбрать наиболее подходящий для вас вариант, в который стоит
              вложиться.
            </p>
          </div>
        </div>
        <BlogInsideSlider />
      </div>

      <FooterComponent />
    </>
  );
};

export default BlogInsidePage;
