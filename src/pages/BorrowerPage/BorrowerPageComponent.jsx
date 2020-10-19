import React from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import styles from "./BorrowerPageComponent.module.css";

const BorrowerPageComponent = (props) => {
  return (
    <>
      <HeaderComponent />
      <div className={styles.content}>CONTENT</div>
      <FooterComponent />
    </>
  );
};

export default BorrowerPageComponent;
