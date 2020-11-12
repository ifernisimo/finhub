import React /*{ useLayoutEffect, useState }*/ from "react";
import * as yup from "yup";
import { Formik } from "formik";
import styles from "./RegistrationComponent.module.css";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";
import FooterComponent from "../FooterComponent/FooterComponent";
import HeaderComponentContainer from "../HeaderComponent/HeaderComponentContainer";
import triangle from "../../assets/images/registration_triangle.png";

const RegistrationComponent = (props) => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationsSchema = yup.object().shape({
    name: yup.string().required("*Обязательно"),
    phone: yup.string().matches(phoneRegExp, "Номер указан неверно"),
    email: yup.string().email("Введите верный email").required("*Обязательно"),
    confirmEmail: yup
      .string()
      .email("Введите верный email")
      .oneOf([yup.ref("email")], "Email не совпадают")
      .required("Обязательно"),
    password: yup.string().required("*Обязательное поле"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("*Обязательное поле"),
  });
  return (
    <>
      <HeaderComponentContainer />
      <div className={styles.containerMain}>
        <div className={styles.registration}>
          <div className={styles.leftSide}>
            <div className={styles.pageTitle}>
              <h1>Регистрация</h1>
            </div>
            <div className={styles.whoAuth}>
              <span className={styles.active}>Я инвестор</span>
              &nbsp;/&nbsp;
              <span>Я заемщик</span>
            </div>

            <Formik
              initialValues={{
                name: "",
                phone: "",
                email: "",
                confirmEmail: "",
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
                  <div className={styles.columns}>
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
                            label="Пароль"
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
                            label="Пароль"
                            name={"password"}
                            type="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.password}
                          />
                        )}
                      </div>
                    </div>
                    <div className={styles.fieldCol}>
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
                      <div className={styles.confirmEmail_field}>
                        {touched.confirmEmail && errors.confirmEmail ? (
                          <TextField
                            error
                            helperText={errors.confirmEmail}
                            id="standard-basic-reg-confirm-email"
                            label="Подтвердите E-mail"
                            name={"confirmEmail"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.confirmEmail}
                          />
                        ) : (
                          <TextField
                            id="standard-basic-reg-confirm-email"
                            label="Подтвердите E-mail"
                            name={"confirmEmail"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            defaultValue={values.confirmEmail}
                          />
                        )}
                      </div>

                      <div className={styles.confirmPassword_field}>
                        {touched.confirmPassword && errors.confirmPassword ? (
                          <TextField
                            error
                            helperText={errors.confirmPassword}
                            id="standard-basic-reg-confirm-pass"
                            label="Повторите пароль"
                            type={"password"}
                            name={"confirmPassword"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                          />
                        ) : (
                          <TextField
                            id="standard-basic-reg-confirm-pass"
                            label="Повторите пароль"
                            type={"password"}
                            name={"confirmPassword"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <span className={styles.confirmOferta}>
                    Нажимая на кнопку "Зарегистрироваться" я принимаю правила
                    сервиса, и оферту, содержащую условия договора о порядке
                    инвестирования в права требования, в т.ч. предоставляю свое
                    согласие на обработку моих персональных данных, в связи с их
                    использованием
                  </span>
                  <button
                    className={styles.registrationBtn}
                    disabled={!isValid || !dirty}
                    onClick={handleSubmit}
                    type={"submit"}
                  >
                    <span>Зарегистрировать</span>
                  </button>

                  <button className={styles.enterBtn}>
                    <NavLink to={"/authorization"}>Войти</NavLink>
                  </button>
                </form>
              )}
            </Formik>
          </div>
          <div className={styles.rightSide}>
            <img className={styles.triangle} src={triangle} alt="" />
            <div className={styles.container}>
              <div className={styles.howBecome_title}>
                <h4>Вам понадобиться</h4>
              </div>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.step_img}>
                    <div className={styles.marker}>
                      <span>01</span>
                    </div>
                    <img src="" alt="" />
                  </div>
                  <span>Паспорт и идентификационный код</span>
                </div>
                <div className={styles.step}>
                  <div className={styles.step_img}>
                    <div className={styles.marker}>
                      <span>02</span>
                    </div>
                    <img src="" alt="" />
                  </div>
                  <span>Мобильный телефон</span>
                </div>
                <div className={styles.step}>
                  <div className={styles.step_img}>
                    <div className={styles.marker}>
                      <span>03</span>
                    </div>
                    <img src="" alt="" />
                  </div>
                  <span>Зайдите на finhub.ua</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default RegistrationComponent;
