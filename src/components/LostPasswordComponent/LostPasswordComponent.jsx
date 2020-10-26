import React from "react";
import styles from "../../pages/ContactsPage/ContactPage.module.css";
import { Formik } from "formik";
import * as yup from "yup";

const LostPasswordComponent = (props) => {
  const validationsSchema = yup.object().shape({
    email: yup
      .string()
      .email("Формат E-mail не корректный")
      .required("*Обязательное поле"),
  });
  return (
    <>
      <div className="lostPassword">
        <div className="pageTitle">
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
            handleSubmit,
            dirty,
          }) => (
            <div className={"from"}>
              <p>
                <input
                  className={"input"}
                  type={"text"}
                  name={"email"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </p>
              {touched.email && errors.email && (
                <p className={styles.error}>{errors.email}</p>
              )}

              <button
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
                type={"submit"}
              >
                Востановить
              </button>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LostPasswordComponent;
