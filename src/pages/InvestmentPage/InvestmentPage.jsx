import React from "react";
import HeaderComponentContainer from "../../components/HeaderComponent/HeaderComponentContainer";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import styles from "./InvestmentPage.module.css";
/**/
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InvestBoardComponent from "../../components/InvestBoardComponent/InvestBoardComponent";
import InvestBoardNavComponent from "../../components/InvestBoardNavComponent/InvestBoardNavComponent";

const InvestmentPage = (props) => {
  /*SEARCH INPUT*/
  const useStylesInput = makeStyles((theme) => ({
    margin: {
      "& .MuiSvgIcon-root": {
        color: "grey",
      },
      margin: theme.spacing(0),
      minWidth: "20vw",
    },
  }));

  const classesInput = useStylesInput();

  /*SELECT*/

  const useStylesSelect = makeStyles((theme) => ({
    root: {
      "& label + .MuiInput-formControl": {
        marginTop: 0,
      },

      "& .MuiInputLabel-formControl": {
        transform: "translate(0, 10px) scale(1)",
      },
      minWidth: 120,
    },

    selectEmpty: {},
  }));

  const classesSelect = useStylesSelect();
  const [age /*, setAge*/] = React.useState(""); //Это хук просто для примера , свои данные нужно писать когда бек будет
  const handleChangeEarnings = (event) => {
    //TODO Тут пишем что нужно сделать когда выберут значение в селекте доходность (вероятно нужно писать фильтр функцию)
  };
  const handleChangeTerm = (event) => {
    //TODO Тут пишем что нужно сделать когда выберут значение в селекте срок (вероятно нужно писать фильтр функцию)
  };

  const handleSearchInput = (event) => {
    //TODO Тут пишем что нужно сделать когда напишут что то в поиске (реакция на каждое нажатие) если нужно иначе то onBlur вместо onInput (вероятно нужно писать фильтр функцию)
  };

  return (
    <>
      <HeaderComponentContainer />
      <div className={styles.investment_page}>
        <div className={styles.container}>
          {/*<InvestBoardCharts />*/}

          {/*//Внутреннее меню*/}
          <InvestBoardNavComponent
            homelink="investboard"
            cardset="investboardcarddata"
            accountset="investboardsettings"
            history="investboardhistory"
          />
          {/*//*/}

          <section className={styles.search_order}>
            <h3 className={styles.search_order_text}>Выберите заявки</h3>
            <div className={styles.search_order_input}>
              <TextField
                placeholder={"Поиск по заёмщику"}
                className={classesInput.margin}
                id="investment-page-search-input"
                onInput={handleSearchInput}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div className={styles.search_order_earnings_select}>
              <FormControl className={classesSelect.root}>
                <InputLabel id="demo-simple-select-label">
                  Доходность
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChangeEarnings}
                >
                  {/*//TODO MenuItem при получении данных должны генерироваться исходя из полученых данных , на данный момент стоит как заглушка*/}

                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={styles.search_order_term_select}>
              <FormControl className={classesSelect.root}>
                <InputLabel id="demo-simple-select-label">Срок</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChangeTerm}
                >
                  {/*//TODO MenuItem при получении данных должны генерироваться исходя из полученых данных , на данный момент стоит как заглушка*/}
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </section>
          <section className={styles.board}>
            {/*TODO Когда будет сервер создай контейнерную компоненту над этой где сейчас и после прокидывай данные в Invest Board*/}

            <InvestBoardComponent />
            <div className={styles.actionBtns}>
              <div className={styles.cancelBtn}>
                <button>Отмена</button>
              </div>
              <div className={styles.continueBtn}>
                <button>Продолжить</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default InvestmentPage;
