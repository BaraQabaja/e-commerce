import React from "react";
import classes from "./Footer.module.scss";
import { AiOutlineCopyright } from "react-icons/ai";
import  {word} from "../../words";

const Footer = () => {
  let today = new Date();
  let currentYear = today.getFullYear();
  const {footerTitle}=word;
  return (
    <footer>
      <h3 className={classes.hi}>
      
       &copy; {footerTitle} {currentYear}
        
      </h3>
      
    </footer>
  );
};

export default Footer;
