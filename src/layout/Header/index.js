import React from "react";
import style from "./style/header.module.css";

const Header = ({ title }) => {
  return (
    <header className={style.app__head}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
