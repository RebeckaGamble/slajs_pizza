import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Slajs Pizza</Link>
      <Link to={"/checkout"}>
        <FiShoppingCart />
      </Link>
    </div>
  );
};

export default Navbar;
