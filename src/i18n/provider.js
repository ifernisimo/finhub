import React from "react";
import { IntlProvider } from "react-intl";
import { LOCALES } from "./locales";
import messages from "./messages";

const Provider = ({ children, locale = LOCALES.RUSSIAN }) => {
  return (
    <IntlProvider
      locale={locale}
      textComponent={React.Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export default Provider;
