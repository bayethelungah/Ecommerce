import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/lib/class";

const InputVariant = cva({
  variants: {
    variant: {
      search: "bg-gray",
      default: "bg-white",
    },

    defaultVariants: {
      variant: "search",
    },
  },
});

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariant> {}

export default function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "rounded-3xl border-black border p-1 bg-gray pl-3",
        className
      )}
      {...props}
    />
  );
}
