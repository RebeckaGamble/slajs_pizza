import { useState, useEffect } from "react";
import { fetchMenu } from "../../data/fetchMenu";

type MenuItem = {
  id: string;
  name: string;
  imgURL: string;
  description: string;
  price: number;
};

const ShowMenu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
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
          <li className="container list-type-none space-y-2" key={item.id}>
            <div className="flex space-x-1">
              <h3 className="text-xl font-semibold">{item.name}</h3>{" "}
              <p>
                <b>Price</b> {item.price} SEK
              </p>
            </div>
            <img className="size-20" src={item.imgURL} alt={item.name} />
            <p className="text-start max-w-[80%]">{item.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShowMenu;
