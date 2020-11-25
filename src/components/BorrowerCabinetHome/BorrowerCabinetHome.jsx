import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(dateTake, dateReturn, summ, target) {
  return { dateTake, dateReturn, summ, target };
}
//TODO: Тут должны быть данные с срервера а пока что заглушка
const rows = [
  createData(Date(), Date(), 15000, "Штаны"),
  createData(Date(), Date(), 1000, "Носки"),
  createData(Date(), Date(), 50000, "Возврат кредита"),
  createData(Date(), Date(), 800000, "Возврат кредити по кредиту"),
  createData(Date(), Date(), 5000, "Венок"),
  createData(Date(), Date(), 1000, "Мыло и веревка"),
];
const BorrowerCabinetHome = (props) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Дата получения</TableCell>
            <TableCell align="right">Дата погашения</TableCell>
            <TableCell align="right">Сумма кредита</TableCell>
            <TableCell align="right">Цель кредита</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.target}>
              <TableCell align="right">{row.dateTake}</TableCell>
              <TableCell align="right">{row.dateReturn}</TableCell>
              <TableCell align="right">{row.summ}&nbsp;ГРН</TableCell>
              <TableCell align="right">{row.target}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BorrowerCabinetHome;
