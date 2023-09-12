import { Link, useRouteError } from "react-router-dom";

export default function KonutHata() {
  const error = useRouteError();
  return (
    <div className="konut-hata">
      <h2>Hata !!</h2>
      <p>{error.message}</p>
      <Link to="/">Anasayfaya Git</Link>
    </div>
  );
}
