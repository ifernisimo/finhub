import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import CalculatorBorrower from "./CalculatorBorrower";
const CalculatorBorrowerContainer = ({ settings }) => {
  return <CalculatorBorrower settings={settings} />;
};

const mapStateToProps = (state) => ({
  settings: state.calc.settings,
});

export default compose(connect(mapStateToProps, {}))(
  CalculatorBorrowerContainer
);
