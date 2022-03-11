import React from "react";
import "../../css/Header/Header.css";
import { FaShopify } from "react-icons/fa";
import {word} from "../../words";
const Header = () => {
  const {headerTitle}=word;
  return (
    <header>
      {headerTitle}<FaShopify/>
    </header>
  );
};

export default Header;
