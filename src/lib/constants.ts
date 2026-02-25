export const COLORS = {
  primary: "#5BAED6",      // Castaways Sky Blue (wall color)
  secondary: "#2C3E50",    // Deep Navy (text/dark)
  background: "#F8FBFD",   // Very light blue-white (matches the airy store feel)
  surface: "#FFFFFF",
  accent: "#C8956A",       // Sandy Tan (logo color)
  green: "#4A7A52",        // Palm Green (logo accent)
  coral: "#E8756A",        // Coral (from surfboard, for highlights)
  slate100: "#EFF6FA",
  slate200: "#DFF0F7",
} as const;

export const SITE = {
  name: "Castaways Ice Cream",
  tagline: "Not store-bought. Not factory-made. Homemade.",
  description:
    "Super-premium homemade ice cream in Mo\u02BBili\u02BBili, near UH M\u0101noa. 30+ rotating flavors, fresh waffle cones, made in small batches with real ingredients.",
  phone: "(808) 744-1001",
} as const;

export const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Story", href: "#story" },
  { label: "Visit", href: "#visit" },
  { label: "Catering", href: "#catering" },
] as const;
