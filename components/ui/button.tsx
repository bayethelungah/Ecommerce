import * as React from "react";
import cn from "@/lib/class";
import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva({
  variants: {
    variant: {
      primary: "bg-primary",
      secondary: "bg-secondary",
    },
  },
});

interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, ...props }: ButtonProps) {
  return <button className={cn(className)}></button>;
}
