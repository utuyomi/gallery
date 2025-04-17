import { useState } from "react";
import style from "../scss/hero/Hero.module.scss";
import Nav from "./Nav.js";

function Header({ header }) {
  const[open, setOpen] = useState(false)
  return (
    <header>
      <div className={style.logo}>
        <img src="" />
      </div>
      <div
        className={`${style.hum} ${ open ? style.open : ""}`}
        onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
      </div>
      <Nav open={open} />
    </header>
  );
}
export default Header;
