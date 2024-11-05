import { createContext, useState } from "react";

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface OrderContextType {
  order: OrderItem[];
  setOrder: React.Dispatch<React.SetStateAction<OrderItem[]>>;
}

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined
);

type ProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

export function OrderProvider({ children }: ProviderProps) {
  const [order, setOrder] = useState<OrderItem[]>([]);

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
