import React, { useState } from "react";
import AuthorizationComponent from "../../components/AuthorizatonComponent/AuthorizationComponent";
import RegistrationComponent from "../../components/RegistrationComponent/RegistrationComponent";
import InnerHeaderComponent from "../../components/InnerHeaderComponent/InnerHeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import LostPasswordComponent from "../../components/LostPasswordComponent/LostPasswordComponent";

const AuthPage = (props) => {
  const [mode, setMode] = useState(0);
  return (
    <>
      <InnerHeaderComponent />

      {mode === 0 && <AuthorizationComponent setMode={setMode} />}
      {mode === 1 && <RegistrationComponent />}
      {mode === 2 && <LostPasswordComponent />}

      <div className="switchToRegistration">
        {mode === 2 && (
          <span className={"questionText"}>Вспомнили пароль ?</span>
        )}

        {mode === 1 && (
          <span className={"questionText"}>Уже есть аккаунт ?</span>
        )}

        {mode === 0 && (
          <span className={"questionText"}>Еще не зарегистрированиы ?</span>
        )}

        <button className={"switchButton"}>
          {mode === 0 && (
            <span onClick={() => setMode(1)}>Зарегистрируйтесь здесь</span>
          )}
          {mode === 1 && <span onClick={() => setMode(0)}>Войдите здесь</span>}
          {mode === 2 && (
            <span onClick={() => setMode(0)}>Войти в кабинет</span>
          )}
        </button>
      </div>

      <FooterComponent />
    </>
  );
};

export default AuthPage;
