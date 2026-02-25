export const COLORS = {
  primary: "#FF5A24",
  secondary: "#1A1715",
  background: "#FAF7F2",
  surface: "#FFFFFF",
  accent: "#00A9E0",
  slate100: "#F7F5F2",
  slate200: "#EDEAE6",
} as const;

export const SITE = {
  name: "Castaways Ice Cream",
  tagline: "Super-premium homemade ice cream",
  description:
    "Super-premium homemade ice cream in Moiliili and Waikiki. 30+ rotating flavors, fresh waffle cones, made in small batches with real ingredients.",
  phone: "(808) 744-1001",
} as const;

export const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Story", href: "#story" },
  { label: "Visit", href: "#visit" },
  { label: "Catering", href: "#catering" },
] as const;
