import React from "react";
import style from "./style.module.css";
import Slider from "./Slider";
import ForRefund from "./ForRefund";
import MaturityDate from "./MaturityDate";
import ButtonGetMoney from "./ButtonGetMoney";
import { minByType, maxByType } from "./util/byType";
import currentPlanBy from "./util/currentPlan";

const defaultAmount = 13000,
  defaultTerm = 90;

class CalculatorBorrower extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // выбранная сумма
      amount: defaultAmount,
      // выбранные строки
      term: defaultTerm,
      // начальное значение для слайдера с суммой
      startAmount: defaultAmount,
      // начальное значение для слайдера со сроками
      startTerm: defaultTerm,
      // план из объекта настроек; используется для формул и синхронизации
      // между слайдерами.
      currentPlan: currentPlanBy("term", this.props.settings, defaultTerm),
    };

    this.changeAmount = this.changeAmount.bind(this);
    this.changeTerm = this.changeTerm.bind(this);
    this.changeStartAmount = this.changeStartAmount.bind(this);
    this.changeStartTerm = this.changeStartTerm.bind(this);
    this.changePlan = this.changePlan.bind(this);
    this.sincSlides = this.sincSlides.bind(this);
  }

  /**
   * Обновляет сумму
   * @param  {number} amount
   */
  changeAmount(amount) {
    this.setState(() => ({
      amount,
    }));
  }

  /**
   * Обновляет сроки
   * @param  {number} term
   */
  changeTerm(term) {
    this.setState(() => ({
      term,
    }));
  }

  /**
   * Изменяет стартовую позицию слайдера с суммой
   * @param  {number} startAmount [description]
   */
  changeStartAmount(startAmount) {
    this.setState(() => ({
      startAmount,
    }));
  }

  /**
   * Изменяет стартовую позицию слайдера со сроками
   * @param  {number} startAmount [description]
   */
  changeStartTerm(startTerm) {
    this.setState(() => ({
      startTerm,
    }));
  }

  /**
   * Меняет текулящий план настроек, глобальный для всего калькулятора
   * @param  {string} currentPlan Новый план
   */
  changePlan(currentPlan) {
    this.setState({
      currentPlan,
    });
  }

  startTerm(c) {
    this.changeStartTerm(c);
  }

  startAmount(c) {
    this.changeStartAmount(c);
  }

  /**
   * Синхронизация между слайдерами;
   * Каждый слайдер вызывает эту функцию после каждого обновления.
   * @param  {string} type тип слайдера, который обновился
   * @param  {number} val  новое значение
   */
  sincSlides(type, val) {
    const { settings } = this.props;
    const { term, amount } = this.state;

    if (type === "amount") {
      const lastAmountPlan = currentPlanBy("amount", settings, val);
      this.startTerm(settings[lastAmountPlan]["min_term"]);
      this.changePlan(lastAmountPlan);
    } else {
      const lastTermPlan = currentPlanBy("term", settings, val);
      this.startAmount(settings[lastTermPlan]["min_amount"]);
      this.changePlan(lastTermPlan);
    }
  }

  render() {
    const { settings } = this.props;
    const { term, currentPlan, amount, startAmount, startTerm } = this.state;

    /**
     * Максимально и минимально возможные значения, досупные на слайдерах
     */
    const minAmount = minByType(settings, "amount"),
      maxAmount = maxByType(settings, "amount"),
      minTerm = minByType(settings, "term"),
      maxTerm = maxByType(settings, "term");

    const stepPointsAmount = {},
      stepPointsTerm = {};

    /**
     * Создание объекта для построения шагов между настройками.
     * Каждый ключ в результате - точка для переключения на
     * новое количество шагов. Новое оличество шагов - в значении.
     */
    for (let plan in settings) {
      const stepAmount = settings[plan]["step_amount"],
        stepTerm = settings[plan]["step_term"],
        thisMinAmaunt = settings[plan]["min_amount"],
        thisMinTerm = settings[plan]["min_term"];

      if (thisMinAmaunt !== minAmount[0]) {
        const stepPoint = settings[plan]["min_amount"];
        stepPointsAmount[stepPoint] = stepAmount;
      }

      if (thisMinTerm !== minTerm[0]) {
        const stepPoint = settings[plan]["min_term"];
        stepPointsTerm[stepPoint] = stepTerm;
      }
    }

    return (
      <div className={style["credit-form"]}>
        <Slider
          min={minAmount}
          max={maxAmount}
          stepPoints={stepPointsAmount}
          start={startAmount}
          text="сумма, грн"
          type={"amount"}
          changeHandler={this.changeAmount}
          sincSlides={this.sincSlides}
        />

        <Slider
          min={minTerm}
          max={maxTerm}
          stepPoints={stepPointsTerm}
          start={startTerm}
          text="срок, дней"
          type={"term"}
          changeHandler={this.changeTerm}
          sincSlides={this.sincSlides}
        />

        <div className={style["credit-computed"]}>
          <ForRefund
            amount={amount}
            rate={settings[currentPlan].rate}
            fee={settings[currentPlan].fee}
            serviceFee={settings[currentPlan]["service_fee"]}
            term={term}
          />
          <MaturityDate days={term} />
        </div>

        <ButtonGetMoney />
      </div>
    );
  }
}

export default CalculatorBorrower;
