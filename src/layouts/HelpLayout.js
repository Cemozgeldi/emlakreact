import { NavLink, Outlet } from "react-router-dom";

import React from "react";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>
        Cozgeldi <span>Emlak</span> Yardım
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut facere
        officia cum doloremque eaque, tempora dolore odit blanditiis quae
        perspiciatis harum repellat dignissimos, ipsa consequatur? Non nihil
        iure numquam!
      </p>
      <nav>
        <NavLink to="sss">Sık Sorulan Sorular</NavLink>
        <NavLink to="contact">İletişim</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
