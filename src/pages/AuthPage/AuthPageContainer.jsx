import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import AuthPage from "./AuthPage";

const AuthPageContainer = (props) => {
  return (
    <>
      <AuthPage {...props} />
    </>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.auth.authorizationStatus,
});

export default compose(connect(mapStateToProps, {}))(AuthPageContainer);
