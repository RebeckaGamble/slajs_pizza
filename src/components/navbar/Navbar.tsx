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
    <div className="w-full flex h-[60px] items-center justify-between shadow-lg border-b-[0.5px] px-4">
      <NavLink className="font-semibold" to={"/"}>
        Slajs Pizza
      </NavLink>
      <NavLink
        to={"/checkout"}
        aria-label="Cart"
        className="flex items-center gap-2 relative"
      >
        <FiShoppingCart size={20} />
        <span className="text-md absolute top-[-16px] right-[-10px] text-[#cb3443] font-bold">
          {totalAmount}
        </span>
      </NavLink>
    </div>
  );
};

export default Navbar;
