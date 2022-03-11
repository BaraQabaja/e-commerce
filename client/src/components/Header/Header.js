import React from "react";
import classes from "./Header.module.scss";
import { FaShopify } from "react-icons/fa";
import {word} from "../../words";


const Header = () => {
  const {headerTitle}=word;
  return (
    <header className={classes.hi}>
      {headerTitle}<FaShopify/>
    </header>
  );
};

export default Header;
















