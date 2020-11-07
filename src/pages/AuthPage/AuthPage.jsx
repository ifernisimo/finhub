import React from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponentContainer from "../../components/HeaderComponent/HeaderComponentContainer";
import styles from "./AuthPage.module.css";

const AuthPage = (props) => {
  return (
    <>
      <HeaderComponentContainer />

      <div className={styles.signInOut}>
        <div className={styles.container}></div>
      </div>
      <FooterComponent />
    </>
  );
};

export default AuthPage;
