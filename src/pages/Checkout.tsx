import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import OrderItem from "../components/orders/OrderItem";

const Checkout = () => {
  const orderContext = useContext(OrderContext);

  if (!OrderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { order, submitOrder  } = orderContext;

  const totalAmount = order.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="bg-white">
      <h2>Checkout</h2>
      <section className="flex flex-col px-4 w-full max-w-[90rem]">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 space-x-auto">
          {order.map((item) => (
              <OrderItem key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} />
            ))}
        </ul>
        <div className="mt-6 p-4 border-t">
            <h3 className="text-xl font-bold">Total Amount: {totalAmount.toFixed(2)} SEK</h3>
          </div>
          <button onClick={submitOrder} className="mt-4 p-2 bg-green-500 text-white">Submit Order</button>
      </section>
    </div>
  );
};

export default Checkout;
