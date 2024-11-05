import { useState } from "react";

type MenuItemProps = {
  description: string;
  id: string;
  imgUrl: string;
  name: string;
  price: number;
  toppings?: string[];
  ingredients?: string[];
  type: "pizza" | "salad" | "drink";
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
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const toggleReadMore = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <li className="container list-type-none space-y-2">
      <div className="flex flex-col space-x-1 w-[300px]">
        <img className="size-20" src={imgUrl} alt={name} />
        <h3 className="text-xl font-semibold">{name}</h3>{" "}
        <p>
          <b>Price</b> {price} SEK
        </p>
      </div>

      <button onClick={() => toggleReadMore(id)}>
        {openItemId === id ? "Close" : "Read more"}
      </button>

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