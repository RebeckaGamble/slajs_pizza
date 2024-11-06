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

// Remove undefined from the type and enforce provider usage. Why?
// By ensuring OrderContext is always defined, you eliminate the need to handle undefined cases every time you consume the context. This makes your code cleaner and reduces the likelihood of runtime errors
export const OrderContext = createContext<OrderContextType>(null as any);

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
