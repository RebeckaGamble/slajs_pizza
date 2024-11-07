import { useContext, useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import { OrderContext } from "../../context/OrderContext";

type MenuItemProps = {
  description?: string;
  id: string;
  imgUrl?: string;
  name: string;
  price: number;
  toppings?: string[];
  ingredients?: string[];
  type?: "pizza" | "salad" | "drink";
};

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
    <li className="container list-type-none space-y-4  pb-4">
      <section className="flex flex-col space-x-1 w-full max-w-[280px] mx-auto items-center space-y-2">
        <img className="size-20" src={imgUrl} alt={name} />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>
          <b>Price</b> {price} SEK
        </p>
        <button
          className="border w-full justify-center mx-auto border-slate-200 px-4 py-2"
          onClick={() => addToCart(id, name, price)}
        >
          Add to cart
        </button>

        <button onClick={() => toggleReadMore(id)}>
          {openItemId === id ? (
            "Close"
          ) : (
            <p className="flex items-center">
              Read more <FiArrowDown />
            </p>
          )}
        </button>
      </section>

      {openItemId === id && (
        <>
          <p className="text-start w-[80%]">{description}</p>

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
    </li>
  );
};

export default MenuItem;
