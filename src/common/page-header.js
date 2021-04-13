import { Link } from "react-router-dom";
import "./page-header.css";

function PageHeader() {
  return (
    <header className="page-header">
      <span className="page-header__logo">🎲🎲🎲</span>
      <nav className="page-header__nav">
        <Link to="/">Home</Link> | <Link to="/all-games">All Games</Link> |{" "}
        <Link to="/my-games">My Games</Link>
      </nav>
    </header>
  );
}

export default PageHeader;
