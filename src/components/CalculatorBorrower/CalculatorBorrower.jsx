import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const CalculatorBorrower = (props) => {
  /*МОИ ДОРАБОТКИ*/

  const onSlide = (render, handle, value, un, percent) => {
    console.log(value);
  };

  const summ = React.createRef();
  const term = React.createRef();
  console.log(summ);
  return (
    <>
      {" "}
      <Nouislider
        range={{ min: 0, max: 100 }}
        start={[0]}
        onSlide={onSlide}
        connect
      />
    </>
  );
};

export default CalculatorBorrower;
