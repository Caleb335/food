import React from "react";
import style from "./style/footer.module.css";

const Footer = () => {
  const date = new Date();

  return (
    <footer className={style.app__base}>
      <p>Built by Caleb &copy; {date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
