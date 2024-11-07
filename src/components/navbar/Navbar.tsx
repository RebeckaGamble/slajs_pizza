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

  const totalAmount = order.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className="w-full flex h-[60px] items-center justify-between bg-slate-100 px-4">
      <NavLink to={"/"}>Slajs Pizza</NavLink>
      <NavLink
        to={"/checkout"}
        aria-label="Cart"
        className="flex items-center gap-2"
      >
        <FiShoppingCart />
        <span className="text-xs text-[#f3929c] font-bold bg-white rounded-full size-5 items-center">
          {totalAmount}
        </span>
      </NavLink>
    </div>
  );
};

export default Navbar;
