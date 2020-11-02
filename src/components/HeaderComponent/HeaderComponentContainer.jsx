import React from "react";

import HeaderComponent from "./HeaderComponent";

import { connect } from "react-redux";
import { setLanguage } from "../../store/reducers/main-reducer";
import { compose } from "redux";

const HeaderComponentContainer = (props) => {
  return <HeaderComponent {...props} />;
};

const mapStateToProps = (state) => ({
  language: state.main.language,
});

export default compose(connect(mapStateToProps, { setLanguage }))(
  HeaderComponentContainer
);
