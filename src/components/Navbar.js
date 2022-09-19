import { Link } from "react-router-dom";


const Navbar = () => {
  return (
<nav className="navbar bg-light">
  <div className="container">
    <Link to="/" className="navbar-brand">Navbar</Link>
    <Link to="/" className="ms-auto ">Home</Link>
  </div>
</nav>
  );
};

export default Navbar;
