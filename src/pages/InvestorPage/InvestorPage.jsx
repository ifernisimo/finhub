import React from "react";
import styles from "./InvestorPage.module.css";
import HeaderComponentContainer from "../../components/HeaderComponent/HeaderComponentContainer";
import InvestorSection1 from "../../components/InvestorSection1/InvestorSection1";
import InvestorSection2 from "../../components/InvestorSection2/InvestorSection2";
import InvestorSection3 from "../../components/InvestorSection3/InvestorSection3";
import InvestorSection4 from "../../components/InvestorSection4/InvestorSection4";
import InvestorSection5 from "../../components/InvestorSection5/InvestorSection5";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const InvestorPage = (props) => {
  return (
    <>
      <HeaderComponentContainer />
      <InvestorSection1 />
      <InvestorSection2 />
      <InvestorSection3 />
      <InvestorSection4 />
      <InvestorSection5 />
      <FooterComponent />
    </>
  );
};

export default InvestorPage;
