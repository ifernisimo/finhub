import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./InvestBoardComponent.module.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import infoIcon from "../../assets/images/info_icon.svg";
import Alert from "@material-ui/lab/Alert";
import { NavLink } from "react-router-dom";
import InvestBoardCharts from "../InvestBoardCharts/InvestBoardCharts";

const useStyles = makeStyles({
  table: {
    "& *": {
      fontSize: "0.9rem",
      fontFamily: "UniNeueRegular",
    },
    minWidth: 650,
  },

  titleRow: {
    "& *": {
      color: "#CCCCCC",
    },
    borderBottom: "4px solid #EEEEEE",
    textTransform: "uppercase",
  },
});

function createData(
  id,
  mark,
  earnings,
  risk,
  term,
  creditTarget,
  orderSumm,
  yourLot,
  leftToInvest,
  timeLeft,
  youInvest,
  maxIncome,
  loanSumm,
  loanLeft
) {
  return {
    id,
    mark,
    earnings,
    risk,
    term,
    creditTarget,
    orderSumm,
    yourLot,
    leftToInvest,
    timeLeft,
    youInvest,
    maxIncome,
    loanSumm,
    loanLeft,
  };
}

const rows = [
  createData(
    1,
    "A",
    "395%",
    "25.61%",
    "30 дней",
    "Погашение другого кредита",
    "2400 грн",
    "0 грн",
    "2400 грн",
    "3 дня",
    "",
    "0грн",
    "15000",
    "14200"
  ),
  createData(
    2,
    "B",
    "395%",
    "25.61%",
    "30 дней",
    "Погашение другого кредита",
    "2400 грн",
    "0 грн",
    "2400 грн",
    "3 дня",
    "",
    "0грн",
    "3000",
    "2500"
  ),
  createData(
    3,
    "C",
    "395%",
    "25.61%",
    "30 дней",
    "Погашение другого кредита",
    "2400 грн",
    "0 грн",
    "2400 грн",
    "3 дня",
    "",
    "0грн",
    "30000",
    "10040"
  ),
  createData(
    4,
    "D",
    "395%",
    "25.61%",
    "30 дней",
    "Погашение другого кредита",
    "2400 грн",
    "0 грн",
    "2400 грн",
    "3 дня",
    "",
    "1225грн",
    "5400",
    "5400"
  ),
];

export default function InvestBoardComponent() {
  const classes = useStyles();

  return (
    <>
      <Alert variant="filled" severity="error">
        Не правильный размер инвестиции
      </Alert>
      {/*//TODO Два алерта , выберите себе который больше нравиться*/}
      <div className={styles.errorMessage}>Не правильный размер инвестиции</div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.titleRow}>
              <TableCell>
                <div className={styles.earningsCol}>
                  <span>ДОХОДНОСТЬ</span>
                  &nbsp;
                  <img src={infoIcon} alt="info icon" />
                </div>
              </TableCell>
              <TableCell align="center">
                <div className={styles.riskCol}>
                  <span>РИСК УБКИ</span>
                  &nbsp;
                  <img src={infoIcon} alt="info icon" />
                </div>
              </TableCell>
              <TableCell align="center">СРОК</TableCell>
              <TableCell align="center">ЦЕЛЬ КРЕДИТА</TableCell>
              <TableCell align="center">
                <div className={styles.orderSummCol}>
                  <span>СУММА ЗАЯВКИ</span>
                  &nbsp;
                  <img src={infoIcon} alt="info icon" />
                </div>
              </TableCell>
              <TableCell align="center">ВАШ ЛОТ</TableCell>
              <TableCell align="center">
                <div className={styles.leftToInvestCol}>
                  <span>ОСТАЛОСЬ ИНВЕСТИРОВАТЬ</span>
                  &nbsp;
                  <img src={infoIcon} alt="info icon" />
                </div>
              </TableCell>
              <TableCell align="center">ОСТАЛОСЬ ВРЕМЕНИ</TableCell>
              <TableCell align="center">ВЫ ИНВЕСТИРУЕТЕ</TableCell>
              <TableCell align="center">МАКСИМАЛЬНЫЙ ДОХОД</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <React.Fragment key={row.id}>
                <TableRow>
                  <TableCell align="center">
                    <span className={styles.earnings}>{row.earnings}</span>
                  </TableCell>
                  <TableCell align="center">
                    <span className={styles.riskMark + " " + styles[row.mark]}>
                      {row.mark}
                    </span>
                    &nbsp;
                    <span className={styles.riskText}>{row.risk}</span>
                  </TableCell>
                  <TableCell align="center">{row.term}</TableCell>
                  <TableCell align="center">{row.creditTarget}</TableCell>
                  <TableCell align="center">{row.orderSumm}</TableCell>
                  <TableCell align="center">{row.yourLot}</TableCell>
                  <TableCell align="center">{row.leftToInvest}</TableCell>
                  <TableCell align="center">{row.timeLeft}</TableCell>
                  <TableCell align="center">
                    <TextField id={`youInvest_field${row.id}`} label="ГРН" />
                  </TableCell>
                  <TableCell>
                    <div className={styles.maxIncomeCell}>
                      {row.maxIncome}
                      <button className={styles.deleteButton}>
                        <CloseIcon />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <InvestBoardCharts
                      loanSumm={row.loanSumm}
                      loanLeft={row.loanLeft}
                      id={row.id}
                      width={"100"}
                      height={"100"}
                    />
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
