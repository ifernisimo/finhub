import React from "react";
import styles from "./HelpPage.module.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import HeaderComponentContainer from "../../components/HeaderComponent/HeaderComponentContainer";
import divider from "../../assets/images/dots_divider.svg";
import { NavLink } from "react-router-dom";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

const HelpPage = ({ formHeadTitle }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiInputBase-input": {
        color: "white",
      },

      "& .MuiFormControl-root": {
        width: "25vw",
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

    secondaryHeading: {
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      fontFamily: "UniNeueBold",
      fontSize: "15px",
      color: "#215273",
    },

    myAccordion: {
      backgroundColor: "aliceblue",
      boxShadow: "none",

      borderRadius: "15px!important",
      marginBottom: "10px",
      padding: "10px 25px",

      "&:before": {
        display: "none",
      },
    },

    textInside: {
      fontFamily: "UniNeueRegular",
    },
  }));

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <HeaderComponentContainer />
      <div className={styles.container}>
        <div className={styles.faq}>
          <div className={styles.title}>
            <span className={styles.whereAreYou}>главная / помощь</span>
            <h1>Ответы на вопросы</h1>
          </div>
          <div className={styles.questionTopics}>
            <div className={styles.popular}>
              <div className={styles.blockTitle}>
                <h4>Популярные вопросы</h4>
                <img src={divider} alt="" className={styles.divider} />
              </div>
              <div className={styles.accordion}>
                <Accordion
                  className={classes.myAccordion}
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.secondaryHeading}>
                      Почему стоит выбрать FINHUB ?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.textInside}>
                      Для того, чтобы подать заявку, Вам необходимо
                      зарегистрировать личный кабинет на нашем сайте, ввести все
                      необходимые данные и в течение 5 минут получить деньги на
                      карту.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.myAccordion}
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.secondaryHeading}>
                      Как получить кредить онлайн ?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.textInside}>
                      Donec placerat, lectus sed mattis semper, neque lectus
                      feugiat lectus, varius pulvinar diam eros in elit.
                      Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.myAccordion}
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.secondaryHeading}>
                      Как подать заявку на оформление кредита ?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.textInside}>
                      Donec placerat, lectus sed mattis semper, neque lectus
                      feugiat lectus, varius pulvinar diam eros in elit.
                      Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.myAccordion}
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.secondaryHeading}>
                      Что нужно для оформления кредита ?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.textInside}>
                      Donec placerat, lectus sed mattis semper, neque lectus
                      feugiat lectus, varius pulvinar diam eros in elit.
                      Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <div className={styles.investment}>
              <div className={styles.blockTitle}>
                <h4>Оформление инвестиции</h4>
                <img src={divider} alt="" className={styles.divider} />
              </div>
              <div className={styles.accordion}>
                <Accordion
                  className={classes.myAccordion}
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.secondaryHeading}>
                      I am an accordion
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.textInside}>
                      Для того, чтобы подать заявку, Вам необходимо
                      зарегистрировать личный кабинет на нашем сайте, ввести все
                      необходимые данные и в течение 5 минут получить деньги на
                      карту.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.myAccordion}
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.secondaryHeading}>
                      You are currently not an owner
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.textInside}>
                      Donec placerat, lectus sed mattis semper, neque lectus
                      feugiat lectus, varius pulvinar diam eros in elit.
                      Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.myAccordion}
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.secondaryHeading}>
                      You are currently not an owner
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.textInside}>
                      Donec placerat, lectus sed mattis semper, neque lectus
                      feugiat lectus, varius pulvinar diam eros in elit.
                      Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.myAccordion}
                  expanded={expanded === "panel8"}
                  onChange={handleChange("panel8")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.secondaryHeading}>
                      You are currently not an owner
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.textInside}>
                      Donec placerat, lectus sed mattis semper, neque lectus
                      feugiat lectus, varius pulvinar diam eros in elit.
                      Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <div className={styles.investTracking}>
              <div className={styles.blockTitle}>
                <h4>Отслеживание инвестиций</h4>
                <img src={divider} alt="" className={styles.divider} />
              </div>
              <div className={styles.accordion}>
                <Accordion
                  className={classes.myAccordion}
                  expanded={expanded === "panel9"}
                  onChange={handleChange("panel9")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.secondaryHeading}>
                      I am an accordion
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.textInside}>
                      Для того, чтобы подать заявку, Вам необходимо
                      зарегистрировать личный кабинет на нашем сайте, ввести все
                      необходимые данные и в течение 5 минут получить деньги на
                      карту.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.myAccordion}
                  expanded={expanded === "panel10"}
                  onChange={handleChange("panel10")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.secondaryHeading}>
                      You are currently not an owner
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.textInside}>
                      Donec placerat, lectus sed mattis semper, neque lectus
                      feugiat lectus, varius pulvinar diam eros in elit.
                      Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.myAccordion}
                  expanded={expanded === "panel11"}
                  onChange={handleChange("panel11")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.secondaryHeading}>
                      You are currently not an owner
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.textInside}>
                      Donec placerat, lectus sed mattis semper, neque lectus
                      feugiat lectus, varius pulvinar diam eros in elit.
                      Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  className={classes.myAccordion}
                  expanded={expanded === "panel12"}
                  onChange={handleChange("panel12")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.secondaryHeading}>
                      You are currently not an owner
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.textInside}>
                      Donec placerat, lectus sed mattis semper, neque lectus
                      feugiat lectus, varius pulvinar diam eros in elit.
                      Pellentesque convallis laoreet laoreet.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <ContactsForm formHeadTitle={"Не нашли ответ?"} />
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default HelpPage;
