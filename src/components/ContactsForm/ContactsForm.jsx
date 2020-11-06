import React from "react";
import styles from "./ContactsForm.module.css";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";

const ContactsForm = ({ formHeadTitle }) => {
  const validationsSchema = yup.object().shape({
    phone: yup
      .string()
      .email("Формат телефона не корректный")
      .required("*Обязательное поле"),
    email: yup
      .string()
      .email("Формат E-mail не корректный")
      .required("*Обязательное поле"),
    question: yup
      .string()
      .typeError("Должно быть строкой")
      .required("*Обязательное поле"),
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiInputBase-input": {
        color: "white",
      },

      "& .MuiFormControl-root": {
        width: window.innerWidth <= 700 ? "65vw" : "25vw",
        margin: "1vh 0",
      },

      "& .MuiFormLabel-root": {
        color: "white",
        fontFamily: "UniNeueThin",
      },

      "& .MuiInput-underline:before": {
        borderBottomColor: "white",
      },

      "& .MuiInput-underline:after": {
        borderBottomColor: "white",
      },
      "& label.Mui-focused": {
        color: "white",
      },
      input: {
        margin: "20px",
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className={styles.contactMe}>
        <h4>{formHeadTitle}</h4>

        <Formik
          initialValues={{
            phone: "",
            email: "",
            question: "",
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
              <div className={styles.phone}>
                {touched.phone && errors.phone ? (
                  <TextField
                    error
                    helperText={errors.phone}
                    id="standard-basic"
                    label="+38(0__)___-__-__"
                    name={"phone"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={values.phone}
                  />
                ) : (
                  <TextField
                    id="standard-basic"
                    label="+38(0__)___-__-__"
                    name={"phone"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={values.phone}
                  />
                )}
              </div>

              <div className={styles.email}>
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
                    name={"phone"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={values.email}
                  />
                )}
              </div>

              <div className={styles.question}>
                {touched.question && errors.question ? (
                  <TextField
                    error
                    helperText={errors.question}
                    id="standard-input"
                    label="Опишите вопрос"
                    type="textarea"
                    name={"question"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={values.question}
                  />
                ) : (
                  <TextField
                    id="standard-input"
                    label="Опишите вопрос"
                    type="textarea"
                    name={"question"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={values.question}
                  />
                )}
              </div>

              <button
                className={styles.enterBtn}
                disabled={!isValid || !errors}
                onClick={handleSubmit}
                type={"submit"}
              >
                <span>Задать вопрос</span>
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactsForm;
