import React from "react";
import styles from "./AuthorizationComponent.module.css";
import { Formik } from "formik";
import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import HeaderComponentContainer from "../HeaderComponent/HeaderComponentContainer";
import FooterComponent from "../FooterComponent/FooterComponent";

const AuthorizationComponent = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiInput-underline:after": {
        borderBottomColor: "green",
      },

      "& .MuiFormControl-root": {
        width: "100%",
      },

      "& label.Mui-focused": {
        color: "green",
      },
      input: {
        margin: "20px",
      },
    },
  }));

  const classes = useStyles();

  const validationsSchema = yup.object().shape({
    mailOrPhone: yup
      .string()
      .email("Формат E-mail не корректный")
      .required("*Обязательное поле"),
    password: yup
      .string()
      .typeError("Должно быть строкой")
      .required("*Обязательное поле"),
  });

  return (
    <>
      <HeaderComponentContainer />
      <div className={styles.container}>
        <div className={styles.authorization}>
          <div className={styles.pageTitle}>
            <h1>Вход в кабинет</h1>
          </div>

          <Formik
            initialValues={{
              mailOrPhone: "",
              password: "",
            }}
            validateOnBlur
            onSubmit={(values, errors) => {
              console.log(errors);
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
              <form className={classes.root}>
                <div className={styles.phoneOrMailField}>
                  {touched.mailOrPhone && errors.mailOrPhone ? (
                    <TextField
                      error
                      helperText={errors.mailOrPhone}
                      id="standard-basic"
                      label="E-mail"
                      name={"mailOrPhone"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.name}
                    />
                  ) : (
                    <TextField
                      id="standard-basic"
                      label="E-mail"
                      name={"mailOrPhone"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.name}
                    />
                  )}
                </div>

                <div className={styles.passwordField}>
                  {touched.password && errors.password ? (
                    <TextField
                      error
                      helperText={errors.password}
                      id="standard-password-input"
                      label="Пароль"
                      type="password"
                      name={"password"}
                      autoComplete="current-password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.password}
                    />
                  ) : (
                    <TextField
                      id="standard-password-input"
                      label="Пароль"
                      type="password"
                      name={"password"}
                      autoComplete="current-password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={values.password}
                    />
                  )}
                  <div className={styles.forgottenPass}>
                    <NavLink to={"/forgottenPassword"}>Забыли пароль?</NavLink>
                  </div>
                </div>

                <button
                  className={styles.enterBtn}
                  disabled={!isValid || !errors}
                  onClick={handleSubmit}
                  type={"submit"}
                >
                  Войти
                </button>

                <div className={styles.notRegistred}>
                  <span>Вы еще не зарегистрированы ?</span>
                  <NavLink to={"/registration"}>Регистрация</NavLink>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default AuthorizationComponent;
