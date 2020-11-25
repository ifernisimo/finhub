import React from "react";
import styles from "./LostPasswordComponent.module.css";
import { Formik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import FooterComponent from "../FooterComponent/FooterComponent";
import HeaderComponentContainer from "../HeaderComponent/HeaderComponentContainer";

const LostPasswordComponent = (props) => {
  const validationsSchema = yup.object().shape({
    email: yup
      .string()
      .email("Формат E-mail не корректный")
      .required("*Обязательное поле"),
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiInput-underline:after": {
        borderBottomColor: "green",
      },
      "& label.Mui-focused": {
        color: "green",
      },
    },
  }));

  const classes = useStyles();
  return (
    <>
      <HeaderComponentContainer />
      <div className={styles.container}>
        <div className={styles.lostPassword}>
          <div className={styles.pageTitle}>
            <h1>Востановление пароля</h1>
          </div>

          <Formik
            initialValues={{
              email: "",
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
              handleSubmit, // TODO <-- ДЛЯ ОТПРАВКИ ДАННЫХ НУЖНО НАПИСАТЬ api файл и в Reducer прописать thunk и прокинуть его в кастомный handle
              dirty,
            }) => (
              <form className={classes.root}>
                {touched.email && errors.email ? (
                  <TextField
                    error
                    helperText={errors.email}
                    id="standard-basic"
                    label="E-mail"
                    name={"email"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={values.email}
                  />
                ) : (
                  <TextField
                    id="standard-basic"
                    label="E-mail"
                    name={"email"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={values.email}
                  />
                )}

                <button
                  className={styles.restoreBtn}
                  disabled={!isValid || !dirty}
                  onClick={handleSubmit}
                  type={"submit"}
                >
                  Востановить
                </button>

                <div className={styles.rememberedBtn}>
                  <span>Вспомнили пароль ?</span>
                  <NavLink to={"/authorization"}>Авторизация</NavLink>
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

export default LostPasswordComponent;
