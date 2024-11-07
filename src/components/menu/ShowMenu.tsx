import { useState, useEffect } from "react";
import { fetchMenu } from "../../data/fetchMenu";
import { MenuItems } from "../../types";
import MenuItem from "./MenuItem";

const ShowMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItems[]>([]);
  const [category, setCategory] = useState<"all" | "pizza" | "salad" | "drink">(
    "all"
  );
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

  const filteredItems =
    category === "all"
      ? menuItems
      : menuItems.filter((item) => item.type === category);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="max-w-[90rem] mx-auto px-4 2xl:px-0">
      <h2>Menu</h2>
      <div className="flex space-x-4">
        <button onClick={() => setCategory("all")}>All</button>
        <button onClick={() => setCategory("pizza")}>Pizza</button>
        <button onClick={() => setCategory("salad")}>Salad</button>
        <button onClick={() => setCategory("drink")}>drink</button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4 space-x-auto">
        {filteredItems.map((item) => (
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
    </section>
  );
};

export default ShowMenu;
