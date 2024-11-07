import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import MenuItem from "../components/menu/MenuItem";

const Checkout = () => {
  const orderContext = useContext(OrderContext);

  if (!OrderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { order } = orderContext;

  return (
    <div className="bg-white">
      <h2>Checkout</h2>
      <section className="flex flex-col px-4 w-full max-w-[90rem]">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 space-x-auto">
          {order.map((item) => (
            <div key={item.id}>
              <MenuItem id={item.id} name={item.name} price={item.price} />
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Checkout;
