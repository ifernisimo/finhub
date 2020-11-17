import React from "react";
import style from "./style.module.css";
import daysToDate from "./util/daysToDate";

/**
 * Принимает на вход количество дней до погашения, конвертирует
 * в дату, а потом отображает.
 * @param  {number} props.days количество дней конвертации
 */
const MaturityDate = ({ days }) => {
  return (
    <div>
      <span className={style.text}>дата погашения</span>
      <span className={style.date}>{daysToDate(days)}</span>
    </div>
  );
};

export default MaturityDate;
