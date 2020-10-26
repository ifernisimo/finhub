import React from "react";
import styles from "./ContactPage.module.css";
import { Formik } from "formik";
import * as yup from "yup";
import InnerHeaderComponent from "../../components/InnerHeaderComponent/InnerHeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const ContactsPage = (props) => {
  const validationsSchema = yup.object().shape({
    name: yup.string().typeError("Должно быть строкой").required("Обязательно"),

    email: yup.string().email("Введите верный email").required("Обязательно"),
    question: yup
      .string()
      .typeError("Введите корректный текст")
      .required("Это поле необходимо заполнить"),
  });

  return (
    <>
      <InnerHeaderComponent />

      <div className="contact_form">
        <div className="block_title">
          <h1>Контакты FinHub</h1>
          <h3>Обратная связь</h3>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            question: "",
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
                <label htmlFor={"name"}>Имя</label>
                <br />
                <input
                  className={"input"}
                  type={"text"}
                  name={"name"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </p>
              {touched.name && errors.name && (
                <p className={styles.error}>{errors.name}</p>
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
                <p className={styles.error}>{errors.email}</p>
              )}
              <p>
                <label htmlFor={"question"}>Опишите вопрос</label>
                <br />
                <textarea
                  placeholder={"Опишите свой вопрос"}
                  className={"input"}
                  type={"input"}
                  name={"question"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.question}
                />
              </p>
              {touched.question && errors.question && (
                <p className={styles.error}>{errors.question}</p>
              )}

              <button
                disabled={!isValid || !dirty}
                onClick={handleSubmit}
                type={"submit"}
              >
                Отправить
              </button>
            </div>
          )}
        </Formik>
      </div>
      <div className="contact_data">
        <div className="contact_data_phone">
          <span className={styles.phone_text}>Телефоны</span>
          <span className={styles.phone_number}>0800&nbsp;502&nbsp;346</span>
        </div>
        <div className="contact_data_post">
          <span className={styles.post_text}>Почта</span>
          <span className={styles.post_adress}>info@finhub.ua</span>
        </div>
        <div className="contact_data_adress">
          <span className={styles.adress_text}>Адрес</span>
          <span className={styles.adress_location}>
            Куреневский переулок, 17-Ш, Киев, 04073, Украина
          </span>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default ContactsPage;
