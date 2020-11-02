import React, { useEffect, useState } from "react";
import styles from "./InvestorMoneyCounter.module.css";

const InvestorMoneyCounter = (props) => {
  useEffect(() => {
    counterHome(1000000);
    counterBank(1000000);
    counterProject(1000000);

    return () => {
      clearTimeout(homeId);
      clearTimeout(bankId);
      clearTimeout(projectId);
    };
  });

  const [home, setHome] = useState(10000);
  const [bank, setBank] = useState(10000);
  const [project, setProject] = useState(10000);
  let homeId, bankId, projectId;

  const counterHome = (limit) => {
    home < limit
      ? (homeId = setTimeout(() => {
          setHome(home + 100);
        }, 50))
      : clearTimeout(counterHome);
  };

  const counterBank = (limit) => {
    bank < limit
      ? (bankId = setTimeout(() => {
          setBank(bank + 1000);
        }, 50))
      : clearTimeout(counterBank);
  };

  const counterProject = (limit) => {
    project < limit
      ? (projectId = setTimeout(() => {
          setProject(project + 3000);
        }, 50))
      : clearTimeout(counterProject);
  };
  // counterHome(1000000);
  // counterBank(1000000);
  // counterProject(1000000);

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
            <span className={styles.iterator}>&nbsp;+3000</span>
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
