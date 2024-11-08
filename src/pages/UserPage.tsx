import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import OrderItem from "../components/orders/OrderItem";

const UserPage = () => {
  const orderContext = useContext(OrderContext);

  if (!OrderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }

  const { orderHistory, clearHistory } = orderContext;

  return (
    <div className="pt-[60px] max-w-[90rem] mx-auto px-4 w-full 2xl:px-0">
      <h2 className="py-4 text-2xl text-center font-semibold">Your Order History:</h2>
      {orderHistory.length > 0 && (
        <button onClick={clearHistory} className="bg-red-500 my-4 text-white py-2 px-4 rounded">
          Clear Order History
        </button>
      )}
      <ul className="space-y-6">
        {orderHistory.map((order, index) => (
          <li key={index} className="border-b pb-4">
            <h3 className="text-lg font-semibold">Order {index + 1}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
