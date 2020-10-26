import React from "react";
import styles from "../../pages/ContactsPage/ContactPage.module.css";
import { Formik } from "formik";
import * as yup from "yup";

const AuthorizationComponent = (props) => {
  const validationsSchema = yup.object().shape({
    mailOrPhone: yup
      .string()
      .email("Формат E-mail не корректный")
      .required("*Обязательное поле"),
    password: yup.string().required("*Обязательное поле"),
  });
  return (
    <>
      <div className="authorization">
        <div className="pageTitle">
          <h1>Вход в кабинет</h1>
        </div>

        <Formik
          initialValues={{
            mailOrPhone: "",
            password: "",
          }}
          validateOnBlur
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <div className={"from"}>
              <p>
                <input
                  className={"input"}
                  type={"text"}
                  name={"mailOrPhone"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </p>
              {touched.mailOrPhone && errors.mailOrPhone && (
                <p className={styles.error}>{errors.mailOrPhone}</p>
              )}

              <p>
                <input
                  className={"input"}
                  type={"password"}
                  name={"password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />

                <span onClick={() => props.setMode(2)}>Забыли пароль?</span>
              </p>
              {touched.password && errors.password && (
                <p className={"error"}>{errors.password}</p>
              )}

              <button
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
                type={"submit"}
              >
                Войти
              </button>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AuthorizationComponent;
