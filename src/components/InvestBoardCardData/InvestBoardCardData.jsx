import React from "react";
import HeaderComponentContainer from "../HeaderComponent/HeaderComponentContainer";
import FooterComponent from "../FooterComponent/FooterComponent";
import InvestBoardNavComponent from "../InvestBoardNavComponent/InvestBoardNavComponent";

const InvestBoardCardData = (props) => {
  return (
    <>
      <HeaderComponentContainer />
      <InvestBoardNavComponent
        homelink="investboard"
        cardset="investboardcarddata"
        accountset="investboardsettings"
        history="investboardhistory"
      />
      Комментарий в коде
      {/*//TODO: ВАЖНО ! ДАННЫЙ КОМПОНЕНТ НУЖНО СОЗДАВАТЬ ПРИ ПОМОЩИ ЕКВАЙРИНГ*/}
      {/*МЕРЧАНТА НА ЭТАПЕ ПРИВЯЗКИ ПЛАТЕЖНОЙ СИСТЕМЫ, И МЕРЧАНТ САМ ПРЕДОСТАВИТ*/}
      {/*ГОТОВЫЙ КОД С ДИЗАЙНОМ ДЛЯ ЭТОГО КОМПОНЕНТА*/}
      <FooterComponent />
    </>
  );
};

export default InvestBoardCardData;
