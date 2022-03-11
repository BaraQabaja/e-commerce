import React from "react";
import "../../css/Footer/Footer.css";
import { AiOutlineCopyright } from "react-icons/ai";
import  {word} from "../../words";
const Footer = () => {
  let today = new Date();
  let currentYear = today.getFullYear();
  const {footerTitle}=word;
  return (
    <footer>
      <h3>
      
       &copy; {footerTitle} {currentYear}
        
      </h3>
      
    </footer>
  );
};

export default Footer;
