import React from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import styles from "./BorrowerPageComponent.module.css";
import PartnersComponent from "../../components/PartnersComponent/PartnersComponent";
import QuestionComponent from "../../components/QuestionComponent/QuestionComponent";
import FeedBackComponent from "../../components/FeedBackComponent/FeedBackComponent";
import HowToComponent from "../../components/HowToComponent/HowToComponent";
import MiniBlogComponent from "../../components/MiniBlogComponent/MiniBlogComponent";
import HeaderComponentContainer from "../../components/HeaderComponent/HeaderComponentContainer";
import CalculatorBorrowComponent from "../../components/CalculatorBorrowComponent/CalculatorBorrowComponent";
import BorrowerTakeCreditOnlineComponent from "../../components/BorrowerTakeCreditOnlineComponent/BorrowerTakeCreditOnlineComponent";
import GreenPromoPartComponent from "../../components/GreenPromoPartComponent/GreenPromoPartComponent";
import BorrowerEasyPart from "../../components/BorrowerEasyPart/BorrowerEasyPart";
import BorrowerCreditsOnlineOnCard from "../../components/BorrowerCreditsOnlineOnCard/BorrowerCreditsOnlineOnCard";
import BorrowerP2pPart from "../../components/BorrowerP2pPart/BorrowerP2pPart";
import BorrowerSuccesNotInMoneyPart from "../../components/BorrowerSuccesNotInMoneyPart/BorrowerSuccesNotInMoneyPart";

const BorrowerPageComponent = (props) => {
  return (
    <>
      <HeaderComponentContainer />
      <CalculatorBorrowComponent />
      <div className={styles.content}>
        <BorrowerTakeCreditOnlineComponent />
        <GreenPromoPartComponent />
        <BorrowerEasyPart />
        <HowToComponent />
        <BorrowerCreditsOnlineOnCard />

        <FeedBackComponent />

        <BorrowerP2pPart />
        <MiniBlogComponent />
        <BorrowerSuccesNotInMoneyPart />
        <PartnersComponent />
        <QuestionComponent />
      </div>
      <FooterComponent />
    </>
  );
};

export default BorrowerPageComponent;
