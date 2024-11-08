import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { OrderContext } from "../../context/OrderContext";
import { FaUser } from "react-icons/fa";

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
    <nav className="w-full flex h-[60px] z-50 shadow-lg border-b-[0.5px] fixed bg-white top-0">
      <div className="w-full flex max-w-[90rem] justify-between items-center mx-auto px-4 2xl:px-0">
        <NavLink className="font-semibold" to={"/"}>
          Slajs Pizza
        </NavLink>
        <section className="flex flex-row space-x-4">
          <NavLink to={"/user"}>
            <FaUser size={20} />
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
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
