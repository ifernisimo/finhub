import React from "react";
import style from "./style.module.css";
import { getCreditType, calculatePaymentToPay } from "./util";

/**
 * Отображает (а перед тем высчитывает) сумму долга, которую должен отдать клиент.
 * @param  {number} props.amount     [description]
 * @param  {number} props.rate       [description]
 * @param  {number} props.fee        [description]
 * @param  {number} props.serviceFee [description]
 */
const ForRefund = ({ amount, rate, fee, serviceFee, term }) => {
  const creditType = getCreditType(term);
  const paymentToPay = calculatePaymentToPay(
    amount,
    term,
    creditType,
    serviceFee,
    rate,
    fee
  );

  return (
    <div>
      <span className={style.text}>к возврату</span>
      <span className={style.amount}>{paymentToPay} грн.</span>
    </div>
  );
};

export default ForRefund;
