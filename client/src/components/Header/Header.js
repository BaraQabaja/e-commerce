import React from "react";
import classes from "./Header.module.scss";
import { FaShopify } from "react-icons/fa";
import { word } from "../../words";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cx from "classnames";
import { useState, useEffect } from "react";
const Header = () => {
  const { headerTitle } = word;
  // const countValue=useSelector(state=>state.count) same as bellow
  const { count } = useSelector((state) => state.counter);

  const [pulse, setPulse] = useState(false);

  const btnClasses = `${classes.cart} ${pulse ? classes.pulse : ""}`;
  useEffect(() => {
    if (count === 0) {
      return;
    }

    setPulse(true);

    const timer = setTimeout(() => {
      setPulse(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);
  return (
    <header>
      <span>
        {headerTitle}
        <FaShopify />
      </span>
      <Link to="/home/shop" className={btnClasses}>
        <TiShoppingCart />
        <div className={classes.cart_value}>
          <h3>{count}</h3>
        </div>
      </Link>
    </header>
  );
};

export default Header;
