export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: "yelp" | "google" | "tiktok";
  date?: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Sarah M.",
    rating: 5,
    text: "From the moment I walked in, the smell of freshly made waffle cones filled the air, warm, buttery, and inviting. It's the kind of scent that instantly brings back happy memories.",
    source: "yelp",
    date: "2025",
  },
  {
    id: "r2",
    author: "Mike K.",
    rating: 5,
    text: "You love ice cream? You love peanut brittle? Well slap those two together and you have heaven on earth.",
    source: "yelp",
    date: "2025",
  },
  {
    id: "r3",
    author: "Jessica L.",
    rating: 5,
    text: "The staff could not have been sweeter or nicer, just like their brittle!",
    source: "yelp",
    date: "2025",
  },
  {
    id: "r4",
    author: "David T.",
    rating: 5,
    text: "Best ice cream on the island, hands down. The pandan coconut flavor is unreal. You can taste the real ingredients in every single scoop.",
    source: "google",
    date: "2025",
  },
  {
    id: "r5",
    author: "Kelli S.",
    rating: 5,
    text: "There's a new ice cream shop in Moiliili and it offers more than 30 homemade ice cream flavors to choose from. Absolutely incredible quality.",
    source: "tiktok",
    date: "2025",
  },
  {
    id: "r6",
    author: "Lani P.",
    rating: 5,
    text: "The salted caramel is life-changing. Creamy, rich, and perfectly balanced. This place is a must-visit in Honolulu.",
    source: "google",
    date: "2025",
  },
  {
    id: "r7",
    author: "Brandon W.",
    rating: 5,
    text: "Unlimited free samples before you decide? Yes please. Ended up getting three scoops because everything was so good. The birthday cake flavor is incredible.",
    source: "yelp",
    date: "2025",
  },
  {
    id: "r8",
    author: "Malia H.",
    rating: 5,
    text: "Family-run with so much aloha. The owner clearly cares about quality. Real matcha, real mango, no artificial stuff. This is how ice cream should be made.",
    source: "google",
    date: "2025",
  },
  {
    id: "r9",
    author: "Chris N.",
    rating: 5,
    text: "The waffle cones are baked fresh right there. You can smell them from the street. The rum raisin took me by surprise, absolutely delicious.",
    source: "yelp",
    date: "2025",
  },
  {
    id: "r10",
    author: "Amy R.",
    rating: 5,
    text: "Tried the Payday flavor, caramel and salted peanuts. It's dangerously good. Will be back every week.",
    source: "yelp",
    date: "2025",
  },
];

export const heroReview = reviews[0];

export const marqueeRowOne = reviews.slice(0, 5);
export const marqueeRowTwo = reviews.slice(5, 10);
