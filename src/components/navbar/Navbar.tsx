import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { OrderContext } from "../../context/OrderContext";

const Navbar = () => {
  const orderContext = useContext(OrderContext);
  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }
  const { order } = orderContext;

  return (
    <div>
      <NavLink to={"/"}>Slajs Pizza</NavLink>
      <NavLink
        to={"/checkout"}
        aria-label="Cart"
        className="flex items-center gap-2"
      >
        <FiShoppingCart />
        <span className="text-xs text-[#f3929c] font-bold ">
          {order.length}
        </span>
      </NavLink>
    </div>
  );
};

export default Navbar;
