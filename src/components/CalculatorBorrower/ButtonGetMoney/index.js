import React from "react";
import style from "./style.module.css";

// eslint-disable-next-line
const ButtonGetMoney = () => {
  return (
    <div className={style.container}>
      <a className={style.link} href="#">
        <span className={style.text}>получить деньги</span>
      </a>
    </div>
  );
};

export default ButtonGetMoney;
