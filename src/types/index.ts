type MenuItem = {
  description: string;
  id: string;
  imgUrl: string;
  name: string;
  price: number;
  toppings?: string[];
  ingredients?: string[];
  type: "pizza" | "salad" | "drink";
};

type Pizza = MenuItem & {
  type: "pizza";
  toppings: string[];
};

type Salad = MenuItem & {
  type: "salad";
  ingredients: string[];
};

type Drink = MenuItem & {
  type: "drink";
};

export type MenuItems = Pizza | Salad | Drink;
