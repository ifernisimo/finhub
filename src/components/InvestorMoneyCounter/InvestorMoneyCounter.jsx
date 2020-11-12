import React, { useEffect, useState } from "react";
import styles from "./InvestorMoneyCounter.module.css";

const InvestorMoneyCounter = (props) => {
  const [home, setHome] = useState(0),
    [bank, setBank] = useState(0),
    [project, setProject] = useState(0);
  let timerId;
  useEffect(() => {
    initCounters();
    return () => {
      destroyCounters();
    };
  }, [home, bank, project]);

  const initCounters = () => {
    counterHome(1000000);
  };

  const destroyCounters = () => {
    clearTimeout(timerId);
  };

  const counterHome = (limit) => {
    timerId = setTimeout(() => {
      home < limit && setHome(home + 100);
      bank < limit && setBank(bank + 1000);
      project < limit && setProject(project + 4000);
    }, 50);
  };

  return (
    <>
      <div className={styles.moneyCounter}>
        <div className={styles.counters_row}>
          <div className={styles.counterHome}>
            <span className={styles.summ}>{home}&nbsp;грн</span>
            <span className={styles.iterator}>&nbsp;+100</span>
          </div>
          <div className={styles.counterBank}>
            <span className={styles.summ}>{bank}&nbsp;грн</span>
            <span className={styles.iterator}>&nbsp;+1000</span>
          </div>
          <div className={styles.counterThere}>
            <span className={styles.summ}>{project}&nbsp;грн</span>
            <span className={styles.iterator}>&nbsp;+4000</span>
          </div>
        </div>

        <div className={styles.dots}>
          <div className={styles.home}>
            <div className={styles.dot}></div>
            <span className={styles.dot_text}>В ТУМБОЧКЕ</span>
          </div>
          <div className={styles.bank}>
            <div className={styles.dot}></div>
            <span className={styles.dot_text}>В БАНКЕ</span>
          </div>
          <div className={styles.project}>
            <div className={styles.dot}></div>
            <span className={styles.dot_text}>С НАМИ</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorMoneyCounter;
