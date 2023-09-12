import React from "react";
import { Outlet } from "react-router-dom";

export default function KonutLayout() {
  return (
    <div className="konut-layout">
      <h2>Konutlar</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ut itaque
        consectetur dicta dolorum eos soluta sed pariatur. Quae nesciunt qui
        quia omnis unde. Deserunt enim corrupti quibusdam aliquam explicabo!
      </p>
      <Outlet />
    </div>
  );
}
