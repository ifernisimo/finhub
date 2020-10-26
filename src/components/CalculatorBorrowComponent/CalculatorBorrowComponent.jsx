import React from "react";
const CalculatorBorrowComponent = (props) => {
  const handleMoneyRange = (e) => {
    console.log(e.target.value);
  };

  const handleDayRange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="borrowerCalculator">Калькулятор тут</div>
    </>
  );
};

export default CalculatorBorrowComponent;
