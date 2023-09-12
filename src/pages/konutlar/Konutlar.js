import { Link, useLoaderData } from "react-router-dom";

export const konutlarLoader = async () => {
  const res = await fetch("http://localhost:4040/konutlar");
  return res.json();
};

export default function Konutlar() {
  const konutlar = useLoaderData();
  return (
    <div className="konutlar">
      {konutlar &&
        konutlar.map((konut) => (
          <Link to={konut.id.toString()} key={konut.id}>
            <p>{konut.baslik}</p>
            <p>Konum: {konut.konum}</p>
          </Link>
        ))}
    </div>
  );
}
