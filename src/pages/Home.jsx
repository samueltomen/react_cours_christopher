import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Welcome to the HomePage</h2>
      <nav>
        <ul>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h3>Ici vous pourrez retrouvez toutes les actualités du jours</h3>
        <div>
          <h4>Actualité 1</h4>
          <p>Texte de l'actualité 1</p>
        </div>
      </div>
    </div>
  );
}
