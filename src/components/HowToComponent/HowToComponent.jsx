import React, { useState } from "react";

const HowToComponent = (props) => {
  const [state, setState] = useState(false);

  return (
    <div className="howToTakeRepayCredit">
      <div className="howTo">
        <button onClick={() => setState(false)}>Как получить кредит</button>
        <button onClick={() => setState(true)}>Как погасить кредит</button>
      </div>
      {state === false && (
        <div className="howTo__cards">
          <div className="howTo__cards-item">
            <div className="item-title">
              <img src="" alt="" />
              <h4>Заполните заявку</h4>
            </div>
            <p>
              Пройдите простой процесс регистрации, который занимает всего
              несколько минут. А при последующих обращениях вы сможете получить
              кредит в два клика.
            </p>
          </div>
          <div className="howTo__cards-item">
            <div className="item-title">
              <img src="" alt="" />
              <h4>Заполните заявку</h4>
            </div>
            <p>
              Пройдите простой процесс регистрации, который занимает всего
              несколько минут. А при последующих обращениях вы сможете получить
              кредит в два клика.
            </p>
          </div>
          <div className="howTo__cards-item">
            <div className="item-title">
              <img src="" alt="" />
              <h4>Заполните заявку</h4>
            </div>
            <p>
              Пройдите простой процесс регистрации, который занимает всего
              несколько минут. А при последующих обращениях вы сможете получить
              кредит в два клика.
            </p>
          </div>
        </div>
      )}

      {state === true && (
        <div className="howTo__cards">
          <div className="howTo__cards-item">
            <div className="item-title">
              <img src="" alt="" />
              <h4>Личный кабинет</h4>
            </div>
            <p>Войдите в личный кабинет на сайте finhub.ua</p>
          </div>
          <div className="howTo__cards-item">
            <div className="item-title">
              <img src="" alt="" />
              <h4>Плановая сумма</h4>
            </div>
            <p>
              В личном кабинете Вы увидите плановую сумму к погашению и сможете
              выбрать карту для осуществления платежа
            </p>
          </div>
          <div className="howTo__cards-item">
            <div className="item-title">
              <img src="" alt="" />
              <h4>Оплатить картой</h4>
            </div>
            <p>Осуществить онлайн платёж со своей карты</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowToComponent;
