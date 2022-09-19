import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/products"}>Get All Products</Link>
        </li>

        <li>
          <Link to={"/categories"}>Get All Categories</Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
