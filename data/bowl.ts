export type BowlIngredient = {
  id: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  protein: number;
  image: string;
};

export type BowlCategory = {
  id: string;
  title: string;
  subtitle: string;
  required: boolean;
  ingredients: BowlIngredient[];
};

// Stable Unsplash CDN images
const images = {
  salad:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",

  healthyBowl:
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",

  vegetables:
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",

  foodBowl:
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85",

  greens:
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85",

  avocado:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",

  grainBowl:
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85",

  tofuBowl:
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
};

export const bowlCategories: BowlCategory[] = [
  // ─────────────────────────────────────────
  // 01 — BASE
  // ─────────────────────────────────────────
  {
    id: "base",
    title: "Choose your base",
    subtitle: "Start with something wholesome",
    required: true,

    ingredients: [
      {
        id: "brown-rice",
        name: "Brown Rice",
        description: "Nutty whole-grain rice",
        price: 60,
        calories: 215,
        protein: 5,
        image: images.grainBowl,
      },

      {
        id: "quinoa",
        name: "Quinoa",
        description: "Light, fluffy & protein-rich",
        price: 80,
        calories: 180,
        protein: 7,
        image: images.healthyBowl,
      },

      {
        id: "greens",
        name: "Garden Greens",
        description: "Fresh seasonal greens",
        price: 50,
        calories: 70,
        protein: 4,
        image: images.greens,
      },
    ],
  },

  // ─────────────────────────────────────────
  // 02 — PROTEIN
  // ─────────────────────────────────────────
  {
    id: "protein",
    title: "Pick your protein",
    subtitle: "Make it yours",
    required: true,

    ingredients: [
      {
        id: "chicken",
        name: "Grilled Chicken",
        description: "Herb grilled chicken",
        price: 140,
        calories: 220,
        protein: 32,
        image: images.foodBowl,
      },

      {
        id: "paneer",
        name: "Grilled Paneer",
        description: "Indian cottage cheese",
        price: 120,
        calories: 260,
        protein: 18,
        image: images.vegetables,
      },

      {
        id: "tofu",
        name: "Herb Tofu",
        description: "Crispy seasoned tofu",
        price: 110,
        calories: 180,
        protein: 20,
        image: images.tofuBowl,
      },

      {
        id: "egg",
        name: "Two Eggs",
        description: "Soft-boiled free-range eggs",
        price: 90,
        calories: 155,
        protein: 13,
        image: images.healthyBowl,
      },
    ],
  },

  // ─────────────────────────────────────────
  // 03 — VEGGIES
  // ─────────────────────────────────────────
  {
    id: "veggies",
    title: "Load up on greens",
    subtitle: "Choose as many as you like",
    required: false,

    ingredients: [
      {
        id: "avocado",
        name: "Avocado",
        description: "Creamy & fresh",
        price: 70,
        calories: 120,
        protein: 2,
        image: images.avocado,
      },

      {
        id: "corn",
        name: "Sweet Corn",
        description: "Naturally sweet",
        price: 40,
        calories: 90,
        protein: 3,
        image: images.vegetables,
      },

      {
        id: "cucumber",
        name: "Cucumber",
        description: "Cool & crunchy",
        price: 30,
        calories: 20,
        protein: 1,
        image: images.salad,
      },

      {
        id: "broccoli",
        name: "Broccoli",
        description: "Roasted seasonal broccoli",
        price: 45,
        calories: 55,
        protein: 4,
        image: images.greens,
      },
    ],
  },

  // ─────────────────────────────────────────
  // 04 — SAUCE
  // ─────────────────────────────────────────
  {
    id: "sauce",
    title: "Choose your sauce",
    subtitle: "Finish it your way",
    required: true,

    ingredients: [
      {
        id: "herb",
        name: "Green Herb",
        description: "Fresh garden herbs",
        price: 30,
        calories: 45,
        protein: 1,
        image: images.greens,
      },

      {
        id: "sesame",
        name: "Sesame",
        description: "Creamy sesame dressing",
        price: 35,
        calories: 80,
        protein: 2,
        image: images.healthyBowl,
      },

      {
        id: "spicy",
        name: "Spicy Mayo",
        description: "A little kick",
        price: 35,
        calories: 95,
        protein: 1,
        image: images.foodBowl,
      },
    ],
  },

  // ─────────────────────────────────────────
  // 05 — TOPPINGS
  // ─────────────────────────────────────────
  {
    id: "toppings",
    title: "Add some crunch",
    subtitle: "Optional extras",
    required: false,

    ingredients: [
      {
        id: "seeds",
        name: "Mixed Seeds",
        description: "Pumpkin, sunflower & sesame",
        price: 30,
        calories: 60,
        protein: 3,
        image: images.grainBowl,
      },

      {
        id: "chickpeas",
        name: "Crispy Chickpeas",
        description: "Roasted & crunchy",
        price: 35,
        calories: 80,
        protein: 4,
        image: images.vegetables,
      },

      {
        id: "feta",
        name: "Feta",
        description: "Creamy & salty",
        price: 45,
        calories: 75,
        protein: 4,
        image: images.salad,
      },
    ],
  },
];