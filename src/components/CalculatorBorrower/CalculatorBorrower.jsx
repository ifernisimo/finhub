import React, { useState } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const CalculatorBorrower = (props) => {
  const [summValue, setSummValue] = useState(0);
  const [summStartValue, setSummStartValue] = useState(0);
  const [termValue, setTermValue] = useState(0);
  const [termStartValue, setTermStartValue] = useState(0);
  const [loanType, setLoanType] = useState(0);

  console.log(summValue, summStartValue);
  console.log(termValue, termStartValue);

  const finhubCalculatorSettings = {
    payday_loan: {
      min_term: 1,
      max_term: 30,
      min_amount: 1000,
      max_amount: 5000,
      prepayment_fee: 0,
      rate: 0.01,
      fee: 15,
      service_fee: 15,
      step_amount: 100,
      step_term: 1,
      range_term: 3,
      range_amount: 5,
    },
    expert_loan: {
      min_term: 90,
      max_term: 360,
      min_amount: 5100,
      max_amount: 30000,
      prepayment_fee: 0,
      rate: 0.01,
      fee: 4.5,
      service_fee: 10,
      step_amount: 100,
      step_term: 30,
      range_term: 4,
      range_amount: 5,
    },
    business_loan: {
      min_term: 90,
      max_term: 360,
      min_amount: 10000,
      max_amount: 50000,
      prepayment_fee: 0,
      rate: 0.01,
      fee: 2.5,
      service_fee: 10,
      step_amount: 100,
      step_term: 30,
      range_term: 4,
      range_amount: 6,
    },
  };
  /*МОИ ДОРАБОТКИ*/

  const onSummSlide = (render, handle, value, un, percent) => {
    setSummValue(parseInt(value[0]));
    /**/
    //Если сумма больше мин payday_loan.max_amount установить business business_loan.min_amount
    //Если сумма меньше мин business_loan.min_amount установить payday_loan.max_amount
    summValue > finhubCalculatorSettings.payday_loan.max_amount
      ? setTermStartValue(finhubCalculatorSettings.business_loan.min_term)
      : setTermStartValue(finhubCalculatorSettings.payday_loan.max_term);
    /**/
  };

  const onTermSlide = (render, handle, value, un, percent) => {
    setTermValue(parseInt(value[0]));
  };

  //const loanTypeSet = () => {};

  return (
    <>
      <div className="calculator">
        <div className="summRange">
          <Nouislider
            range={{ min: 0, max: 30000 }}
            start={[summStartValue]}
            onUpdate={onSummSlide}
            step={100}
          />
        </div>
        <div className="termRange">
          <Nouislider
            range={{ min: 0, max: 365 }}
            start={[termStartValue]}
            onSlide={onTermSlide}
          />
        </div>

        <div className="output">
          <span>Сумма: {summValue}</span>
          <br />
          <span>Период: {termValue}</span>
        </div>
      </div>
    </>
  );
};

export default CalculatorBorrower;
