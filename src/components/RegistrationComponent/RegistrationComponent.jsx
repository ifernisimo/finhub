import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import styles from "../../pages/ContactsPage/ContactPage.module.css";

const RegistrationComponent = (props) => {
  const validationsSchema = yup.object().shape({
    phone: yup
      .string()
      .email("Формат E-mail не корректный")
      .required("*Обязательное поле"),
    email: yup.string().email("Введите верный email").required("Обязательно"),
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
      <div className="registration">
        <div className="pageTitle">
          <h1>Регистрация</h1>
        </div>

        <Formik
          initialValues={{
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
            <div className={"from"}>
              <p>
                <input
                  className={"input"}
                  type={"phone"}
                  name={"phone"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
              </p>
              {touched.phone && errors.phone && (
                <p className={styles.error}>{errors.phone}</p>
              )}

              <p>
                <label htmlFor={"email"}>Email</label>
                <br />
                <input
                  className={"input"}
                  type={"email"}
                  name={"email"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </p>
              {touched.email && errors.email && (
                <p className={"error"}>{errors.email}</p>
              )}
              <p>
                <label htmlFor={"confirmEmail"}>Подтвердите email</label>
                <br />
                <input
                  className={"input"}
                  type={"email"}
                  name={"confirmEmail"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmEmail}
                />
              </p>
              {touched.confirmEmail && errors.confirmEmail && (
                <p className={"error"}>{errors.confirmEmail}</p>
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
              </p>
              {touched.password && errors.password && (
                <p className={"error"}>{errors.password}</p>
              )}

              <p>
                <input
                  className={"input"}
                  type={"password"}
                  name={"confirmPassword"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </p>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className={"error"}>{errors.confirmPassword}</p>
              )}

              <button
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
                type={"submit"}
              >
                Зарегистрировать
              </button>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegistrationComponent;
