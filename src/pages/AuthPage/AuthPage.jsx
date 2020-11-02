import React, { useState } from "react";
import AuthorizationComponent from "../../components/AuthorizatonComponent/AuthorizationComponent";
import RegistrationComponent from "../../components/RegistrationComponent/RegistrationComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import LostPasswordComponent from "../../components/LostPasswordComponent/LostPasswordComponent";
import HeaderComponentContainer from "../../components/HeaderComponent/HeaderComponentContainer";
import styles from "./AuthPage.module.css";

const AuthPage = (props) => {
  const [mode, setMode] = useState(1);
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
