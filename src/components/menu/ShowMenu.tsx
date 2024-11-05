import { useState, useEffect } from "react";
import { fetchMenu } from "../../data/fetchMenu";
import { MenuItems } from "../../types";
import MenuItem from "./MenuItem";

const ShowMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItems[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMenuItems = async () => {
      const result = await fetchMenu();
      if (result.error) {
        setError(result.error);
      } else {
        setMenuItems(result);
      }
    };

    getMenuItems();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h2>Menu</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 space-x-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            <MenuItem
              id={item.id}
              name={item.name}
              imgUrl={item.imgUrl}
              description={item.description}
              price={item.price}
              type={item.type}
              toppings={item.type === "pizza" ? item.toppings : undefined}
              ingredients={item.type === "salad" ? item.ingredients : undefined}
            />
          </div>
        ))}
      </ul>
    </>
  );
};

export default ShowMenu;
