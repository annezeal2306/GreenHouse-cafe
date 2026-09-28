export type JournalPost = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
};

export const journalPosts: JournalPost[] = [
  {
    id: "healthy-cafe-shahpur-jat",
    title: "A Guide to Eating Well in Shahpur Jat",
    category: "LOCAL GUIDE",
    excerpt:
      "Looking for a healthy cafe in Shahpur Jat? Here is our guide to eating well without compromising on flavour.",
    date: "03 OCT 2026",
    readTime: "5 MIN READ",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "high-protein-breakfast",
    title: "What Makes a Great High-Protein Breakfast?",
    category: "WELLNESS",
    excerpt:
      "From eggs and paneer to quinoa and greens, discover simple ways to build a breakfast that keeps you going.",
    date: "28 SEP 2026",
    readTime: "4 MIN READ",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "build-balanced-bowl",
    title: "How to Build a Better Bowl",
    category: "FOOD",
    excerpt:
      "A simple formula for balancing protein, whole grains, vegetables, healthy fats and flavour.",
    date: "21 SEP 2026",
    readTime: "6 MIN READ",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "slow-sunday",
    title: "The Art of the Slow Sunday",
    category: "LIFESTYLE",
    excerpt:
      "Why sometimes the best plan is no plan at all: good food, good coffee and a few hours to yourself.",
    date: "14 SEP 2026",
    readTime: "3 MIN READ",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
  },
];