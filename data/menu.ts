export type MenuItem = {
  id: string;
  name: string;
  category: "Bowls" | "Breakfast" | "Mains" | "Drinks";
  description: string;
  price: number;
  calories: number;
  protein: number;
  diet: ("Vegetarian" | "Vegan" | "High Protein")[];
  image: string;
  bestseller?: boolean;
};

export const menuItems: MenuItem[] = [
  {
    id: "green-goddess",
    name: "Green Goddess Bowl",
    category: "Bowls",
    description: "Garden greens, avocado, quinoa, cucumber & herb dressing.",
    price: 349,
    calories: 390,
    protein: 18,
    diet: ["Vegetarian", "Vegan"],
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    bestseller: true,
  },
  {
    id: "protein-chicken",
    name: "Grilled Chicken Bowl",
    category: "Bowls",
    description: "Herb chicken, brown rice, greens, corn & sesame.",
    price: 429,
    calories: 510,
    protein: 38,
    diet: ["High Protein"],
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    bestseller: false,
  },
  {
    id: "avocado-toast",
    name: "Avocado Sourdough",
    category: "Breakfast",
    description: "Sourdough, smashed avocado, seeds & garden herbs.",
    price: 299,
    calories: 320,
    protein: 11,
    diet: ["Vegetarian", "Vegan"],
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=85",
    bestseller: true,
  },
  {
    id: "protein-eggs",
    name: "House Protein Eggs",
    category: "Breakfast",
    description: "Free-range eggs, greens, sourdough & roasted vegetables.",
    price: 329,
    calories: 410,
    protein: 29,
    diet: ["Vegetarian", "High Protein"],
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    bestseller: false,
  },
  {
    id: "paneer-steak",
    name: "Charred Paneer Plate",
    category: "Mains",
    description: "Charred paneer, seasonal vegetables & green herb sauce.",
    price: 399,
    calories: 460,
    protein: 26,
    diet: ["Vegetarian", "High Protein"],
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    bestseller: false,
  },
  {
    id: "tofu-bowl",
    name: "Crispy Tofu Bowl",
    category: "Bowls",
    description: "Crispy tofu, quinoa, greens, cucumber & sesame.",
    price: 379,
    calories: 420,
    protein: 24,
    diet: ["Vegan", "High Protein"],
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
    bestseller: false,
  },
  {
    id: "berry-smoothie",
    name: "Garden Berry Smoothie",
    category: "Drinks",
    description: "Mixed berries, banana, almond milk & chia.",
    price: 249,
    calories: 210,
    protein: 7,
    diet: ["Vegetarian", "Vegan"],
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85",
    bestseller: true,
  },
  {
    id: "green-smoothie",
    name: "Green Protein Smoothie",
    category: "Drinks",
    description: "Spinach, banana, almond milk, seeds & plant protein.",
    price: 299,
    calories: 240,
    protein: 18,
    diet: ["Vegan", "High Protein"],
    image:
      "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=900&q=85",
    bestseller: true,
  },
];