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

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exect path="/investor" render={() => <InvestorPage />} />
        <Route exect path="/howitworks" render={() => <HowWorksPage />} />
        <Route exect path="/help" render={() => <HelpPage />} />
        <Route exect path="/contacts" render={() => <ContactsPage />} />
        <Route exect path="/blog" render={() => <BlogPage />} />
        <Route exect path="/auth" render={() => <AuthPage />} />
        <Route exect path="/" render={() => <BorrowerPageComponent />} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
