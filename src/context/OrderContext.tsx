import { createContext, useState } from "react";

export type OrderItemProps = {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

type OrderContextType = {
  order: OrderItemProps[];
  setOrder: React.Dispatch<React.SetStateAction<OrderItemProps[]>>;
  addToCart: (id: string, name: string, price: number) => void;
  removeFromCart: (id: string) => void;
  orderHistory: OrderItemProps[][];
  submitOrder: () => void;
}

export const OrderContext = createContext<OrderContextType>(null as any);

type ProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export function OrderProvider({ children }: ProviderProps) {
  const [order, setOrder] = useState<OrderItemProps[]>([]);
  const [orderHistory, setOrderHistory] = useState<OrderItemProps[][]>([]);
  
  const addToCart = (id: string, name: string, price: number) => {
    setOrder((order) => {
      const itemIndex = order.findIndex((order) => order.id === id);
      if (itemIndex !== -1) {
        // Item exists, so update its quantity
        
        const updatedOrder = [...order];
        updatedOrder[itemIndex] = {
          ...updatedOrder[itemIndex],
          quantity: updatedOrder[itemIndex].quantity + 1,
        };
        return updatedOrder;
      } // Item does not exist, so add it with quantity 1
      return [...order, { id, name, quantity: 1, price }];
    });
  };

  const removeFromCart = (id: string) => {
    setOrder((order) => {
      const itemIndex = order.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        const updatedOrder = [...order];
        const item = updatedOrder[itemIndex];
        if (item.quantity > 1) {
          // Decrease quantity if it's more than 1
          updatedOrder[itemIndex] = { ...item, quantity: item.quantity - 1 };
        } else {
          // Remove item if quantity is 1
          updatedOrder.splice(itemIndex, 1);
        }
        return updatedOrder;
      }
      return order;
    });
  };

  const submitOrder = () => {
    setOrderHistory((prevHistory) => [...prevHistory, order]);
    setOrder([]); // Clear the current order
  };

  return (
    <OrderContext.Provider value={{ order, setOrder, addToCart, removeFromCart, orderHistory, submitOrder }}>
      {children}
    </OrderContext.Provider>
  );
}


