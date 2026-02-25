import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide transition-all",
        variant === "primary" &&
          "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
        variant === "secondary" &&
          "bg-secondary text-white hover:bg-secondary/80",
        variant === "outline" &&
          "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",
        size === "sm" && "px-5 py-2.5 text-xs",
        size === "md" && "px-8 py-4 text-sm",
        size === "lg" && "px-10 py-5 text-base",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
