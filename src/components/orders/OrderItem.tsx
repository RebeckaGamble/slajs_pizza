import { OrderItemProps } from "../../types";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

const OrderItem = ({ id, name, price, quantity }: OrderItemProps) => {
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }
  const { removeFromCart, addToCart } = orderContext;

  const totalPrice = price * quantity;

  return (
    <li key={id}>
      <div className="flex flex-col border-b pb-6 space-y-2">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="font-semibold">Price {price} SEK</p>
        <p className="font-bold">Total price {totalPrice} </p>
        <div className="flex items-center space-x-3 bg-slate-200 px-4 py-1 w-fit rounded-full">
          <button
            onClick={() => removeFromCart(id)}
            // className="p-2 bg-red-500 text-white"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => addToCart(id, name, price)}
            // className="p-2 bg-green-500 text-white"
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
