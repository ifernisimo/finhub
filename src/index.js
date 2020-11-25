import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./store/store";

import { Provider } from "react-redux";
import BorrowerPageComponent from "./pages/BorrowerPage/BorrowerPageComponent";
import { BrowserRouter } from "react-router-dom";

import { Route, Switch } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InvestorPage from "./pages/InvestorPage/InvestorPage";
import HowWorksPage from "./pages/HowWorksPage/HowWorksPage";
import HelpPage from "./pages/HelpPage/HelpPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import LostPasswordComponent from "./components/LostPasswordComponent/LostPasswordComponent";
import RegistrationComponent from "./components/RegistrationComponent/RegistrationComponent";
import AuthorizationComponent from "./components/AuthorizatonComponent/AuthorizationComponent";
import BlogInsidePage from "./pages/BlogInsidePage/BlogInsidePage";
import GlossaryPage from "./pages/GlossaryPage/GlossaryPage";
import InvestmentPage from "./pages/InvestmentPage/InvestmentPage";
import InvestBoardAccountSettings from "./components/InvestBoardAccountSettings/InvestBoardAccountSettings";
import InvestBoardCardData from "./components/InvestBoardCardData/InvestBoardCardData";
import BorrowerCabinetPage from "./pages/BorrowerCabinetPage/BorrowerCabinetPage";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route
          exect
          path="/clientpanel"
          render={() => <BorrowerCabinetPage />}
        />
        <Route
          exect
          path="/investboardcarddata"
          render={() => <InvestBoardCardData />}
        />
        <Route
          exect
          path="/investboardsettings"
          render={() => <InvestBoardAccountSettings />}
        />
        <Route exect path="/investboard" render={() => <InvestmentPage />} />
        <Route exect path="/post" render={() => <BlogInsidePage />} />
        <Route
          exect
          path="/registration"
          render={() => <RegistrationComponent />}
        />
        <Route
          exect
          path="/forgottenPassword"
          render={() => <LostPasswordComponent />}
        />
        <Route
          exect
          path="/authorization"
          render={() => <AuthorizationComponent />}
        />
        <Route exect path="/glossary" render={() => <GlossaryPage />} />
        <Route exect path="/investor" render={() => <InvestorPage />} />
        <Route exect path="/howitworks" render={() => <HowWorksPage />} />
        <Route exect path="/help" render={() => <HelpPage />} />
        <Route exect path="/contacts" render={() => <ContactsPage />} />
        <Route exect path="/blog" render={() => <BlogPage />} />
        <Route exect path="/auth" render={() => <AuthPage />} />
        <Route exect path="/" render={() => <BorrowerPageComponent />} />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
