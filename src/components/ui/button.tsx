import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-button hover:-translate-y-0.5 hover:bg-primary/92 hover:shadow-button-hover",
        glass:
          "border border-glass-border bg-glass text-foreground shadow-glass backdrop-blur-xl hover:-translate-y-0.5 hover:bg-glass-strong",
        ghost: "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-11 px-5",
        icon: "size-11 shrink-0 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return <Component className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };