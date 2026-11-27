import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/user/mrbeast">Mr Beast</Link>
      <Link to="/user/imancodes">Iman Musa</Link>
      <Link to="/user/kelly">Kelly</Link>
    </nav>
  );
}

export default Nav;
