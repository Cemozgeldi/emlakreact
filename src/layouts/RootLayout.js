import { NavLink, Outlet } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>
            Cozgeldi <span style={{ color: "orange" }}>Emlak</span>
          </h1>
          <NavLink to="/">Anasayfa</NavLink>
          <NavLink to="/about">Hakkımızda</NavLink>
          <NavLink to="help">Yardım</NavLink>
          <NavLink to="konutlar">Konutlar</NavLink>
        </nav>
        <Breadcrumb />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
