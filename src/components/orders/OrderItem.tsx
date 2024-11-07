import { OrderItemProps } from "../../context/OrderContext";
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
const OrderItem = ({ id, name, price, quantity }: OrderItemProps) => {
  const orderContext = useContext(OrderContext);
  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }
  const { removeFromCart, addToCart } = orderContext;

  return (
    <li key={id}>
      <div className="flex flex-col space-y-1 w-[300px]">
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="font-semibold">
          Price
          <b> {price} </b>SEK
        </p>
        <div className="flex items-center space-x-2">
          {/* <p className="font-semibold">Quantity </p> */}
          <button
            onClick={() => addToCart(id, name, price)}
            className="p-2 bg-green-500 text-white"
          >
            +
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => removeFromCart(id)}
            className="p-2 bg-red-500 text-white"
          >
            -
          </button>
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
