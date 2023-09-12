import React from "react";
import { NavLink } from "react-router-dom";

export default function Fail() {
  return (
    <div>
      <h2>Sayfa Bulunamadı</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem maiores
        at deserunt eaque, dicta nam dolore reiciendis consequatur ea excepturi?
      </p>
      <p>
        <NavLink to="/">Anasayfaya Git</NavLink>
      </p>
    </div>
  );
}
