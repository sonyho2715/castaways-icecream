export interface Flavor {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const flavors: Flavor[] = [
  {
    id: "f1",
    name: "Pandan Coconut",
    description:
      "Southeast Asian pandan leaf swirled with creamy coconut. A tropical favorite you won't find anywhere else on the island.",
    price: "$5.99",
    image: "/images/flavors/coconut.jpg",
    tags: ["Tropical", "Unique"],
    featured: true,
  },
  {
    id: "f2",
    name: "Salted Caramel",
    description:
      "Rich, buttery caramel with a perfect hit of Hawaiian sea salt. Smooth, indulgent, and dangerously addictive.",
    price: "$5.99",
    image: "/images/flavors/cookies.jpg",
    tags: ["Classic", "Fan Favorite"],
    featured: true,
  },
  {
    id: "f3",
    name: "Birthday Cake",
    description:
      "Vanilla cake batter ice cream loaded with rainbow sprinkles and real cake pieces. Every day is your birthday.",
    price: "$5.99",
    image: "/images/flavors/birthday-cake.jpg",
    tags: ["Fun", "Colorful"],
    featured: true,
  },
  {
    id: "f4",
    name: "Matcha Green Tea",
    description:
      "Made with real ceremonial-grade matcha. Earthy, smooth, and genuinely authentic. No artificial colors here.",
    price: "$5.99",
    image: "/images/flavors/matcha.jpg",
    tags: ["Unique", "Premium"],
    featured: true,
  },
  {
    id: "f5",
    name: "Blackberry Pie",
    description:
      "Sweet blackberry compote rippled through vanilla cream with real pie crust crumbles. Like grandma's pie in a scoop.",
    price: "$5.99",
    image: "/images/flavors/mango.jpg",
    tags: ["Seasonal", "Fruity"],
    featured: true,
  },
  {
    id: "f6",
    name: "Dark Chocolate",
    description:
      "Deep, intense, and velvety. Premium dark chocolate churned to creamy perfection. For the true chocolate lover.",
    price: "$5.99",
    image: "/images/flavors/chocolate.jpg",
    tags: ["Classic", "Rich"],
    featured: true,
  },
  {
    id: "f7",
    name: "Vanilla Bean",
    description:
      "Real Madagascar vanilla bean specks throughout. Simple, classic, and made right.",
    price: "$5.99",
    image: "/images/flavors/cookies.jpg",
    tags: ["Classic"],
  },
  {
    id: "f8",
    name: "Chocolate Chip Cookie",
    description:
      "Loaded with real cookie chunks and chocolate chips in a sweet cream base.",
    price: "$5.99",
    image: "/images/flavors/cookies.jpg",
    tags: ["Classic", "Loaded"],
  },
  {
    id: "f9",
    name: "Rum Raisin",
    description:
      "A sophisticated blend of rum-soaked raisins in buttery caramel ice cream.",
    price: "$5.99",
    image: "/images/flavors/cookies.jpg",
    tags: ["Classic", "Bold"],
  },
  {
    id: "f10",
    name: "Mint Chocolate Chip",
    description:
      "Cool peppermint with rich chocolate chips throughout.",
    price: "$5.99",
    image: "/images/flavors/matcha.jpg",
    tags: ["Classic", "Refreshing"],
  },
  {
    id: "f11",
    name: "Pistachio",
    description:
      "Rich pistachio cream with real roasted pistachio pieces.",
    price: "$5.99",
    image: "/images/flavors/matcha.jpg",
    tags: ["Nutty", "Premium"],
  },
  {
    id: "f12",
    name: "Strawberry Banana",
    description:
      "Fresh strawberry puree and ripe banana blended into a tropical cream base.",
    price: "$5.99",
    image: "/images/flavors/mango.jpg",
    tags: ["Fruity", "Tropical"],
  },
  {
    id: "f13",
    name: "Payday",
    description:
      "Caramel and salted peanuts. Inspired by the candy bar, elevated to ice cream perfection.",
    price: "$5.99",
    image: "/images/flavors/cookies.jpg",
    tags: ["Unique", "Nutty"],
  },
  {
    id: "f14",
    name: "Mango",
    description:
      "Made with genuine fresh mango when in season. Bright, tropical, and refreshing.",
    price: "$5.99",
    image: "/images/flavors/mango.jpg",
    tags: ["Tropical", "Seasonal"],
  },
];

export const featuredFlavors = flavors.filter((f) => f.featured);
