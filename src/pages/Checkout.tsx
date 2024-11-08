import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import OrderItem from "../components/orders/OrderItem";

const Checkout = () => {
  const orderContext = useContext(OrderContext);

  if (!OrderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { order, submitOrder } = orderContext;

  const totalAmount = order.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <section className="flex flex-col px-4 2xl:p-0 pt-[60px] py-6  w-full max-w-[90rem] mx-auto">
      <h2 className="font-semibold text-2xl py-6 xl:pt-20 text-center">Checkout</h2>
      <h3 className="font-semibold text-xl border-b pb-1">Your order </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 space-x-auto py-6">
        {order.map((item) => (
          <OrderItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </ul>

      <h4 className="text-lg font-bold">
        Total Amount: {totalAmount.toFixed(2)} SEK
      </h4>

      <button
        onClick={submitOrder}
        className="mt-4 font-semibold text-lg tracking-wider bg-green-500 text-white w-full py-2 max-w-[400px] mx-auto"
      >
        Submit Order
      </button>
    </section>
  );
};

export default Checkout;
