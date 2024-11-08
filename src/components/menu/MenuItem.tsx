import { useContext, useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { OrderContext } from "../../context/OrderContext";
import { MenuItemProps } from "../../types";

// type MenuItemProps = {
//   description?: string;
//   id: string;
//   imgUrl?: string;
//   name: string;
//   price: number;
//   toppings?: string[];
//   ingredients?: string[];
//   type?: "pizza" | "salad" | "drink";
// };

const MenuItem = ({
  id,
  imgUrl,
  name,
  price,
  description,
  toppings,
  ingredients,
  type,
}: MenuItemProps) => {
  const orderContext = useContext(OrderContext);
  if (!orderContext) {
    throw new Error("OrderContext must be used within an OrderProvider");
  }
  const { addToCart } = orderContext;

  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const toggleReadMore = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <li className="list-type-none my-2 sm:my-6 px-4 py-6 mx-auto bg-white w-full shadow-md  ">
      <section className="flex flex-col w-full mx-auto items-center space-y-2">
        <img className="w-[200px] h-[200px]" src={imgUrl} alt={name} />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>
          Price: {price} SEK
        </p>
        <button
          className="border justify-center border-slate-200 w-full font-semibold tracking-wider text-white bg-green-500 py-2"
          onClick={() => addToCart(id, name, price)}
        >
          Add to cart
        </button>
        <div className="relative">
          <button onClick={() => toggleReadMore(id)} className="mt-4">
            {openItemId === id ? (
              <div className="w-full border-t bg-gray-400 border-black">
                <button className="absolute text-xl top-2 right-0 font-bold">
                  X
                </button>
              </div>
            ) : (
              <p className="flex items-center font-semibold">
                More info <FiArrowDown />
              </p>
            )}
          </button>
          {openItemId === id && (
            <>
              <p className="text-start py-4 ">{description}</p>

              {type === "pizza" && toppings && toppings.length > 0 && (
                <p>
                  <b>Toppings:</b> {toppings.join(", ")}
                </p>
              )}

              {type === "salad" && ingredients && ingredients.length > 0 && (
                <p>
                  <b>Ingredients: </b> {ingredients.join(", ")}
                </p>
              )}
            </>
          )}
        </div>
      </section>
    </li>
  );
};

export default MenuItem;
