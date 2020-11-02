import React from "react";
import Accordion from "@material-ui/core/Accordion";
import styles from "./QuestionComponent.module.css";
import { makeStyles } from "@material-ui/core/styles";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

/**/
import divider from "../../assets/images/dots_divider.svg";

const QuestionComponent = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {},

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
      <div className={styles.questions}>
        <div className={styles.titleRow}>
          <h2>Часто задаваемые вопросы</h2>
          <img src={divider} alt="" />
        </div>
        <div className={styles.accordion_block}>
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
                I am an accordion
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.textInside}>
                Для того, чтобы подать заявку, Вам необходимо зарегистрировать
                личный кабинет на нашем сайте, ввести все необходимые данные и в
                течение 5 минут получить деньги на карту.
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
                You are currently not an owner
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.textInside}>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
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
                You are currently not an owner
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.textInside}>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
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
                You are currently not an owner
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.textInside}>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default QuestionComponent;
