import React from "react";
import styles from "./InvestBoardNavComponent.module.css";
import { NavLink } from "react-router-dom";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";

const InvestBoardNavComponent = (props) => {
  return (
    <>
      <div className={styles.innerNav}>
        <NavLink to={`/${props.homelink}`}>
          <div className="innerNav_item">
            <HomeIcon />
          </div>
        </NavLink>
        <NavLink to={`/${props.cardset}`}>
          <div className="innerNav_item">
            <CreditCardIcon />
          </div>
        </NavLink>
        <NavLink to={`/${props.accountset}`}>
          <div className="innerNav_item">
            <PersonIcon />
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default InvestBoardNavComponent;
