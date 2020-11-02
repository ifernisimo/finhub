import React from "react";
import styles from "./BlogInsideSlider.module.css";
import arrowLeft from "../../assets/images/slider_arrow_left.svg";
import arrowRight from "../../assets/images/slider_arrow_right.svg";
import Slider from "react-slick";
import demoPhoto from "../../assets/images/blog_demo_img.svg";

const BlogInsideSlider = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };

  const slider = React.createRef();

  return (
    <>
      <div className={styles.posts__slider}>
        <div className={styles.container}>
          <div className={styles.title_row}>
            <h2 className={styles.slider_title_text}>Похожие публикации</h2>

            <div className={styles.slider_controls}>
              <div className={styles.paginator}>
                <span className={styles.paginator_active}>01</span>&nbsp;/&nbsp;
                <span>03</span>
              </div>

              <button onClick={() => slider.current.slickPrev()}>
                <img src={arrowLeft} alt="" />
              </button>
              <button onClick={() => slider.current.slickNext()}>
                <img src={arrowRight} alt="" />
              </button>
            </div>
          </div>

          <div className={styles.slider_container}>
            <Slider ref={slider} {...settings}>
              <div className={styles.posts__card}>
                <div className={styles.posts_name}>
                  <img src={demoPhoto} alt="" />
                </div>
                <div className={styles.name_container}>
                  <span className={styles.name}>
                    Преимущества кредитования в Finhub
                  </span>
                </div>
                <div className={styles.comment_text}>
                  <p>
                    В частности, убеждённость некоторых оппонентов влечет за
                    собой процесс внедрения и модернизации существующих
                    финансовых и административных условий.
                  </p>
                </div>
              </div>
              <div className={styles.posts__card}>
                <div className={styles.posts_name}>
                  <img src={demoPhoto} alt="" />
                </div>
                <div className={styles.name_container}>
                  <span className={styles.name}>Андрей, 32 года</span>
                  <span className={styles.from}>
                    Львовская область, мастер по ремонту автомобилей, с ФинХаб с
                    21.01.2018
                  </span>
                </div>
                <div className={styles.comment_text}>
                  <p>
                    Я занимаюсь ремонтом автомобилей, иногда возникает
                    необходимость купить необходимые для ремонта детали, а
                    оплата от клиента будет только после сдачи работы, свободных
                    средств у меня нет, поэтому беру короткие кредиты на сумму
                    до 15 000 грн. Про ФинХаб узнал из рекламы в Интернет,
                    попробовал, и был очень приятно удивлен невысокой ставкой и
                    оперативностью получения денег. Не было неожиданных
                    комиссий, есть возможность досрочного погашения без штрафов,
                    это удобно, т.к. я стараюсь возвращать деньги раньше срока.
                    Уже обращался несколько раз, и планирую обращаться еще!
                  </p>
                </div>
              </div>
              <div className={styles.posts__card}>
                <div className={styles.posts_name}>
                  <img src={demoPhoto} alt="" />
                </div>
                <div className={styles.name_container}>
                  <span className={styles.name}>Андрей, 32 года</span>
                  <span className={styles.from}>
                    Львовская область, мастер по ремонту автомобилей, с ФинХаб с
                    21.01.2018
                  </span>
                </div>
                <div className={styles.comment_text}>
                  <p>
                    Я занимаюсь ремонтом автомобилей, иногда возникает
                    необходимость купить необходимые для ремонта детали, а
                    оплата от клиента будет только после сдачи работы, свободных
                    средств у меня нет, поэтому беру короткие кредиты на сумму
                    до 15 000 грн. Про ФинХаб узнал из рекламы в Интернет,
                    попробовал, и был очень приятно удивлен невысокой ставкой и
                    оперативностью получения денег. Не было неожиданных
                    комиссий, есть возможность досрочного погашения без штрафов,
                    это удобно, т.к. я стараюсь возвращать деньги раньше срока.
                    Уже обращался несколько раз, и планирую обращаться еще!
                  </p>
                </div>
              </div>
              <div className={styles.posts__card}>
                <div className={styles.posts_name}>
                  <img src={demoPhoto} alt="" />
                </div>
                <div className={styles.name_container}>
                  <span className={styles.name}>Андрей, 32 года</span>
                  <span className={styles.from}>
                    Львовская область, мастер по ремонту автомобилей, с ФинХаб с
                    21.01.2018
                  </span>
                </div>
                <div className={styles.comment_text}>
                  <p>
                    Я занимаюсь ремонтом автомобилей, иногда возникает
                    необходимость купить необходимые для ремонта детали, а
                    оплата от клиента будет только после сдачи работы, свободных
                    средств у меня нет, поэтому беру короткие кредиты на сумму
                    до 15 000 грн. Про ФинХаб узнал из рекламы в Интернет,
                    попробовал, и был очень приятно удивлен невысокой ставкой и
                    оперативностью получения денег. Не было неожиданных
                    комиссий, есть возможность досрочного погашения без штрафов,
                    это удобно, т.к. я стараюсь возвращать деньги раньше срока.
                    Уже обращался несколько раз, и планирую обращаться еще!
                  </p>
                </div>
              </div>
              <div className={styles.posts__card}>
                <div className={styles.posts_name}>
                  <img src={demoPhoto} alt="" />
                </div>
                <div className={styles.name_container}>
                  <span className={styles.name}>Андрей, 32 года</span>
                  <span className={styles.from}>
                    Львовская область, мастер по ремонту автомобилей, с ФинХаб с
                    21.01.2018
                  </span>
                </div>
                <div className={styles.comment_text}>
                  <p>
                    Я занимаюсь ремонтом автомобилей, иногда возникает
                    необходимость купить необходимые для ремонта детали, а
                    оплата от клиента будет только после сдачи работы, свободных
                    средств у меня нет, поэтому беру короткие кредиты на сумму
                    до 15 000 грн. Про ФинХаб узнал из рекламы в Интернет,
                    попробовал, и был очень приятно удивлен невысокой ставкой и
                    оперативностью получения денег. Не было неожиданных
                    комиссий, есть возможность досрочного погашения без штрафов,
                    это удобно, т.к. я стараюсь возвращать деньги раньше срока.
                    Уже обращался несколько раз, и планирую обращаться еще!
                  </p>
                </div>
              </div>
              <div className={styles.posts__card}>
                <div className={styles.posts_name}>
                  <img src={demoPhoto} alt="" />
                </div>
                <div className={styles.name_container}>
                  <span className={styles.name}>Андрей, 32 года</span>
                  <span className={styles.from}>
                    Львовская область, мастер по ремонту автомобилей, с ФинХаб с
                    21.01.2018
                  </span>
                </div>
                <div className={styles.comment_text}>
                  <p>
                    Я занимаюсь ремонтом автомобилей, иногда возникает
                    необходимость купить необходимые для ремонта детали, а
                    оплата от клиента будет только после сдачи работы, свободных
                    средств у меня нет, поэтому беру короткие кредиты на сумму
                    до 15 000 грн. Про ФинХаб узнал из рекламы в Интернет,
                    попробовал, и был очень приятно удивлен невысокой ставкой и
                    оперативностью получения денег. Не было неожиданных
                    комиссий, есть возможность досрочного погашения без штрафов,
                    это удобно, т.к. я стараюсь возвращать деньги раньше срока.
                    Уже обращался несколько раз, и планирую обращаться еще!
                  </p>
                </div>
              </div>
              <div className={styles.posts__card}>
                <div className={styles.posts_name}>
                  <img src={demoPhoto} alt="" />
                </div>
                <div className={styles.name_container}>
                  <span className={styles.name}>Андрей, 32 года</span>
                  <span className={styles.from}>
                    Львовская область, мастер по ремонту автомобилей, с ФинХаб с
                    21.01.2018
                  </span>
                </div>
                <div className={styles.comment_text}>
                  <p>
                    Я занимаюсь ремонтом автомобилей, иногда возникает
                    необходимость купить необходимые для ремонта детали, а
                    оплата от клиента будет только после сдачи работы, свободных
                    средств у меня нет, поэтому беру короткие кредиты на сумму
                    до 15 000 грн. Про ФинХаб узнал из рекламы в Интернет,
                    попробовал, и был очень приятно удивлен невысокой ставкой и
                    оперативностью получения денег. Не было неожиданных
                    комиссий, есть возможность досрочного погашения без штрафов,
                    это удобно, т.к. я стараюсь возвращать деньги раньше срока.
                    Уже обращался несколько раз, и планирую обращаться еще!
                  </p>
                </div>
              </div>
              <div className={styles.posts__card}>
                <div className={styles.posts_name}>
                  <img src={demoPhoto} alt="" />
                </div>
                <div className={styles.name_container}>
                  <span className={styles.name}>Андрей, 32 года</span>
                  <span className={styles.from}>
                    Львовская область, мастер по ремонту автомобилей, с ФинХаб с
                    21.01.2018
                  </span>
                </div>
                <div className={styles.comment_text}>
                  <p>
                    Я занимаюсь ремонтом автомобилей, иногда возникает
                    необходимость купить необходимые для ремонта детали, а
                    оплата от клиента будет только после сдачи работы, свободных
                    средств у меня нет, поэтому беру короткие кредиты на сумму
                    до 15 000 грн. Про ФинХаб узнал из рекламы в Интернет,
                    попробовал, и был очень приятно удивлен невысокой ставкой и
                    оперативностью получения денег. Не было неожиданных
                    комиссий, есть возможность досрочного погашения без штрафов,
                    это удобно, т.к. я стараюсь возвращать деньги раньше срока.
                    Уже обращался несколько раз, и планирую обращаться еще!
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogInsideSlider;
