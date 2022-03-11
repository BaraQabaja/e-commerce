import React from "react";
import "../../css/Footer/Footer.css";
import { AiOutlineCopyright } from "react-icons/ai";
const Footer = () => {
  let today = new Date();
  let currentYear = today.getFullYear();
  return (
    <footer>
      <h3>
      
       &copy; Bara Qabaja {currentYear}
        
      </h3>
      
    </footer>
  );
};

export default Footer;
