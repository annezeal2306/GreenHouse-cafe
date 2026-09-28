"use client";

import { create } from "zustand";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartStore = {
 items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  total: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((x) => x.id === item.id);

      if (existing) {
        return {
          items: state.items.map((x) =>
            x.id === item.id
              ? { ...x, quantity: x.quantity + 1 }
              : x
          ),
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1 }],
      };
    }),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((x) => x.id !== id),
    })),

  increase: (id) =>
    set((state) => ({
      items: state.items.map((x) =>
        x.id === id
          ? { ...x, quantity: x.quantity + 1 }
          : x
      ),
    })),

  decrease: (id) =>
    set((state) => ({
      items: state.items
        .map((x) =>
          x.id === id
            ? { ...x, quantity: x.quantity - 1 }
            : x
        )
        .filter((x) => x.quantity > 0),
    })),

  clearCart: () => set({ items: [] }),

  total: () =>
    get().items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    ),
}));