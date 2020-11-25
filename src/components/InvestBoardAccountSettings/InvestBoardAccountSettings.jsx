import React from "react";
import styles from "./InvestBoardAccountSettings.module.css";
import { Formik } from "formik";
import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import HeaderComponentContainer from "../HeaderComponent/HeaderComponentContainer";
import FooterComponent from "../FooterComponent/FooterComponent";
import InvestBoardNavComponent from "../InvestBoardNavComponent/InvestBoardNavComponent";

const InvestBoardAccountSettings = (props) => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationsSchema = yup.object().shape({
    name: yup.string(),
    phone: yup.string().matches(phoneRegExp, "Номер указан неверно"),
    email: yup.string().email("Введите верный email"),
    password: yup.string(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("*Обязательное поле"),
  });

  return (
    <>
      <HeaderComponentContainer />

      <div className={styles.accountSettings}>
        <div className={styles.container}>
          <InvestBoardNavComponent
            homelink="investboard"
            cardset="investboardcarddata"
            accountset="investboardsettings"
            history="investboardhistory"
          />
          <h2>Персональные данные</h2>
          <Formik
            initialValues={{
              //TODO: Когда будет сервер нужно будет подтягивать в поля initialValues данные с базы
              name: "",
              phone: "",
              email: "",
              password: "",
              confirmPassword: "",
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
              <form className={"from"}>
                <div className={styles.fieldCol}>
                  <div className={styles.name_field}>
                    {touched.name && errors.name ? (
                      <TextField
                        error
                        helperText={errors.name}
                        id="standard-basic-reg-name"
                        label="Имя"
                        name={"name"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={values.name}
                      />
                    ) : (
                      <TextField
                        id="standard-basic-reg-name"
                        label="Имя"
                        name={"phone"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={values.name}
                      />
                    )}
                  </div>

                  <div className={styles.email_field}>
                    {touched.email && errors.email ? (
                      <TextField
                        error
                        helperText={errors.email}
                        id="standard-basic-reg-email"
                        label="E-mail"
                        name={"email"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={values.email}
                      />
                    ) : (
                      <TextField
                        id="standard-basic-reg-email"
                        label="E-mail"
                        name={"email"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={values.email}
                      />
                    )}
                  </div>

                  <div className={styles.password_field}>
                    {touched.password && errors.password ? (
                      <TextField
                        error
                        helperText={errors.password}
                        id="standard-basic-reg-pass"
                        label="Новый пароль"
                        type="password"
                        autoComplete="current-password"
                        name={"password"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={values.password}
                      />
                    ) : (
                      <TextField
                        id="standard-basic-reg-pass"
                        label="Новый пароль"
                        name={"password"}
                        type="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={values.password}
                      />
                    )}
                  </div>

                  <div className={styles.confirmPassword_field}>
                    {touched.confirmPassword && errors.confirmPassword ? (
                      <TextField
                        error
                        helperText={errors.confirmPassword}
                        id="standard-basic-reg-confirm-pass"
                        label="Повторите новый пароль"
                        type={"password"}
                        name={"confirmPassword"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                      />
                    ) : (
                      <TextField
                        id="standard-basic-reg-confirm-pass"
                        label="Повторите новый пароль"
                        type={"password"}
                        name={"confirmPassword"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                      />
                    )}
                  </div>

                  <div className={styles.phone_field}>
                    {touched.phone && errors.phone ? (
                      <TextField
                        error
                        helperText={errors.phone}
                        id="standard-basic-reg-phone"
                        label="+38(0__)___-__-__"
                        name={"phone"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={values.phone}
                      />
                    ) : (
                      <TextField
                        id="standard-basic-reg-phone"
                        label="+38(0__)___-__-__"
                        name={"phone"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={values.phone}
                      />
                    )}
                  </div>
                </div>
                <div className={styles.saveBtn}>
                  <button
                    disabled={!isValid || !dirty}
                    onClick={handleSubmit}
                    type={"submit"}
                  >
                    <span>Сохранить</span>
                  </button>
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

export default InvestBoardAccountSettings;
