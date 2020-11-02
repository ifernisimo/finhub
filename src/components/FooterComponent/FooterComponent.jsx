import React from "react";
import styles from "./FooterComponent.module.css";
import { NavLink } from "react-router-dom";
/**/
import logo from "../../assets/images/logo_white.svg";
import phoneIcon from "../../assets/images/Call_icon.svg";
const FooterComponent = (props) => {
  return (
    <>
      <footer>
        <div className={styles.main_row}>
          <div className={styles.container}>
            <div className={styles.logoCol}>
              <img src={logo} alt="" />
              <p>
                Кредитует ООО «КУ «Финкредит плюс» Свидетельство серии IK №150
                от 25.10.2015 г.
              </p>
              <br />
              <p>
                Лицензия Госкомфинуслуг выдана согласно распоряжения № 163 от
                26.01.2017 г.
              </p>
            </div>
            <div className={styles.footer_nav}>
              <div className={styles.nav_col}>
                <NavLink to={""}>КАК ЭТО РАБОТАЕТ</NavLink>
                <NavLink to={""}>КОНТАКТЫ</NavLink>
                <NavLink to={""}>ИНВЕСТОРАМ</NavLink>
                <NavLink to={"/glossary"}>ГЛОССАРИЙ</NavLink>
                <NavLink to={""}>ПРАВИЛА СЕРВИСА</NavLink>
                <NavLink to={""}>КАК ПОГАСИТЬ ДОЛГ</NavLink>
              </div>
              <div className={styles.nav_col}>
                <NavLink to={""}>НАШИ ПАРТНЕРЫ</NavLink>
                <NavLink to={""}>СТАТЬ ИНВЕСТОРОМ</NavLink>
                <NavLink to={""}>ПОМОЩЬ</NavLink>
                <NavLink to={""}>БЛОГ</NavLink>
                <NavLink to={""}>ОТЗЫВЫ</NavLink>
                <NavLink to={""}>ПОТРЕБИТЕЛЬСКИЕ КРЕДИТЫ</NavLink>
              </div>
            </div>
            <div className={styles.etcInfo}>
              <div className={styles.underlineInfo}>
                <button>
                  <img src={phoneIcon} alt="" />
                  0&nbsp;800&nbsp;502&nbsp;346
                </button>
                <p>
                  Бесплатно с мобильных по Украине. Время работы: Пн-Пт: с 8:00
                  до 19:00
                </p>
              </div>
              <div className={styles.abovelineInfo}>
                <span className={styles.email}>info@finhub.ua</span>
                <p>Куреневский переулок, 17Ш 04073, Киев, Украина</p>
                <span className={styles.rights}>© FinHub 2018</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.info_row}>
          <div className={styles.container}>
            <span>
              Условия кредитования: Сумма кредита от 10000 до 30 000 грн. Кредит
              предоставляется на срок от 3 до 12 месяцев. В случае выхода на
              просрочку начисляется единоразовый штраф в размере 3% от суммы
              кредита грн., а также комиссия за пользование кредитом, которая
              начисляется до полного выполнения обязательств по кредиту. Пример
              расчета процентной ставки: при сумме кредита в 10 000 грн., сроком
              на 3 месяца, общая сумма к возврату (тело кредита и проценты)
              составит 12 650,17 грн. APR 159,01%. Максимальная процентная
              ставка APR 186,01% без дополнительных комиссий и платежей.
              Кредитует ООО «КУ «Финкредит плюс». Свидетельство серии ІК №150 от
              25.10.2015 г. Адрес компании: 04073, г.Киев, Куреневский переулок,
              17-Ш.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
