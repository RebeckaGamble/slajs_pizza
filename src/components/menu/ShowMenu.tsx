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
    <>
      <section className="font-semibold shadow-lg">
        <div className="w-full h-[120px] bg-white fixed z-10 px-4 2xl:px-0 py-4 flex flex-col items-center space-y-4">
          <h2 className="text-2xl">Menu</h2>
          <div className="flex justify-between w-auto space-x-2">
            <button
              className={`px-6 py-2 border-b border-b-transparent ${
                category === "all"
                  ? "bg-purple-400 text-white"
                  : "hover:border-b-black"
              }`}
              onClick={() => setCategory("all")}
            >
              All
            </button>
            <button
              className={`px-6 py-2 border-b border-b-transparent ${
                category === "pizza"
                  ? "bg-purple-400 text-white"
                  : "hover:border-b-black"
              }`}
              onClick={() => setCategory("pizza")}
            >
              Pizza
            </button>
            <button
              className={`px-6 py-2 border-b border-b-transparent ${
                category === "salad"
                  ? "bg-purple-400 text-white"
                  : "hover:border-b-black"
              }`}
              onClick={() => setCategory("salad")}
            >
              Salad
            </button>
            <button
              className={`px-6 py-2 border-b border-b-transparent ${
                category === "drink"
                  ? "bg-purple-400 text-white"
                  : "hover:border-b-black"
              }`}
              onClick={() => setCategory("drink")}
            >
              Drink
            </button>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0 pt-[120px]">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 gap-x-10">
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
                ingredients={
                  item.type === "salad" ? item.ingredients : undefined
                }
              />
            </div>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ShowMenu;
