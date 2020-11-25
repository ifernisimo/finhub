import React from "react";
import styles from "./BorrowerCabinetPage.module.css";
import HeaderComponentContainer from "../../components/HeaderComponent/HeaderComponentContainer";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import InvestBoardNavComponent from "../../components/InvestBoardNavComponent/InvestBoardNavComponent";
import BorrowerCabinetHome from "../../components/BorrowerCabinetHome/BorrowerCabinetHome";
import InvestBoardCharts from "../../components/InvestBoardCharts/InvestBoardCharts";

const BorrowerCabinetPage = (props) => {
  return (
    <>
      <HeaderComponentContainer />
      <div className={styles.container}>
        <InvestBoardNavComponent />
        <div className={styles.creditChart}>
          <InvestBoardCharts
            loanLeft={8000}
            loanSumm={35000}
            width={"400"}
            height={"400"}
          />
        </div>

        <BorrowerCabinetHome />
      </div>
      <FooterComponent />
    </>
  );
};

export default BorrowerCabinetPage;
